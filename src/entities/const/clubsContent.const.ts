import { type TypeClubData } from "./clubsContent.type";

export const clubData: TypeClubData[] = [
  {
    id: 1,
    map: "https://yandex.by/map-widget/v1/?ll=27.651916%2C53.931560&mode=search&oid=116879062832&ol=biz&sctx=ZAAAAAgBEAAaKAoSCXmu78NBjjtAES%2F6CtKM80pAEhIJTl5kAn6N3z8RhPBo44i1xD8iBgABAgMEBSgKOABA954GSABiEmxldG9fdl9nb3JvZGU9dHJ1ZWoCdWGdAc3MTD2gAQCoAQC9AZTatODCAQaw7qO0swPqAQDyAQD4AQCCAgVwdWRnZYoCAJICAJoCDGRlc2t0b3AtbWFwcw%3D%3D",
    img: "https://avatars.mds.yandex.net/get-altay/1483503/2a00000186788f4e53801c3eb6fea222b1f7/XXXL",
    name: "Маяк Минска",
    contacts: {
      address: "УЛ.ПЕТРА МСТИСЛАВЦА 8",
      phone: "+375 (44) 784-49-12",
      instagram: "https://www.instagram.com/pudge_cyberclub/",
    },
    priceData: {
      comfort: {
        name: "Маяк",
        tariff: "Comfort",
        rows: [
          [
            { main: "1 час" },
            { main: "3", descr: "8:00-16:00" },
            { main: "4", descr: "16:00-8:00" },
          ],
          [
            { main: "Ночь" },
            { main: "15", descr: "пн - пт" },
            { main: "20", descr: "сб - вс" },
          ],
          [{ main: "Ночь+" }, { main: "20", descr: " пн - пт" }],
          [{ main: "Безлимит" }, { main: "35" }],
          [{ main: "Бодрое утро" }, { main: "5 ч за 5" }],
        ],
        description: [
          ["Время действия тарифа Ночь: с 23:00 до 8:00"],
          ["Время действия тарифа Ночь+: с 20:00 до 8:00"],
          ["Время действия тарифа Безлимит: 24 часа"],
          [
            "Время действия тарифа Бодрое: утро пн-пт (8:00-11:00)/сб-вс (8:00-10:00)",
          ],
        ],
      },
      vip: {
        name: "Маяк",
        tariff: "VIP Zone",
        rows: [
          [
            { main: "1 час" },
            { main: "4", descr: "8:00-16:00" },
            { main: "5", descr: "16:00-8:00" },
          ],
          [
            { main: "Ночь" },
            { main: "17", descr: "пн - пт" },
            { main: "22", descr: "сб - с" },
          ],
          [{ main: "Ночь+" }, { main: "22", descr: " пн - пт" }],
          [{ main: "Безлимит" }, { main: "35" }],
          [{ main: "Бодрое утро" }, { main: "5 ч за 6" }],
        ],
        description: [
          ["Время действия тарифа Ночь: с 23:00 до 8:00"],
          ["Время действия тарифа Ночь+: с 20:00 до 8:00"],
          ["Время действия тарифа Безлимит: 24 часа"],
          [
            "Время действия тарифа Бодрое: утро пн-пт (8:00-11:00)/сб-вс (8:00-10:00)",
          ],
        ],
      },
    },
    computerSpecs: {
      comfort: [
        [{ main: "Видеокарта", descr: "GEFORCE RTX 3060" }],
        [{ main: "Процессор", descr: "INTEL CORE I5-11400F" }],
        [{ main: "Оперативная память", descr: "16 GB" }],
        [{ main: "Монитор", descr: "224 / 280 ГЦ" }],
        [{ main: "Мышь", descr: "huprex pulsefire core" }],
        [{ main: "Клавиатура", descr: "huprex alloy originals" }],
        [{ main: "Наушники", descr: "huprex cloud II" }],
        [{ main: "Кресло", descr: "tunder x3 tcs" }],
      ],
      vip: [
        [{ main: "Видеокарта", descr: "GEFORCE RTX 3070" }],
        [{ main: "Процессор", descr: "INTEL CORE I5-11400F" }],
        [{ main: "Оперативная память", descr: "16 GB" }],
        [{ main: "Монитор", descr: "224 / 280 ГЦ" }],
        [{ main: "Мышь", descr: "huprex pulsefire surge" }],
        [{ main: "Клавиатура", descr: "huprex alloy originals" }],
        [{ main: "Наушники", descr: "huprex cloud 5" }],
        [{ main: "Кресло", descr: "dxracer" }],
      ],
    },
    quantityСomputers: {
      comfort: 15,
      vip: 10,
      ps: 5,
    },
  },
  {
    id: 2,
    map: "https://yandex.by/map-widget/v1/?ll=27.632718%2C53.873502&mode=search&oid=144197551305&ol=biz&sctx=ZAAAAAgBEAAaKAoSCXmu78NBjjtAES%2F6CtKM80pAEhIJTl5kAn6N3z8RhPBo44i1xD8iBgABAgMEBSgKOABA%2BZ4GSABiEmxldG9fdl9nb3JvZGU9dHJ1ZWoCdWGdAc3MTD2gAQCoAQC9AZTatODCAQbJieCWmQTqAQDyAQD4AQCCAgVwdWRnZYoCAJICAJoCDGRlc2t0b3AtbWFwcw%3D%3D",
    img: "https://avatars.mds.yandex.net/get-altay/11018317/2a0000018a5a2b4a806d2f28c85c74bb212c/XXXL",
    name: "Партизанская",
    contacts: {
      address: "Пр.Партизанский,56/2 2 этаж",
      phone: "+375 (44) 522-79-19",
      instagram: "https://www.instagram.com/pudge_partizanskaya/",
    },
    priceData: {
      comfort: {
        name: "Партизанская",
        tariff: "Comfort",
        rows: [
          [
            { main: "1 час" },
            { main: "3", descr: "до 16:00" },
            { main: "4", descr: "после 16:00" },
          ],
          [
            { main: "Ночь" },
            { main: "15", descr: "пн - пт" },
            { main: "20", descr: "сб - вс" },
          ],
          [{ main: "Ночь+" }, { main: "20", descr: " пн - пт" }],
          [{ main: "Безлимит" }, { main: "35" }],
          [{ main: "Бодрое утро" }, { main: "5 ч за 5" }],
        ],
        description: [
          ["Время действия тарифа Ночь: с 23:00 до 8:00"],
          ["Время действия тарифа Ночь+: с 20:00 до 8:00"],
          ["Время действия тарифа Безлимит: 24 часа"],
          [
            "Время действия тарифа Бодрое: утро пн-пт (8:00-11:00)/сб-вс (8:00-10:00)",
          ],
        ],
      },
      vip: {
        name: "Партизанская",
        tariff: "VIP Zone",
        rows: [
          [
            { main: "1 час" },
            { main: "4", descr: "до 16:00" },
            { main: "5", descr: "после 16:00" },
          ],
          [
            { main: "Ночь" },
            { main: "17", descr: "пн - пт" },
            { main: "22", descr: "сб - с" },
          ],
          [{ main: "Ночь+" }, { main: "22", descr: " пн - пт" }],
          [{ main: "Безлимит" }, { main: "35" }],
          [{ main: "Бодрое утро" }, { main: "5 ч за 6" }],
        ],
        description: [
          ["Время действия тарифа Ночь: с 23:00 до 8:00"],
          ["Время действия тарифа Ночь+: с 20:00 до 8:00"],
          ["Время действия тарифа Безлимит: 24 часа"],
          [
            "Время действия тарифа Бодрое: утро пн-пт (8:00-11:00)/сб-вс (8:00-10:00)",
          ],
        ],
      },
      bootcamp: {
        name: "Партизанская",
        tariff: "Bootcamp",
        rows: [
          [
            { main: "1 час" },
            { main: "5", descr: "до 16:00" },
            { main: "6", descr: "после 16:00" },
          ],
          [
            { main: "Ночь" },
            { main: "19", descr: "пн - пт" },
            { main: "25", descr: "сб - с" },
          ],
          [{ main: "Ночь+" }, { main: "25", descr: " пн - пт" }],
          [{ main: "Безлимит" }, { main: "45" }],
          [{ main: "Бодрое утро" }, { main: "5 ч за 6" }],
        ],
        description: [
          ["Время действия тарифа Ночь: с 23:00 до 8:00"],
          ["Время действия тарифа Ночь+: с 20:00 до 8:00"],
          ["Время действия тарифа Безлимит: 24 часа"],
          [
            "Время действия тарифа Бодрое: утро пн-пт (8:00-11:00)/сб-вс (8:00-10:00)",
          ],
        ],
      },
    },
    computerSpecs: {
      comfort: [
        [{ main: "Видеокарта", descr: "Информация уточняется" }],
        [{ main: "Процессор", descr: "Информация уточняется" }],
        [{ main: "Оперативная память", descr: "Информация уточняется" }],
        [{ main: "Монитор", descr: "Информация уточняется" }],
        [{ main: "Мышь", descr: "Информация уточняется" }],
        [{ main: "Клавиатура", descr: "Информация уточняется" }],
        [{ main: "Наушники", descr: "Информация уточняется" }],
        [{ main: "Кресло", descr: "Информация уточняется" }],
      ],
      vip: [
        [{ main: "Видеокарта", descr: "Информация уточняется" }],
        [{ main: "Процессор", descr: "Информация уточняется" }],
        [{ main: "Оперативная память", descr: "Информация уточняется" }],
        [{ main: "Монитор", descr: "Информация уточняется" }],
        [{ main: "Мышь", descr: "Информация уточняется" }],
        [{ main: "Клавиатура", descr: "Информация уточняется" }],
        [{ main: "Наушники", descr: "Информация уточняется" }],
        [{ main: "Кресло", descr: "Информация уточняется" }],
      ],
      bootcamp: [
        [{ main: "Видеокарта", descr: "Информация уточняется" }],
        [{ main: "Процессор", descr: "Информация уточняется" }],
        [{ main: "Оперативная память", descr: "Информация уточняется" }],
        [{ main: "Монитор", descr: "Информация уточняется" }],
        [{ main: "Мышь", descr: "Информация уточняется" }],
        [{ main: "Клавиатура", descr: "Информация уточняется" }],
        [{ main: "Наушники", descr: "Информация уточняется" }],
        [{ main: "Кресло", descr: "Информация уточняется" }],
      ],
    },
    quantityСomputers: {
      comfort: 25,
      vip: 5,
      ps: 1,
    },
  },
  {
    id: 3,
    map: "https://yandex.by/map-widget/v1/?ll=27.547522%2C53.897607&mode=search&oid=108324337038&ol=biz&sctx=ZAAAAAgBEAAaKAoSCXmu78NBjjtAES%2F6CtKM80pAEhIJTl5kAn6N3z8RhPBo44i1xD8iBgABAgMEBSgKOABA%2FJ4GSABiEmxldG9fdl9nb3JvZGU9dHJ1ZWoCdWGdAc3MTD2gAQCoAQC9AZTatODCAQaO64jFkwPqAQDyAQD4AQCCAgVwdWRnZYoCAJICAJoCDGRlc2t0b3AtbWFwcw%3D%3D",
    img: "https://avatars.mds.yandex.net/get-altay/1018126/2a00000185a5185c754f22016e6ccfdb216b/XXXL",
    name: "Площадь Ленина",
    contacts: {
      address: "ул. Свердлова, 2",
      phone: "+375 (44) 513-83-74",
      instagram: "https://www.instagram.com/pudge_center/",
    },
    priceData: {
      comfort: {
        name: "Партизанская",
        tariff: "Comfort",
        rows: [
          [
            { main: "1 час" },
            { main: "3", descr: "до 16:00" },
            { main: "4", descr: "после 16:00" },
          ],
          [
            { main: "Ночь" },
            { main: "15", descr: "пн - пт" },
            { main: "20", descr: "сб - вс" },
          ],
          [{ main: "Ночь+" }, { main: "20", descr: " пн - пт" }],
          [{ main: "Безлимит" }, { main: "35" }],
          [{ main: "Бодрое утро" }, { main: "5 ч за 5" }],
        ],
        description: [
          ["Время действия тарифа Ночь: с 23:00 до 8:00"],
          ["Время действия тарифа Ночь+: с 20:00 до 8:00"],
          ["Время действия тарифа Безлимит: 24 часа"],
          [
            "Время действия тарифа Бодрое: утро пн-пт (8:00-11:00)/сб-вс (8:00-10:00)",
          ],
        ],
      },
      vip: {
        name: "Партизанская",
        tariff: "VIP Zone",
        rows: [
          [
            { main: "1 час" },
            { main: "4", descr: "до 16:00" },
            { main: "5", descr: "после 16:00" },
          ],
          [
            { main: "Ночь" },
            { main: "17", descr: "пн - пт" },
            { main: "22", descr: "сб - с" },
          ],
          [{ main: "Ночь+" }, { main: "22", descr: " пн - пт" }],
          [{ main: "Безлимит" }, { main: "40" }],
          [{ main: "Бодрое утро" }, { main: "5 ч за 6" }],
        ],
        description: [
          ["Время действия тарифа Ночь: с 23:00 до 8:00"],
          ["Время действия тарифа Ночь+: с 20:00 до 8:00"],
          ["Время действия тарифа Безлимит: 24 часа"],
          [
            "Время действия тарифа Бодрое: утро пн-пт (8:00-11:00)/сб-вс (8:00-10:00)",
          ],
        ],
      },
      bootcamp: {
        name: "Партизанская",
        tariff: "Bootcamp",
        rows: [
          [
            { main: "1 час" },
            { main: "5", descr: "до 16:00" },
            { main: "6", descr: "после 16:00" },
          ],
          [
            { main: "Ночь" },
            { main: "19", descr: "пн - пт" },
            { main: "25", descr: "сб - с" },
          ],
          [{ main: "Ночь+" }, { main: "25", descr: " пн - пт" }],
          [{ main: "Безлимит" }, { main: "45" }],
          [{ main: "Бодрое утро" }, { main: "5 ч за 6" }],
        ],
        description: [
          ["Время действия тарифа Ночь: с 23:00 до 8:00"],
          ["Время действия тарифа Ночь+: с 20:00 до 8:00"],
          ["Время действия тарифа Безлимит: 24 часа"],
          [
            "Время действия тарифа Бодрое: утро пн-пт (8:00-11:00)/сб-вс (8:00-10:00)",
          ],
        ],
      },
    },
    computerSpecs: {
      comfort: [
        [{ main: "Видеокарта", descr: "GEFORCE RTX 3060" }],
        [{ main: "Процессор", descr: "INTEL CORE I5-11400F" }],
        [{ main: "Оперативная память", descr: "16 GB" }],
        [{ main: "Монитор", descr: "224 / 280 ГЦ" }],
        [{ main: "Мышь", descr: "huprex pulsefire core" }],
        [{ main: "Клавиатура", descr: "huprex alloy originals" }],
        [{ main: "Наушники", descr: "huprex cloud II" }],
        [{ main: "Кресло", descr: "tunder x3 tc5" }],
      ],
      vip: [
        [{ main: "Видеокарта", descr: "GEFORCE RTX 3070" }],
        [{ main: "Процессор", descr: "INTEL CORE I5-11400F" }],
        [{ main: "Оперативная память", descr: "16 GB" }],
        [{ main: "Монитор", descr: "224 / 280 ГЦ" }],
        [{ main: "Мышь", descr: "huprex pulsefire surge" }],
        [{ main: "Клавиатура", descr: "huprex alloy originals" }],
        [{ main: "Наушники", descr: "huprex cloud 5" }],
        [{ main: "Кресло", descr: "dxracer" }],
      ],
      bootcamp: [
        [{ main: "Видеокарта", descr: "GEFORCE RTX 3070" }],
        [{ main: "Процессор", descr: "INTEL CORE I5-11400F" }],
        [{ main: "Оперативная память", descr: "16 GB" }],
        [{ main: "Монитор", descr: "224 / 280 ГЦ" }],
        [{ main: "Мышь", descr: "huprex pulsefire surge" }],
        [{ main: "Клавиатура", descr: "huprex alloy originals" }],
        [{ main: "Наушники", descr: "huprex cloud 5" }],
        [{ main: "Кресло", descr: "dxracer" }],
      ],
    },
    quantityСomputers: {
      comfort: 1,
      vip: 15,
      ps: 0,
    },
  },
  {
    id: 4,
    map: "https://yandex.by/map-widget/v1/?ll=27.488150%2C53.865208&mode=search&oid=163949560820&ol=biz&sctx=ZAAAAAgBEAAaKAoSCXmu78NBjjtAES%2F6CtKM80pAEhIJTl5kAn6N3z8RhPBo44i1xD8iBgABAgMEBSgKOABA%2FJ4GSABiEmxldG9fdl9nb3JvZGU9dHJ1ZWoCdWGdAc3MTD2gAQCoAQC9AZTatODCAQb0h5%2Fh4gTqAQDyAQD4AQCCAgVwdWRnZYoCAJICAJoCDGRlc2t0b3AtbWFwcw%3D%3D",
    img: "https://avatars.mds.yandex.net/get-altay/7740052/2a000001882ab508d50e84c9b7d3914150fb/XXXL",
    name: "Дзержинского",
    contacts: {
      address: "ПР.Дзержинского, 69/1",
      phone: "+375 (29) 119-73-21",
      instagram: "https://www.instagram.com/pudge_petrovschina/",
    },
    priceData: {
      comfort: {
        name: "Партизанская",
        tariff: "Comfort",
        rows: [
          [
            { main: "1 час" },
            { main: "3", descr: "до 16:00" },
            { main: "4", descr: "после 16:00" },
          ],
          [
            { main: "Ночь" },
            { main: "15", descr: "пн - пт" },
            { main: "20", descr: "сб - вс" },
          ],
          [{ main: "Ночь+" }, { main: "20", descr: " пн - пт" }],
          [{ main: "Безлимит" }, { main: "35" }],
          [{ main: "Бодрое утро" }, { main: "5 ч за 5" }],
        ],
        description: [
          ["Время действия тарифа Ночь: с 23:00 до 8:00"],
          ["Время действия тарифа Ночь+: с 20:00 до 8:00"],
          ["Время действия тарифа Безлимит: 24 часа"],
          [
            "Время действия тарифа Бодрое: утро пн-пт (8:00-11:00)/сб-вс (8:00-10:00)",
          ],
        ],
      },
      vip: {
        name: "Партизанская",
        tariff: "VIP Zone",
        rows: [
          [
            { main: "1 час" },
            { main: "4", descr: "до 16:00" },
            { main: "5", descr: "после 16:00" },
          ],
          [
            { main: "Ночь" },
            { main: "17", descr: "пн - пт" },
            { main: "22", descr: "сб - с" },
          ],
          [{ main: "Ночь+" }, { main: "22", descr: " пн - пт" }],
          [{ main: "Безлимит" }, { main: "35" }],
          [{ main: "Бодрое утро" }, { main: "5 ч за 6" }],
        ],
        description: [
          ["Время действия тарифа Ночь: с 23:00 до 8:00"],
          ["Время действия тарифа Ночь+: с 20:00 до 8:00"],
          ["Время действия тарифа Безлимит: 24 часа"],
          [
            "Время действия тарифа Бодрое: утро пн-пт (8:00-11:00)/сб-вс (8:00-10:00)",
          ],
        ],
      },
    },
    computerSpecs: {
      comfort: [
        [{ main: "Видеокарта", descr: "GEFORCE RTX 3060" }],
        [{ main: "Процессор", descr: "INTEL CORE I5-11400F" }],
        [{ main: "Оперативная память", descr: "16 GB" }],
        [{ main: "Монитор", descr: "240 ГЦ" }],
        [{ main: "Мышь", descr: "huprex pulsefire core" }],
        [{ main: "Клавиатура", descr: "huprex alloy originals" }],
        [{ main: "Наушники", descr: "huprex cloud II" }],
        [{ main: "Кресло", descr: "tunder x3 tcs" }],
      ],
      vip: [
        [{ main: "Видеокарта", descr: "GEFORCE RTX 4070" }],
        [{ main: "Процессор", descr: "INTEL CORE I5-11400F" }],
        [{ main: "Оперативная память", descr: "16 GB" }],
        [{ main: "Монитор", descr: "360 ГЦ" }],
        [{ main: "Мышь", descr: "huprex pulsefire surge" }],
        [{ main: "Клавиатура", descr: "huprex alloy originals" }],
        [{ main: "Наушники", descr: "huprex cloud 5" }],
        [{ main: "Кресло", descr: "dxracer" }],
      ],
    },
    quantityСomputers: {
      comfort: 35,
      vip: 7,
      ps: 1,
    },
  },
];
