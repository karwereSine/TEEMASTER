/**
 * TEEMASTER Golf Gear Product Data
 * Source: golfmaking.com catalog (51 products)
 * Images served from: http://www.golfmaking.com
 */

const GM = 'http://www.golfmaking.com/UploadProductPic/Products/';

const gearData = {
  'gear-bags': {
    title: { zh: '高尔夫球包', en: 'Golf Bags', ko: '골프 가방', ja: 'ゴルフバッグ' },
    sub: 'GOLF BAGS',
    desc: { zh: '覆盖球场、旅行、日常多场景的全系球包产品线', en: 'Full range of bags for course, travel and daily use', ko: '코스, 여행, 일상 등 모든 상황에 맞는 골프 가방 라인업', ja: 'コース・旅行・日常など多様なシーンに対応するバッグシリーズ' },
    parent: 'golf-gear',
    items: [
      {
        id: '1722848001',
        name: { zh: '二合一球包', en: '2-in-1 Caddy Bag', ko: '투인원 캐디백', ja: '2in1キャディバッグ' },
        thumb: GM + '202408/20240805165211_21226.jpg',
        img:   GM + '202408/20240805165216_64803.jpg',
        desc: { zh: '球包与旅行包合二为一，出行更便捷', en: 'Combines caddy bag and travel bag in one versatile design', ko: '캐디백과 여행용 가방을 하나로 합친 다용도 디자인', ja: 'キャディバッグとトラベルバッグが一体になった多機能設計' },
        features: { zh: ['二合一多功能设计','防水面料','多隔层收纳','可拆卸肩带'], en: ['2-in-1 multi-function design','Waterproof fabric','Multiple compartments','Detachable shoulder strap'], ko: ['투인원 다기능 디자인','방수 원단','다중 수납 공간','탈착식 숄더스트랩'], ja: ['2in1多機能デザイン','防水素材','多収納コンパートメント','取り外し可能なショルダーストラップ'] },
        specs: [{ l: '素材/Material', v: 'PU + Waterproof Nylon' }, { l: '重量/Weight', v: '~3.2 kg' }, { l: '隔层/Dividers', v: '14-way' }, { l: '用途/Use', v: 'Course + Travel' }]
      },
      {
        id: '1716193926',
        name: { zh: '球包套装 A', en: 'Caddy Bag Set A', ko: '캐디백 세트 A', ja: 'キャディバッグセット A' },
        thumb: GM + '202405/20240520163123_44776.jpg',
        img:   GM + '202405/20240520163127_33269.jpg',
        desc: { zh: '完整球包套装，配备所有必需配件', en: 'Complete caddy bag set with all essential accessories', ko: '모든 필수 액세서리가 포함된 완전한 캐디백 세트', ja: '必需品アクセサリー付きの完全なキャディバッグセット' },
        features: { zh: ['完整套装组合','高品质PU材质','宽敞主仓','附赠配件'], en: ['Complete set combo','High-quality PU leather','Spacious main compartment','Accessories included'], ko: ['완전한 세트 구성','고품질 PU 소재','넓은 메인 수납공간','액세서리 포함'], ja: ['完全セット構成','高品質PU素材','広々としたメインコンパートメント','アクセサリー付属'] },
        specs: [{ l: '素材/Material', v: 'PU Leather' }, { l: '重量/Weight', v: '~3.8 kg' }, { l: '隔层/Dividers', v: '14-way' }, { l: '口袋/Pockets', v: '6' }]
      },
      {
        id: '1716193841',
        name: { zh: '球包套装 B', en: 'Caddy Bag Set B', ko: '캐디백세트 B', ja: 'キャディバッグセット B' },
        thumb: GM + '202405/20240520163001_21013.jpg',
        img:   GM + '202405/20240520163005_33271.jpg',
        desc: { zh: '时尚配色球包套装，风格与性能兼备', en: 'Stylish colored caddy bag set balancing style and performance', ko: '스타일과 성능을 겸비한 세련된 캐디백 세트', ja: 'スタイルと性能を兼ね備えたカラフルなキャディバッグセット' },
        features: { zh: ['时尚配色设计','防水外层','14分隔主仓','多功能口袋'], en: ['Trendy color design','Waterproof outer layer','14-divider main compartment','Multi-function pockets'], ko: ['트렌디한 컬러 디자인','방수 외층','14구역 메인 수납공간','다기능 포켓'], ja: ['トレンディなカラーデザイン','防水アウターレイヤー','14分割メインコンパートメント','多機能ポケット'] },
        specs: [{ l: '素材/Material', v: 'PU + Nylon' }, { l: '重量/Weight', v: '~3.6 kg' }, { l: '隔层/Dividers', v: '14-way' }, { l: '口袋/Pockets', v: '5' }]
      },
      {
        id: '1716193738',
        name: { zh: '支架包 A', en: 'Stand Bag A', ko: '스탠드백 A', ja: 'スタンドバッグ A' },
        thumb: GM + '202405/20240520162825_12782.jpg',
        img:   GM + '202405/20240520162828_40553.jpg',
        desc: { zh: '轻量自立式支架包，球场携行首选', en: 'Lightweight self-standing bag, ideal for carrying on the course', ko: '경량 자립식 스탠드백, 코스 보행에 최적', ja: '軽量自立式スタンドバッグ、コース歩行に最適' },
        features: { zh: ['自动展开双脚架','轻量化设计','双肩背负系统','7个功能口袋'], en: ['Auto-deploy dual leg stand','Lightweight design','Dual strap carry system','7 functional pockets'], ko: ['자동 펼침 양다리 스탠드','경량화 설계','양어깨 스트랩 시스템','7개 기능성 포켓'], ja: ['自動展開デュアルレッグスタンド','軽量設計','ダブルストラップキャリーシステム','7つの機能ポケット'] },
        specs: [{ l: '素材/Material', v: 'Nylon' }, { l: '重量/Weight', v: '~2.4 kg' }, { l: '隔层/Dividers', v: '5-way' }, { l: '脚架/Stand', v: 'Dual auto-deploy' }]
      },
      {
        id: '1716193681',
        name: { zh: '支架包 B', en: 'Stand Bag B', ko: '스탠드백 B', ja: 'スタンドバッグ B' },
        thumb: GM + '202405/20240520162732_19187.jpg',
        img:   GM + '202405/20240520162736_87926.jpg',
        desc: { zh: '经典支架包设计，耐用实用', en: 'Classic stand bag design, durable and practical', ko: '클래식 스탠드백 디자인, 내구성 있고 실용적', ja: 'クラシックなスタンドバッグデザイン、耐久性と実用性を兼備' },
        features: { zh: ['经典简约设计','耐磨尼龙外层','自立双脚架','宽敞储物空间'], en: ['Classic minimal design','Durable nylon outer','Self-standing dual stand','Spacious storage space'], ko: ['클래식 미니멀 디자인','내마모성 나일론 외층','자립 양다리 스탠드','넉넉한 수납 공간'], ja: ['クラシックミニマルデザイン','耐摩耗性ナイロンアウター','自立デュアルスタンド','広々とした収納スペース'] },
        specs: [{ l: '素材/Material', v: 'Nylon' }, { l: '重量/Weight', v: '~2.2 kg' }, { l: '隔层/Dividers', v: '4-way' }, { l: '脚架/Stand', v: 'Dual leg' }]
      },
      {
        id: '1716193565',
        name: { zh: 'Performance S 支架包', en: 'Performance S Stand Bag', ko: '퍼포먼스 S 스탠드백', ja: 'パフォーマンス S スタンドバッグ' },
        thumb: GM + '202405/20240520162533_81941.jpg',
        img:   GM + '202405/20240520162537_60725.jpg',
        desc: { zh: '高性能轻量支架包，专为追求卓越的球手设计', en: 'High-performance lightweight stand bag for players who demand excellence', ko: '탁월함을 추구하는 골퍼를 위한 고성능 경량 스탠드백', ja: '卓越性を求めるプレーヤーのための高性能軽量スタンドバッグ' },
        features: { zh: ['顶级性能面料','超轻量化构造','人体工学背负','防水拉链'], en: ['Premium performance fabric','Ultra-lightweight structure','Ergonomic back system','Waterproof zipper'], ko: ['프리미엄 퍼포먼스 원단','초경량 구조','인체공학적 백 시스템','방수 지퍼'], ja: ['プレミアムパフォーマンス素材','超軽量構造','人間工学的バックシステム','防水ジッパー'] },
        specs: [{ l: '素材/Material', v: 'High-performance Nylon' }, { l: '重量/Weight', v: '~2.0 kg' }, { l: '隔层/Dividers', v: '4-way' }, { l: '背带/Strap', v: 'Ergonomic dual' }]
      },
      {
        id: '1716193488',
        name: { zh: '核心波士顿包', en: 'Core Essential Boston Bag', ko: '코어 에센셜 보스턴백', ja: 'コアエッセンシャル ボストンバッグ' },
        thumb: GM + '202405/20240520162416_26549.jpg',
        img:   GM + '202405/20240520162419_57838.jpg',
        desc: { zh: '核心必备波士顿包，宽敞收纳日常高尔夫装备', en: 'Core essential boston bag with ample space for daily golf essentials', ko: '일상 골프 필수품을 위한 넉넉한 공간의 코어 에센셜 보스턴백', ja: '日常のゴルフ用品を収納する十分なスペースのあるコアエッセンシャルボストンバッグ' },
        features: { zh: ['宽敞主仓设计','分隔湿干区域','柔软PU皮面','可拆卸肩带'], en: ['Spacious main compartment','Wet/dry separation zone','Soft PU leather surface','Detachable shoulder strap'], ko: ['넓은 메인 수납공간','습식/건식 분리 구역','부드러운 PU 가죽 표면','탈착식 숄더스트랩'], ja: ['広々としたメインコンパートメント','ウェット/ドライ分離ゾーン','柔らかいPUレザー表面','取り外し可能なショルダーストラップ'] },
        specs: [{ l: '素材/Material', v: 'PU Leather' }, { l: '容量/Capacity', v: '45L' }, { l: '重量/Weight', v: '~1.8 kg' }, { l: '隔层/Pockets', v: '4' }]
      },
      {
        id: '1716193432',
        name: { zh: '波士顿包', en: 'Boston Bag', ko: '보스턴백', ja: 'ボストンバッグ' },
        thumb: GM + '202405/20240520162315_22757.jpg',
        img:   GM + '202405/20240520162319_72592.jpg',
        desc: { zh: '经典波士顿包，存放高尔夫服装及配件的理想选择', en: 'Classic boston bag, ideal for golf clothing and accessories', ko: '골프 의류와 액세서리 보관에 이상적인 클래식 보스턴백', ja: 'ゴルフウェアとアクセサリーの保管に最適なクラシックボストンバッグ' },
        features: { zh: ['经典手提设计','大容量主仓','内外多口袋','耐用皮革把手'], en: ['Classic tote design','Large main compartment','Multiple interior/exterior pockets','Durable leather handles'], ko: ['클래식 토트 디자인','대용량 메인 수납공간','내외부 다중 포켓','내구성 있는 가죽 핸들'], ja: ['クラシックなトートデザイン','大容量メインコンパートメント','内外ポケット複数','耐久性レザーハンドル'] },
        specs: [{ l: '素材/Material', v: 'PU Leather' }, { l: '容量/Capacity', v: '40L' }, { l: '重量/Weight', v: '~1.6 kg' }, { l: '口袋/Pockets', v: '3' }]
      },
      {
        id: '1716193327',
        name: { zh: '航空球包套', en: 'Golf Travel Cover', ko: '항공커버', ja: 'ゴルフトラベルカバー' },
        thumb: GM + '202405/20240520162015_48044.jpg',
        img:   GM + '202405/20240520162022_36535.jpg',
        desc: { zh: '航空旅行专用球包保护套，保护球杆安全到达目的地', en: 'Aviation travel cover for safe transport of golf clubs', ko: '항공 여행 시 골프채를 안전하게 운반하기 위한 전용 커버', ja: 'ゴルフクラブを安全に航空輸送するためのトラベルカバー' },
        features: { zh: ['加厚防震内衬','防水外层面料','内置滚轮','TSA认可锁扣'], en: ['Thick shock-absorbing padding','Waterproof outer fabric','Built-in wheels','TSA-approved locks'], ko: ['두꺼운 충격 흡수 패딩','방수 외피 원단','내장 바퀴','TSA 승인 잠금장치'], ja: ['厚手の衝撃吸収パッド','防水アウター素材','内蔵ホイール','TSA認定ロック'] },
        specs: [{ l: '素材/Material', v: 'Waterproof Nylon' }, { l: '尺寸/Size', v: '135×25×90cm' }, { l: '重量/Weight', v: '~2.5 kg' }, { l: '滚轮/Wheels', v: 'Built-in' }]
      },
      {
        id: '1716192939',
        name: { zh: '半包 (Half Bag)', en: 'Half Golf Bag', ko: '하프 골프백', ja: 'ハーフゴルフバッグ' },
        thumb: GM + '202405/20240520161503_17417.jpg',
        img:   GM + '202405/20240520161507_56638.jpg',
        desc: { zh: '轻量半包，适合携带6-7支球杆练习', en: 'Lightweight half bag, ideal for carrying 6-7 clubs for practice', ko: '연습용 6-7개 클럽 운반에 적합한 경량 하프백', ja: '練習用6-7本のクラブ運搬に最適な軽量ハーフバッグ' },
        features: { zh: ['超轻量设计','适合练习场使用','简洁实用收纳','可单肩背负'], en: ['Ultra-lightweight design','Perfect for driving range','Simple practical storage','Single shoulder carry'], ko: ['초경량 디자인','연습장 사용에 최적','심플하고 실용적인 수납','한쪽 어깨 백'], ja: ['超軽量設計','練習場での使用に最適','シンプルで実用的な収納','片肩キャリー'] },
        specs: [{ l: '素材/Material', v: 'Nylon' }, { l: '重量/Weight', v: '~1.2 kg' }, { l: '容纳/Capacity', v: '6-7 clubs' }, { l: '用途/Use', v: 'Practice' }]
      },
      {
        id: '1716192813',
        name: { zh: '经典波士顿包', en: 'Solid Classic Boston Bag', ko: '솔리드 클래식 보스턴백', ja: 'ソリッドクラシック ボストンバッグ' },
        thumb: GM + '202405/20240520160924_51853.jpg',
        img:   GM + '202405/20240520160929_95092.jpg',
        desc: { zh: '经典工艺波士顿包，高品质皮革质感', en: 'Classic craftsmanship boston bag with premium leather texture', ko: '프리미엄 가죽 질감의 클래식 장인 보스턴백', ja: 'プレミアムレザーテクスチャーのクラシック職人ボストンバッグ' },
        features: { zh: ['高档PU皮质感','经典款式设计','宽敞内部空间','坚固五金配件'], en: ['Premium PU leather texture','Classic style design','Spacious interior','Durable metal hardware'], ko: ['프리미엄 PU 가죽 질감','클래식 스타일 디자인','넓은 내부 공간','견고한 금속 하드웨어'], ja: ['プレミアムPUレザーテクスチャー','クラシックスタイルデザイン','広い内部スペース','耐久性のある金属金具'] },
        specs: [{ l: '素材/Material', v: 'PU Leather' }, { l: '容量/Capacity', v: '45L' }, { l: '重量/Weight', v: '~1.9 kg' }, { l: '口袋/Pockets', v: '4' }]
      },
      {
        id: '1716192501',
        name: { zh: '轻量运动支架包', en: 'Lightweight Sporty Stand Bag', ko: '경량 스포티 스탠드백', ja: '軽量スポーティスタンドバッグ' },
        thumb: GM + '202405/20240520160747_58527.jpg',
        img:   GM + '202405/20240520160751_96128.jpg',
        desc: { zh: '轻量运动风格支架包，灵活机动', en: 'Lightweight sporty stand bag with flexible mobility', ko: '유연한 기동성을 갖춘 경량 스포티 스탠드백', ja: '柔軟な機動性を備えた軽量スポーティスタンドバッグ' },
        features: { zh: ['运动时尚外观','超轻量主体','自立脚架系统','通风背垫'], en: ['Sporty fashionable look','Ultra-light body','Self-standing leg system','Ventilated back pad'], ko: ['스포티하고 세련된 외관','초경량 본체','자립 다리 시스템','통기성 백 패드'], ja: ['スポーティでおしゃれな外観','超軽量ボディ','自立レッグシステム','通気性バックパッド'] },
        specs: [{ l: '素材/Material', v: 'Lightweight Nylon' }, { l: '重量/Weight', v: '~2.0 kg' }, { l: '隔层/Dividers', v: '4-way' }, { l: '脚架/Stand', v: 'Auto-deploy' }]
      },
      {
        id: '1716192227',
        name: { zh: '高尔夫球包套装', en: 'Golf Bag Set', ko: '골프백 세트', ja: 'ゴルフバッグセット' },
        thumb: GM + '202405/20240520160305_88435.jpg',
        img:   GM + '202405/20240520160309_15898.jpg',
        desc: { zh: '高尔夫球包完整套装，一站式配置', en: 'Complete golf bag set, one-stop configuration', ko: '원스톱 구성의 완전한 골프백 세트', ja: 'ワンストップ構成の完全なゴルフバッグセット' },
        features: { zh: ['完整套装配置','多色可选','耐用材质','全套配件'], en: ['Complete set configuration','Multiple color options','Durable material','Full accessories'], ko: ['완전한 세트 구성','다양한 색상 선택','내구성 소재','풀 액세서리'], ja: ['完全セット構成','複数カラー選択可能','耐久性素材','フルアクセサリー'] },
        specs: [{ l: '素材/Material', v: 'PU + Nylon' }, { l: '重量/Weight', v: '~3.5 kg' }, { l: '隔层/Dividers', v: '14-way' }, { l: '配件/Includes', v: 'Full set' }]
      },
      {
        id: '1716191999',
        name: { zh: '半支架包', en: 'Half Stand Bag', ko: '하프 스탠드백', ja: 'ハーフスタンドバッグ' },
        thumb: GM + '202405/20240520155751_46112.jpg',
        img:   GM + '202405/20240520155800_17328.jpg',
        desc: { zh: '带支架的半包，轻便与稳固兼备', en: 'Half bag with stand, combining portability and stability', ko: '스탠드가 있는 하프백, 휴대성과 안정성을 겸비', ja: 'スタンド付きハーフバッグ、携帯性と安定性を兼備' },
        features: { zh: ['支架半包设计','轻量实用','自立稳固','适合短程练习'], en: ['Stand half bag design','Lightweight practical','Self-standing stable','For short practice sessions'], ko: ['스탠드 하프백 디자인','경량 실용적','자립 안정성','짧은 연습 세션에 적합'], ja: ['スタンドハーフバッグデザイン','軽量で実用的','自立安定性','短時間の練習に最適'] },
        specs: [{ l: '素材/Material', v: 'Nylon' }, { l: '重量/Weight', v: '~1.4 kg' }, { l: '容纳/Capacity', v: '6-8 clubs' }, { l: '脚架/Stand', v: 'Included' }]
      },
      {
        id: '1716194720',
        name: { zh: '轻量旅行航空套', en: 'Lightweight Travel Cover', ko: '경량 트레블 항공커버', ja: '軽量トラベルカバー' },
        thumb: GM + '202405/20240520164355_44834.jpg',
        img:   GM + '202405/20240520164358_70218.jpg',
        desc: { zh: '超轻量旅行专用航空套，易携带', en: 'Ultra-lightweight travel aviation cover, easy to carry', ko: '携带하기 쉬운 초경량 여행용 항공 커버', ja: '持ち運びやすい超軽量トラベル用航空カバー' },
        features: { zh: ['超轻量设计','防水外层','内置缓冲垫','压缩收纳'], en: ['Ultra-light design','Waterproof outer','Built-in cushioning','Compressible storage'], ko: ['초경량 디자인','방수 외층','내장 쿠션','압축 수납'], ja: ['超軽量デザイン','防水アウター','内蔵クッション','圧縮収納'] },
        specs: [{ l: '素材/Material', v: 'Lightweight Nylon' }, { l: '重量/Weight', v: '~1.5 kg' }, { l: '防水/Waterproof', v: 'Yes' }, { l: '用途/Use', v: 'Air travel' }]
      },
      {
        id: '1716194609',
        name: { zh: '品牌航空球包套', en: 'Brand Travel Cover', ko: '인기브랜드 항공커버', ja: 'ブランドトラベルカバー' },
        thumb: GM + '202405/20240520164252_93254.jpg',
        img:   GM + '202405/20240520164255_17153.jpg',
        desc: { zh: '知名品牌设计航空套，时尚耐用', en: 'Brand-designed aviation cover, stylish and durable', ko: '스타일리시하고 내구성 있는 브랜드 디자인 항공 커버', ja: 'スタイリッシュで耐久性のあるブランドデザインの航空カバー' },
        features: { zh: ['品牌标识设计','高强度防水材质','保护性内衬','多种颜色选择'], en: ['Brand logo design','High-strength waterproof material','Protective inner lining','Multiple color choices'], ko: ['브랜드 로고 디자인','고강도 방수 소재','보호 내부 라이닝','다양한 색상 선택'], ja: ['ブランドロゴデザイン','高強度防水素材','保護インナーライニング','カラーバリエーション豊富'] },
        specs: [{ l: '素材/Material', v: 'Heavy-duty Nylon' }, { l: '重量/Weight', v: '~2.0 kg' }, { l: '防水/Waterproof', v: 'Yes' }, { l: '滚轮/Wheels', v: 'Included' }]
      },
      {
        id: '1716194535',
        name: { zh: '中大型航空球包套', en: 'Mid-Large Travel Cover', ko: '골프백 중대형 항공커버', ja: 'ミッドラージトラベルカバー' },
        thumb: GM + '202405/20240520164038_17126.jpg',
        img:   GM + '202405/20240520164042_44852.jpg',
        desc: { zh: '适用中大型球包的航空套，保护更全面', en: 'Aviation cover for mid to large bags, comprehensive protection', ko: '중대형 골프백을 위한 포괄적인 보호 항공 커버', ja: '中大型バッグ対応の包括的な保護航空カバー' },
        features: { zh: ['适合中大型球包','加强防震结构','加厚防护衬里','便捷滑轮'], en: ['Fits mid-large bags','Reinforced shock structure','Thick protective lining','Convenient wheels'], ko: ['중대형 골프백 적합','강화 충격 흡수 구조','두꺼운 보호 라이닝','편리한 바퀴'], ja: ['中大型バッグ対応','強化ショック構造','厚手保護ライニング','便利なホイール'] },
        specs: [{ l: '素材/Material', v: 'Reinforced Nylon' }, { l: '尺寸/Size', v: 'Fits standard-large bags' }, { l: '重量/Weight', v: '~2.8 kg' }, { l: '滚轮/Wheels', v: 'Heavy-duty' }]
      },
      {
        id: '1716194408',
        name: { zh: '防水全包式航空套', en: 'Waterproof Full Cover', ko: '항공 방수 풀커버', ja: '防水フルカバー' },
        thumb: GM + '202405/20240520163920_47405.jpg',
        img:   GM + '202405/20240520163924_26891.jpg',
        desc: { zh: '完全防水全包式航空套，最大程度保护球杆', en: 'Fully waterproof full cover for maximum club protection', ko: '최대한의 클럽 보호를 위한 완전 방수 풀커버', ja: 'クラブを最大限保護する完全防水フルカバー' },
        features: { zh: ['完全防水材质','全包式设计','加厚内衬','铝制框架支撑'], en: ['Fully waterproof material','Full-wrap design','Extra thick padding','Aluminum frame support'], ko: ['완전 방수 소재','풀랩 디자인','추가 두꺼운 패딩','알루미늄 프레임 지지'], ja: ['完全防水素材','フルラップデザイン','特厚パッド','アルミフレームサポート'] },
        specs: [{ l: '素材/Material', v: 'TPU Waterproof' }, { l: '防水/Waterproof', v: '100%' }, { l: '重量/Weight', v: '~3.0 kg' }, { l: '框架/Frame', v: 'Aluminum' }]
      }
    ]
  },

  'gear-accessories': {
    title: { zh: '高尔夫配件', en: 'Accessories', ko: '골프 액세서리', ja: 'ゴルフアクセサリー' },
    sub: 'GOLF ACCESSORIES',
    desc: { zh: '提升球场体验的必备配件与工具', en: 'Essential accessories and tools for the course', ko: '골프 코스 경험을 높여주는 필수 액세서리', ja: 'コース体験を向上させる必須アクセサリー' },
    parent: 'golf-gear',
    items: [
      {
        id: '1716194326',
        name: { zh: '三轮球包推车', en: '3-Wheel Bag Trolley', ko: '삼륜 골프백 카트', ja: '3ホイールバッグトロリー' },
        thumb: GM + '202405/20240520163834_88089.jpg',
        img:   GM + '202405/20240520163838_60052.jpg',
        desc: { zh: '单人三轮手动球包推车，轻松在球场移动', en: 'Single-person 3-wheel manual bag trolley for easy course movement', ko: '코스에서 쉽게 이동하는 1인용 삼륜 수동 골프백 카트', ja: 'コースを簡単に移動できる1人用3ホイール手動バッグトロリー' },
        features: { zh: ['三轮稳固设计','轻量铝制车架','可折叠便携','防翻倒机构'], en: ['3-wheel stable design','Lightweight aluminum frame','Foldable portable','Anti-tip mechanism'], ko: ['삼륜 안정적 설계','경량 알루미늄 프레임','접이식 휴대','전도 방지 기구'], ja: ['3ホイール安定設計','軽量アルミフレーム','折り畳み携帯','転倒防止機構'] },
        specs: [{ l: '车轮/Wheels', v: '3' }, { l: '材质/Material', v: 'Aluminum' }, { l: '重量/Weight', v: '~4.5 kg' }, { l: '折叠/Foldable', v: 'Yes' }]
      },
      {
        id: '1716194124',
        name: { zh: '折叠式球包推车', en: 'Foldable Bag Cart', ko: '접이식 골프백 카트', ja: '折り畳みバッグカート' },
        thumb: GM + '202405/20240520163451_11060.jpg',
        img:   GM + '202405/20240520163454_80686.jpg',
        desc: { zh: '易于折叠收纳的球包推车，携带方便', en: 'Easy-fold bag cart for convenient carrying and storage', ko: '편리한 운반 및 보관을 위한 접이식 골프백 카트', ja: '便利な持ち運びと収納のための折り畳みバッグカート' },
        features: { zh: ['一键折叠系统','轻巧便携','双轮平稳滑行','360°旋转前轮'], en: ['One-click folding system','Lightweight portable','Dual wheel smooth glide','360° swivel front wheel'], ko: ['원터치 접이 시스템','경량 휴대용','듀얼 휠 부드러운 주행','360° 회전 앞바퀴'], ja: ['ワンクリック折り畳みシステム','軽量ポータブル','デュアルホイールスムーズ走行','360°スイベルフロントホイール'] },
        specs: [{ l: '车轮/Wheels', v: '2 + 1 swivel' }, { l: '材质/Material', v: 'Steel/Aluminum' }, { l: '重量/Weight', v: '~3.8 kg' }, { l: '折叠/Foldable', v: 'One-click' }]
      },
      {
        id: '1716194051',
        name: { zh: '单人手动球包推车', en: 'Manual Bag Cart', ko: '수동식 골프백 카트', ja: '手動バッグカート' },
        thumb: GM + '202405/20240520163239_25773.jpg',
        img:   GM + '202405/20240520163242_37022.jpg',
        desc: { zh: '简洁实用的单人手动推车，稳定可靠', en: 'Simple and practical manual cart, stable and reliable', ko: '안정적이고 신뢰할 수 있는 심플하고 실용적인 수동 카트', ja: '安定性と信頼性のあるシンプルで実用的な手動カート' },
        features: { zh: ['简洁耐用设计','双轮稳定行走','可调节球包架','轻便手推操作'], en: ['Simple durable design','Dual wheel stable movement','Adjustable bag holder','Lightweight push operation'], ko: ['심플한 내구성 설계','듀얼 휠 안정적인 이동','조절 가능한 백 홀더','경량 밀기 작동'], ja: ['シンプルな耐久性設計','デュアルホイール安定移動','調節可能なバッグホルダー','軽量プッシュ操作'] },
        specs: [{ l: '车轮/Wheels', v: '2' }, { l: '材质/Material', v: 'Steel' }, { l: '重量/Weight', v: '~3.2 kg' }, { l: '承重/Load', v: '15 kg' }]
      },
      {
        id: '1716194916',
        name: { zh: '网眼透气球鞋袋', en: 'Air Mesh Shoe Bag', ko: '에어 메쉬 신발주머니', ja: 'エアメッシュシューズバッグ' },
        thumb: GM + '202405/20240520164809_43851.jpg',
        img:   GM + '202405/20240520164812_60218.jpg',
        desc: { zh: '透气网眼材质球鞋袋，防异味保持干爽', en: 'Breathable mesh shoe bag, prevents odor and keeps shoes dry', ko: '냄새를 방지하고 신발을 건조하게 유지하는 통기성 메쉬 신발 가방', ja: '臭いを防ぎ靴を乾燥に保つ通気性メッシュシューズバッグ' },
        features: { zh: ['高透气网眼面料','防潮抗菌内层','宽口拉链设计','通用尺码适配'], en: ['High-breathable mesh fabric','Moisture-resistant antimicrobial lining','Wide zipper opening','Universal size fit'], ko: ['고통기성 메쉬 원단','방습 항균 내층','넓은 지퍼 개구부','범용 사이즈 적합'], ja: ['高通気性メッシュ素材','防湿抗菌ライニング','ワイドジッパー開口部','ユニバーサルサイズ対応'] },
        specs: [{ l: '素材/Material', v: 'Air Mesh' }, { l: '透气/Ventilation', v: 'Yes' }, { l: '抗菌/Antimicrobial', v: 'Yes' }, { l: '尺码/Size', v: 'Universal' }]
      },
      {
        id: '1716194796',
        name: { zh: '防水球鞋袋', en: 'Waterproof Shoe Bag', ko: '방수 신발주머니', ja: '防水シューズバッグ' },
        thumb: GM + '202405/20240520164606_42244.jpg',
        img:   GM + '202405/20240520164609_12256.jpg',
        desc: { zh: '防水材质球鞋袋，雨天也能保持鞋子干燥', en: 'Waterproof shoe bag, keeps shoes dry even in rainy conditions', ko: '우천 시에도 신발을 건조하게 유지하는 방수 신발 가방', ja: '雨天でも靴を乾燥に保つ防水シューズバッグ' },
        features: { zh: ['完全防水材质','双层密封设计','便携拉链','耐用底部'], en: ['Fully waterproof material','Double-seal design','Convenient zipper','Durable base'], ko: ['완전 방수 소재','이중 밀봉 설계','편리한 지퍼','내구성 있는 바닥'], ja: ['完全防水素材','ダブルシール設計','便利なジッパー','耐久性のあるベース'] },
        specs: [{ l: '素材/Material', v: 'Waterproof PVC' }, { l: '防水/Waterproof', v: 'IPX4+' }, { l: '封口/Closure', v: 'Zipper' }, { l: '尺码/Size', v: 'Up to UK 12' }]
      },
      {
        id: '1716195617',
        name: { zh: '现代运动小包', en: 'Modern Sport Pouch', ko: '모던 스포츠 파우치', ja: 'モダンスポーツポーチ' },
        thumb: GM + '202405/20240520165946_72675.jpg',
        img:   GM + '202405/20240520165951_48113.jpg',
        desc: { zh: '现代运动风格小包，收纳随身配件', en: 'Modern sporty pouch for carrying accessories on the course', ko: '코스에서 액세서리를 휴대하기 위한 모던 스포티 파우치', ja: 'コースでアクセサリーを持ち歩くためのモダンスポーティポーチ' },
        features: { zh: ['现代时尚造型','多夹层设计','防水拉链','方便挂扣'], en: ['Modern trendy style','Multi-compartment design','Waterproof zipper','Convenient carabiner clip'], ko: ['모던 트렌디 스타일','다중 구획 설계','방수 지퍼','편리한 카라비너 클립'], ja: ['モダンなトレンディスタイル','マルチコンパートメント設計','防水ジッパー','便利なカラビナクリップ'] },
        specs: [{ l: '素材/Material', v: 'Nylon' }, { l: '口袋/Pockets', v: '3' }, { l: '封口/Closure', v: 'Waterproof zip' }, { l: '挂扣/Clip', v: 'Carabiner' }]
      },
      {
        id: '1716195559',
        name: { zh: '核心必备小包', en: 'Core Essential Pouch', ko: '코어 에센셜 파우치', ja: 'コアエッセンシャルポーチ' },
        thumb: GM + '202405/20240520165839_52402.jpg',
        img:   GM + '202405/20240520165842_95918.jpg',
        desc: { zh: '核心必备配件小包，简洁实用', en: 'Core essential accessories pouch, simple and practical', ko: '심플하고 실용적인 핵심 필수 액세서리 파우치', ja: 'シンプルで実用的なコアエッセンシャルアクセサリーポーチ' },
        features: { zh: ['简洁实用设计','优质PU材质','磁扣开合','内置分层'], en: ['Simple practical design','Quality PU material','Magnetic closure','Internal dividers'], ko: ['심플하고 실용적인 설계','고품질 PU 소재','마그네틱 클로저','내부 구획'], ja: ['シンプルで実用的なデザイン','高品質PU素材','マグネティッククロージャー','内部仕切り'] },
        specs: [{ l: '素材/Material', v: 'PU Leather' }, { l: '口袋/Pockets', v: '3' }, { l: '封口/Closure', v: 'Magnetic' }, { l: '尺寸/Size', v: '20×14×8cm' }]
      },
      {
        id: '1716196068',
        name: { zh: '高尔夫球袋 A', en: 'Golf Ball Bag A', ko: '골프볼주머니 A', ja: 'ゴルフボールバッグ A' },
        thumb: GM + '202405/20240520170626_67677.jpg',
        img:   GM + '202405/20240520170631_27348.jpg',
        desc: { zh: '高尔夫球收纳袋A款，可装50+球', en: 'Golf ball storage bag type A, holds 50+ balls', ko: '50개 이상의 골프공을 담을 수 있는 골프볼 수납 가방 A형', ja: 'ゴルフボール50個以上を収納できるゴルフボール収納バッグ A型' },
        features: { zh: ['大容量收纳','耐用网眼材质','抽绳收口','轻量便携'], en: ['Large capacity storage','Durable mesh material','Drawstring closure','Lightweight portable'], ko: ['대용량 수납','내구성 있는 메쉬 소재','드로스트링 클로저','경량 휴대용'], ja: ['大容量収納','耐久性メッシュ素材','ドローストリングクロージャー','軽量ポータブル'] },
        specs: [{ l: '容量/Capacity', v: '50+ balls' }, { l: '素材/Material', v: 'Mesh/Nylon' }, { l: '封口/Closure', v: 'Drawstring' }, { l: '用途/Use', v: 'Range/Practice' }]
      },
      {
        id: '1716195944',
        name: { zh: '高尔夫球袋 B', en: 'Golf Ball Bag B', ko: '골프볼주머니 B', ja: 'ゴルフボールバッグ B' },
        thumb: GM + '202405/20240520170358_95934.jpg',
        img:   GM + '202405/20240520170402_47666.jpg',
        desc: { zh: '高尔夫球收纳袋B款，不同颜色选择', en: 'Golf ball storage bag type B, available in different colors', ko: '다양한 색상의 골프볼 수납 가방 B형', ja: '様々なカラーのゴルフボール収納バッグ B型' },
        features: { zh: ['多色可选','实用抽绳设计','耐用材质','适合练习场使用'], en: ['Multiple color options','Practical drawstring design','Durable material','Suitable for driving range'], ko: ['다양한 색상 선택','실용적인 드로스트링 설계','내구성 소재','연습장 사용 적합'], ja: ['カラーバリエーション','実用的なドローストリングデザイン','耐久性素材','練習場での使用に最適'] },
        specs: [{ l: '容量/Capacity', v: '50+ balls' }, { l: '素材/Material', v: 'Nylon' }, { l: '封口/Closure', v: 'Drawstring' }, { l: '颜色/Colors', v: 'Multiple' }]
      },
      {
        id: '1716195816',
        name: { zh: '高尔夫球袋 C', en: 'Golf Ball Bag C', ko: '골프볼주머니 C', ja: 'ゴルフボールバッグ C' },
        thumb: GM + '202405/20240520170258_93490.jpg',
        img:   GM + '202405/20240520170302_42387.jpg',
        desc: { zh: '高尔夫球收纳袋C款，网格透气设计', en: 'Golf ball storage bag type C, breathable mesh design', ko: '통기성 메쉬 디자인의 골프볼 수납 가방 C형', ja: '通気性メッシュデザインのゴルフボール収納バッグ C型' },
        features: { zh: ['网格透气设计','耐磨加厚底部','宽口便于取放','结实束绳'], en: ['Breathable mesh design','Wear-resistant reinforced base','Wide opening for easy access','Sturdy drawstring'], ko: ['통기성 메쉬 디자인','내마모성 강화 바닥','쉬운 접근을 위한 넓은 개구부','견고한 드로스트링'], ja: ['通気性メッシュデザイン','耐摩耗性強化ベース','アクセスしやすいワイド開口部','頑丈なドローストリング'] },
        specs: [{ l: '容量/Capacity', v: '60+ balls' }, { l: '素材/Material', v: 'Mesh + Nylon' }, { l: '底部/Base', v: 'Reinforced' }, { l: '封口/Closure', v: 'Drawstring' }]
      },
      {
        id: '1716195748',
        name: { zh: '高尔夫球袋 D', en: 'Golf Ball Bag D', ko: '골프볼주머니 D', ja: 'ゴルフボールバッグ D' },
        thumb: GM + '202405/20240520170206_32440.jpg',
        img:   GM + '202405/20240520170210_72492.jpg',
        desc: { zh: '高尔夫球收纳袋D款，重型耐用款', en: 'Golf ball storage bag type D, heavy duty durable version', ko: '헤비듀티 내구성 골프볼 수납 가방 D형', ja: 'ヘビーデューティー耐久性ゴルフボール収納バッグ D型' },
        features: { zh: ['重型耐用材质','超大容量','双层加固底部','宽拉链开口'], en: ['Heavy-duty durable material','Extra large capacity','Double-reinforced base','Wide zipper opening'], ko: ['헤비듀티 내구성 소재','초대용량','이중 강화 바닥','넓은 지퍼 개구부'], ja: ['ヘビーデューティー耐久性素材','特大容量','ダブル強化ベース','ワイドジッパー開口部'] },
        specs: [{ l: '容量/Capacity', v: '80+ balls' }, { l: '素材/Material', v: 'Heavy-duty Nylon' }, { l: '底部/Base', v: 'Double reinforced' }, { l: '封口/Closure', v: 'Zipper' }]
      },
      {
        id: '1721381204',
        name: { zh: '球杆展示架 4型', en: 'Club Stand Rack Type 4', ko: '골프채 거치대 4형', ja: 'クラブスタンドラック 4型' },
        thumb: GM + '202407/20240719172614_59319.jpg',
        img:   GM + '202407/20240719172617_50834.jpg',
        desc: { zh: '高档四型球杆展示架，专业收纳展示', en: 'Premium type 4 club display rack for professional storage', ko: '전문적인 보관을 위한 프리미엄 4형 클럽 디스플레이 랙', ja: 'プロフェッショナルな収納のためのプレミアム4型クラブディスプレイラック' },
        features: { zh: ['高档外观设计','稳固底座','保护球杆面层','容纳14支球杆'], en: ['Premium appearance design','Stable base','Protective club surface','Holds 14 clubs'], ko: ['프리미엄 외관 설계','안정적인 베이스','클럽 보호 표면','14개 클럽 수납'], ja: ['プレミアム外観デザイン','安定したベース','クラブ保護表面','14本のクラブ収納'] },
        specs: [{ l: '容量/Capacity', v: '14 clubs' }, { l: '材质/Material', v: 'Steel + Rubber' }, { l: '表面/Surface', v: 'Protective coating' }, { l: '类型/Type', v: 'Type 4' }]
      },
      {
        id: '1721381153',
        name: { zh: '球杆展示架 3型', en: 'Club Stand Rack Type 3', ko: '골프채 거치대 3형', ja: 'クラブスタンドラック 3型' },
        thumb: GM + '202407/20240719172515_75266.jpg',
        img:   GM + '202407/20240719172518_30507.jpg',
        desc: { zh: '三型球杆架，壁挂或落地两用设计', en: 'Type 3 club rack, wall mount or floor standing dual design', ko: '벽걸이 또는 독립 거치 가능한 3형 클럽 랙', ja: '壁掛けまたはフロアスタンディング兼用の3型クラブラック' },
        features: { zh: ['壁挂/落地两用','防滑橡胶脚垫','精钢材质','清洁保护设计'], en: ['Wall mount / floor stand dual use','Anti-slip rubber feet','Fine steel material','Clean protective design'], ko: ['벽걸이/독립 거치 겸용','미끄럼 방지 고무 발','정밀 스틸 소재','클린 보호 설계'], ja: ['壁掛け/フロアスタンド兼用','滑り止めゴム足','精密スチール素材','クリーン保護デザイン'] },
        specs: [{ l: '容量/Capacity', v: '12 clubs' }, { l: '材质/Material', v: 'Steel' }, { l: '安装/Install', v: 'Wall/Floor' }, { l: '类型/Type', v: 'Type 3' }]
      },
      {
        id: '1721381089',
        name: { zh: '球杆展示架 2型', en: 'Club Stand Rack Type 2', ko: '골프채 거치대 2형', ja: 'クラブスタンドラック 2型' },
        thumb: GM + '202407/20240719172415_90428.jpg',
        img:   GM + '202407/20240719172418_76257.jpg',
        desc: { zh: '简洁实用二型球杆架，易组装', en: 'Simple practical type 2 club rack, easy assembly', ko: '조립이 쉬운 심플하고 실용적인 2형 클럽 랙', ja: '組み立て簡単なシンプルで実用的な2型クラブラック' },
        features: { zh: ['快速组装设计','稳固支撑结构','防滑底座','多色可选'], en: ['Quick assembly design','Sturdy support structure','Anti-slip base','Multiple color options'], ko: ['빠른 조립 설계','견고한 지지 구조','미끄럼 방지 베이스','다양한 색상 선택'], ja: ['クイック組み立てデザイン','頑丈なサポート構造','滑り止めベース','カラーバリエーション'] },
        specs: [{ l: '容量/Capacity', v: '10 clubs' }, { l: '材质/Material', v: 'Steel' }, { l: '安装/Install', v: 'Floor' }, { l: '类型/Type', v: 'Type 2' }]
      },
      {
        id: '1721381029',
        name: { zh: '球杆展示架 1型', en: 'Club Stand Rack Type 1', ko: '골프채 거치대 1형', ja: 'クラブスタンドラック 1型' },
        thumb: GM + '202407/20240719172311_28193.jpg',
        img:   GM + '202407/20240719172311_28193.jpg',
        desc: { zh: '入门型球杆架，经济实用', en: 'Entry-level club rack, economical and practical', ko: '경제적이고 실용적인 입문형 클럽 랙', ja: '経済的で実用的なエントリーレベルクラブラック' },
        features: { zh: ['经济实用设计','基础收纳功能','坚固耐用','简易安装'], en: ['Economic practical design','Basic storage function','Sturdy durable','Simple installation'], ko: ['경제적 실용 설계','기본 수납 기능','견고하고 내구성 있음','간편 설치'], ja: ['経済的実用デザイン','基本収納機能','丈夫で耐久性あり','簡単設置'] },
        specs: [{ l: '容量/Capacity', v: '8 clubs' }, { l: '材质/Material', v: 'Steel' }, { l: '安装/Install', v: 'Floor' }, { l: '类型/Type', v: 'Type 1' }]
      },
      {
        id: '1718184276',
        name: { zh: '金属高尔夫球座', en: 'Metal Golf Tee', ko: '메탈 골프티', ja: 'メタルゴルフティー' },
        thumb: GM + '202406/20240618134109_81773.jpg',
        img:   GM + '202406/20240618134111_13154.jpg',
        desc: { zh: '金属材质高耐用球座，精准打位', en: 'High-durability metal golf tee for precise tee placement', ko: '정확한 티업을 위한 고내구성 메탈 골프티', ja: '正確なティーアップのための高耐久性メタルゴルフティー' },
        features: { zh: ['航空铝合金材质','高耐用性','精准高度调节','减少球旋偏差'], en: ['Aviation aluminum alloy','High durability','Precise height adjustment','Reduces ball spin deviation'], ko: ['항공 알루미늄 합금','고내구성','정확한 높이 조절','볼 스핀 편차 감소'], ja: ['航空アルミニウム合金','高耐久性','正確な高さ調整','ボールスピン偏差を軽減'] },
        specs: [{ l: '材质/Material', v: 'Aluminum Alloy' }, { l: '高度/Height', v: '54mm / 70mm / 83mm' }, { l: '耐用/Durability', v: 'Reusable' }, { l: '数量/Pack', v: '5 pcs' }]
      },
      {
        id: '1718184233',
        name: { zh: '高尔夫握把清洁器', en: 'Golf Grip Cleaner', ko: '골프그립청소기', ja: 'ゴルフグリップクリーナー' },
        thumb: GM + '202406/20240618133941_27961.jpg',
        img:   GM + '202406/20240618133947_87722.jpg',
        desc: { zh: '专业握把清洁工具，保持握把清洁如新', en: 'Professional grip cleaning tool to keep grips clean like new', ko: '그립을 새것처럼 깨끗하게 유지하는 전문 클리너', ja: 'グリップを新品のようにきれいに保つプロフェッショナルクリーナー' },
        features: { zh: ['专业清洁刷头','快速祛污设计','随身携带便携','适用所有握把类型'], en: ['Professional brush head','Quick dirt removal design','Portable carry-on','Suitable for all grip types'], ko: ['전문 브러시 헤드','빠른 오염 제거 설계','휴대 가능','모든 그립 유형에 적합'], ja: ['プロフェッショナルブラシヘッド','クイック汚れ除去設計','ポータブルキャリーオン','全グリップタイプに対応'] },
        specs: [{ l: '类型/Type', v: 'Brush cleaner' }, { l: '适用/For', v: 'All grip types' }, { l: '便携/Portable', v: 'Yes' }, { l: '清洁力/Power', v: 'High' }]
      }
    ]
  },

  'gear-apparel': {
    title: { zh: '高尔夫帽', en: 'Golf Caps', ko: '골프 모자', ja: 'ゴルフキャップ' },
    sub: 'GOLF APPAREL',
    desc: { zh: '防晒透气的专业高尔夫帽系列', en: 'UV protection breathable golf caps series', ko: '자외선 차단 통기성 골프 모자 시리즈', ja: 'UVカット通気性ゴルフキャップシリーズ' },
    parent: 'golf-gear',
    items: [
      {
        id: '1716196243',
        name: { zh: '高尔夫球帽 A', en: 'Golf Cap A', ko: '골프모자 A', ja: 'ゴルフキャップ A' },
        thumb: GM + '202405/20240520171012_22854.jpg',
        img:   GM + '202405/20240520171016_38283.jpg',
        desc: { zh: '经典款式高尔夫帽，防晒透气', en: 'Classic style golf cap with UV protection and breathability', ko: '자외선 차단과 통기성을 갖춘 클래식 스타일 골프 모자', ja: 'UVカットと通気性を備えたクラシックスタイルゴルフキャップ' },
        features: { zh: ['UPF50+防晒','速干材质','可调节后扣','吸汗头带'], en: ['UPF50+ UV protection','Quick-dry material','Adjustable back strap','Sweat-wicking headband'], ko: ['UPF50+ 자외선 차단','속건 소재','조절 가능한 뒷고리','땀 흡수 헤드밴드'], ja: ['UPF50+ UVカット','速乾素材','調節可能なバックストラップ','吸汗ヘッドバンド'] },
        specs: [{ l: '素材/Material', v: 'Polyester' }, { l: '防晒/UPF', v: '50+' }, { l: '调节/Adjustable', v: 'Yes' }, { l: '尺码/Size', v: '54-62cm' }]
      },
      {
        id: '1716196191',
        name: { zh: '高尔夫球帽 B', en: 'Golf Cap B', ko: '골프모자 B', ja: 'ゴルフキャップ B' },
        thumb: GM + '202405/20240520170923_33704.jpg',
        img:   GM + '202405/20240520170923_33704.jpg',
        desc: { zh: '时尚配色高尔夫帽，运动风格', en: 'Trendy color golf cap with sporty style', ko: '스포티한 스타일의 트렌디한 컬러 골프 모자', ja: 'スポーティなスタイルのトレンディカラーゴルフキャップ' },
        features: { zh: ['时尚多色设计','轻量帽体','通风孔透气','弹力调节'], en: ['Trendy multi-color design','Lightweight cap body','Ventilation holes','Elastic adjustment'], ko: ['트렌디한 다색 디자인','경량 모자 본체','통풍구 통기','신축성 조절'], ja: ['トレンディマルチカラーデザイン','軽量キャップボディ','通気孔','エラスティック調整'] },
        specs: [{ l: '素材/Material', v: 'Polyester blend' }, { l: '防晒/UPF', v: '30+' }, { l: '通风/Ventilation', v: 'Mesh vent' }, { l: '尺码/Size', v: 'One size fits most' }]
      },
      {
        id: '1716196144',
        name: { zh: '高尔夫球帽 C', en: 'Golf Cap C', ko: '골프모자 C', ja: 'ゴルフキャップ C' },
        thumb: GM + '202405/20240520170835_35925.jpg',
        img:   GM + '202405/20240520170839_36686.jpg',
        desc: { zh: '高端刺绣高尔夫帽，品质感十足', en: 'Premium embroidered golf cap with high-quality feel', ko: '고품질 느낌의 프리미엄 자수 골프 모자', ja: '高品質感のプレミアム刺繍ゴルフキャップ' },
        features: { zh: ['精致刺绣装饰','高品质面料','防晒遮阳','吸湿排汗'], en: ['Fine embroidery decoration','High-quality fabric','Sun protection','Moisture-wicking'], ko: ['정교한 자수 장식','고품질 원단','햇빛 차단','흡습 배汗'], ja: ['精緻な刺繍装飾','高品質ファブリック','遮光UVカット','吸湿速乾'] },
        specs: [{ l: '素材/Material', v: 'Premium Polyester' }, { l: '装饰/Design', v: 'Embroidery' }, { l: '防晒/UPF', v: '40+' }, { l: '尺码/Size', v: '54-62cm' }]
      }
    ]
  },

  'gear-balls': {
    title: { zh: '高尔夫球', en: 'Golf Balls', ko: '골프볼', ja: 'ゴルフボール' },
    sub: 'GOLF BALLS',
    desc: { zh: '低压缩高飞行性能的高尔夫球', en: 'Low compression high-flight performance golf balls', ko: '저압축 고비행 성능 골프볼', ja: '低圧縮高飛行性能ゴルフボール' },
    parent: 'golf-gear',
    items: [
      {
        id: '1719996485',
        name: { zh: '低压缩高尔夫球', en: 'Low Compression Golf Ball', ko: '저압축 골프공', ja: '低圧縮ゴルフボール' },
        thumb: GM + '202407/20240703164652_25527.jpg',
        img:   GM + '202407/20240703164656_85030.jpg',
        desc: { zh: '低压缩内核设计，适合慢速挥杆球手，提供最大飞行距离', en: 'Low compression core design for slower swing speeds, maximizing distance', ko: '느린 스윙 속도에 적합한 저압축 코어 설계로 최대 비거리 제공', ja: 'スロースイングスピードに最適な低圧縮コア設計で最大飛距離を実現' },
        features: { zh: ['低压缩内核(60-70)','最大化飞行距离','柔软触感','适合初中级球手'], en: ['Low compression core (60-70)','Maximizes flight distance','Soft feel on impact','Ideal for beginner-intermediate players'], ko: ['저압축 코어 (60-70)','최대 비거리','임팩트 시 부드러운 감촉','초중급 골퍼에 적합'], ja: ['低圧縮コア (60-70)','最大飛距離','インパクト時の柔らかな感触','初中級ゴルファーに最適'] },
        specs: [{ l: '压缩/Compression', v: '60-70' }, { l: '层数/Layers', v: '2-piece' }, { l: '直径/Diameter', v: '42.67mm' }, { l: '包装/Pack', v: '12 balls' }]
      }
    ]
  },

  'gear-clubs': {
    title: { zh: '高尔夫球杆', en: 'Golf Clubs', ko: '골프 클럽', ja: 'ゴルフクラブ' },
    sub: 'GOLF CLUBS',
    desc: { zh: '专业高尔夫球杆，提升您的球技', en: 'Professional golf clubs to elevate your game', ko: '골프 실력을 향상시키는 전문 골프 클럽', ja: 'ゴルフのスキルを向上させるプロフェッショナルゴルフクラブ' },
    parent: 'golf-gear',
    items: [
      {
        id: '1718689546',
        name: { zh: '双面切杆', en: 'Double-Face Chipper', ko: '양면치퍼', ja: 'ダブルフェイスチッパー' },
        thumb: GM + '202406/20240613152506_35576.jpg',
        img:   GM + '202406/20240613144638_72072.jpg',
        desc: { zh: '正反两用切杆，左右手通用，提升短打精度', en: 'Double-face chipper usable by both left and right-handed players', ko: '좌우 양손 골퍼 모두 사용 가능한 양면 치퍼', ja: '左右どちらの手のプレーヤーも使用できるダブルフェイスチッパー' },
        features: { zh: ['正反两用设计','适合左右手球手','短打精准控制','轻量杆身'], en: ['Double-face design','Works for left & right-handed','Precise short game control','Lightweight shaft'], ko: ['양면 사용 설계','좌우 양손 적합','정밀 숏게임 컨트롤','경량 샤프트'], ja: ['ダブルフェイスデザイン','左右両手対応','精密ショートゲームコントロール','軽量シャフト'] },
        specs: [{ l: '类型/Type', v: 'Chipper' }, { l: '适用/Handed', v: 'Left & Right' }, { l: '杆面/Face', v: 'Double' }, { l: '用途/Use', v: 'Short game' }]
      },
      {
        id: '1718689405',
        name: { zh: '全能单支杆', en: 'One Club', ko: '원클럽', ja: 'ワンクラブ' },
        thumb: GM + '202406/20240613152452_22465.jpg',
        img:   GM + '202406/20240613144536_58072.jpg',
        desc: { zh: '万能单支杆，适用多种球场情况的全能选择', en: 'Versatile single club suitable for various course situations', ko: '다양한 코스 상황에 적합한 다용도 원클럽', ja: '様々なコース状況に対応する多目的ワンクラブ' },
        features: { zh: ['多功能通用设计','适合多种情况使用','入门便携之选','优质杆头材质'], en: ['Multi-function versatile design','Suitable for multiple situations','Great for beginners','Quality club head material'], ko: ['다기능 다용도 설계','다양한 상황에 적합','초보자에게 적합','고품질 클럽 헤드 소재'], ja: ['多機能多目的デザイン','多様な状況に対応','初心者に最適','高品質クラブヘッド素材'] },
        specs: [{ l: '类型/Type', v: 'Utility / One Club' }, { l: '杆长/Length', v: '35"' }, { l: '材质/Material', v: 'Stainless Steel' }, { l: '用途/Use', v: 'Multi-purpose' }]
      }
    ]
  },

  'gear-fitting': {
    title: { zh: '定制配件', en: 'Fitting & Training', ko: '피팅 & 트레이닝', ja: 'フィッティング & トレーニング' },
    sub: 'FITTING PARTS',
    desc: { zh: '专业球技提升辅助工具', en: 'Professional tools to improve your golf game', ko: '골프 실력 향상을 위한 전문 도구', ja: 'ゴルフゲームを向上させるプロツール' },
    parent: 'golf-gear',
    items: [
      {
        id: '1718689852',
        name: { zh: '沙坑练习辅助器', en: 'Bunker Collar Training Aid', ko: '벙커콜라드 연습기구', ja: 'バンカーカラートレーニングエイド' },
        thumb: GM + '202406/20240613152519_96789.jpg',
        img:   GM + '202406/20240613144654_22487.jpg',
        desc: { zh: '沙坑击球练习辅助器，帮助掌握沙坑脱困技术', en: 'Bunker shot training aid to master bunker escape techniques', ko: '벙커 탈출 기술을 익히기 위한 벙커샷 연습 보조기구', ja: 'バンカー脱出技術を習得するためのバンカーショットトレーニングエイド' },
        features: { zh: ['沙坑专项训练','正确入射角引导','即时反馈机制','轻量便携设计'], en: ['Bunker-specific training','Correct attack angle guidance','Instant feedback mechanism','Lightweight portable design'], ko: ['벙커 전문 훈련','올바른 공격 각도 안내','즉각적인 피드백 메커니즘','경량 휴대용 설계'], ja: ['バンカー専用トレーニング','正しいアタックアングルガイダンス','即時フィードバックメカニズム','軽量ポータブルデザイン'] },
        specs: [{ l: '类型/Type', v: 'Bunker training aid' }, { l: '适用/For', v: 'Bunker escape' }, { l: '材质/Material', v: 'Durable plastic' }, { l: '便携/Portable', v: 'Yes' }]
      }
    ]
  },

  'gear-beauty': {
    title: { zh: '高尔夫美容护理', en: 'Golf Beauty Care', ko: '골프 뷰티 케어', ja: 'ゴルフビューティーケア' },
    sub: 'GOLF BEAUTY',
    desc: { zh: '户外运动专属护肤与护理产品', en: 'Skincare and care products for outdoor golf', ko: '아웃도어 골프를 위한 스킨케어 및 케어 제품', ja: 'アウトドアゴルフのためのスキンケア・ケア製品' },
    parent: 'golf-gear',
    items: [
      {
        id: '1718689200',
        name: { zh: '颈部防晒护理', en: 'Neck UV Care', ko: '넥 UV 케어', ja: 'ネックUVケア' },
        thumb: GM + '202406/20240618135035_16271.jpg',
        img:   GM + '202406/20240618135038_39874.jpg',
        desc: { zh: '颈部专用防晒冷感护理产品，全天候保护', en: 'Neck-specific UV cooling care product, all-day protection', ko: '하루 종일 보호하는 목 전용 자외선 쿨링 케어 제품', ja: '一日中保護するネック専用UVクーリングケア製品' },
        features: { zh: ['颈部专项防护','冰感速冷效果','UPF50+防晒','吸汗透气材质'], en: ['Neck-specific protection','Ice-cool instant effect','UPF50+ UV protection','Moisture-wicking breathable material'], ko: ['목 전용 보호','즉각적인 아이스 쿨 효과','UPF50+ 자외선 차단','흡습 통기성 소재'], ja: ['ネック専用保護','即効性アイスクール効果','UPF50+ UVカット','吸湿速乾素材'] },
        specs: [{ l: '类型/Type', v: 'Neck cooling wrap' }, { l: '防晒/UPF', v: '50+' }, { l: '效果/Effect', v: 'Instant cooling' }, { l: '素材/Material', v: 'Ice-feel fabric' }]
      },
      {
        id: '1718184306',
        name: { zh: '运动身体湿巾', en: 'Sport Body Tissue', ko: '스포츠 바디 티슈', ja: 'スポーツボディティッシュ' },
        thumb: GM + '202406/20240618134527_81875.jpg',
        img:   GM + '202406/20240618134531_87800.jpg',
        desc: { zh: '运动专用身体清洁湿巾，携带方便', en: 'Sport body cleansing wipes, convenient portable', ko: '편리하게 휴대할 수 있는 스포츠 바디 클렌징 티슈', ja: '持ち運び便利なスポーツ用ボディクレンジングウェットティッシュ' },
        features: { zh: ['专业运动配方','快速清洁肌肤','抑菌除汗味','独立便携包装'], en: ['Professional sports formula','Quick skin cleansing','Antibacterial odor control','Individual portable packaging'], ko: ['전문 스포츠 포뮬라','빠른 피부 클렌징','항균 냄새 제거','개별 휴대용 포장'], ja: ['プロスポーツフォーミュラ','クイックスキンクレンジング','抗菌臭気コントロール','個別携帯用パッケージ'] },
        specs: [{ l: '类型/Type', v: 'Body wipes' }, { l: '抗菌/Antibacterial', v: 'Yes' }, { l: '数量/Pack', v: '10 sheets' }, { l: '便携/Portable', v: 'Yes' }]
      }
    ]
  },

  'gear-practice': {
    title: { zh: '练习用品', en: 'Practice Goods', ko: '골프 연습 용품', ja: 'ゴルフ練習用品' },
    sub: 'PRACTICE GOODS',
    desc: { zh: '专业高尔夫练习辅助器材', en: 'Professional golf practice training equipment', ko: '전문 골프 연습 훈련 장비', ja: 'プロフェッショナルゴルフ練習トレーニング機器' },
    parent: 'golf-gear',
    items: [
      {
        id: '1722245918',
        name: { zh: '标准练习垫', en: 'Standard Practice Mat', ko: '일반 연습 매트', ja: 'スタンダード練習マット' },
        thumb: GM + '202407/20240729173759_59077.jpg',
        img:   GM + '202407/20240729173802_13655.jpg',
        desc: { zh: '标准款高尔夫练习垫，仿真草坪手感', en: 'Standard golf practice mat with realistic turf feel', ko: '리얼 잔디 느낌의 표준 골프 연습 매트', ja: 'リアルな芝生の感触のスタンダードゴルフ練習マット' },
        features: { zh: ['仿真草坪手感','防滑橡胶底座','多球座插孔','适合室内外'], en: ['Realistic turf feel','Anti-slip rubber base','Multiple tee holes','Suitable indoor/outdoor'], ko: ['리얼 잔디 느낌','미끄럼 방지 고무 바닥','다중 티 홀','실내외 적합'], ja: ['リアルな芝生の感触','滑り止めゴムベース','複数ティーホール','室内外兼用'] },
        specs: [{ l: '尺寸/Size', v: '150×150cm' }, { l: '厚度/Thickness', v: '30mm' }, { l: '球座孔/Tee Holes', v: '4' }, { l: '底座/Base', v: 'Anti-slip rubber' }]
      },
      {
        id: '1722245860',
        name: { zh: '挥杆练习垫', en: 'Swing Practice Mat', ko: '스윙 연습 매트', ja: 'スイング練習マット' },
        thumb: GM + '202407/20240729173615_19164.jpg',
        img:   GM + '202407/20240729173618_58587.jpg',
        desc: { zh: '挥杆专用练习垫，纠正挥杆路径', en: 'Swing-specific practice mat to correct swing path', ko: '스윙 경로를 교정하기 위한 스윙 전용 연습 매트', ja: 'スイングパスを矯正するためのスイング専用練習マット' },
        features: { zh: ['挥杆路径引导线','仿真球道草坪','加厚缓震底层','折叠收纳便捷'], en: ['Swing path guide lines','Simulated fairway turf','Extra thick cushion base','Foldable for easy storage'], ko: ['스윙 경로 가이드 라인','시뮬레이션 페어웨이 잔디','초두꺼운 쿠션 바닥','접이식 수납 편리'], ja: ['スイングパスガイドライン','シミュレーションフェアウェイ芝','超厚クッションベース','折り畳み収納可能'] },
        specs: [{ l: '尺寸/Size', v: '180×90cm' }, { l: '厚度/Thickness', v: '35mm' }, { l: '引导线/Guide', v: 'Alignment lines' }, { l: '折叠/Foldable', v: 'Yes' }]
      },
      {
        id: '1721381304',
        name: { zh: '沙坑练习垫', en: 'Bunker Practice Mat', ko: '벙커 연습 매트', ja: 'バンカー練習マット' },
        thumb: GM + '202407/20240719172706_83237.jpg',
        img:   GM + '202407/20240719172708_59621.jpg',
        desc: { zh: '沙坑专用练习垫，模拟真实沙坑击球感受', en: 'Bunker practice mat simulating real bunker shot feel', ko: '실제 벙커샷 느낌을 시뮬레이션하는 벙커 전용 연습 매트', ja: '実際のバンカーショットの感触をシミュレーションするバンカー専用練習マット' },
        features: { zh: ['模拟沙坑质感','专为沙坑练习设计','防滑固定底部','轻量便携'], en: ['Simulates sand texture','Designed for bunker practice','Anti-slip fixed base','Lightweight portable'], ko: ['모래 질감 시뮬레이션','벙커 연습을 위해 설계','미끄럼 방지 고정 바닥','경량 휴대용'], ja: ['砂のテクスチャーをシミュレーション','バンカー練習のための設計','滑り止め固定ベース','軽量ポータブル'] },
        specs: [{ l: '类型/Type', v: 'Bunker simulation mat' }, { l: '尺寸/Size', v: '120×80cm' }, { l: '表面/Surface', v: 'Sand simulation' }, { l: '底座/Base', v: 'Anti-slip' }]
      },
      {
        id: '1718961806',
        name: { zh: '地面反力飞行距离训练器', en: 'Ground Reaction Distance Trainer', ko: '지면반력 비거리 연습기구', ja: '地面反力飛距離トレーナー' },
        thumb: GM + '202406/20240621172248_93042.jpg',
        img:   GM + '202406/20240621172250_33914.jpg',
        desc: { zh: '利用地面反力提升飞行距离的专业训练器', en: 'Professional trainer utilizing ground reaction force to improve distance', ko: '지면 반력을 활용하여 비거리를 향상시키는 전문 트레이너', ja: '地面反力を活用して飛距離を向上させるプロフェッショナルトレーナー' },
        features: { zh: ['地面反力训练原理','提升挥杆速度','增加飞行距离','专业训练效果'], en: ['Ground reaction force training','Improves swing speed','Increases flight distance','Professional training effect'], ko: ['지면 반력 훈련 원리','스윙 속도 향상','비거리 증가','전문 훈련 효과'], ja: ['地面反力トレーニング原理','スイングスピード向上','飛距離増加','プロフェッショナルトレーニング効果'] },
        specs: [{ l: '类型/Type', v: 'Distance trainer' }, { l: '原理/Principle', v: 'Ground reaction force' }, { l: '效果/Effect', v: 'Distance + Speed' }, { l: '适用/For', v: 'All skill levels' }]
      }
    ]
  },

  'gear-screen': {
    title: { zh: '屏幕制作', en: 'Screen Making', ko: '스크린 제작', ja: 'スクリーン製作' },
    sub: 'SCREEN MAKING',
    desc: { zh: '高尔夫模拟器配套屏幕材料', en: 'Golf simulator screen materials', ko: '골프 시뮬레이터 스크린 소재', ja: 'ゴルフシミュレーター用スクリーン素材' },
    parent: 'golf-gear',
    items: [
      {
        id: '1721380948',
        name: { zh: '高尔夫模拟器屏幕布', en: 'Golf Screen Cloth', ko: '골프 스크린천', ja: 'ゴルフスクリーンクロス' },
        thumb: GM + '202407/20240719172034_18725.jpg',
        img:   GM + '202407/20240719172038_24997.jpg',
        desc: { zh: '专业高清高尔夫模拟器投影屏幕布，高清显示效果', en: 'Professional HD golf simulator projection screen cloth, high-quality display', ko: '고화질 디스플레이의 전문 HD 골프 시뮬레이터 프로젝션 스크린천', ja: '高品質ディスプレイのプロフェッショナルHDゴルフシミュレータープロジェクションスクリーンクロス' },
        features: { zh: ['高清投影效果','吸震防弹材质','宽幅定制尺寸','专业挂装系统'], en: ['HD projection quality','Impact-absorbing bulletproof material','Custom wide sizes','Professional hanging system'], ko: ['HD 프로젝션 품질','충격 흡수 방탄 소재','맞춤형 넓은 사이즈','전문 걸이 시스템'], ja: ['HDプロジェクション品質','衝撃吸収防弾素材','カスタムワイドサイズ','プロフェッショナル吊り下げシステム'] },
        specs: [{ l: '尺寸/Size', v: '300×300cm (customizable)' }, { l: '素材/Material', v: 'Impact cloth' }, { l: '兼容/Compatible', v: 'All projectors' }, { l: '安装/Install', v: 'Hook system' }]
      }
    ]
  },

  'gear-park': {
    title: { zh: '公园高尔夫', en: 'Park Golf', ko: '파크 골프', ja: 'パークゴルフ' },
    sub: 'PARK GOLF',
    desc: { zh: '适合全年龄段的休闲公园高尔夫球杆', en: 'Park golf clubs for all ages leisure play', ko: '전 연령대를 위한 레저 파크골프 클럽', ja: '全年齢向けのレジャーパークゴルフクラブ' },
    parent: 'golf-gear',
    items: [
      {
        id: '1722936917',
        name: { zh: '公园高尔夫球杆 2', en: 'Park Golf Club Type 2', ko: '파크골프채 2', ja: 'パークゴルフクラブ 2型' },
        thumb: GM + '202408/20240806173437_21338.jpg',
        img:   GM + '202408/20240806173439_87603.jpg',
        desc: { zh: '公园高尔夫专用球杆，轻量合金材质', en: 'Park golf dedicated club, lightweight alloy material', ko: '경량 합금 소재의 파크골프 전용 클럽', ja: '軽量合金素材のパークゴルフ専用クラブ' },
        features: { zh: ['轻量合金杆体','防滑橡胶握把','适合全年龄段','经典标准长度'], en: ['Lightweight alloy body','Anti-slip rubber grip','Suitable for all ages','Standard length'], ko: ['경량 합금 본체','미끄럼 방지 고무 그립','전 연령 적합','표준 길이'], ja: ['軽量合金ボディ','滑り止めゴムグリップ','全年齢対応','標準的な長さ'] },
        specs: [{ l: '长度/Length', v: '86cm' }, { l: '重量/Weight', v: '~580g' }, { l: '材质/Material', v: 'Aluminum Alloy' }, { l: '握把/Grip', v: 'Rubber' }]
      },
      {
        id: '1722936836',
        name: { zh: '公园高尔夫球杆 1', en: 'Park Golf Club Type 1', ko: '파크골프채 1', ja: 'パークゴルフクラブ 1型' },
        thumb: GM + '202408/20240806173211_48065.jpg',
        img:   GM + '202408/20240806173217_68109.jpg',
        desc: { zh: '入门款公园高尔夫球杆，经济实用', en: 'Entry-level park golf club, economical and practical', ko: '경제적이고 실용적인 입문형 파크골프 클럽', ja: '経済的で実用的なエントリーレベルパークゴルフクラブ' },
        features: { zh: ['轻量设计','适合初学者','舒适握把','耐用合金材质'], en: ['Lightweight design','Suitable for beginners','Comfortable grip','Durable alloy material'], ko: ['경량 설계','초보자 적합','편안한 그립','내구성 합금 소재'], ja: ['軽量設計','初心者向け','快適なグリップ','耐久性合金素材'] },
        specs: [{ l: '长度/Length', v: '84cm' }, { l: '重量/Weight', v: '~550g' }, { l: '材质/Material', v: 'Aluminum Alloy' }, { l: '用途/Use', v: 'Park Golf' }]
      }
    ]
  }
};

// 전체 제품 ID로 검색하는 헬퍼 함수
function getProductById(id) {
  for (const cat of Object.values(gearData)) {
    const found = cat.items.find(item => item.id === id);
    if (found) return { ...found, catKey: Object.keys(gearData).find(k => gearData[k] === cat), catInfo: cat };
  }
  return null;
}

// 언어별 카테고리 타이틀
function getCatTitle(catKey, lang) {
  const cat = gearData[catKey];
  if (!cat) return catKey;
  return cat.title[lang] || cat.title.zh;
}
