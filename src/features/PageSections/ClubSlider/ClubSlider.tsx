import { useState } from "react";

import classNames from "classnames";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { type Swiper as SwiperType } from "swiper/types";
import "swiper/css";

import Style from "./clubSlider.module.scss";
import Styles from "../pageSections.module.scss";

const clubData = [
  {
    id: 1,
    map: "https://yandex.ru/map-widget/v1/?um=constructor%3A56627afdec56a94cd3bcfdf5aa75fac61fb2ba70c7ce93b7ac36f3d62a171941&amp;source=constructor",
    name: "Маяк Минска",
    address: "УЛ.МСТИСЛАВЦА 8",
    phone: "+375 (44)784-49-12",
  },
  {
    id: 2,
    map: "https://yandex.ru/map-widget/v1/?um=constructor%3A56627afdec56a94cd3bcfdf5aa75fac61fb2ba70c7ce93b7ac36f3d62a171941&amp;source=constructor",
    name: "Центр",
    address: "УЛ.СВЕРДЛОВА 2",
    phone: "+375 (44)513-83-74",
  },
  {
    id: 3,
    map: "https://yandex.ru/map-widget/v1/?um=constructor%3A56627afdec56a94cd3bcfdf5aa75fac61fb2ba70c7ce93b7ac36f3d62a171941&amp;source=constructor",
    name: "Петровщина",
    address: "ПР.ДЗЕРЖИНСКОГО 69-2",
    phone: "+375(29)119-73-21",
  },
  {
    id: 4,
    map: "https://yandex.ru/map-widget/v1/?um=constructor%3A56627afdec56a94cd3bcfdf5aa75fac61fb2ba70c7ce93b7ac36f3d62a171941&amp;source=constructor",
    name: "ОТКРЫТИЕ СКОРО",
    address: "-",
    phone: "-",
  },
];

export const ClubSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (swiper: SwiperType) => {
    setCurrentSlide(swiper.activeIndex);
  };

  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return `<span class="${className}">${index + 1}</span>`;
    },
  };

  return (
    <div
      className={`${classNames({
        [Style.clubContainer]: true,
        [Styles.Container]: true,
      })}`}
    >
      <div
        className={`${classNames({
          [Style.clubContent]: true,
          [Styles.Content]: true,
        })}`}
      >
        <h2>Наши клубы:</h2>
        <div className={Style.sliderContainer}>
          <Swiper
            speed={1000}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={pagination}
            modules={[Pagination, Autoplay]}
            onSlideChange={handleSlideChange}
            initialSlide={currentSlide}
            loop={true}
          >
            {clubData.map((club) => (
              <SwiperSlide key={club.id}>
                <div className={Style.slideContent}>
                  <div className={Style.textWrapper}>
                    <h3>{club.name}</h3>
                    <p>{club.address}</p>
                    <a href={`tel:${club.phone}`}>{club.phone}</a>
                  </div>
                  <iframe src={club.map}></iframe>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};
