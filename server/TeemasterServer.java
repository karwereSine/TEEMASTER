import com.sun.net.httpserver.*;
import java.io.*;
import java.net.*;
import java.nio.file.*;
import java.security.*;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.*;
import java.util.concurrent.*;
import java.util.stream.Collectors;

/**
 * TEEMASTER Static File Server + Inquiry API
 * Port: 8090 (default)
 */
public class TeemasterServer {

    // ── Config ──────────────────────────────────────────────
    static final String ADMIN_USER = "admin";
    // SHA-256 of "admin123!"
    static final String ADMIN_PASS_HASH = "5c06eb3d5a05a19f49476d694ca81a36344660e9d5b98e3d6a6630f31c2422e7";
    static final long SESSION_TTL_MS = 8 * 60 * 60 * 1000L; // 8 hours

    static String DATA_DIR;
    static String INQUIRIES_FILE;

    // In-memory sessions: token → expiry epoch ms
    static final ConcurrentHashMap<String, Long> SESSIONS = new ConcurrentHashMap<>();

    // ── MIME ─────────────────────────────────────────────────
    static final Map<String, String> MIME = Map.ofEntries(
        Map.entry(".html", "text/html; charset=utf-8"),
        Map.entry(".css",  "text/css; charset=utf-8"),
        Map.entry(".js",   "application/javascript; charset=utf-8"),
        Map.entry(".json", "application/json; charset=utf-8"),
        Map.entry(".png",  "image/png"),
        Map.entry(".jpg",  "image/jpeg"),
        Map.entry(".jpeg", "image/jpeg"),
        Map.entry(".gif",  "image/gif"),
        Map.entry(".svg",  "image/svg+xml"),
        Map.entry(".webp", "image/webp"),
        Map.entry(".ico",  "image/x-icon"),
        Map.entry(".woff", "font/woff"),
        Map.entry(".woff2","font/woff2"),
        Map.entry(".ttf",  "font/ttf"),
        Map.entry(".pdf",  "application/pdf"),
        Map.entry(".xml",  "application/xml"),
        Map.entry(".txt",  "text/plain; charset=utf-8"),
        Map.entry(".webmanifest", "application/manifest+json")
    );

    // ── Main ─────────────────────────────────────────────────
    public static void main(String[] args) throws Exception {
        int port = args.length > 0 ? Integer.parseInt(args[0]) : 8090;
        String root = args.length > 1 ? args[1] : "/opt/applications/teemaster/static";
        DATA_DIR = args.length > 2 ? args[2] : "/opt/applications/teemaster/data";
        INQUIRIES_FILE = DATA_DIR + "/inquiries.json";

        // Ensure data directory exists
        new File(DATA_DIR).mkdirs();
        if (!new File(INQUIRIES_FILE).exists()) {
            Files.writeString(Path.of(INQUIRIES_FILE), "[]");
        }

        HttpServer server = HttpServer.create(new InetSocketAddress(port), 0);

        // API routes
        server.createContext("/api/inquiry", exchange -> handleWithCors(exchange, () -> handleInquiry(exchange)));
        server.createContext("/api/admin/login", exchange -> handleWithCors(exchange, () -> handleAdminLogin(exchange)));
        server.createContext("/api/admin/inquiries", exchange -> handleWithCors(exchange, () -> handleAdminInquiries(exchange)));

        // Static files
        final String staticRoot = root;
        server.createContext("/", exchange -> {
            if (exchange.getRequestMethod().equals("OPTIONS")) {
                sendCorsHeaders(exchange);
                exchange.sendResponseHeaders(204, -1);
                return;
            }
            try {
                serveStatic(exchange, staticRoot);
            } catch (Exception e) {
                log("Static serve error: " + e.getMessage());
            }
        });

        server.setExecutor(Executors.newFixedThreadPool(Runtime.getRuntime().availableProcessors() * 2));
        server.start();

        System.out.println("===========================================");
        System.out.println(" TEEMASTER Server started");
        System.out.println(" Port : " + port);
        System.out.println(" Root : " + root);
        System.out.println(" Data : " + DATA_DIR);
        System.out.println(" Time : " + LocalDateTime.now());
        System.out.println("===========================================");
    }

