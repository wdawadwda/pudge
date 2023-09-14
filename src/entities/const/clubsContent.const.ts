export interface TypeClubData {
  id: number;
  map: string;
  img: string;
  name: string;
  address: string;
  phone: string;
  priceImg: string;
  computerSpecs: {
    comfort: string;
    vip: string;
  };
  quantityСomputers: {
    comfort: number;
    vip: number;
    ps: number;
  };
}
export const clubData: TypeClubData[] = [
  {
    id: 1,
    map: "https://yandex.by/map-widget/v1/?ll=27.651916%2C53.931560&mode=search&oid=116879062832&ol=biz&sctx=ZAAAAAgBEAAaKAoSCXmu78NBjjtAES%2F6CtKM80pAEhIJTl5kAn6N3z8RhPBo44i1xD8iBgABAgMEBSgKOABA954GSABiEmxldG9fdl9nb3JvZGU9dHJ1ZWoCdWGdAc3MTD2gAQCoAQC9AZTatODCAQaw7qO0swPqAQDyAQD4AQCCAgVwdWRnZYoCAJICAJoCDGRlc2t0b3AtbWFwcw%3D%3D",
    img: "https://avatars.mds.yandex.net/get-altay/1483503/2a00000186788f4e53801c3eb6fea222b1f7/XXXL",
    name: "Маяк Минска",
    address: "УЛ.ПЕТРА МСТИСЛАВЦА 8",
    phone: "+375 (44) 784-49-12",
    priceImg:
      "https://i.pinimg.com/originals/39/3e/f4/393ef43c9144200261af2dfedce3ec73.png",
    computerSpecs: {
      comfort:
        "https://i.pinimg.com/originals/2e/5b/24/2e5b24090d374bae9364b8b7fb62a9b8.png",
      vip: "https://i.pinimg.com/originals/4a/14/2a/4a142af1b7f6f953383418f695677a3c.png",
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
    address: "Пр.Партизанский,56/2 2 этаж",
    phone: "+375 (44) 522-79-19",
    priceImg:
      "https://i.pinimg.com/originals/39/3e/f4/393ef43c9144200261af2dfedce3ec73.png",
    computerSpecs: {
      comfort:
        "https://i.pinimg.com/originals/2e/5b/24/2e5b24090d374bae9364b8b7fb62a9b8.png",
      vip: "https://i.pinimg.com/originals/4a/14/2a/4a142af1b7f6f953383418f695677a3c.png",
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
    address: "ул. Свердлова, 2",
    phone: "+375 (44) 513-83-74",
    priceImg:
      "https://i.pinimg.com/originals/39/3e/f4/393ef43c9144200261af2dfedce3ec73.png",
    computerSpecs: {
      comfort:
        "https://i.pinimg.com/originals/2e/5b/24/2e5b24090d374bae9364b8b7fb62a9b8.png",
      vip: "https://i.pinimg.com/originals/4a/14/2a/4a142af1b7f6f953383418f695677a3c.png",
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
    address: "ПР.Дзержинского, 69/1",
    phone: "+375 (29) 119-73-21",
    priceImg:
      "https://i.pinimg.com/originals/39/3e/f4/393ef43c9144200261af2dfedce3ec73.png",
    computerSpecs: {
      comfort:
        "https://i.pinimg.com/originals/2e/5b/24/2e5b24090d374bae9364b8b7fb62a9b8.png",
      vip: "https://i.pinimg.com/originals/4a/14/2a/4a142af1b7f6f953383418f695677a3c.png",
    },
    quantityСomputers: {
      comfort: 35,
      vip: 7,
      ps: 1,
    },
  },
];
