// New quizzes: append a unique slug; keep published slugs stable.
const quizCatalog=[
  {
    "slug": "witcher-3",
    "title": "Ведьмак 3",
    "category": "games",
    "scope": "Игра и оба дополнения · спойлеры",
    "description": "Хитрые условия квестов, забытые предметы и последствия решений.",
    "icon": "🐺",
    "color": "#b3474e",
    "art": "swords",
    "count": 30
  },
  {
    "slug": "skyrim",
    "title": "Skyrim",
    "category": "games",
    "scope": "Special Edition · Dawnguard и Dragonborn · без модов",
    "description": "Даэдрические сделки, двемерские тайники и чёрные книги.",
    "icon": "🐉",
    "color": "#65837a",
    "art": "dragon",
    "count": 30
  },
  {
    "slug": "minecraft",
    "title": "Minecraft",
    "category": "games",
    "scope": "Java Edition 1.21 · выживание · без модов",
    "description": "Редстоун, зельеварение и механики, на которых ошибаются опытные игроки.",
    "icon": "💎",
    "color": "#438764",
    "art": "blocks",
    "count": 30
  },
  {
    "slug": "gta-v",
    "title": "GTA V",
    "category": "games",
    "scope": "Сюжетный режим · спойлеры ко всей истории",
    "description": "Ограбления, загадки Лос-Сантоса и побочные задания без подсказок.",
    "icon": "🚘",
    "color": "#517b99",
    "art": "city",
    "count": 30
  },
  {
    "slug": "elden-ring",
    "title": "Elden Ring",
    "category": "games",
    "scope": "Основная игра · без Shadow of the Erdtree · спойлеры",
    "description": "Переплетения линий NPC, ключевые предметы и скрытые развилки.",
    "icon": "🌙",
    "color": "#a18442",
    "art": "rune",
    "count": 30
  },
  {
    "slug": "stranger-things",
    "title": "Очень странные дела",
    "category": "series",
    "scope": "Сезоны 1–4 · спойлеры",
    "description": "Коды, ложные личности и детали расследований в Хоукинсе.",
    "icon": "📻",
    "color": "#b33e59",
    "art": "portal",
    "count": 30
  },
  {
    "slug": "wednesday",
    "title": "Уэнсдей",
    "category": "series",
    "scope": "Первый сезон · спойлеры",
    "description": "Записи Фолкнера, семейные тайны и детали расследования в Неверморе.",
    "icon": "🕷️",
    "color": "#795c9e",
    "art": "web",
    "count": 30
  },
  {
    "slug": "squid-game",
    "title": "Игра в кальмара",
    "category": "series",
    "scope": "Первый сезон · спойлеры",
    "description": "Правила, расчёты, стратегии и детали, потерянные за напряжением игр.",
    "icon": "🔺",
    "color": "#bd537c",
    "art": "shapes",
    "count": 30
  },
  {
    "slug": "game-of-thrones",
    "title": "Игра престолов",
    "category": "series",
    "scope": "Сериал HBO · сезоны 1–8 · спойлеры",
    "description": "Планы домов, забытые имена и детали поворотных эпизодов.",
    "icon": "👑",
    "color": "#8b7452",
    "art": "crown",
    "count": 30
  },
  {
    "slug": "breaking-bad",
    "title": "Во все тяжкие",
    "category": "series",
    "scope": "Все пять сезонов · спойлеры",
    "description": "Алиби, забытые сделки и детали решений Уолтера и Джесси.",
    "icon": "🧪",
    "color": "#66844e",
    "art": "lab",
    "count": 30
  },
  {
    "slug": "supernatural",
    "title": "Сверхъестественное",
    "category": "series",
    "scope": "Сериал · спойлеры к сезонам 1–15",
    "description": "Ловушки охотников, временные петли и детали небесных интриг. Помнишь больше, чем имена Винчестеров?",
    "icon": "🧂",
    "color": "#78474b",
    "art": "hunters",
    "count": 30
  },
  {
    "slug": "naruto",
    "title": "Наруто",
    "category": "series",
    "scope": "«Наруто» и «Шиппуден» · основной сюжет · без «Боруто» · спойлеры",
    "description": "500 вопросов о тактике боёв, запретных техниках, кланах и тайнах мира шиноби.",
    "icon": "🍥",
    "color": "#b76b38",
    "art": "shinobi",
    "count": 500
  },
  {
    "slug": "oxxxymiron",
    "title": "Oxxxymiron",
    "category": "music",
    "scope": "Треки, релизы, баттлы и публичная биография · без длинных цитат",
    "description": "500 вопросов о редких фитах, смыслах песен, истории альбомов и поворотах карьеры.",
    "icon": "🎤",
    "color": "#4e596a",
    "art": "microphone",
    "count": 500
  },
  {
    "slug": "twilight",
    "title": "Сумерки",
    "category": "worlds",
    "scope": "Книги, официальный гид и пять фильмов · версия указана в вопросах · спойлеры",
    "description": "500 вопросов о дарах Вольтури, прошлом кланов, квилетских легендах и деталях книг и кино.",
    "icon": "🌲",
    "color": "#546e78",
    "art": "twilight",
    "count": 500
  },
  {
    "slug": "vampire-diaries",
    "title": "Дневники вампира",
    "category": "series",
    "scope": "Сериал · сезоны 1–8 · без сюжетов спин-оффов · спойлеры",
    "description": "500 вопросов о тюремных мирах, древних сделках, опасной магии и последствиях решений.",
    "icon": "🩸",
    "color": "#8a4055",
    "art": "vampires",
    "count": 500
  },
  {
    "slug": "erudition",
    "title": "Общая эрудиция",
    "category": "knowledge",
    "scope": "20 тем · по одному вопросу из каждой за полный раунд",
    "description": "Что умеет морской хронометр, из чего делают марципан и зачем на съёмках нужна хлопушка? Проверь свой кругозор.",
    "difficulty": "Средняя сложность",
    "historySubjects": ["История"],
    "icon": "🧭",
    "color": "#81522d",
    "art": "globe",
    "count": 500
  },
  {
    "slug": "general-knowledge",
    "title": "Общие знания",
    "category": "knowledge",
    "scope": "28 школьных предметов и направлений · 20 заданий за попытку",
    "description": "Узнай, как Россия получила выход к Балтике, найди высоту лестницы по теореме Пифагора и прочитай объявление на иностранном языке.",
    "difficulty": "7–9 классы · средняя сложность",
    "historySubjects": ["История России", "Всеобщая история"],
    "archives": [
      { "firstId": 1, "lastId": 500, "file": "./data/archive/general-knowledge-v1.json" },
      { "firstId": 501, "lastId": 1000, "file": "./data/archive/general-knowledge-v2.json" },
      { "firstId": 1001, "lastId": 1500, "file": "./data/archive/general-knowledge-v3.json" },
      { "firstId": 1501, "lastId": 2000, "file": "./data/archive/general-knowledge-v4.json" }
    ],
    "icon": "🌍",
    "color": "#397676",
    "art": "globe",
    "count": 500
  }
];