    // ── CORS helper ─────────────────────────────────────────
    static void sendCorsHeaders(HttpExchange ex) {
        Headers h = ex.getResponseHeaders();
        h.set("Access-Control-Allow-Origin", "*");
        h.set("Access-Control-Allow-Methods", "GET, POST, DELETE, OPTIONS");
        h.set("Access-Control-Allow-Headers", "Content-Type, Authorization");
    }

    @FunctionalInterface interface ThrowingRunnable { void run() throws Exception; }

    static void handleWithCors(HttpExchange ex, ThrowingRunnable handler) throws IOException {
        sendCorsHeaders(ex);
        if (ex.getRequestMethod().equals("OPTIONS")) {
            ex.sendResponseHeaders(204, -1);
            return;
        }
        try {
            handler.run();
        } catch (Exception e) {
            sendJson(ex, 500, "{\"error\":\"Internal Server Error\"}");
            log("ERROR: " + e.getMessage());
        }
        log(ex.getRemoteAddress() + " " + ex.getRequestMethod() + " " + ex.getRequestURI());
    }

    // ── POST /api/inquiry ────────────────────────────────────
    static void handleInquiry(HttpExchange ex) throws Exception {
        if (!"POST".equals(ex.getRequestMethod())) {
            sendJson(ex, 405, "{\"error\":\"Method Not Allowed\"}");
            return;
        }
        String body = new String(ex.getRequestBody().readAllBytes(), "UTF-8");
        Map<String, String> fields = parseJson(body);

        String name    = fields.getOrDefault("name", "").trim();
        String company = fields.getOrDefault("company", "").trim();
        String email   = fields.getOrDefault("email", "").trim();
        String phone   = fields.getOrDefault("phone", "").trim();
        String intent  = fields.getOrDefault("intent", "").trim();

        if (name.isEmpty() || email.isEmpty()) {
            sendJson(ex, 400, "{\"error\":\"Name and email are required\"}");
            return;
        }

        // Build record
        String id = UUID.randomUUID().toString();
        String createdAt = LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss"));
        String record = String.format(
            "{\"id\":\"%s\",\"name\":\"%s\",\"company\":\"%s\",\"email\":\"%s\",\"phone\":\"%s\",\"intent\":\"%s\",\"createdAt\":\"%s\",\"read\":false}",
            id,
            escapeJson(name), escapeJson(company), escapeJson(email),
            escapeJson(phone), escapeJson(intent), createdAt
        );

        appendInquiry(record);
        sendJson(ex, 200, "{\"success\":true,\"id\":\"" + id + "\"}");
    }

    // ── POST /api/admin/login ────────────────────────────────
    static void handleAdminLogin(HttpExchange ex) throws Exception {
        if (!"POST".equals(ex.getRequestMethod())) {
            sendJson(ex, 405, "{\"error\":\"Method Not Allowed\"}");
            return;
        }
        String body = new String(ex.getRequestBody().readAllBytes(), "UTF-8");
        Map<String, String> fields = parseJson(body);

        String username = fields.getOrDefault("username", "");
        String password = fields.getOrDefault("password", "");

        if (!ADMIN_USER.equals(username) || !ADMIN_PASS_HASH.equals(sha256(password))) {
            sendJson(ex, 401, "{\"error\":\"Invalid credentials\"}");
            return;
        }

        String token = UUID.randomUUID().toString().replace("-", "");
        SESSIONS.put(token, System.currentTimeMillis() + SESSION_TTL_MS);
        sendJson(ex, 200, "{\"success\":true,\"token\":\"" + token + "\"}");
    }

