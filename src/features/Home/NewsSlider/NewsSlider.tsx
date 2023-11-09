import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { type Swiper as SwiperType } from "swiper/types";

import "swiper/css";
import { links } from "~/router/Links";
import { getNewsDataLast } from "~/store/api/newsApi";
import { type NewsData } from "~/store/news/news.types";

import Style from "./newsSlider.module.scss";

export const NewsSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const handleSlideChange = (swiper: SwiperType) => {
    setCurrentSlide(swiper.activeIndex);
  };
  const [news, setNews] = useState<NewsData[] | null>(null);

  useEffect(() => {
    async function fetchNewsData() {
      try {
        const response = await getNewsDataLast();
        setNews(response);
      } catch (error) {
        console.error("Ошибка при загрузке данных", error);
      }
    }
    void fetchNewsData();
  }, []);

  return (
    <div className={Style.newsContainer}>
      <h2>Наши новинки:</h2>
      <div className={Style.newsContent}>
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
          {news
            ? news.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className={Style.slideContent}>
                    <Link
                      className={Style.link}
                      to={`${links.newsBase}/1/${item.id}`}
                    >
                      <img src={item.img} alt="" />
                      <span>{item.title}</span>
                    </Link>
                  </div>
                </SwiperSlide>
              ))
            : null}
        </Swiper>
      </div>
    </div>
  );
};
