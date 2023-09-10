import { useState } from "react";

import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { type Swiper as SwiperType } from "swiper/types";
import "swiper/css";

import { links } from "~/router/Links";
import { Button } from "~/shared/ui/Button/Buttons";

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
        <div className={Styles.linkClub}>
          <Link to={links.clubs}>
            Наши клубы{" "}
            <span>
              <FontAwesomeIcon icon={faArrowRight} />
            </span>
          </Link>
        </div>

        <div className={Style.sliderContainer}>
          <Swiper
            speed={2500}
            autoplay={{
              delay: 7000,
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
                    <span>{club.phone}</span>
                    <Link to={`#`}>
                      <Button
                        appearance={"primary"}
                        onClick={() => console.warn(club.id)}
                      >
                        Забронировать
                      </Button>
                    </Link>
                  </div>
                  {/* <iframe src={club.map}></iframe> */}
                  <img src={club.img} alt="" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};
