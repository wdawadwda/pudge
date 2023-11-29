import { Image, Pressable, ScrollView, Text } from "react-native";
import { Layout } from "../../features/Layout/Layout";
import { Theme } from "../../store/theme/theme.type";
import * as styles from "../../entities/styles/global.style";
import { useEffect, useState } from "react";
import { Pagination } from "../../features/Pagination/Pagination";
import { calculateTotalPages } from "../../features/Pagination/pagintions.utils";
import { NEWS_PER_PAGE } from "../../entities/const/api/api.const";
import { useSelector } from "react-redux";
import {
  selectNewsData,
  selectQuantityNews,
  selectQuantityNewsStatus,
} from "../../store/news/news.selectors";
import { getNewsData } from "../../store/api/newsApi";
import { useAppDispatch } from "../../store/store.types";
import Loader from "../../shared/ui/Loader/Loader";
import { fontsStyles } from "../../../App";
import { useNavigation } from "@react-navigation/native";
import { newsActions } from "../../store/news/news.slice";

export default function News({ theme }: { theme: Theme }) {
  const { quantityNews } = useSelector(selectQuantityNews);
  const status = useSelector(selectQuantityNewsStatus);
  const newsData = useSelector(selectNewsData);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = calculateTotalPages(quantityNews, NEWS_PER_PAGE);
  const dispatch = useAppDispatch();
  const navigation = useNavigation();

  useEffect(() => {
    if (currentPage) {
      void dispatch(
        getNewsData({
          page: currentPage,
          perPage: NEWS_PER_PAGE,
        }),
      );
    }
  }, [currentPage, dispatch]);

  const handlePress = (itemId: number) => {
    dispatch(newsActions.setSelectNews(itemId));
    navigation.navigate("News Detail" as never);
  };

  return (
    <Layout theme={theme}>
      <ScrollView
        style={[
          theme === "dark"
            ? styles.darkStyles.container
            : styles.lightStyles.container,
          styles.styles.container,
        ]}
      >
        <Text
          style={[
            theme === "dark"
              ? styles.darkStyles.text1
              : styles.lightStyles.text1,
            fontsStyles.title,
          ]}
        >
          Новости:
        </Text>
        {status !== "loading" ? (
          <>
            <Text> </Text>
            {newsData &&
              newsData.map((item) => (
                <Pressable
                  onPress={() => handlePress(item.id)}
                  style={{ marginBottom: 25 }}
                  key={item.id}
                >
                  <Image
                    style={{
                      width: "100%",
                      height: undefined,
                      aspectRatio: 16 / 9,
                    }}
                    source={{ uri: item.img }}
                  />
                  <Text
                    style={[
                      theme === "dark"
                        ? styles.darkStyles.text1
                        : styles.lightStyles.text1,
                      fontsStyles.subtitle,
                      { textAlign: "center" },
                    ]}
                  >
                    {item.title}
                  </Text>
                </Pressable>
              ))}
          </>
        ) : (
          <>
            <Loader />
          </>
        )}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
          theme={theme}
        />
      </ScrollView>
    </Layout>
  );
}
