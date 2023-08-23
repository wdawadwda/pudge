import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import { shoes } from "../data/data";
import { useSelector } from "react-redux";
import { selectSelectedShoes } from "../store/shoes/shoes.selectors";
import { useNavigation } from "@react-navigation/native";

export const ShoesDetail = () => {
  const product = useSelector(selectSelectedShoes);
  const { width } = useWindowDimensions();
  const navigation = useNavigation();
  console.log(product);
  return (
    <View>
      <Pressable onPress={() => navigation.goBack()}>
        <Text>Назад</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate("Home" as never)}>
        <Text>Home</Text>
      </Pressable>
      {product ? (
        <View>
          <Text style={styles.title}>{product.name}</Text>
          <Image
            source={{ uri: product.img }}
            style={{ width: width, aspectRatio: 1 }}
          />
          <FlatList
            data={product.imgs}
            renderItem={({ item }) => (
              <Image
                source={{ uri: item }}
                style={{ width: width, aspectRatio: 1 }}
              />
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
          />
        </View>
      ) : (
        <Text>Товар не найден.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    color: "black",
  },
});
