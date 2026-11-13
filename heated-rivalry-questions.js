// Stable IDs and canonical option order preserve shared results. Append new questions; never reuse IDs.
const questionBank=[
  {
    "id": 1,
    "episode": 1,
    "tag": "Серия 1 · хард",
    "icon": "🏒",
    "points": 3,
    "q": "В какой провинции проходит International Prospect Cup в начале сериала?",
    "options": [
      "Саскачеван",
      "Онтарио",
      "Альберта",
      "Манитоба"
    ],
    "answer": 0,
    "why": "Комментатор называет Саскачеван.",
    "source": "https://www.springfieldspringfield.co.uk/view_episode_scripts.php?episode=s01e01&tv-show=heated-rivalry-2025"
  },
  {
    "id": 2,
    "episode": 1,
    "tag": "Серия 1 · хард",
    "icon": "🏒",
    "points": 3,
    "q": "После поражения от какой сборной отец отчитывает Илью по телефону?",
    "options": [
      "Латвии",
      "Чехии",
      "Швеции",
      "Финляндии"
    ],
    "answer": 1,
    "why": "Отец возмущён поражением от чехов.",
    "source": "https://www.springfieldspringfield.co.uk/view_episode_scripts.php?episode=s01e01&tv-show=heated-rivalry-2025"
  },
  {
    "id": 3,
    "episode": 1,
    "tag": "Серия 1 · хард",
    "icon": "🏒",
    "points": 3,
    "q": "Какую сборную Илья обещает обыграть в телефонном разговоре с отцом в «Rookies»?",
    "options": [
      "США",
      "Финляндию",
      "Швецию",
      "Канаду"
    ],
    "answer": 2,
    "why": "Илья обещает победу над Швецией.",
    "source": "https://www.springfieldspringfield.co.uk/view_episode_scripts.php?episode=s01e01&tv-show=heated-rivalry-2025"
  },
  {
    "id": 4,
    "episode": 1,
    "tag": "Серия 1 · хард",
    "icon": "🏒",
    "points": 3,
    "q": "Какой бренд кроссовок Юна требует носить Шейну?",
    "options": [
      "Nike",
      "Adidas",
      "Puma",
      "Reebok"
    ],
    "answer": 3,
    "why": "Это условие рекламного контракта с Reebok.",
    "source": "https://www.springfieldspringfield.co.uk/view_episode_scripts.php?episode=s01e01&tv-show=heated-rivalry-2025"
  },
  {
    "id": 5,
    "episode": 1,
    "tag": "Серия 1 · хард",
    "icon": "🏒",
    "points": 3,
    "q": "Сколько голов Илья обещает журналистам в дебютном сезоне, поправляя их?",
    "options": [
      "50",
      "40",
      "45",
      "60"
    ],
    "answer": 0,
    "why": "Журналист говорит о сорока, Илья поправляет: пятьдесят.",
    "source": "https://www.springfieldspringfield.co.uk/view_episode_scripts.php?episode=s01e01&tv-show=heated-rivalry-2025"
  },
  {
    "id": 6,
    "episode": 1,
    "tag": "Серия 1 · хард",
    "icon": "🏒",
    "points": 3,
    "q": "На сколько минут Шейн опаздывает, увлёкшись YouTube после тренировки?",
    "options": [
      "30",
      "15",
      "10",
      "20"
    ],
    "answer": 1,
    "why": "В разговоре уточняют: пятнадцать минут.",
    "source": "https://www.springfieldspringfield.co.uk/view_episode_scripts.php?episode=s01e01&tv-show=heated-rivalry-2025"
  },
  {
    "id": 7,
    "episode": 2,
    "tag": "Серия 2 · хард",
    "icon": "🏒",
    "points": 3,
    "q": "Что Шейн пока делает со второй квартирой по соседству?",
    "options": [
      "Поселил родителей",
      "Оставил пустой",
      "Сдаёт её",
      "Хранит экипировку"
    ],
    "answer": 2,
    "why": "Объединить квартиры — лишь будущая возможность.",
    "source": "https://www.springfieldspringfield.co.uk/view_episode_scripts.php?episode=s01e02&tv-show=heated-rivalry-2025"
  },
  {
    "id": 8,
    "episode": 2,
    "tag": "Серия 2 · хард",
    "icon": "🏒",
    "points": 3,
    "q": "Кто выбрал подушки в квартире Шейна?",
    "options": [
      "Юна",
      "Сам Шейн",
      "Хейден",
      "Дизайнер"
    ],
    "answer": 3,
    "why": "Шейн объясняет, что нанял дизайнера.",
    "source": "https://www.springfieldspringfield.co.uk/view_episode_scripts.php?episode=s01e02&tv-show=heated-rivalry-2025"
  },
  {
    "id": 9,
    "episode": 2,
    "tag": "Серия 2 · хард",
    "icon": "🏒",
    "points": 3,
    "q": "Во сколько Юна собирается вставать ради олимпийских трансляций?",
    "options": [
      "В 4 утра",
      "В 3 утра",
      "В 5 утра",
      "В 6 утра"
    ],
    "answer": 0,
    "why": "Шейн говорит о четырёх утра.",
    "source": "https://www.springfieldspringfield.co.uk/view_episode_scripts.php?episode=s01e02&tv-show=heated-rivalry-2025"
  },
  {
    "id": 10,
    "episode": 2,
    "tag": "Серия 2 · хард",
    "icon": "🏒",
    "points": 3,
    "q": "Какой сборной Россия проигрывает на Олимпиаде в сериале?",
    "options": [
      "Швеции",
      "Латвии",
      "Финляндии",
      "Чехии"
    ],
    "answer": 1,
    "why": "В диалогах несколько раз названа Латвия.",
    "source": "https://www.springfieldspringfield.co.uk/view_episode_scripts.php?episode=s01e02&tv-show=heated-rivalry-2025"
  },
  {
    "id": 11,
    "episode": 2,
    "tag": "Серия 2 · хард",
    "icon": "🏒",
    "points": 3,
    "q": "В какой программе выступает Джо, которого Шейн зовёт поддержать?",
    "options": [
      "Парная короткая",
      "Танцы на льду",
      "Мужская короткая",
      "Мужская произвольная"
    ],
    "answer": 2,
    "why": "Шейн предлагает посмотреть мужскую короткую программу.",
    "source": "https://www.springfieldspringfield.co.uk/view_episode_scripts.php?episode=s01e02&tv-show=heated-rivalry-2025"
  },
  {
    "id": 12,
    "episode": 2,
    "tag": "Серия 2 · хард",
    "icon": "🏒",
    "points": 3,
    "q": "Что Джей-Джей подозревает из-за запаха в олимпийском номере?",
    "options": [
      "Утечку газа",
      "Свежую краску",
      "Проблемы с канализацией",
      "Чёрную плесень"
    ],
    "answer": 3,
    "why": "Версия Джей-Джея — чёрная плесень.",
    "source": "https://www.springfieldspringfield.co.uk/view_episode_scripts.php?episode=s01e02&tv-show=heated-rivalry-2025"
  },
  {
    "id": 13,
    "episode": 3,
    "tag": "Серия 3 · хард",
    "icon": "🏒",
    "points": 3,
    "q": "Сколько матчей без очков Скотта обсуждают в начале «Hunter»?",
    "options": [
      "6",
      "4",
      "8",
      "10"
    ],
    "answer": 0,
    "why": "Сезон начался с шести безрезультативных матчей.",
    "source": "https://www.springfieldspringfield.co.uk/view_episode_scripts.php?episode=s01e03&tv-show=heated-rivalry-2025"
  },
  {
    "id": 14,
    "episode": 3,
    "tag": "Серия 3 · хард",
    "icon": "🏒",
    "points": 3,
    "q": "Сколько очков было у Скотта в прошлом сезоне по словам ведущих?",
    "options": [
      "90",
      "70",
      "60",
      "80"
    ],
    "answer": 1,
    "why": "Ведущие сравнивают ноль с семьюдесятью.",
    "source": "https://www.springfieldspringfield.co.uk/view_episode_scripts.php?episode=s01e03&tv-show=heated-rivalry-2025"
  },
  {
    "id": 15,
    "episode": 3,
    "tag": "Серия 3 · хард",
    "icon": "🏒",
    "points": 3,
    "q": "Как называется черничный смузи, который рекомендует Кип?",
    "options": [
      "Midnight in Brooklyn",
      "Brooklyn Blue Thunder",
      "Blue Moon Over Brooklyn",
      "Blue Sky Over Manhattan"
    ],
    "answer": 2,
    "why": "В меню — Blue Moon Over Brooklyn.",
    "source": "https://www.springfieldspringfield.co.uk/view_episode_scripts.php?episode=s01e03&tv-show=heated-rivalry-2025"
  },
  {
    "id": 16,
    "episode": 3,
    "tag": "Серия 3 · хард",
    "icon": "🏒",
    "points": 3,
    "q": "Какое полное имя скрывается за «Кип»?",
    "options": [
      "Кристиан",
      "Кэмерон",
      "Кевин",
      "Кристофер"
    ],
    "answer": 3,
    "why": "Кип поясняет это друзьям в баре.",
    "source": "https://www.springfieldspringfield.co.uk/view_episode_scripts.php?episode=s01e03&tv-show=heated-rivalry-2025"
  },
  {
    "id": 17,
    "episode": 3,
    "tag": "Серия 3 · хард",
    "icon": "🏒",
    "points": 3,
    "q": "Кто ведёт 2:1 в матче, который Кип смотрит после знакомства?",
    "options": [
      "Анахайм",
      "Бостон",
      "Монреаль",
      "Колорадо"
    ],
    "answer": 0,
    "why": "Комментатор называет Анахайм.",
    "source": "https://www.springfieldspringfield.co.uk/view_episode_scripts.php?episode=s01e03&tv-show=heated-rivalry-2025"
  },
  {
    "id": 18,
    "episode": 3,
    "tag": "Серия 3 · хард",
    "icon": "🏒",
    "points": 3,
    "q": "Что Скотт любит читать, согласно разговору в смузи-баре?",
    "options": [
      "Научную фантастику",
      "Книги об убийствах",
      "Биографии спортсменов",
      "Исторические романы"
    ],
    "answer": 1,
    "why": "Так он объясняет знания о серийных убийцах.",
    "source": "https://www.springfieldspringfield.co.uk/view_episode_scripts.php?episode=s01e03&tv-show=heated-rivalry-2025"
  },
  {
    "id": 19,
    "episode": 4,
    "tag": "Серия 4 · хард",
    "icon": "🏒",
    "points": 3,
    "q": "Сколько лет «Монреаль» ждал Кубка, согласно монтажу в начале «Rose»?",
    "options": [
      "18",
      "20",
      "16",
      "12"
    ],
    "answer": 2,
    "why": "Комментатор говорит о шестнадцати годах.",
    "source": "https://www.springfieldspringfield.co.uk/view_episode_scripts.php?episode=s01e04&tv-show=heated-rivalry-2025"
  },
  {
    "id": 20,
    "episode": 4,
    "tag": "Серия 4 · хард",
    "icon": "🏒",
    "points": 3,
    "q": "Какой клуб упоминают как предыдущего обладателя двух Кубков подряд?",
    "options": [
      "Бостон",
      "Нью-Йорк",
      "Детройт",
      "Чикаго"
    ],
    "answer": 3,
    "why": "Комментатор вспоминает Чикаго конца девяностых.",
    "source": "https://www.springfieldspringfield.co.uk/view_episode_scripts.php?episode=s01e04&tv-show=heated-rivalry-2025"
  },
  {
    "id": 21,
    "episode": 4,
    "tag": "Серия 4 · хард",
    "icon": "🏒",
    "points": 3,
    "q": "Как зовут бывшую Шейна, чьё имя путает Хейден?",
    "options": [
      "Джессика",
      "Дженнифер",
      "Джулия",
      "Джейн"
    ],
    "answer": 0,
    "why": "Хейден говорит «Дженнифер», Шейн исправляет.",
    "source": "https://www.springfieldspringfield.co.uk/view_episode_scripts.php?episode=s01e04&tv-show=heated-rivalry-2025"
  },
  {
    "id": 22,
    "episode": 4,
    "tag": "Серия 4 · хард",
    "icon": "🏒",
    "points": 3,
    "q": "После какого нарушения запрета на ругань ребёнок должен написать Джеки?",
    "options": [
      "Шестого",
      "Пятого",
      "Третьего",
      "Четвёртого"
    ],
    "answer": 1,
    "why": "Пятое ругательство запускает обещанную жалобу.",
    "source": "https://www.springfieldspringfield.co.uk/view_episode_scripts.php?episode=s01e04&tv-show=heated-rivalry-2025"
  },
  {
    "id": 23,
    "episode": 4,
    "tag": "Серия 4 · хард",
    "icon": "🏒",
    "points": 3,
    "q": "Какая последовательность выезда Шейна названа за ужином у Ильи?",
    "options": [
      "Тампа → Даллас → Санрайз → Сент-Луис",
      "Тампа → Санрайз → Сент-Луис → Даллас",
      "Тампа → Санрайз → Даллас → Сент-Луис",
      "Санрайз → Тампа → Даллас → Сент-Луис"
    ],
    "answer": 2,
    "why": "Шейн перечисляет города именно так.",
    "source": "https://www.springfieldspringfield.co.uk/view_episode_scripts.php?episode=s01e04&tv-show=heated-rivalry-2025"
  },
  {
    "id": 24,
    "episode": 4,
    "tag": "Серия 4 · хард",
    "icon": "🏒",
    "points": 3,
    "q": "Какого игрока обсуждают за сэндвичами с тунцом?",
    "options": [
      "Скотта Хантера",
      "Дэйва",
      "Матесона",
      "Райана Прайса"
    ],
    "answer": 3,
    "why": "Илья рассказывает о замкнутом Райане Прайсе.",
    "source": "https://www.springfieldspringfield.co.uk/view_episode_scripts.php?episode=s01e04&tv-show=heated-rivalry-2025"
  },
  {
    "id": 25,
    "episode": 5,
    "tag": "Серия 5 · хард",
    "icon": "🏒",
    "points": 3,
    "q": "Какой формат Матча звёзд объявляют в начале пятой серии?",
    "options": [
      "Восток против Запада",
      "Север против Юга",
      "Канада против мира",
      "Капитаны выбирают составы"
    ],
    "answer": 0,
    "why": "Этот формат объединяет Шейна и Илью.",
    "source": "https://www.springfieldspringfield.co.uk/view_episode_scripts.php?episode=s01e05&tv-show=heated-rivalry-2025"
  },
  {
    "id": 26,
    "episode": 5,
    "tag": "Серия 5 · хард",
    "icon": "🏒",
    "points": 3,
    "q": "До какого процента Роуз поправляет свою шутливую статистику бывших парней?",
    "options": [
      "60%",
      "80%",
      "70%",
      "90%"
    ],
    "answer": 1,
    "why": "Сначала она говорит 70%, затем 80%.",
    "source": "https://www.springfieldspringfield.co.uk/view_episode_scripts.php?episode=s01e05&tv-show=heated-rivalry-2025"
  },
  {
    "id": 27,
    "episode": 5,
    "tag": "Серия 5 · хард",
    "icon": "🏒",
    "points": 3,
    "q": "На кого Роуз предлагает Шейну подписаться в ответ в Instagram?",
    "options": [
      "Саше",
      "Хейдену",
      "Майлзу",
      "Скотту"
    ],
    "answer": 2,
    "why": "Она шутит о заинтересованном Майлзе.",
    "source": "https://www.springfieldspringfield.co.uk/view_episode_scripts.php?episode=s01e05&tv-show=heated-rivalry-2025"
  },
  {
    "id": 28,
    "episode": 5,
    "tag": "Серия 5 · хард",
    "icon": "🏒",
    "points": 3,
    "q": "Куда собираются родители Шейна вместо поездки на Матч звёзд?",
    "options": [
      "На Кубу",
      "На Гавайи",
      "На Ямайку",
      "В Мексику"
    ],
    "answer": 3,
    "why": "Поездка в Мексику запланирована через две недели.",
    "source": "https://www.springfieldspringfield.co.uk/view_episode_scripts.php?episode=s01e05&tv-show=heated-rivalry-2025"
  },
  {
    "id": 29,
    "episode": 5,
    "tag": "Серия 5 · хард",
    "icon": "🏒",
    "points": 3,
    "q": "Что Илья обещает детям за победу над ним в бассейне?",
    "options": [
      "Батончики из автомата",
      "Билеты на матч",
      "Подписанные шайбы",
      "Мороженое из бара"
    ],
    "answer": 0,
    "why": "Он обещает выкупить батончики в автомате.",
    "source": "https://www.springfieldspringfield.co.uk/view_episode_scripts.php?episode=s01e05&tv-show=heated-rivalry-2025"
  },
  {
    "id": 30,
    "episode": 5,
    "tag": "Серия 5 · хард",
    "icon": "🏒",
    "points": 3,
    "q": "Какое английское слово Илья специально проверяет после разговора с Шейном?",
    "options": [
      "Confident",
      "Compatible",
      "Complicated",
      "Committed"
    ],
    "answer": 1,
    "why": "Он уточняет смысл слова «совместимые».",
    "source": "https://www.springfieldspringfield.co.uk/view_episode_scripts.php?episode=s01e05&tv-show=heated-rivalry-2025"
  },
  {
    "id": 31,
    "episode": 6,
    "tag": "Серия 6 · хард",
    "icon": "🏒",
    "points": 3,
    "q": "На сколько бургеров рассчитан рецепт, которому следует Шейн?",
    "options": [
      "4",
      "10",
      "8",
      "6"
    ],
    "answer": 2,
    "why": "Он не уменьшил рецепт на восемь порций.",
    "source": "https://www.springfieldspringfield.co.uk/view_episode_scripts.php?episode=s01e06&tv-show=heated-rivalry-2025"
  },
  {
    "id": 32,
    "episode": 6,
    "tag": "Серия 6 · хард",
    "icon": "🏒",
    "points": 3,
    "q": "За какой университет играл в хоккей отец Шейна?",
    "options": [
      "Торонто",
      "Британская Колумбия",
      "Конкордия",
      "Макгилл"
    ],
    "answer": 3,
    "why": "Шейн называет Макгилл.",
    "source": "https://www.springfieldspringfield.co.uk/view_episode_scripts.php?episode=s01e06&tv-show=heated-rivalry-2025"
  },
  {
    "id": 33,
    "episode": 6,
    "tag": "Серия 6 · хард",
    "icon": "🏒",
    "points": 3,
    "q": "Какую птицу Илья принимает по крику за волка?",
    "options": [
      "Гагару",
      "Неясыть",
      "Канадскую казарку",
      "Цаплю"
    ],
    "answer": 0,
    "why": "Шейн объясняет, что это гагара — loon.",
    "source": "https://www.springfieldspringfield.co.uk/view_episode_scripts.php?episode=s01e06&tv-show=heated-rivalry-2025"
  },
  {
    "id": 34,
    "episode": 6,
    "tag": "Серия 6 · хард",
    "icon": "🏒",
    "points": 3,
    "q": "Какую особенность спальни Илья требует после большой кровати и вида?",
    "options": [
      "Отдельный вход",
      "Собственную ванную",
      "Балкон",
      "Камин"
    ],
    "answer": 1,
    "why": "Ванная при спальне есть только у Шейна.",
    "source": "https://www.springfieldspringfield.co.uk/view_episode_scripts.php?episode=s01e06&tv-show=heated-rivalry-2025"
  },
  {
    "id": 35,
    "episode": 6,
    "tag": "Серия 6 · хард",
    "icon": "🏒",
    "points": 3,
    "q": "Как зовут новорождённую дочь Хейдена, о которой спрашивает Шейн?",
    "options": [
      "Эмма",
      "Элла",
      "Эмбер",
      "Руби"
    ],
    "answer": 2,
    "why": "Во время звонка он уточняет имя Эмбер.",
    "source": "https://www.springfieldspringfield.co.uk/view_episode_scripts.php?episode=s01e06&tv-show=heated-rivalry-2025"
  },
  {
    "id": 36,
    "episode": 6,
    "tag": "Серия 6 · хард",
    "icon": "🏒",
    "points": 3,
    "q": "Кто якобы пришёл к двери, когда Шейн заканчивает звонок Хейдену?",
    "options": [
      "Сосед",
      "Сантехник",
      "Курьер с продуктами",
      "Доставка Amazon"
    ],
    "answer": 3,
    "why": "Шейн ссылается на Amazon.",
    "source": "https://www.springfieldspringfield.co.uk/view_episode_scripts.php?episode=s01e06&tv-show=heated-rivalry-2025"
  }
];
