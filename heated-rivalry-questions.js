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
  },
  {
    "id": 37,
    "episode": 1,
    "tag": "Серия 1 · эксперт",
    "icon": "🏒",
    "points": 3,
    "q": "Какую пару «номер — время» Шейн называет для встречи после рекламы?",
    "options": [
      "1410 — 21:00",
      "1401 — 21:00",
      "1410 — 22:00",
      "1401 — 22:00"
    ],
    "answer": 0,
    "why": "В приглашении звучат 1410 и девять вечера.",
    "source": "https://www.springfieldspringfield.co.uk/view_episode_scripts.php?episode=s01e01&tv-show=heated-rivalry-2025"
  },
  {
    "id": 38,
    "episode": 1,
    "tag": "Серия 1 · эксперт",
    "icon": "🏒",
    "points": 3,
    "q": "Кто, по словам Ильи, предложил совместную рекламу?",
    "options": [
      "Тренер Бостона",
      "Сам Илья",
      "Юна",
      "Агент Шейна"
    ],
    "answer": 1,
    "why": "Илья приписывает идею себе.",
    "source": "https://www.springfieldspringfield.co.uk/view_episode_scripts.php?episode=s01e01&tv-show=heated-rivalry-2025"
  },
  {
    "id": 39,
    "episode": 1,
    "tag": "Серия 1 · эксперт",
    "icon": "🏒",
    "points": 3,
    "q": "Что заказали опоздавшему Шейну на семейном обеде?",
    "options": [
      "Лосось и киноа",
      "Тунец и киноа",
      "Лосось и бурый рис",
      "Тунец и бурый рис"
    ],
    "answer": 2,
    "why": "Его уже ждут лосось и бурый рис.",
    "source": "https://www.springfieldspringfield.co.uk/view_episode_scripts.php?episode=s01e01&tv-show=heated-rivalry-2025"
  },
  {
    "id": 40,
    "episode": 1,
    "tag": "Серия 1 · эксперт",
    "icon": "🏒",
    "points": 3,
    "q": "От какого часового бренда Юна зачитывает письмо за обедом?",
    "options": [
      "Omega",
      "TAG Heuer",
      "Breitling",
      "Rolex"
    ],
    "answer": 3,
    "why": "Юна сообщает о согласии Rolex.",
    "source": "https://www.springfieldspringfield.co.uk/view_episode_scripts.php?episode=s01e01&tv-show=heated-rivalry-2025"
  },
  {
    "id": 41,
    "episode": 1,
    "tag": "Серия 1 · эксперт",
    "icon": "🏒",
    "points": 3,
    "q": "Какая пара животных действительно входит в примеры YouTube-видео Шейна?",
    "options": [
      "Корова и утка",
      "Лиса и гусь",
      "Тигр и собака",
      "Медведь и олень"
    ],
    "answer": 0,
    "why": "Он приводит пример дружбы коровы и утки.",
    "source": "https://www.springfieldspringfield.co.uk/view_episode_scripts.php?episode=s01e01&tv-show=heated-rivalry-2025"
  },
  {
    "id": 42,
    "episode": 1,
    "tag": "Серия 1 · эксперт",
    "icon": "🏒",
    "points": 3,
    "q": "Кем был первый партнёр Ильи в России, о котором он рассказывает Шейну?",
    "options": [
      "Братом одноклассника",
      "Сыном тренера",
      "Сыном врача",
      "Братом капитана"
    ],
    "answer": 1,
    "why": "Илья вспоминает сына своего тренера.",
    "source": "https://www.springfieldspringfield.co.uk/view_episode_scripts.php?episode=s01e01&tv-show=heated-rivalry-2025"
  },
  {
    "id": 43,
    "episode": 2,
    "tag": "Серия 2 · эксперт",
    "icon": "🏒",
    "points": 3,
    "q": "Какой травмой Светлана объясняет шансы Бостона обойти Монреаль?",
    "options": [
      "Травмой Марло",
      "Травмой Вона",
      "Травмой Мийтки",
      "Травмой Матесона"
    ],
    "answer": 2,
    "why": "Она считает, что Мийтка травмирован.",
    "source": "https://www.springfieldspringfield.co.uk/view_episode_scripts.php?episode=s01e02&tv-show=heated-rivalry-2025"
  },
  {
    "id": 44,
    "episode": 2,
    "tag": "Серия 2 · эксперт",
    "icon": "🏒",
    "points": 3,
    "q": "Кого Светлана прогнозирует в финале от Запада?",
    "options": [
      "Чикаго",
      "Анахайм",
      "Колорадо",
      "Сан-Франциско"
    ],
    "answer": 3,
    "why": "Её прогноз — молодая команда Сан-Франциско.",
    "source": "https://www.springfieldspringfield.co.uk/view_episode_scripts.php?episode=s01e02&tv-show=heated-rivalry-2025"
  },
  {
    "id": 45,
    "episode": 2,
    "tag": "Серия 2 · эксперт",
    "icon": "🏒",
    "points": 3,
    "q": "На сколько раньше собственного пари Светлана допускает победу Ильи в Кубке?",
    "options": [
      "На год",
      "На два года",
      "На три года",
      "На полгода"
    ],
    "answer": 0,
    "why": "Она поставила с отцом на победу годом позже.",
    "source": "https://www.springfieldspringfield.co.uk/view_episode_scripts.php?episode=s01e02&tv-show=heated-rivalry-2025"
  },
  {
    "id": 46,
    "episode": 2,
    "tag": "Серия 2 · эксперт",
    "icon": "🏒",
    "points": 3,
    "q": "Какую статистику Ильи сообщают перед шестым матчем финала?",
    "options": [
      "8 голов за 10 матчей",
      "10 голов за 6 матчей",
      "10 голов за 8 матчей",
      "8 голов за 6 матчей"
    ],
    "answer": 1,
    "why": "Комментатор сообщает о десяти голах за шесть игр.",
    "source": "https://www.springfieldspringfield.co.uk/view_episode_scripts.php?episode=s01e02&tv-show=heated-rivalry-2025"
  },
  {
    "id": 47,
    "episode": 2,
    "tag": "Серия 2 · эксперт",
    "icon": "🏒",
    "points": 3,
    "q": "Где, по разговору на гала-вечере, находится Полина?",
    "options": [
      "В Сочи",
      "В Бостоне",
      "В Москве",
      "В Петербурге"
    ],
    "answer": 2,
    "why": "Полина осталась в Москве.",
    "source": "https://www.springfieldspringfield.co.uk/view_episode_scripts.php?episode=s01e02&tv-show=heated-rivalry-2025"
  },
  {
    "id": 48,
    "episode": 2,
    "tag": "Серия 2 · эксперт",
    "icon": "🏒",
    "points": 3,
    "q": "Какой город Саша обсуждает с Ильёй как своё нынешнее место жизни?",
    "options": [
      "Лион",
      "Марсель",
      "Ниццу",
      "Париж"
    ],
    "answer": 3,
    "why": "Илья спрашивает Сашу о жизни в Париже.",
    "source": "https://www.springfieldspringfield.co.uk/view_episode_scripts.php?episode=s01e02&tv-show=heated-rivalry-2025"
  },
  {
    "id": 49,
    "episode": 3,
    "tag": "Серия 3 · эксперт",
    "icon": "🏒",
    "points": 3,
    "q": "Какую еду Шон доверяет Кипу после провала с подносом?",
    "options": [
      "Киши",
      "Канапе",
      "Тарталетки с икрой",
      "Мини-бургеры"
    ],
    "answer": 0,
    "why": "Шон выбирает сухие киши.",
    "source": "https://www.springfieldspringfield.co.uk/view_episode_scripts.php?episode=s01e03&tv-show=heated-rivalry-2025"
  },
  {
    "id": 50,
    "episode": 3,
    "tag": "Серия 3 · эксперт",
    "icon": "🏒",
    "points": 3,
    "q": "Какую кухню Скотт предлагает после благотворительного вечера?",
    "options": [
      "Японскую",
      "Мексиканскую",
      "Итальянскую",
      "Тайскую"
    ],
    "answer": 1,
    "why": "Первое предложение — мексиканская еда.",
    "source": "https://www.springfieldspringfield.co.uk/view_episode_scripts.php?episode=s01e03&tv-show=heated-rivalry-2025"
  },
  {
    "id": 51,
    "episode": 3,
    "tag": "Серия 3 · эксперт",
    "icon": "🏒",
    "points": 3,
    "q": "Какой салат Скотт оставляет Кипу в холодильнике?",
    "options": [
      "С пастой и курицей, без оливок",
      "С пастой и тунцом, без оливок",
      "С пастой и курицей, без феты",
      "С пастой и тунцом, без феты"
    ],
    "answer": 2,
    "why": "Он уточняет: курица, без феты.",
    "source": "https://www.springfieldspringfield.co.uk/view_episode_scripts.php?episode=s01e03&tv-show=heated-rivalry-2025"
  },
  {
    "id": 52,
    "episode": 3,
    "tag": "Серия 3 · эксперт",
    "icon": "🏒",
    "points": 3,
    "q": "Как называется бар, куда Кип приглашает Скотта на день рождения?",
    "options": [
      "The Bluebird",
      "The Sandpiper",
      "The Nightingale",
      "The Kingfisher"
    ],
    "answer": 3,
    "why": "Кип называет The Kingfisher.",
    "source": "https://www.springfieldspringfield.co.uk/view_episode_scripts.php?episode=s01e03&tv-show=heated-rivalry-2025"
  },
  {
    "id": 53,
    "episode": 3,
    "tag": "Серия 3 · эксперт",
    "icon": "🏒",
    "points": 3,
    "q": "На какой день недели приходится день рождения Кипа?",
    "options": [
      "Воскресенье",
      "Субботу",
      "Пятницу",
      "Четверг"
    ],
    "answer": 0,
    "why": "Приглашая Скотта, Кип говорит о воскресенье.",
    "source": "https://www.springfieldspringfield.co.uk/view_episode_scripts.php?episode=s01e03&tv-show=heated-rivalry-2025"
  },
  {
    "id": 54,
    "episode": 3,
    "tag": "Серия 3 · эксперт",
    "icon": "🏒",
    "points": 3,
    "q": "В какой бостонский университет Кип подтверждает подачу заявки отцу?",
    "options": [
      "Tufts",
      "BU",
      "BC",
      "Northeastern"
    ],
    "answer": 1,
    "why": "Он отдельно подтверждает заявку в BU.",
    "source": "https://www.springfieldspringfield.co.uk/view_episode_scripts.php?episode=s01e03&tv-show=heated-rivalry-2025"
  },
  {
    "id": 55,
    "episode": 4,
    "tag": "Серия 4 · эксперт",
    "icon": "🏒",
    "points": 3,
    "q": "Как далеко родительский коттедж от дома Шейна у озера?",
    "options": [
      "В 30 минутах",
      "В 45 минутах",
      "В 10 минутах",
      "В 20 минутах"
    ],
    "answer": 2,
    "why": "В телесюжете названы десять минут.",
    "source": "https://www.springfieldspringfield.co.uk/view_episode_scripts.php?episode=s01e04&tv-show=heated-rivalry-2025"
  },
  {
    "id": 56,
    "episode": 4,
    "tag": "Серия 4 · эксперт",
    "icon": "🏒",
    "points": 3,
    "q": "Почему Илья говорит, что утром после ночёвки не будет тренировки?",
    "options": [
      "Команде дали выходной",
      "Тренировку перенесли на вечер",
      "Команда вылетает до рассвета",
      "Назначен дневной матч"
    ],
    "answer": 3,
    "why": "На следующий день играют днём.",
    "source": "https://www.springfieldspringfield.co.uk/view_episode_scripts.php?episode=s01e04&tv-show=heated-rivalry-2025"
  },
  {
    "id": 57,
    "episode": 4,
    "tag": "Серия 4 · эксперт",
    "icon": "🏒",
    "points": 3,
    "q": "Какой напиток Илья проверяет на холодность, готовя сэндвичи?",
    "options": [
      "Имбирный эль",
      "Кола",
      "Тоник",
      "Лимонад"
    ],
    "answer": 0,
    "why": "Он спрашивает об имбирном эле.",
    "source": "https://www.springfieldspringfield.co.uk/view_episode_scripts.php?episode=s01e04&tv-show=heated-rivalry-2025"
  },
  {
    "id": 58,
    "episode": 4,
    "tag": "Серия 4 · эксперт",
    "icon": "🏒",
    "points": 3,
    "q": "Какой новый бизнес Светланы Илья упоминает за сэндвичами?",
    "options": [
      "Аренду яхт",
      "Продажу дорогих автомобилей",
      "Аренду дорогих автомобилей",
      "Продажу яхт"
    ],
    "answer": 1,
    "why": "Светлана продаёт дорогие машины.",
    "source": "https://www.springfieldspringfield.co.uk/view_episode_scripts.php?episode=s01e04&tv-show=heated-rivalry-2025"
  },
  {
    "id": 59,
    "episode": 4,
    "tag": "Серия 4 · эксперт",
    "icon": "🏒",
    "points": 3,
    "q": "Почему, по Илье, во Флориде его не ненавидят?",
    "options": [
      "Там живёт его спонсор",
      "Он проводит там летние сборы",
      "Там много бостонцев",
      "Он играл за местный клуб"
    ],
    "answer": 2,
    "why": "Он объясняет это количеством бостонцев.",
    "source": "https://www.springfieldspringfield.co.uk/view_episode_scripts.php?episode=s01e04&tv-show=heated-rivalry-2025"
  },
  {
    "id": 60,
    "episode": 4,
    "tag": "Серия 4 · эксперт",
    "icon": "🏒",
    "points": 3,
    "q": "Чем занимается подруга Джеки, с которой Хейден хочет познакомить Шейна?",
    "options": [
      "Йогой для спортсменов",
      "Детской гимнастикой",
      "Реабилитацией после травм",
      "Йогой для мам"
    ],
    "answer": 3,
    "why": "Хейден описывает занятия как йогу для мам.",
    "source": "https://www.springfieldspringfield.co.uk/view_episode_scripts.php?episode=s01e04&tv-show=heated-rivalry-2025"
  },
  {
    "id": 61,
    "episode": 5,
    "tag": "Серия 5 · эксперт",
    "icon": "🏒",
    "points": 3,
    "q": "Какой перестановкой в большинстве Колорадо недовольна Светлана?",
    "options": [
      "Матесон в первой бригаде, Петров во второй",
      "Петров в первой бригаде, Матесон во второй",
      "Матесон в запасе, Петров в меньшинстве",
      "Петров в запасе, Матесон в меньшинстве"
    ],
    "answer": 0,
    "why": "Она считает, что Петров заслуживает первую бригаду.",
    "source": "https://www.springfieldspringfield.co.uk/view_episode_scripts.php?episode=s01e05&tv-show=heated-rivalry-2025"
  },
  {
    "id": 62,
    "episode": 5,
    "tag": "Серия 5 · эксперт",
    "icon": "🏒",
    "points": 3,
    "q": "Чем в разговоре объясняют участие Матесона в Матче звёзд?",
    "options": [
      "Решением капитанов",
      "Голосованием болельщиков",
      "Выбором тренеров",
      "Заменой травмированного"
    ],
    "answer": 1,
    "why": "За Матесона проголосовали болельщики.",
    "source": "https://www.springfieldspringfield.co.uk/view_episode_scripts.php?episode=s01e05&tv-show=heated-rivalry-2025"
  },
  {
    "id": 63,
    "episode": 5,
    "tag": "Серия 5 · эксперт",
    "icon": "🏒",
    "points": 3,
    "q": "Какую помощь Шейн признаёт, когда Илья замечает перемену в одежде?",
    "options": [
      "Юна сменила его гардероб",
      "Спонсор прислал новую коллекцию",
      "Он нанял стилиста",
      "Роуз выбрала весь гардероб"
    ],
    "answer": 2,
    "why": "Шейн признаётся, что нанял стилиста.",
    "source": "https://www.springfieldspringfield.co.uk/view_episode_scripts.php?episode=s01e05&tv-show=heated-rivalry-2025"
  },
  {
    "id": 64,
    "episode": 5,
    "tag": "Серия 5 · эксперт",
    "icon": "🏒",
    "points": 3,
    "q": "Почему после игры в бассейне Илья просит Шейна дать детям деньги?",
    "options": [
      "Автомат не принимает его карту",
      "Он отдал наличные тренеру",
      "В бассейне потерялись купюры",
      "У него нет кошелька"
    ],
    "answer": 3,
    "why": "Обещав награду, Илья обнаруживает отсутствие кошелька.",
    "source": "https://www.springfieldspringfield.co.uk/view_episode_scripts.php?episode=s01e05&tv-show=heated-rivalry-2025"
  },
  {
    "id": 65,
    "episode": 5,
    "tag": "Серия 5 · эксперт",
    "icon": "🏒",
    "points": 3,
    "q": "Какую пару следующих выездов называют после Матча звёзд: Илья — Шейн?",
    "options": [
      "Колумбус — Торонто",
      "Торонто — Колумбус",
      "Колумбус — Оттава",
      "Оттава — Торонто"
    ],
    "answer": 0,
    "why": "Илья летит в Колумбус, Шейн — в Торонто.",
    "source": "https://www.springfieldspringfield.co.uk/view_episode_scripts.php?episode=s01e05&tv-show=heated-rivalry-2025"
  },
  {
    "id": 66,
    "episode": 5,
    "tag": "Серия 5 · эксперт",
    "icon": "🏒",
    "points": 3,
    "q": "Какие родственники Ильи, по его словам, служат в полиции?",
    "options": [
      "Отец и дед",
      "Отец и брат",
      "Отец и дядя",
      "Брат и дядя"
    ],
    "answer": 1,
    "why": "Он называет отца и брата.",
    "source": "https://www.springfieldspringfield.co.uk/view_episode_scripts.php?episode=s01e05&tv-show=heated-rivalry-2025"
  },
  {
    "id": 67,
    "episode": 6,
    "tag": "Серия 6 · эксперт",
    "icon": "🏒",
    "points": 3,
    "q": "В каком канадском ведомстве работает отец Шейна?",
    "options": [
      "Department of Finance",
      "Privy Council Office",
      "Treasury Board",
      "Bank of Canada"
    ],
    "answer": 2,
    "why": "Шейн называет Treasury Board of Canada.",
    "source": "https://www.springfieldspringfield.co.uk/view_episode_scripts.php?episode=s01e06&tv-show=heated-rivalry-2025"
  },
  {
    "id": 68,
    "episode": 6,
    "tag": "Серия 6 · эксперт",
    "icon": "🏒",
    "points": 3,
    "q": "Откуда поступает вода в загородный дом Шейна?",
    "options": [
      "Из частного озера",
      "Из горного источника",
      "Из поселкового водопровода",
      "Из собственной скважины"
    ],
    "answer": 3,
    "why": "Шейн хвастается собственной скважиной.",
    "source": "https://www.springfieldspringfield.co.uk/view_episode_scripts.php?episode=s01e06&tv-show=heated-rivalry-2025"
  },
  {
    "id": 69,
    "episode": 6,
    "tag": "Серия 6 · эксперт",
    "icon": "🏒",
    "points": 3,
    "q": "На какой срок герои договариваются быть откровенными в коттедже?",
    "options": [
      "На две недели",
      "На десять дней",
      "На три недели",
      "На месяц"
    ],
    "answer": 0,
    "why": "Предложение касается следующих двух недель.",
    "source": "https://www.springfieldspringfield.co.uk/view_episode_scripts.php?episode=s01e06&tv-show=heated-rivalry-2025"
  },
  {
    "id": 70,
    "episode": 6,
    "tag": "Серия 6 · эксперт",
    "icon": "🏒",
    "points": 3,
    "q": "Как зовут отца Светланы, которого Илья называет в разговоре о браке?",
    "options": [
      "Александр Вадилевич",
      "Сергей Витров",
      "Сергей Вадилевич",
      "Александр Витров"
    ],
    "answer": 1,
    "why": "Илья называет вратаря Сергея Витрова.",
    "source": "https://www.springfieldspringfield.co.uk/view_episode_scripts.php?episode=s01e06&tv-show=heated-rivalry-2025"
  },
  {
    "id": 71,
    "episode": 6,
    "tag": "Серия 6 · эксперт",
    "icon": "🏒",
    "points": 3,
    "q": "Какой финансовый довод Шейн приводит в пользу Оттавы?",
    "options": [
      "Освобождение от потолка зарплат",
      "Покрытие контракта лигой",
      "Большой запас до потолка зарплат",
      "Готовность Бостона платить часть контракта"
    ],
    "answer": 2,
    "why": "По словам Шейна, Оттава далеко от потолка зарплат.",
    "source": "https://www.springfieldspringfield.co.uk/view_episode_scripts.php?episode=s01e06&tv-show=heated-rivalry-2025"
  },
  {
    "id": 72,
    "episode": 6,
    "tag": "Серия 6 · эксперт",
    "icon": "🏒",
    "points": 3,
    "q": "Как распределяются команды в видеоигре у коттеджа?",
    "options": [
      "Илья — Бостон, Шейн — Монреаль",
      "Илья — Оттава, Шейн — Монреаль",
      "Илья — Монреаль, Шейн — Оттава",
      "Илья — Монреаль, Шейн — Бостон"
    ],
    "answer": 3,
    "why": "Играя, они выбирают команды друг друга.",
    "source": "https://www.springfieldspringfield.co.uk/view_episode_scripts.php?episode=s01e06&tv-show=heated-rivalry-2025"
  }
];
