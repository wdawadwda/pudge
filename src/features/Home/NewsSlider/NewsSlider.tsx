import { useEffect, useState } from "react";
import { Theme } from "../../../store/theme/theme.type";
import { getNewsDataLast } from "../../../store/api/newsApi";
import { NewsData } from "../../../store/news/news.types";
import { FlatList, Image, Text, TouchableOpacity } from "react-native";
import * as globalStyles from "../../../entities/styles/global.style";
import { fontsStyles } from "../../../../App";
import { textAlertColor } from "../../../entities/const/style/globalDark.style";
import Loader from "../../../shared/ui/Loader/Loader";
import { useAppDispatch } from "../../../store/store.types";
import { newsActions } from "../../../store/news/news.slice";
import { useNavigation } from "@react-navigation/native";

export default function NewsSlider({ theme }: { theme: Theme }) {
  const [news, setNews] = useState<NewsData[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useAppDispatch();
  const navigation = useNavigation();

  const handlePress = (itemId: number) => {
    dispatch(newsActions.setSelectNews(itemId));
    navigation.navigate("News Detail" as never);
  };

  useEffect(() => {
    async function fetchNewsData() {
      setIsLoading(true);
      try {
        const response = await getNewsDataLast();
        setNews(response);
        setIsLoading(false);
      } catch (error) {
        console.error("Ошибка при загрузке данных", error);
        setIsLoading(false);
      }
    }
    void fetchNewsData();
  }, []);

  return (
    <>
      <Text
        style={[
          theme === "dark"
            ? globalStyles.darkStyles.text1
            : globalStyles.lightStyles.text1,
          fontsStyles.title,
          { textAlign: "center" },
        ]}
      >
        Новости:
      </Text>
      {!isLoading ? (
        news.length > 0 ? (
          <FlatList
            data={news}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => handlePress(item.id)}
                style={{ margin: 10 }}
              >
                <Image
                  source={{ uri: item.img }}
                  style={{
                    width: 300,
                    height: undefined,
                    aspectRatio: 16 / 9,
                  }}
                />
                <Text
                  style={[
                    theme === "dark"
                      ? globalStyles.darkStyles.text2
                      : globalStyles.lightStyles.text2,
                    fontsStyles.subtitle,
                    { textAlign: "center", width: 300 },
                  ]}
                >
                  {item.title}
                </Text>
              </TouchableOpacity>
            )}
          />
        ) : (
          <Text
            style={[
              fontsStyles.subtitle,
              { textAlign: "center", width: "100%", color: textAlertColor },
            ]}
          >
            Новостей пока нет
          </Text>
        )
      ) : (
        <Loader />
      )}
    </>
  );
}
