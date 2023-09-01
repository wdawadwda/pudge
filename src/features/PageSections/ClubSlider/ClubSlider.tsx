import { useState } from "react";

import classNames from "classnames";
import { Link } from "react-router-dom";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { type Swiper as SwiperType } from "swiper/types";
import "swiper/css";

import { links } from "~/router/Links";

import Style from "./clubSlider.module.scss";
import { clubData } from "./sliderContent.const";
import Styles from "../pageSections.module.scss";

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
                <Link
                  to={`${links.clubs}/${club.id}`}
                  className={Style.slideContent}
                >
                  <div className={Style.textWrapper}>
                    <h3>{club.name}</h3>
                    <p>{club.address}</p>
                    <span>{club.phone}</span>
                  </div>
                  {/* <iframe src={club.map}></iframe> */}
                  <img src={club.img} alt="" />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};
