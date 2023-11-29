import { Image, ScrollView, Text, View } from "react-native";
import { Layout } from "../../features/Layout/Layout";
import { Theme } from "../../store/theme/theme.type";
import * as styles from "../../entities/styles/global.style";
import { fontsStyles } from "../../../App";
import { BackButton } from "../../shared/ui/Button/BackButton/BackButton";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectSelectedNewsId } from "../../store/news/news.selectors";
import { useEffect, useState } from "react";
import { getNewsDataById } from "../../store/api/newsApi";
import { NewsData } from "../../store/news/news.types";
import Loader from "../../shared/ui/Loader/Loader";

export const NewsDetail = ({ theme }: { theme: Theme }) => {
  const id = useSelector(selectSelectedNewsId);
  const navigation = useNavigation();
  const [newsItem, setNews] = useState<NewsData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchNewsData() {
      if (id) {
        try {
          const response = await getNewsDataById(id);
          setNews(response);
          setLoading(false);
        } catch (error) {
          console.error("Ошибка при загрузке данных фотографии:", error);
          setLoading(false);
        }
      }
    }
    void fetchNewsData();
  }, [id]);

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
        <BackButton onPress={() => navigation.goBack()} />
        {loading ? (
          <Loader />
        ) : newsItem ? (
          <View>
            {newsItem.img && (
              <Image
                style={{
                  width: "100%",
                  height: undefined,
                  aspectRatio: 16 / 9,
                }}
                source={{ uri: newsItem.img }}
              />
            )}
            <Text
              style={[
                theme === "dark"
                  ? styles.darkStyles.text1
                  : styles.lightStyles.text1,
                fontsStyles.subtitle2,
              ]}
            >
              {newsItem.title}
            </Text>
            <Text
              style={[
                theme === "dark"
                  ? styles.darkStyles.text2
                  : styles.lightStyles.text2,
                fontsStyles.text,
              ]}
            >
              {newsItem.text1}
            </Text>
            <Text
              style={[
                theme === "dark"
                  ? styles.darkStyles.text1
                  : styles.lightStyles.text1,
                fontsStyles.text,
              ]}
            >
              {newsItem.text2}
            </Text>
            <Text
              style={[
                theme === "dark"
                  ? styles.darkStyles.text2
                  : styles.lightStyles.text2,
                fontsStyles.text,
              ]}
            >
              {newsItem.text3}
            </Text>
          </View>
        ) : (
          <Text
            style={[
              theme === "dark"
                ? styles.darkStyles.text1
                : styles.lightStyles.text1,
              fontsStyles.title,
            ]}
          >
            Данные о новости не доступны.
          </Text>
        )}
      </ScrollView>
    </Layout>
  );
};