    // ── /api/admin/inquiries ─────────────────────────────────
    static void handleAdminInquiries(HttpExchange ex) throws Exception {
        // Auth
        String token = ex.getRequestHeaders().getFirst("Authorization");
        if (token != null && token.startsWith("Bearer ")) token = token.substring(7);
        if (!isValidSession(token)) {
            sendJson(ex, 401, "{\"error\":\"Unauthorized\"}");
            return;
        }

        String method = ex.getRequestMethod();
        String path = ex.getRequestURI().getPath(); // /api/admin/inquiries or /api/admin/inquiries/{id}

        if ("GET".equals(method) && path.equals("/api/admin/inquiries")) {
            // List all
            String data = Files.readString(Path.of(INQUIRIES_FILE));
            sendJson(ex, 200, data);

        } else if ("POST".equals(method) && path.matches("/api/admin/inquiries/[^/]+/read")) {
            // Mark as read
            String id = path.split("/")[4];
            updateInquiryField(id, "\"read\":false", "\"read\":true");
            sendJson(ex, 200, "{\"success\":true}");

        } else if ("DELETE".equals(method) && path.matches("/api/admin/inquiries/[^/]+")) {
            // Delete
            String id = path.split("/")[4];
            deleteInquiry(id);
            sendJson(ex, 200, "{\"success\":true}");

        } else if ("POST".equals(method) && path.matches("/api/admin/inquiries/[^/]+/delete")) {
            // Delete (POST fallback for clients that can't send DELETE)
            String id = path.split("/")[4];
            deleteInquiry(id);
            sendJson(ex, 200, "{\"success\":true}");

        } else {
            sendJson(ex, 404, "{\"error\":\"Not Found\"}");
        }
    }

    // ── Session ──────────────────────────────────────────────
    static boolean isValidSession(String token) {
        if (token == null || token.isEmpty()) return false;
        Long expiry = SESSIONS.get(token);
        if (expiry == null) return false;
        if (System.currentTimeMillis() > expiry) {
            SESSIONS.remove(token);
            return false;
        }
        return true;
    }

    // ── File-based JSON DB ────────────────────────────────────
    static synchronized void appendInquiry(String record) throws Exception {
        String content = Files.readString(Path.of(INQUIRIES_FILE)).trim();
        String updated;
        if (content.equals("[]")) {
            updated = "[" + record + "]";
        } else {
            // Remove trailing ]
            updated = content.substring(0, content.lastIndexOf(']')) + "," + record + "]";
        }
        Files.writeString(Path.of(INQUIRIES_FILE), updated);
    }

    static synchronized void updateInquiryField(String id, String from, String to) throws Exception {
        String content = Files.readString(Path.of(INQUIRIES_FILE));
        // Find the object with this id and replace the field
        String idPattern = "\"id\":\"" + id + "\"";
        int idx = content.indexOf(idPattern);
        if (idx < 0) return;
        // Find the scope of this object
        int start = content.lastIndexOf('{', idx);
        int end = content.indexOf('}', idx) + 1;
        String obj = content.substring(start, end);
        String updatedObj = obj.replace(from, to);
        Files.writeString(Path.of(INQUIRIES_FILE), content.substring(0, start) + updatedObj + content.substring(end));
    }

    static synchronized void deleteInquiry(String id) throws Exception {
        String content = Files.readString(Path.of(INQUIRIES_FILE));
        String idPattern = "\"id\":\"" + id + "\"";
        int idx = content.indexOf(idPattern);
        if (idx < 0) return;
        int start = content.lastIndexOf('{', idx);
        int end = content.indexOf('}', idx) + 1;
        String toRemove = content.substring(start, end);
        String updated = content.replace(toRemove, "").replace(",,", ",").replace("[,", "[").replace(",]", "]");
        Files.writeString(Path.of(INQUIRIES_FILE), updated);
    }

