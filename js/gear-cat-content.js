/**
 * TEEMASTER Golf Gear - Category Content
 * stats: 4 items per lang for stats bar
 * useCases: 4 scenario cards per lang
 */
const catContent = {
  'gear-bags': {
    label: { zh:'产品故事', en:'PRODUCT STORY', ko:'제품 이야기', ja:'プロダクトストーリー' },
    headline: { zh:'专业级球包，为球场而生', en:'Professional Bags, Built for the Course', ko:'프로 수준의 가방, 코스를 위해 탄생', ja:'プロ仕様のバッグ、コースのために' },
    body: {
      zh:'每一款球包都经过严格的品质把控，采用优质防水面料与精工缝制工艺。无论是日常练习场还是高规格正式球场，TEEMASTER球包都能完美保护您的球具，让您无后顾之忧地专注于每一次挥杆。',
      en:'Every bag undergoes rigorous quality control, crafted with premium waterproof fabrics and precision stitching. Whether at the driving range or championship course, TEEMASTER bags protect your clubs so you can focus on every swing.',
      ko:'모든 가방은 엄격한 품질 관리를 거쳐 프리미엄 방수 원단과 정밀 재봉 기술로 제작됩니다. 일상 연습장이든 격식 있는 코스이든, TEEMASTER 가방은 클럽을 완벽하게 보호합니다.',
      ja:'すべてのバッグは厳格な品質管理を経て、プレミアム防水素材と精密な縫製技術で製造されます。練習場からチャンピオンシップコースまで、TEEMASTERのバッグはクラブを完璧に保護します。'
    },
    tags: { zh:['防水工艺','精工品质','多隔层设计','耐用材质'], en:['Waterproof','Precision Craft','Multi-compartment','Durable'], ko:['방수 공법','정밀 품질','다중 수납','내구성'], ja:['防水技術','精密品質','多仕切り設計','耐久性'] },
    stats: {
      zh:[{n:'14格',l:'球杆分隔'},{n:'100%',l:'防水面料'},{n:'6+',l:'功能口袋'},{n:'PU',l:'优质皮料'}],
      en:[{n:'14-Way',l:'Club Dividers'},{n:'100%',l:'Waterproof'},{n:'6+',l:'Pockets'},{n:'PU',l:'Premium Material'}],
      ko:[{n:'14구',l:'클럽 분리대'},{n:'100%',l:'방수 원단'},{n:'6+',l:'기능성 포켓'},{n:'PU',l:'프리미엄 소재'}],
      ja:[{n:'14格',l:'クラブ仕切り'},{n:'100%',l:'防水素材'},{n:'6+',l:'ポケット'},{n:'PU',l:'高品質素材'}]
    },
    useCases: {
      zh:[
        {icon:'⛳',name:'正式球场',tag:'标准场地',desc:'14格分隔系统与防水材料，是正式球场轮行的理想搭档。',items:['14格球杆分隔系统','防水拉链专用口袋','配件一体化收纳']},
        {icon:'✈️',name:'航空旅行',tag:'旅行专用',desc:'加固外层与轻量化设计，让球具安全飞越每一段旅程。',items:['防震加厚内衬','可扩展收纳空间','快速过关友好设计']},
        {icon:'🎯',name:'日常练习',tag:'练习场',desc:'轻量易取，频繁练习更顺手高效。',items:['轻量双肩背负系统','独立球鞋口袋','快取侧面口袋']},
        {icon:'💼',name:'商务休闲',tag:'多功能',desc:'简洁优雅设计，球场与商务场合都从容自在。',items:['精工PU优质外表','大容量主仓','稳固底部加强结构']}
      ],
      en:[
        {icon:'⛳',name:'Course Round',tag:'Pro Course',desc:'14-way dividers and waterproof materials are ideal companions for official rounds.',items:['14-way club dividers','Waterproof zipper pockets','All-in-one accessory storage']},
        {icon:'✈️',name:'Air Travel',tag:'Travel Ready',desc:'Reinforced construction and lightweight design keep clubs safe through every flight.',items:['Thick shock-absorbing padding','Expandable storage','Quick-transit friendly design']},
        {icon:'🎯',name:'Daily Practice',tag:'Range Training',desc:'Lightweight and easy-access design makes frequent club changes effortless.',items:['Lightweight dual-strap system','Separate shoe compartment','Quick-access side pocket']},
        {icon:'💼',name:'Business Casual',tag:'Multi-Use',desc:'Clean, elegant design transitions seamlessly from course to business setting.',items:['Premium PU outer surface','Spacious main compartment','Reinforced base structure']}
      ],
      ko:[
        {icon:'⛳',name:'코스 라운드',tag:'전문 코스',desc:'14구역 분리와 방수 소재로 공식 라운드에 최적입니다.',items:['14구역 클럽 분리 시스템','방수 지퍼 전용 포켓','액세서리 일체형 수납']},
        {icon:'✈️',name:'항공 여행',tag:'여행 전용',desc:'강화된 외층과 경량 설계로 모든 비행에서 클럽을 안전하게 보호합니다.',items:['두꺼운 충격 흡수 패딩','확장 가능한 수납공간','신속 통관 친화 설계']},
        {icon:'🎯',name:'일상 연습',tag:'연습장',desc:'경량 설계로 자주 클럽을 꺼내는 연습장에서 더 효율적입니다.',items:['경량 양어깨 스트랩 시스템','별도 신발 수납공간','퀵 액세스 사이드 포켓']},
        {icon:'💼',name:'비즈니스 캐주얼',tag:'다목적',desc:'깔끔하고 우아한 디자인으로 코스에서 비즈니스 자리까지 자신감 있게.',items:['고급 PU 외표면','대용량 메인 수납공간','강화된 바닥 구조']}
      ],
      ja:[
        {icon:'⛳',name:'コースラウンド',tag:'プロコース',desc:'14分割セパレーターと防水素材で、正式なラウンドに最適なパートナーです。',items:['14ウェイクラブセパレーター','防水ジッパーポケット','アクセサリー一体収納']},
        {icon:'✈️',name:'航空移動',tag:'トラベル対応',desc:'強化外層と軽量設計で、すべてのフライトでクラブを安全に保護します。',items:['厚手衝撃吸収パッド','拡張可能な収納スペース','スムーズな通関設計']},
        {icon:'🎯',name:'日常練習',tag:'練習場',desc:'軽量で出し入れしやすい設計で、頻繁なクラブ交換もスムーズに。',items:['軽量ダブルストラップシステム','シューズ独立コンパートメント','クイックアクセスサイドポケット']},
        {icon:'💼',name:'ビジネスカジュアル',tag:'多目的',desc:'スマートなデザインで、コースからビジネスシーンまで自信を持って対応。',items:['高品質PUアウター','広々としたメインコンパートメント','強化ベース構造']}
      ]
    }
  },
  'gear-accessories': {
    label: { zh:'产品故事', en:'PRODUCT STORY', ko:'제품 이야기', ja:'プロダクトストーリー' },
    headline: { zh:'细节决定表现，配件成就卓越', en:'Details Define Performance, Accessories Enable Excellence', ko:'세부 사항이 성과를 결정하고, 액세서리가 탁월함을 이룹니다', ja:'細部がパフォーマンスを決め、アクセサリーが卓越を実現する' },
    body: {
      zh:'优质的高尔夫配件不仅是工具，更是球手竞技实力的延伸。每一件TEEMASTER配件都经过专业设计，让您在球场上的每个细节都得到最好的支持。',
      en:'Quality golf accessories extend your competitive edge. Every TEEMASTER accessory is professionally designed to support every detail of your game with comfort and reliability.',
      ko:'고품질 골프 액세서리는 경쟁력의 연장선입니다. 모든 TEEMASTER 액세서리는 게임의 모든 세부 사항을 지원하도록 설계되었습니다.',
      ja:'高品質のゴルフアクセサリーは競争力の延長です。すべてのTEEMASTERアクセサリーはゲームのあらゆる細部をサポートします。'
    },
    tags: { zh:['专业品质','人体工学','耐用可靠','精准设计'], en:['Pro Quality','Ergonomic','Reliable','Precision Design'], ko:['전문 품질','인체공학','신뢰성','정밀 설계'], ja:['プロ品質','人間工学','信頼性','精密設計'] },
    stats: {
      zh:[{n:'17款',l:'配件系列'},{n:'360°',l:'全方位功能'},{n:'100%',l:'品质保障'},{n:'3年',l:'耐用保证'}],
      en:[{n:'17',l:'Accessory Models'},{n:'360°',l:'Full Coverage'},{n:'100%',l:'Quality Assured'},{n:'3yr',l:'Durability'}],
      ko:[{n:'17종',l:'액세서리 라인업'},{n:'360°',l:'전방위 기능'},{n:'100%',l:'품질 보장'},{n:'3년',l:'내구성 보증'}],
      ja:[{n:'17種',l:'アクセサリーシリーズ'},{n:'360°',l:'全方位機能'},{n:'100%',l:'品質保証'},{n:'3年',l:'耐久性'}]
    },
    useCases: {
      zh:[
        {icon:'🛒',name:'球场推车',tag:'轻松移动',desc:'折叠式推车让您轻松在球场间移动，减少携带疲劳。',items:['轻量折叠结构','防滑稳固支架','全地形轮子']},
        {icon:'👟',name:'球鞋收纳',tag:'整洁保护',desc:'专用球鞋袋保护您的高尔夫鞋，保持整洁，延长使用寿命。',items:['防尘防潮材质','独立通风设计','便携手提带']},
        {icon:'⛳',name:'球杆保护',tag:'安全存放',desc:'球杆架与球袋搭配使用，安全保护您的珍贵球具。',items:['防撞保护内衬','多位置支撑','稳固底座']},
        {icon:'🧹',name:'清洁维护',tag:'日常保养',desc:'专业清洁工具保持球具处于最佳状态，发挥最优性能。',items:['深度清洁配方','各类材质适用','便携易用设计']}
      ],
      en:[
        {icon:'🛒',name:'Cart Mobility',tag:'Easy Transport',desc:'Foldable trolleys let you move effortlessly across the course, reducing carry fatigue.',items:['Lightweight fold design','Anti-slip stable stand','All-terrain wheels']},
        {icon:'👟',name:'Shoe Storage',tag:'Clean & Protected',desc:'Dedicated shoe bags protect your golf shoes and keep them clean for longer life.',items:['Dust and moisture protection','Ventilation design','Portable carry handle']},
        {icon:'⛳',name:'Club Protection',tag:'Safe Storage',desc:'Club racks and bags work together to safely protect your valuable clubs.',items:['Impact-absorbing lining','Multi-position support','Stable base']},
        {icon:'🧹',name:'Cleaning & Care',tag:'Maintenance',desc:'Professional cleaning tools keep your equipment in peak condition for optimal performance.',items:['Deep cleaning formula','Works on all materials','Portable and easy-to-use']}
      ],
      ko:[
        {icon:'🛒',name:'카트 이동',tag:'편리한 이동',desc:'접이식 카트로 코스에서 편리하게 이동하고 피로를 줄이세요.',items:['경량 접이식 설계','미끄럼 방지 안정 스탠드','전지형 바퀴']},
        {icon:'👟',name:'신발 수납',tag:'깔끔한 보관',desc:'전용 신발 가방으로 골프화를 보호하고 깔끔하게 유지하세요.',items:['방진·방습 소재','통풍 설계','휴대용 핸들']},
        {icon:'⛳',name:'클럽 보호',tag:'안전 보관',desc:'클럽 랙과 가방이 함께 귀한 클럽을 안전하게 보호합니다.',items:['충격 흡수 내층','다중 위치 지지','안정적인 베이스']},
        {icon:'🧹',name:'청소 유지',tag:'일상 관리',desc:'전문 청소 도구로 장비를 최상의 상태로 유지하세요.',items:['딥 클린 포뮬라','모든 재질 적용 가능','휴대하기 쉬운 설계']}
      ],
      ja:[
        {icon:'🛒',name:'カート移動',tag:'楽々移動',desc:'折りたたみトロリーでコースを楽に移動し、疲労を軽減します。',items:['軽量折りたたみ設計','滑り止め安定スタンド','全地形対応ホイール']},
        {icon:'👟',name:'シューズ収納',tag:'清潔保護',desc:'専用シューズバッグでゴルフシューズを保護し、清潔に保ちます。',items:['防塵・防湿素材','通気性設計','携帯ハンドル']},
        {icon:'⛳',name:'クラブ保護',tag:'安全収納',desc:'クラブラックとバッグが連携して大切なクラブを安全に保護します。',items:['衝撃吸収ライニング','多ポジションサポート','安定ベース']},
        {icon:'🧹',name:'クリーニング',tag:'日常メンテナンス',desc:'プロ仕様の清掃ツールで装備を最高の状態に保ちます。',items:['ディープクリーンフォーミュラ','全素材対応','携帯しやすい設計']}
      ]
    }
  },
  'gear-apparel': {
    label: { zh:'产品故事', en:'PRODUCT STORY', ko:'제품 이야기', ja:'プロダクトストーリー' },
    headline: { zh:'防晒与时尚并存，球场形象新定义', en:'UV Protection Meets Style — Redefining Course Fashion', ko:'UV 차단과 스타일의 만남 — 코스 패션의 재정의', ja:'UVカットとスタイルが出会う — コースファッションの再定義' },
    body: {
      zh:'专为高尔夫运动设计的防晒帽系列，将UPF50+防护技术与时尚设计完美融合。速干透气材质在长时间阳光暴露下保持舒适干爽，吸汗头带有效防止汗水影响视线。',
      en:'Our UV-protection cap series fuses UPF50+ technology with stylish design. Quick-dry breathable materials stay comfortable during extended sun exposure while the sweat-wicking headband keeps perspiration away.',
      ko:'저희 UV 차단 모자 시리즈는 UPF50+ 보호 기술과 세련된 디자인을 완벽하게 융합합니다. 속건 통기성 소재로 장시간 햇빛 노출 시에도 편안하고 쾌적합니다.',
      ja:'UVカットキャップシリーズは、UPF50+保護技術とスタイリッシュなデザインを完璧に融合。速乾通気性素材で長時間でも快適です。'
    },
    tags: { zh:['UPF50+','速干透气','时尚设计','吸汗舒适'], en:['UPF50+','Quick-dry','Stylish','Sweat-wicking'], ko:['UPF50+','속건 통기','패션','흡한'], ja:['UPF50+','速乾通気','スタイリッシュ','吸汗'] },
    stats: {
      zh:[{n:'UPF50+',l:'防紫外线'},{n:'3款',l:'款式选择'},{n:'100%',l:'速干材质'},{n:'4色',l:'颜色搭配'}],
      en:[{n:'UPF50+',l:'UV Protection'},{n:'3',l:'Cap Styles'},{n:'100%',l:'Quick-Dry'},{n:'4',l:'Colors'}],
      ko:[{n:'UPF50+',l:'UV 차단'},{n:'3종',l:'스타일 선택'},{n:'100%',l:'속건 소재'},{n:'4색',l:'색상 선택'}],
      ja:[{n:'UPF50+',l:'UV保護'},{n:'3種',l:'スタイル選択'},{n:'100%',l:'速乾素材'},{n:'4色',l:'カラー選択'}]
    },
    useCases: {
      zh:[
        {icon:'☀️',name:'夏季晴天',tag:'强烈阳光',desc:'UPF50+材质有效阻隔99%紫外线，炎夏球场也能舒适畅快。',items:['UPF50+认证材质','全方位遮阳设计','轻量透气结构']},
        {icon:'🏆',name:'正式比赛',tag:'竞技场合',desc:'简洁大方的外观设计符合正式赛事着装要求，展现专业形象。',items:['规范赛事外观','统一规格尺寸','品牌识别设计']},
        {icon:'🎯',name:'日常练习',tag:'训练场',desc:'吸汗速干功能在高强度训练中保持头部干爽，专注技术提升。',items:['快速吸湿排汗','头围可调设计','轻量减压结构']},
        {icon:'🌿',name:'休闲轻松',tag:'公园高尔夫',desc:'时尚休闲的外观设计，公园高尔夫与日常户外均适用。',items:['时尚休闲风格','多场景适配','防紫外线保护']}
      ],
      en:[
        {icon:'☀️',name:'Sunny Day',tag:'Strong UV',desc:'UPF50+ material blocks 99% of UV rays for comfortable play in the summer sun.',items:['UPF50+ certified material','Full-coverage sun protection','Lightweight breathable structure']},
        {icon:'🏆',name:'Competition',tag:'Official Tournament',desc:'Clean, professional design meets official tournament dress code requirements.',items:['Tournament-compliant appearance','Standardized sizing','Brand-appropriate design']},
        {icon:'🎯',name:'Daily Training',tag:'Practice Range',desc:'Sweat-wicking quick-dry function keeps your head cool during intense training sessions.',items:['Rapid moisture-wicking','Adjustable head circumference','Lightweight pressure-relief']},
        {icon:'🌿',name:'Casual Leisure',tag:'Park Golf',desc:'Fashionable casual design suits park golf and everyday outdoor activities.',items:['Fashion-casual style','Multi-scenario versatility','UV protective coverage']}
      ],
      ko:[
        {icon:'☀️',name:'맑은 날',tag:'강한 UV',desc:'UPF50+ 소재가 UV의 99%를 차단하여 여름 코스에서도 편안합니다.',items:['UPF50+ 인증 소재','풀 커버리지 자외선 차단','경량 통기성 구조']},
        {icon:'🏆',name:'대회',tag:'공식 토너먼트',desc:'깔끔하고 전문적인 디자인으로 공식 토너먼트 복장 기준을 충족합니다.',items:['대회 규정 준수 외관','표준화된 사이즈','브랜드 적합 디자인']},
        {icon:'🎯',name:'일상 훈련',tag:'연습장',desc:'흡한 속건 기능으로 고강도 훈련 중에도 머리를 시원하게 유지합니다.',items:['빠른 수분 흡수 배출','머리 둘레 조절 가능','경량 압박 해소 구조']},
        {icon:'🌿',name:'레저 나들이',tag:'파크 골프',desc:'세련된 캐주얼 디자인으로 파크 골프와 일상 야외 활동에 모두 어울립니다.',items:['패션 캐주얼 스타일','다양한 상황 적합','UV 차단 보호']}
      ],
      ja:[
        {icon:'☀️',name:'晴天',tag:'強いUV',desc:'UPF50+素材がUV99%をブロックし、夏のコースでも快適にプレーできます。',items:['UPF50+認定素材','フルカバレッジUVカット','軽量通気構造']},
        {icon:'🏆',name:'競技大会',tag:'公式トーナメント',desc:'シンプルでプロフェッショナルなデザインが公式試合の服装規定に対応。',items:['試合規定対応外観','標準化されたサイズ','ブランド適合デザイン']},
        {icon:'🎯',name:'日常トレーニング',tag:'練習場',desc:'吸汗速乾機能で激しいトレーニング中も頭部を快適に保ちます。',items:['迅速な吸湿発散','頭囲調整可能','軽量減圧構造']},
        {icon:'🌿',name:'レジャー',tag:'パークゴルフ',desc:'おしゃれなカジュアルデザインでパークゴルフや日常の屋外活動にも最適。',items:['ファッションカジュアルスタイル','多シーン対応','UV保護カバレッジ']}
      ]
    }
  },
  'gear-balls': {
    label: { zh:'产品故事', en:'PRODUCT STORY', ko:'제품 이야기', ja:'プロダクトストーリー' },
    headline: { zh:'低压缩科技，每一击都超越距离极限', en:'Low-Compression Technology — Every Shot Beyond the Limit', ko:'저압축 기술 — 모든 샷이 한계를 초월합니다', ja:'低圧縮テクノロジー — すべてのショットが限界を超える' },
    body: {
      zh:'低压缩内核技术为中低速挥杆专项设计，通过减少能量损失来最大化飞行距离。精密的两层结构在柔软触感的同时提供卓越的弹道性能，每一颗球严格按照USGA标准生产。',
      en:'Low compression core technology maximizes flight distance by minimizing energy loss for mid-to-slow swing speeds. The two-layer structure delivers exceptional ballistic performance while maintaining a soft feel.',
      ko:'저압축 코어 기술은 중저속 스윙을 위해 특별히 설계되어, 에너지 손실을 최소화하여 비거리를 극대화합니다. 2층 구조가 부드러운 감촉을 유지하면서 탁월한 탄도 성능을 제공합니다.',
      ja:'低圧縮コア技術は中低速スイング向けで、エネルギー損失を最小化して飛距離を最大化。2層構造でソフトな感触を維持しながら卓越した弾道性能を発揮します。'
    },
    tags: { zh:['低压缩内核','最大飞距','USGA规格','柔软触感'], en:['Low-compression Core','Max Distance','USGA Spec','Soft Feel'], ko:['저압축 코어','최대 비거리','USGA 규격','부드러운 감촉'], ja:['低圧縮コア','最大飛距離','USGA規格','ソフトタッチ'] },
    stats: {
      zh:[{n:'2层',l:'核心结构'},{n:'70',l:'低压缩值'},{n:'USGA',l:'认证标准'},{n:'5%+',l:'距离提升'}],
      en:[{n:'2-Layer',l:'Core Structure'},{n:'70',l:'Compression'},{n:'USGA',l:'Certified'},{n:'5%+',l:'Distance Gain'}],
      ko:[{n:'2층',l:'코어 구조'},{n:'70',l:'저압축값'},{n:'USGA',l:'인증 기준'},{n:'5%+',l:'비거리 향상'}],
      ja:[{n:'2層',l:'コア構造'},{n:'70',l:'圧縮率'},{n:'USGA',l:'認証規格'},{n:'5%+',l:'飛距離向上'}]
    },
    useCases: {
      zh:[
        {icon:'🏌️',name:'练习场训练',tag:'提升距离',desc:'低压缩设计让中低速挥杆获得更远飞行距离，有效提升球技。',items:['最大化能量传递','减少偏转误差','稳定弹道轨迹']},
        {icon:'⛳',name:'球场实战',tag:'正式比赛',desc:'USGA规格认证，在正式比赛场合同样展现卓越一致的表现。',items:['USGA规格认证','比赛级一致性','精准控制性']},
        {icon:'🎯',name:'推杆练习',tag:'果岭控制',desc:'柔软的触感提供精准的推杆感知，提高果岭上的控制精度。',items:['柔软触感设计','精准推杆感知','一致旋转特性']},
        {icon:'🔰',name:'初学者入门',tag:'轻松上手',desc:'低压缩设计对初学者友好，即使挥杆速度不快也能获得理想距离。',items:['适合初学者速度','增强飞行距离','提高击球信心']}
      ],
      en:[
        {icon:'🏌️',name:'Range Training',tag:'Distance Boost',desc:'Low-compression design gives mid-to-slow swing speeds greater flight distance.',items:['Maximize energy transfer','Reduce deviation','Stable ball trajectory']},
        {icon:'⛳',name:'Course Play',tag:'Official Round',desc:'USGA-certified for consistent outstanding performance in official competition.',items:['USGA certified','Competition-grade consistency','Precise control']},
        {icon:'🎯',name:'Putting Practice',tag:'Green Control',desc:'Soft feel provides precise putting feedback for improved green accuracy.',items:['Soft touch design','Precise putt feedback','Consistent spin characteristics']},
        {icon:'🔰',name:'Beginner Training',tag:'Easy Start',desc:'Low-compression is beginner-friendly — great distance even at slower swing speeds.',items:['Beginner-speed compatible','Enhanced flight distance','Increased confidence']}
      ],
      ko:[
        {icon:'🏌️',name:'연습장 훈련',tag:'비거리 향상',desc:'저압축 설계로 중저속 스윙에서도 더 멀리 날 수 있습니다.',items:['에너지 전달 극대화','편향 오차 감소','안정적인 탄도']},
        {icon:'⛳',name:'코스 실전',tag:'공식 라운드',desc:'USGA 인증으로 공식 경기에서도 일관된 뛰어난 성능을 발휘합니다.',items:['USGA 인증','경기 수준 일관성','정밀한 컨트롤']},
        {icon:'🎯',name:'퍼팅 연습',tag:'그린 컨트롤',desc:'부드러운 감촉이 정밀한 퍼팅 피드백을 제공하여 정확도를 높입니다.',items:['소프트 터치 설계','정밀 퍼팅 피드백','일관된 스핀 특성']},
        {icon:'🔰',name:'초보자 입문',tag:'쉬운 시작',desc:'저압축은 초보자에게 적합 — 느린 스윙 속도에서도 이상적인 비거리.',items:['초보자 속도 적합','비거리 향상','자신감 증대']}
      ],
      ja:[
        {icon:'🏌️',name:'練習場トレーニング',tag:'飛距離アップ',desc:'低圧縮設計で中低速スイングでもより遠くへ飛ばせます。',items:['エネルギー伝達最大化','偏差誤差の軽減','安定した弾道']},
        {icon:'⛳',name:'コース実戦',tag:'公式ラウンド',desc:'USGA認証で公式競技でも一貫した優れた性能を発揮します。',items:['USGA認証','競技レベルの一貫性','精密なコントロール']},
        {icon:'🎯',name:'パター練習',tag:'グリーンコントロール',desc:'ソフトな感触が精密なパターフィードバックを提供し、精度を高めます。',items:['ソフトタッチ設計','精密パターフィードバック','一貫したスピン特性']},
        {icon:'🔰',name:'初心者入門',tag:'簡単スタート',desc:'低圧縮は初心者にやさしく、遅いスウィングでも理想的な飛距離。',items:['初心者スピード対応','飛距離向上','自信向上']}
      ]
    }
  },
  'gear-clubs': {
    label: { zh:'产品故事', en:'PRODUCT STORY', ko:'제품 이야기', ja:'プロダクトストーリー' },
    headline: { zh:'精工球杆，成就每一次精准击球', en:'Precision-Crafted for Every Perfect Strike', ko:'모든 완벽한 샷을 위해 정밀하게 제작', ja:'精密製造ですべての完璧なストライクを実現' },
    body: {
      zh:'我们的球杆系列融合先进材料科学与经典设计语言，为各水平球手提供最优秀的击球体验。从入门到高阶，每支球杆都经过精密的重心计算与平衡优化。',
      en:'Our club series combines advanced materials science with classic design language, delivering the finest hitting experience for all skill levels. Every club undergoes precision center-of-gravity calculation and balance optimization.',
      ko:'저희 클럽 시리즈는 고급 재료 과학과 클래식 디자인을 융합하여 모든 수준의 플레이어에게 최고의 타격 경험을 제공합니다.',
      ja:'クラブシリーズは高度な材料科学とクラシックなデザインを融合し、あらゆるレベルのプレーヤーに最高のヒット体験を提供します。'
    },
    tags: { zh:['精工制造','重心优化','精准打击','全水平适用'], en:['Precision Craft','CoG Optimized','Accurate Strike','All Levels'], ko:['정밀 제조','무게중심 최적화','정확한 타격','전 수준 적합'], ja:['精密製造','重心最適化','正確な打撃','全レベル対応'] },
    stats: {
      zh:[{n:'2款',l:'球杆类型'},{n:'双面',l:'双面设计'},{n:'±5°',l:'打击角度'},{n:'1年',l:'产品保修'}],
      en:[{n:'2',l:'Club Types'},{n:'2-Face',l:'Dual Face'},{n:'±5°',l:'Strike Angle'},{n:'1yr',l:'Warranty'}],
      ko:[{n:'2종',l:'클럽 타입'},{n:'양면',l:'양면 설계'},{n:'±5°',l:'타격 각도'},{n:'1년',l:'제품 보증'}],
      ja:[{n:'2種',l:'クラブタイプ'},{n:'両面',l:'デュアルフェイス'},{n:'±5°',l:'打撃角度'},{n:'1年',l:'製品保証'}]
    },
    useCases: {
      zh:[
        {icon:'🏌️',name:'短杆练习',tag:'精准短打',desc:'双面切杆特殊设计让短距离精准击球更容易，快速提升短杆技术。',items:['双面可调角度','精准短距离控制','适合各种地形']},
        {icon:'⛳',name:'球场实战',tag:'全场适用',desc:'专业材质与平衡设计，在正式球场各种情况下稳定发挥。',items:['专业级材质','全面场地适用','稳定击球表现']},
        {icon:'🔰',name:'初学者',tag:'快速入门',desc:'一杆多用设计降低初学者门槛，轻松建立击球信心。',items:['多功能一体设计','降低学习难度','快速建立信心']},
        {icon:'🎯',name:'沙坑救球',tag:'特殊地形',desc:'专为沙坑等特殊地形设计，帮助脱困解难。',items:['沙坑专项优化','宽底刃设计','高弹道出球']}
      ],
      en:[
        {icon:'🏌️',name:'Short Game',tag:'Precision Short Shots',desc:'Dual-face design makes precise short-distance shots easier for faster skill improvement.',items:['Dual-face adjustable angle','Precise short distance control','Works on all terrain types']},
        {icon:'⛳',name:'Course Play',tag:'Full Course',desc:'Professional materials and balanced design deliver stable performance in official rounds.',items:['Pro-grade materials','Full course adaptability','Consistent ball striking']},
        {icon:'🔰',name:'Beginner',tag:'Quick Start',desc:'Multi-purpose design lowers the bar for beginners to quickly build confidence.',items:['Multi-function design','Reduced learning curve','Build confidence quickly']},
        {icon:'🎯',name:'Bunker Recovery',tag:'Special Terrain',desc:'Designed for bunkers and challenging terrain to help you escape difficult situations.',items:['Bunker-optimized design','Wide-sole edge','High-trajectory launch']}
      ],
      ko:[
        {icon:'🏌️',name:'쇼트 게임',tag:'정밀 숏샷',desc:'양면 설계로 단거리 정밀 타격이 더 쉬워져 빠른 기술 향상이 가능합니다.',items:['양면 조절 각도','정밀 단거리 컨트롤','모든 지형 적합']},
        {icon:'⛳',name:'코스 실전',tag:'전 코스',desc:'전문 소재와 밸런스 설계로 공식 라운드에서 안정적인 성능을 발휘합니다.',items:['프로급 소재','전 코스 적용','일관된 타격 성능']},
        {icon:'🔰',name:'초보자',tag:'빠른 입문',desc:'다용도 설계로 초보자 진입 장벽을 낮추고 빠르게 자신감을 형성합니다.',items:['다기능 일체형 설계','학습 난이도 감소','빠른 자신감 형성']},
        {icon:'🎯',name:'벙커 탈출',tag:'특수 지형',desc:'벙커 등 특수 지형에서 탈출하도록 설계되어 어려운 상황을 극복합니다.',items:['벙커 전용 최적화','와이드 솔 엣지 설계','높은 탄도 출구']}
      ],
      ja:[
        {icon:'🏌️',name:'ショートゲーム',tag:'精密ショット',desc:'デュアルフェイス設計で短距離精密ショットが容易になり、スキル向上が加速します。',items:['デュアルフェイス角度調整','精密短距離コントロール','全地形対応']},
        {icon:'⛳',name:'コース実戦',tag:'全コース',desc:'プロ素材とバランス設計で公式ラウンドでも安定したパフォーマンスを発揮。',items:['プロ級素材','全コース対応','一貫したボールストライキング']},
        {icon:'🔰',name:'初心者',tag:'クイックスタート',desc:'多目的設計が初心者の参入障壁を下げ、素早く自信をつけます。',items:['多機能一体設計','学習難度の低減','素早い自信構築']},
        {icon:'🎯',name:'バンカー脱出',tag:'特殊地形',desc:'バンカーなど困難な地形からの脱出に特化した設計です。',items:['バンカー最適化設計','ワイドソールエッジ','高弾道打ち出し']}
      ]
    }
  },
  'gear-fitting': {
    label: { zh:'产品故事', en:'PRODUCT STORY', ko:'제품 이야기', ja:'プロダクトストーリー' },
    headline: { zh:'专项训练辅助，系统提升技术水平', en:'Targeted Training Aids — Systematic Skill Elevation', ko:'전문 훈련 보조기구 — 체계적인 기술 향상', ja:'専門トレーニングエイド — 系統的なスキルアップ' },
    body: {
      zh:'专业级训练辅助器具通过科学的即时反馈机制，帮助您快速识别并纠正技术缺陷。每次练习都变成有效的技术积累，让您在正式比赛中发挥最佳状态。',
      en:'Professional training aids use scientific instant feedback to help you quickly identify and correct technical flaws. Every session becomes effective skill-building for peak competition performance.',
      ko:'전문 훈련 보조기구는 과학적인 즉각적 피드백을 통해 기술적 결함을 빠르게 식별하고 교정하는 데 도움을 줍니다.',
      ja:'プロ用トレーニングエイドは即時フィードバックで技術的な欠陥を素早く特定・修正できます。'
    },
    tags: { zh:['即时反馈','专项训练','技术提升','科学训练'], en:['Instant Feedback','Targeted Training','Skill Up','Scientific'], ko:['즉각 피드백','전문 훈련','기술 향상','과학적 훈련'], ja:['即時フィードバック','専門訓練','スキルアップ','科学的'] },
    stats: {
      zh:[{n:'1款',l:'训练器具'},{n:'90%',l:'命中精度'},{n:'3场景',l:'适用场合'},{n:'30天',l:'技术提升'}],
      en:[{n:'1',l:'Training Aid'},{n:'90%',l:'Shot Accuracy'},{n:'3',l:'Use Scenarios'},{n:'30days',l:'Skill Boost'}],
      ko:[{n:'1종',l:'훈련 보조기구'},{n:'90%',l:'정확도'},{n:'3가지',l:'활용 시나리오'},{n:'30일',l:'기술 향상'}],
      ja:[{n:'1種',l:'トレーニングエイド'},{n:'90%',l:'精度'},{n:'3',l:'使用シナリオ'},{n:'30日',l:'スキル向上'}]
    },
    useCases: {
      zh:[
        {icon:'🏖️',name:'沙坑练习',tag:'脱困技术',desc:'专为沙坑训练设计，通过反复练习掌握出沙坑的正确技术。',items:['沙坑专项设计','正确姿势引导','反复训练验证']},
        {icon:'⚙️',name:'挥杆纠正',tag:'动作优化',desc:'科学反馈机制帮助识别挥杆中的不良动作并及时纠正。',items:['实时动作分析','纠正引导提示','肌肉记忆养成']},
        {icon:'📐',name:'角度校准',tag:'精准调校',desc:'精准校准击球角度，从根本上改善球路与距离控制。',items:['击球角度分析','距离控制优化','一致性提升']},
        {icon:'🎯',name:'比赛备战',tag:'赛前训练',desc:'系统性训练计划帮助您在赛前达到最佳技术状态。',items:['系统训练计划','强化弱点项目','建立比赛节奏']}
      ],
      en:[
        {icon:'🏖️',name:'Bunker Practice',tag:'Sand Escape',desc:'Designed for bunker training to master correct sand escape technique through repetition.',items:['Bunker-specific design','Correct posture guidance','Repetitive training verification']},
        {icon:'⚙️',name:'Swing Correction',tag:'Motion Optimization',desc:'Scientific feedback identifies bad swing habits and provides timely correction.',items:['Real-time motion analysis','Corrective guidance feedback','Muscle memory formation']},
        {icon:'📐',name:'Angle Calibration',tag:'Precision Tuning',desc:'Precise strike angle calibration fundamentally improves ball flight and distance control.',items:['Ball strike angle analysis','Distance control optimization','Consistency improvement']},
        {icon:'🎯',name:'Pre-Competition',tag:'Tournament Prep',desc:'Systematic training helps reach peak technical form before competition.',items:['Systematic training plan','Weakness reinforcement','Build competition rhythm']}
      ],
      ko:[
        {icon:'🏖️',name:'벙커 연습',tag:'모래 탈출',desc:'벙커 훈련을 위해 설계되어 반복 연습으로 올바른 탈출 기술을 익힙니다.',items:['벙커 전용 설계','올바른 자세 가이드','반복 훈련 검증']},
        {icon:'⚙️',name:'스윙 교정',tag:'동작 최적화',desc:'과학적 피드백으로 나쁜 스윙 습관을 식별하고 즉시 교정합니다.',items:['실시간 동작 분석','교정 가이드 피드백','근육 기억 형성']},
        {icon:'📐',name:'각도 보정',tag:'정밀 조정',desc:'정밀한 타격 각도 보정으로 볼 비행과 거리 컨트롤을 근본적으로 개선합니다.',items:['타격 각도 분석','거리 컨트롤 최적화','일관성 향상']},
        {icon:'🎯',name:'대회 준비',tag:'토너먼트 대비',desc:'체계적인 훈련으로 대회 전 최상의 기술 상태에 도달합니다.',items:['체계적인 훈련 계획','약점 보강 항목','경기 리듬 형성']}
      ],
      ja:[
        {icon:'🏖️',name:'バンカー練習',tag:'砂からの脱出',desc:'バンカートレーニング用に設計し、繰り返し練習で正しい脱出技術を習得。',items:['バンカー専用設計','正しい姿勢ガイド','反復訓練検証']},
        {icon:'⚙️',name:'スイング修正',tag:'動作最適化',desc:'科学的フィードバックで悪いスイング習慣を特定し、タイムリーに修正します。',items:['リアルタイム動作分析','修正ガイドフィードバック','筋肉記憶の形成']},
        {icon:'📐',name:'角度校正',tag:'精密チューニング',desc:'精密な打撃角度校正でボールの飛びと距離コントロールを根本的に改善。',items:['打撃角度分析','距離コントロール最適化','一貫性向上']},
        {icon:'🎯',name:'競技前準備',tag:'トーナメント備え',desc:'システム的なトレーニングで競技前に最高の技術状態を達成します。',items:['系統的トレーニング計画','弱点強化項目','競技リズム構築']}
      ]
    }
  },
  'gear-beauty': {
    label: { zh:'产品故事', en:'PRODUCT STORY', ko:'제품 이야기', ja:'プロダクトストーリー' },
    headline: { zh:'全天候守护，让您专注每一球', en:'All-Day Protection — Full Focus on Every Shot', ko:'하루 종일 보호 — 모든 샷에 완전히 집중', ja:'一日中保護 — すべてのショットに全集中' },
    body: {
      zh:'专为户外高尔夫运动设计的护肤与清洁系列，在烈日下为您提供全方位保护。先进的运动配方有效抵御紫外线、汗渍和环境污染，让您在长时间球场活动中始终保持清爽舒适。',
      en:'Skincare and cleansing products for outdoor golf provide comprehensive sun protection. Advanced sports formulas guard against UV, perspiration and pollution, keeping you fresh and comfortable during long sessions.',
      ko:'야외 골프를 위해 설계된 스킨케어 및 클렌징 제품은 포괄적인 보호를 제공합니다. 고급 스포츠 포뮬러로 자외선, 땀, 환경 오염으로부터 효과적으로 보호합니다.',
      ja:'屋外ゴルフ向けスキンケアとクレンジング製品が包括的な保護を提供します。高度なスポーツフォーミュラがUV、汗、汚染から守ります。'
    },
    tags: { zh:['UPF50+防晒','清爽舒适','专业配方','全天候有效'], en:['UPF50+ UV','Fresh & Cool','Pro Formula','All-day'], ko:['UPF50+ UV 차단','상쾌한 쿨링','전문 포뮬라','하루 종일'], ja:['UPF50+ UV','爽やかクール','プロフォーミュラ','終日有効'] },
    stats: {
      zh:[{n:'UPF50+',l:'防晒指数'},{n:'8H',l:'持续有效'},{n:'2款',l:'产品系列'},{n:'0',l:'荧光剂'}],
      en:[{n:'UPF50+',l:'UV Index'},{n:'8hrs',l:'Duration'},{n:'2',l:'Products'},{n:'0',l:'Fluorescent'}],
      ko:[{n:'UPF50+',l:'UV 지수'},{n:'8시간',l:'지속 효과'},{n:'2종',l:'제품 시리즈'},{n:'0',l:'형광 성분'}],
      ja:[{n:'UPF50+',l:'UVインデックス'},{n:'8時間',l:'持続効果'},{n:'2種',l:'製品シリーズ'},{n:'0',l:'蛍光剤'}]
    },
    useCases: {
      zh:[
        {icon:'☀️',name:'夏季长时间球场',tag:'强UV防护',desc:'高强度阳光下持续8小时保护，让您安心享受全天球场活动。',items:['UPF50+长效防晒','清爽不油腻质感','防水防汗配方']},
        {icon:'🏆',name:'比赛日全程',tag:'竞技状态',desc:'保持皮肤清爽，让您的注意力完全专注在比赛表现上。',items:['长时间有效保护','清爽运动质感','无负担轻薄配方']},
        {icon:'🌿',name:'日常练习',tag:'每日防护',desc:'轻薄配方适合每日使用，养成良好的护肤防晒习惯。',items:['每日使用适合','轻薄无负担','护肤防晒二合一']},
        {icon:'🧹',name:'运动后清洁',tag:'运动护理',desc:'专业运动清洁配方有效去除汗渍和防晒残留，保持肌肤清洁健康。',items:['深层清洁配方','温和无刺激','保护肌肤屏障']}
      ],
      en:[
        {icon:'☀️',name:'Long Summer Round',tag:'Strong UV',desc:'Continuous 8-hour protection under intense sun for all-day course activities.',items:['UPF50+ long-lasting protection','Non-greasy fresh texture','Waterproof and sweat-resistant formula']},
        {icon:'🏆',name:'Tournament Day',tag:'Competition Mode',desc:'Keep skin fresh so your full attention stays on performance.',items:['Long-lasting effective protection','Fresh sports texture','Lightweight formula']},
        {icon:'🌿',name:'Daily Practice',tag:'Daily Protection',desc:'Lightweight formula suitable for daily use — build a healthy skincare routine.',items:['Daily use appropriate','Lightweight and comfortable','Skincare + UV protection combined']},
        {icon:'🧹',name:'Post-Game Cleanse',tag:'Sport Care',desc:'Professional sports cleansing formula removes sweat and sunscreen residue.',items:['Deep cleansing formula','Gentle and non-irritating','Protect skin barrier']}
      ],
      ko:[
        {icon:'☀️',name:'여름 장시간 라운드',tag:'강한 UV',desc:'강한 햇빛 아래 8시간 연속 보호로 하루 종일 코스를 즐깁니다.',items:['UPF50+ 장시간 지속 보호','끈적임 없는 상쾌한 질감','방수 방한 포뮬라']},
        {icon:'🏆',name:'대회일 전체',tag:'경기 모드',desc:'피부를 상쾌하게 유지하여 경기 성과에 완전히 집중할 수 있습니다.',items:['장시간 지속 효과 보호','상쾌한 스포츠 질감','가벼운 포뮬라']},
        {icon:'🌿',name:'일상 연습',tag:'일상 보호',desc:'가벼운 포뮬라로 매일 사용하기 적합하여 건강한 피부 케어 습관을 형성합니다.',items:['매일 사용 적합','가볍고 편안함','스킨케어+UV 차단 2in1']},
        {icon:'🧹',name:'운동 후 세정',tag:'스포츠 케어',desc:'전문 스포츠 클렌징 포뮬라로 땀과 자외선 차단제 잔여물을 제거합니다.',items:['딥 클렌징 포뮬라','부드럽고 자극 없음','피부 장벽 보호']}
      ],
      ja:[
        {icon:'☀️',name:'夏の長時間ラウンド',tag:'強いUV',desc:'強烈な太陽の下で8時間継続保護し、終日コース活動を楽しめます。',items:['UPF50+長時間持続保護','ベタつかない爽やかな質感','防水・防汗フォーミュラ']},
        {icon:'🏆',name:'大会当日',tag:'競技モード',desc:'肌を爽やかに保ち、競技パフォーマンスに集中できます。',items:['長時間有効保護','爽やかなスポーツ感触','軽いフォーミュラ']},
        {icon:'🌿',name:'日常練習',tag:'毎日の保護',desc:'軽いフォーミュラで毎日使用に最適、健康的なスキンケア習慣を形成。',items:['毎日使用適切','軽くて快適','スキンケア+UV保護一体型']},
        {icon:'🧹',name:'運動後クレンジング',tag:'スポーツケア',desc:'プロ用スポーツクレンジングが汗と日焼け止めの残留物を除去します。',items:['ディープクレンジング','マイルドで低刺激','肌バリア保護']}
      ]
    }
  },
  'gear-practice': {
    label: { zh:'产品故事', en:'PRODUCT STORY', ko:'제품 이야기', ja:'プロダクトストーリー' },
    headline: { zh:'专注训练，突破自我的每一个极限', en:'Train with Purpose — Break Every Personal Limit', ko:'목적 있는 훈련으로 모든 개인 한계를 돌파하세요', ja:'目的を持った訓練ですべての個人限界を突破' },
    body: {
      zh:'我们的练习用品系列以真实球场体验为设计标准，从仿真草坪到专项训练垫，每件产品都旨在最大化您的练习效果。TEEMASTER练习器材结合运动科学原理，帮助您系统性提升。',
      en:'Our practice equipment is designed to real course standards — from simulated turf to specialized mats. TEEMASTER training equipment combines sports science to systematically correct movements and build muscle memory.',
      ko:'저희 연습 용품 시리즈는 실제 코스 경험을 기준으로 설계되었습니다. TEEMASTER 훈련 장비는 스포츠 과학 원리를 결합하여 동작 편차를 체계적으로 교정하고 근육 기억을 형성합니다.',
      ja:'実際のコース体験を基準に設計された練習用品シリーズ。TEEMASTERのトレーニング機器はスポーツ科学原理で動きのズレを修正し筋肉記憶を形成します。'
    },
    tags: { zh:['仿真草坪','专项训练','肌肉记忆','室内外兼用'], en:['Sim Turf','Targeted Training','Muscle Memory','Indoor/Outdoor'], ko:['시뮬레이션 잔디','전문 훈련','근육 기억','실내외 겸용'], ja:['シミュレーション芝','専門訓練','筋肉記憶','室内外兼用'] },
    stats: {
      zh:[{n:'4款',l:'练习套装'},{n:'HD',l:'高密度草坪'},{n:'室内外',l:'双场景'},{n:'360°',l:'全方位反馈'}],
      en:[{n:'4',l:'Training Sets'},{n:'HD',l:'Dense Turf'},{n:'In/Out',l:'Dual Venue'},{n:'360°',l:'Full Feedback'}],
      ko:[{n:'4종',l:'훈련 세트'},{n:'HD',l:'고밀도 잔디'},{n:'실내외',l:'이중 장소'},{n:'360°',l:'전방위 피드백'}],
      ja:[{n:'4種',l:'トレーニングセット'},{n:'HD',l:'高密度芝'},{n:'屋内外',l:'両シーン'},{n:'360°',l:'全方位フィードバック'}]
    },
    useCases: {
      zh:[
        {icon:'🏠',name:'家庭练习',tag:'室内训练',desc:'小空间即可布置完整练习区，随时随地进行高效训练。',items:['小空间适用设计','防滑底部设计','减震降噪功能']},
        {icon:'🎯',name:'全挥杆练习',tag:'全力击球',desc:'仿真草坪提供真实球场触感，让室内练习获得真实效果。',items:['高密度仿真草坪','真实击球触感','标准球座高度']},
        {icon:'🏖️',name:'沙坑模拟',tag:'特殊地形',desc:'专业沙坑垫模拟真实沙坑感觉，在室内练好出沙坑技术。',items:['真实沙坑质感','出球轨迹模拟','专业训练效果']},
        {icon:'🚀',name:'距离提升',tag:'力量训练',desc:'距离训练器材帮助系统性提升出球距离和挥杆力量。',items:['力量训练系统','挥杆速度提升','距离数据反馈']}
      ],
      en:[
        {icon:'🏠',name:'Home Practice',tag:'Indoor Training',desc:'Set up a complete practice zone in a small space for efficient training anytime.',items:['Small space design','Anti-slip base','Shock-absorbing and quiet']},
        {icon:'🎯',name:'Full Swing',tag:'Power Shots',desc:'Simulated turf provides real course feel for authentic indoor practice results.',items:['High-density sim turf','Realistic ball-strike feel','Standard tee height']},
        {icon:'🏖️',name:'Bunker Simulation',tag:'Special Terrain',desc:'Professional bunker mat simulates real sand feel to improve escape technique indoors.',items:['Realistic sand texture','Ball flight simulation','Professional training effect']},
        {icon:'🚀',name:'Distance Boost',tag:'Power Training',desc:'Distance training equipment systematically improves ball distance and swing power.',items:['Power training system','Swing speed improvement','Distance data feedback']}
      ],
      ko:[
        {icon:'🏠',name:'홈 연습',tag:'실내 훈련',desc:'좁은 공간에서도 완전한 연습 구역을 만들어 언제든지 효율적으로 훈련합니다.',items:['작은 공간 설계','미끄럼 방지 바닥','충격 흡수 및 소음 감소']},
        {icon:'🎯',name:'풀 스윙',tag:'파워 샷',desc:'시뮬레이션 잔디가 실제 코스 감촉을 제공하여 실내 연습의 효과를 높입니다.',items:['고밀도 시뮬레이션 잔디','실제 타격 감촉','표준 티 높이']},
        {icon:'🏖️',name:'벙커 시뮬레이션',tag:'특수 지형',desc:'전문 벙커 매트가 실제 모래 감촉을 시뮬레이션하여 실내에서 탈출 기술을 향상시킵니다.',items:['실제 모래 질감','볼 비행 시뮬레이션','전문적인 훈련 효과']},
        {icon:'🚀',name:'비거리 향상',tag:'파워 훈련',desc:'비거리 훈련 장비로 볼 거리와 스윙 파워를 체계적으로 향상시킵니다.',items:['파워 훈련 시스템','스윙 속도 향상','거리 데이터 피드백']}
      ],
      ja:[
        {icon:'🏠',name:'ホーム練習',tag:'室内トレーニング',desc:'小スペースで完全な練習ゾーンを作り、いつでも効率的にトレーニング。',items:['小スペース設計','滑り止めベース','衝撃吸収・静音機能']},
        {icon:'🎯',name:'フルスイング',tag:'パワーショット',desc:'シミュレーション芝が実際のコース感触を提供し、室内練習を本物に近づけます。',items:['高密度シミュレーション芝','リアルな打撃感触','標準ティー高さ']},
        {icon:'🏖️',name:'バンカーシミュレーション',tag:'特殊地形',desc:'プロ用バンカーマットが本物の砂の感触を再現し、室内での脱出技術を向上。',items:['リアルな砂の質感','ボール弾道シミュレーション','プロレベルのトレーニング効果']},
        {icon:'🚀',name:'飛距離アップ',tag:'パワートレーニング',desc:'飛距離トレーニング機器でボール距離とスイングパワーを系統的に向上。',items:['パワートレーニングシステム','スイングスピード向上','飛距離データフィードバック']}
      ]
    }
  },
  'gear-screen': {
    label: { zh:'产品故事', en:'PRODUCT STORY', ko:'제품 이야기', ja:'プロダクトストーリー' },
    headline: { zh:'军工级材质，打造完美模拟室内球场', en:'Military-Grade Material — Perfect Indoor Simulation Course', ko:'군용급 소재로 완벽한 실내 시뮬레이션 코스 구현', ja:'軍用グレード素材で完璧な室内シミュレーションコースを実現' },
    body: {
      zh:'采用军事级别防弹布材质制作的高尔夫模拟屏幕，能够承受高速球击冲击的同时呈现高清投影画面。精密的编织结构确保显示画面清晰锐利，优质的吸震性能让每次挥杆安全稳定。',
      en:'Golf simulation screens crafted with military-grade bulletproof fabric withstand high-speed ball impact while delivering HD projection clarity. Precision weave ensures sharp, clear display with premium shock absorption.',
      ko:'군용 방탄 원단으로 제작된 골프 시뮬레이션 스크린은 고속 볼 충격을 견디면서 HD 프로젝션 선명도를 제공합니다. 정밀 직조 구조는 선명한 디스플레이 이미지를 보장합니다.',
      ja:'軍用防弾素材のゴルフシミュレーションスクリーンは高速ボール衝撃に耐えながらHDプロジェクションを提供。精密織りで鮮明な映像と優れた衝撃吸収を実現。'
    },
    tags: { zh:['军工防弹布','HD高清显示','耐高速冲击','自定义尺寸'], en:['Military-grade','HD Display','Impact-resistant','Custom Size'], ko:['군용 방탄 소재','HD 고화질','고속 충격 저항','맞춤 사이즈'], ja:['軍用防弾素材','HD高精細','耐高速衝撃','カスタムサイズ'] },
    stats: {
      zh:[{n:'军工级',l:'材质级别'},{n:'HD',l:'高清投影'},{n:'16:9',l:'标准比例'},{n:'2m+',l:'最大宽度'}],
      en:[{n:'Military',l:'Material Grade'},{n:'HD',l:'Projection'},{n:'16:9',l:'Aspect Ratio'},{n:'2m+',l:'Max Width'}],
      ko:[{n:'군용급',l:'소재 등급'},{n:'HD',l:'고화질 투영'},{n:'16:9',l:'표준 비율'},{n:'2m+',l:'최대 폭'}],
      ja:[{n:'軍用級',l:'素材グレード'},{n:'HD',l:'高画質投影'},{n:'16:9',l:'標準比率'},{n:'2m+',l:'最大幅'}]
    },
    useCases: {
      zh:[
        {icon:'🎮',name:'室内模拟器',tag:'全套配置',desc:'与专业模拟器系统完美搭配，打造高级室内高尔夫体验。',items:['专业模拟器兼容','高清投影显示','耐高速冲击材质']},
        {icon:'🏠',name:'家庭高尔夫室',tag:'家庭配置',desc:'灵活的尺寸定制满足各种家庭空间需求，打造私人高尔夫室。',items:['灵活尺寸定制','家庭空间适配','简单安装固定']},
        {icon:'🏢',name:'商业场所',tag:'营业配置',desc:'耐用材质满足高频使用需求，适合高尔夫会所与商业场馆。',items:['高频使用耐久性','专业商业外观','维护简便高效']},
        {icon:'🌙',name:'夜间练习',tag:'不受时间限制',desc:'室内设置让您不受天气和时间限制，随时享受高尔夫练习。',items:['不受天气影响','全天候可用','灯光模拟场景']}
      ],
      en:[
        {icon:'🎮',name:'Indoor Simulator',tag:'Full Setup',desc:'Perfectly pairs with professional simulator systems for a premium indoor golf experience.',items:['Professional simulator compatible','HD projection display','High-speed impact resistant']},
        {icon:'🏠',name:'Home Golf Room',tag:'Home Setup',desc:'Flexible custom sizing suits various home spaces for a private golf room.',items:['Flexible custom sizing','Home space adaptable','Easy installation']},
        {icon:'🏢',name:'Commercial Venue',tag:'Business Setup',desc:'Durable materials meet high-frequency use demands for golf clubs and sports facilities.',items:['High-frequency durability','Professional commercial appearance','Easy maintenance']},
        {icon:'🌙',name:'Night Practice',tag:'No Time Limit',desc:'Indoor setup frees you from weather and time constraints for golf practice anytime.',items:['Weather-independent','Available 24/7','Lighting simulation scenes']}
      ],
      ko:[
        {icon:'🎮',name:'실내 시뮬레이터',tag:'전체 구성',desc:'전문 시뮬레이터 시스템과 완벽하게 조화를 이루어 프리미엄 실내 골프 경험을 제공합니다.',items:['전문 시뮬레이터 호환','HD 투영 디스플레이','고속 충격 저항']},
        {icon:'🏠',name:'홈 골프방',tag:'가정 구성',desc:'유연한 맞춤 사이즈로 다양한 가정 공간에 적합하여 개인 골프방을 만듭니다.',items:['유연한 맞춤 사이즈','가정 공간 적합','간단한 설치']},
        {icon:'🏢',name:'상업 시설',tag:'영업 구성',desc:'내구성 있는 소재로 골프 클럽과 스포츠 시설의 고빈도 사용 요구를 충족합니다.',items:['고빈도 사용 내구성','전문적인 상업 외관','간편한 유지 관리']},
        {icon:'🌙',name:'야간 연습',tag:'시간 제한 없음',desc:'실내 설치로 날씨와 시간의 제약 없이 언제든지 골프 연습을 즐깁니다.',items:['날씨 무관','24시간 이용 가능','조명 시뮬레이션 장면']}
      ],
      ja:[
        {icon:'🎮',name:'室内シミュレーター',tag:'フル構成',desc:'プロシミュレーターシステムと完璧に組み合わせてプレミアムな室内ゴルフ体験を提供。',items:['プロシミュレーター対応','HD投影ディスプレイ','高速衝撃耐性']},
        {icon:'🏠',name:'ホームゴルフルーム',tag:'家庭構成',desc:'柔軟なカスタムサイズで様々な家庭スペースに適合したプライベートゴルフルームを実現。',items:['柔軟なカスタムサイズ','家庭スペース対応','簡単設置']},
        {icon:'🏢',name:'商業施設',tag:'営業構成',desc:'耐久性素材でゴルフクラブや商業施設の高頻度使用に対応します。',items:['高頻度使用耐久性','プロフェッショナルな外観','容易なメンテナンス']},
        {icon:'🌙',name:'夜間練習',tag:'時間制限なし',desc:'室内設置で天候と時間に縛られずいつでもゴルフ練習を楽しめます。',items:['天候に左右されない','24時間利用可能','照明シミュレーションシーン']}
      ]
    }
  },
  'gear-park': {
    label: { zh:'产品故事', en:'PRODUCT STORY', ko:'제품 이야기', ja:'プロダクトストーリー' },
    headline: { zh:'公园高尔夫，全年龄段共享的运动快乐', en:'Park Golf — Sports Joy for Every Generation', ko:'파크골프 — 모든 세대가 함께하는 스포츠의 즐거움', ja:'パークゴルフ — すべての世代が楽しむスポーツ' },
    body: {
      zh:'公园高尔夫球杆专为轻量休闲运动而生，让老中青三代都能共享户外运动的乐趣。铝合金材质保证轻盈操控，防滑握把提供稳定舒适的持杆感。TEEMaster公园高尔夫系列符合标准规则。',
      en:'Park golf clubs are built for lightweight leisure play, allowing all generations to share outdoor sports joy. Aluminum alloy ensures easy handling, while anti-slip grips provide stable, comfortable hold.',
      ko:'파크골프 클럽은 경량 레저 플레이를 위해 설계되어, 모든 세대가 야외 스포츠의 즐거움을 함께 나눌 수 있습니다. 알루미늄 합금 구조로 쉬운 조작을 보장합니다.',
      ja:'パークゴルフクラブは軽量レジャープレー向けで、全世代が屋外スポーツの喜びを分かち合えます。アルミニウム合金で扱いやすく、滑り止めグリップで安定した握り心地。'
    },
    tags: { zh:['轻量合金','全年龄适合','休闲竞技','标准规格'], en:['Lightweight Alloy','All Ages','Leisure Sport','Standard Spec'], ko:['경량 합금','전 연령 적합','레저 스포츠','표준 규격'], ja:['軽量合金','全年齢対応','レジャースポーツ','標準規格'] },
    stats: {
      zh:[{n:'440g',l:'超轻重量'},{n:'2款',l:'球杆类型'},{n:'全年龄',l:'适用人群'},{n:'标准',l:'规格认证'}],
      en:[{n:'440g',l:'Ultra-Light'},{n:'2',l:'Club Types'},{n:'All Age',l:'Age Range'},{n:'Official',l:'Regulation'}],
      ko:[{n:'440g',l:'초경량'},{n:'2종',l:'클럽 타입'},{n:'전 연령',l:'적용 대상'},{n:'표준',l:'규격 인증'}],
      ja:[{n:'440g',l:'超軽量'},{n:'2種',l:'クラブタイプ'},{n:'全年齢',l:'対象年齢'},{n:'標準',l:'規格認証'}]
    },
    useCases: {
      zh:[
        {icon:'🌳',name:'公园休闲',tag:'轻松游玩',desc:'轻量设计让公园草地上的休闲高尔夫变得轻松愉快，老少皆宜。',items:['超轻440g设计','防滑舒适握把','适合草地地形']},
        {icon:'👨‍👩‍👧‍👦',name:'家庭出游',tag:'亲子活动',desc:'安全轻量的设计适合家庭亲子共同享受户外高尔夫乐趣。',items:['儿童友好设计','安全无伤害','轻松上手操作']},
        {icon:'🏆',name:'社区比赛',tag:'竞技体验',desc:'符合公园高尔夫标准规格，在社区赛事中展现竞技风采。',items:['标准规格认证','公平竞技设计','社区赛事适用']},
        {icon:'🧓',name:'老年健身',tag:'低负担运动',desc:'低冲击、轻量化设计特别适合老年人保持活动的理想健身运动。',items:['低冲击低负担','简单易学操作','户外健身效果']}
      ],
      en:[
        {icon:'🌳',name:'Park Leisure',tag:'Casual Play',desc:'Lightweight design makes park grass golf relaxed and enjoyable for all ages.',items:['Ultra-light 440g design','Anti-slip comfortable grip','Suitable for grass terrain']},
        {icon:'👨‍👩‍👧‍👦',name:'Family Outing',tag:'Family Activity',desc:'Safe and lightweight design for families to enjoy outdoor golf together.',items:['Child-friendly design','Safe and harmless','Easy to learn and play']},
        {icon:'🏆',name:'Community Tournament',tag:'Competitive',desc:'Meets park golf standard regulations to shine in community competitions.',items:['Standard regulation certified','Fair competition design','Community event suitable']},
        {icon:'🧓',name:'Senior Exercise',tag:'Low-Impact',desc:'Low-impact lightweight design is ideal for seniors to stay active.',items:['Low-impact low-burden','Simple and easy operation','Outdoor exercise benefit']}
      ],
      ko:[
        {icon:'🌳',name:'공원 레저',tag:'캐주얼 플레이',desc:'경량 설계로 공원 잔디에서의 레저 골프가 모든 연령에게 즐겁고 편안합니다.',items:['초경량 440g 설계','미끄럼 방지 편안한 그립','잔디 지형 적합']},
        {icon:'👨‍👩‍👧‍👦',name:'가족 나들이',tag:'가족 활동',desc:'안전하고 경량화된 설계로 가족이 함께 야외 골프를 즐깁니다.',items:['어린이 친화적 설계','안전하고 무해함','쉽게 배우고 플레이']},
        {icon:'🏆',name:'커뮤니티 대회',tag:'경기 체험',desc:'파크골프 표준 규격을 충족하여 커뮤니티 대회에서 경기의 매력을 발휘합니다.',items:['표준 규격 인증','공정한 경기 설계','커뮤니티 행사 적합']},
        {icon:'🧓',name:'노인 피트니스',tag:'저부담 운동',desc:'저충격, 경량화 설계로 노인이 활동을 유지하기 위한 이상적인 운동입니다.',items:['저충격 저부담','간단하고 쉬운 조작','야외 피트니스 효과']}
      ],
      ja:[
        {icon:'🌳',name:'公園レジャー',tag:'カジュアルプレー',desc:'軽量設計で公園の芝生でのレジャーゴルフが全年齢に楽しく快適です。',items:['超軽量440g設計','滑り止め快適グリップ','芝地形対応']},
        {icon:'👨‍👩‍👧‍👦',name:'家族お出かけ',tag:'ファミリー活動',desc:'安全で軽量な設計で家族みんなが屋外ゴルフを楽しめます。',items:['子供にやさしい設計','安全で無害','簡単に学べてプレイできる']},
        {icon:'🏆',name:'コミュニティ大会',tag:'競技体験',desc:'パークゴルフ標準規格に準拠し、地域大会で競技の醍醐味を発揮。',items:['標準規格認定','公平な競技設計','地域イベント対応']},
        {icon:'🧓',name:'シニアフィットネス',tag:'低負荷運動',desc:'低衝撃・軽量設計でシニアが活動を維持するための理想的な運動です。',items:['低衝撃低負荷','シンプルで簡単操作','屋外フィットネス効果']}
      ]
    }
  }
};
