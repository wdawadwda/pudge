import {
  FlatList,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { shoes } from "../data/data";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { shoesActions } from "../store/shoes/shoes.slice";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "../shared/ui/Button/Button";

// FlatList лучше не вкладывать в ScrollView

export default function Shoes() {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handlePress = (itemId: string) => {
    dispatch(shoesActions.setSelectedShoes(itemId));
    navigation.navigate("Shoes Detail" as never);
  };
  return (
    <SafeAreaView style={styles.container}>
      <Button onPress={() => navigation.goBack()}>
        <Text style={styles.headerText}>Назад</Text>
      </Button>
      <FlatList
        data={shoes}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => handlePress(item.id)}
            style={{ width: "50%", padding: 1 }}
          >
            <Image source={{ uri: item.img }} style={styles.img} />
          </Pressable>
        )}
        numColumns={2}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 64, // Задаем высоту в 64px
    flexDirection: "row", // Устанавливаем направление flex-контейнера в "ряд" (горизонтально)
    alignItems: "center", // Выравниваем элементы по центру по вертикали
  },
  headerText: {
    flex: 1, // Задаем флекс 1, чтобы текст занимал доступное пространство
    textAlign: "center", // Выравниваем текст по центру (горизонтально)
    alignSelf: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  img: {
    width: "100%",
    aspectRatio: 1,
  },
});