    // ── Static file serving ──────────────────────────────────
    static void serveStatic(HttpExchange exchange, String root) throws Exception {
        String path = exchange.getRequestURI().getPath();
        if (path.equals("/")) path = "/index.html";

        File file = new File(root + path);
        if (file.isDirectory()) file = new File(file, "index.html");

        if (file.exists() && file.isFile() && file.getCanonicalPath().startsWith(new File(root).getCanonicalPath())) {
            String ext = "";
            int dot = file.getName().lastIndexOf('.');
            if (dot > 0) ext = file.getName().substring(dot).toLowerCase();

            String contentType = MIME.getOrDefault(ext, "application/octet-stream");
            byte[] data = Files.readAllBytes(file.toPath());

            if (!ext.equals(".html")) {
                exchange.getResponseHeaders().set("Cache-Control", "public, max-age=86400");
            } else {
                exchange.getResponseHeaders().set("Cache-Control", "no-cache");
            }

            exchange.getResponseHeaders().set("Content-Type", contentType);
            exchange.sendResponseHeaders(200, data.length);
            try (OutputStream os = exchange.getResponseBody()) { os.write(data); }
        } else {
            File fallback = new File(root + "/index.html");
            if (fallback.exists()) {
                byte[] data = Files.readAllBytes(fallback.toPath());
                exchange.getResponseHeaders().set("Content-Type", "text/html; charset=utf-8");
                exchange.sendResponseHeaders(200, data.length);
                try (OutputStream os = exchange.getResponseBody()) { os.write(data); }
            } else {
                String msg = "404 Not Found";
                exchange.sendResponseHeaders(404, msg.length());
                try (OutputStream os = exchange.getResponseBody()) { os.write(msg.getBytes()); }
            }
        }
    }

    // ── Helpers ──────────────────────────────────────────────
    static void sendJson(HttpExchange ex, int code, String json) throws IOException {
        byte[] data = json.getBytes("UTF-8");
        ex.getResponseHeaders().set("Content-Type", "application/json; charset=utf-8");
        ex.sendResponseHeaders(code, data.length);
        try (OutputStream os = ex.getResponseBody()) { os.write(data); }
    }

    static String sha256(String input) {
        try {
            MessageDigest md = MessageDigest.getInstance("SHA-256");
            byte[] hash = md.digest(input.getBytes("UTF-8"));
            StringBuilder sb = new StringBuilder();
            for (byte b : hash) sb.append(String.format("%02x", b));
            return sb.toString();
        } catch (Exception e) {
            return "";
        }
    }

    static String escapeJson(String s) {
        if (s == null) return "";
        return s.replace("\\", "\\\\").replace("\"", "\\\"")
                .replace("\n", "\\n").replace("\r", "\\r").replace("\t", "\\t");
    }

    /** Very simple JSON object parser — handles flat string-only objects */
    static Map<String, String> parseJson(String json) {
        Map<String, String> map = new LinkedHashMap<>();
        if (json == null || json.isBlank()) return map;
        json = json.trim();
        if (json.startsWith("{")) json = json.substring(1);
        if (json.endsWith("}")) json = json.substring(0, json.length() - 1);

        // Split by top-level commas (simple, no nested objects)
        List<String> pairs = splitTopLevel(json, ',');
        for (String pair : pairs) {
            int colon = pair.indexOf(':');
            if (colon < 0) continue;
            String k = pair.substring(0, colon).trim().replaceAll("^\"|\"$", "");
            String v = pair.substring(colon + 1).trim();
            if (v.startsWith("\"") && v.endsWith("\"")) v = v.substring(1, v.length() - 1);
            // Unescape basic sequences
            v = v.replace("\\\"", "\"").replace("\\n", "\n").replace("\\r", "\r").replace("\\t", "\t").replace("\\\\", "\\");
            map.put(k, v);
        }
        return map;
    }

    static List<String> splitTopLevel(String s, char delim) {
        List<String> result = new ArrayList<>();
        int depth = 0;
        boolean inStr = false;
        int start = 0;
        for (int i = 0; i < s.length(); i++) {
            char c = s.charAt(i);
            if (c == '"' && (i == 0 || s.charAt(i - 1) != '\\')) inStr = !inStr;
            if (!inStr) {
                if (c == '{' || c == '[') depth++;
                else if (c == '}' || c == ']') depth--;
                else if (c == delim && depth == 0) {
                    result.add(s.substring(start, i));
                    start = i + 1;
                }
            }
        }
        result.add(s.substring(start));
        return result;
    }

    static void log(String msg) {
        System.out.println("[" + LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss")) + "] " + msg);
    }
}
