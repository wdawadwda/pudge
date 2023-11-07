import { useEffect } from "react";

import classNames from "classnames";
import { useSelector } from "react-redux";
import { Link, useParams, useSearchParams } from "react-router-dom";

import { NEWS_PER_PAGE } from "~/entities/const/api.const";
import {
  calculateTotalPages,
  getCurrentPage,
} from "~/entities/utils/paginations.utils";
import Styles from "~/features/PageSections/pageSections.module.scss";
import { Pagination } from "~/features/Paginations/Pagination";
import { links } from "~/router/Links";
import { getNewsData } from "~/store/api/newsApi";
import {
  selectNewsData,
  selectQuantityNews,
  selectQuantityNewsStatus,
} from "~/store/news/news.selectors";
import { useAppDispatch } from "~/store/store.types";

import Style from "./news.module.scss";
import { Loader } from "../Loader/Loader";

export const News = () => {
  const { page } = useParams();
  const [searchParameters, setSearchParameters] = useSearchParams();
  const { quantityNews } = useSelector(selectQuantityNews);
  const status = useSelector(selectQuantityNewsStatus);
  const newsData = useSelector(selectNewsData);
  const dispatch = useAppDispatch();

  const totalPages = calculateTotalPages(quantityNews, NEWS_PER_PAGE);

  const currentPage = page
    ? +page < 1
      ? 1
      : +page > totalPages
      ? totalPages
      : +page
    : getCurrentPage(searchParameters, totalPages);

  useEffect(() => {
    if (currentPage) {
      void dispatch(
        getNewsData({
          page: currentPage,
          perPage: NEWS_PER_PAGE,
        })
      );
    }
  }, [currentPage, dispatch]);

  return (
    <div
      className={classNames({
        [Style.NewsContainer]: true,
        [Styles.Container]: true,
      })}
    >
      <h2>Новости:</h2>
      <div
        className={classNames({
          [Style.NewsContent]: true,
          [Styles.Content]: true,
          [Style.LoadingContainer]: status === "loading",
        })}
      >
        {status === "loading" ? (
          <Loader
            loaderWidth="100%"
            loaderHeight="100%"
            dotSize="30px"
            loaderMargin="0 0 77px 0"
          />
        ) : newsData ? (
          <>
            {newsData.map((item) => (
              <Link
                className={Style.link}
                to={`${links.newsBase}/${currentPage}/${item.id}`}
                key={item.id}
              >
                <img src={item.img} />
                <h3>{item.title}</h3>
              </Link>
            ))}
          </>
        ) : null}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        baseUrl={`${links.newsBase}`}
        onPageChange={(nextPage) => {
          setSearchParameters((old) => {
            old.set("page", `${nextPage}`);
            return old;
          });
        }}
      />
    </div>
  );
};
