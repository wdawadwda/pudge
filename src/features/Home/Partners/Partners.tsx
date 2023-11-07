import { useState } from "react";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { type Swiper as SwiperType } from "swiper/types";

import "swiper/css";

import { selectPartnersData } from "~/store/content/content.selectors";

import Style from "./partners.module.scss";

export const Partners = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const partners = useSelector(selectPartnersData);
  const handleSlideChange = (swiper: SwiperType) => {
    setCurrentSlide(swiper.activeIndex);
  };

  return (
    <div className={Style.partnersContainer}>
      <h2>Наши партнёры:</h2>
      <div className={Style.partnersContent}>
        <Swiper
          speed={2500}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          onSlideChange={handleSlideChange}
          initialSlide={currentSlide}
          loop={true}
        >
          {partners.map((partner) => (
            <SwiperSlide key={partner.id}>
              <div className={Style.slideContent}>
                <Link to={partner.url} target="_blank">
                  <img src={partner.img} alt="" />
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
