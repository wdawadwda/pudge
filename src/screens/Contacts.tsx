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

export default function Contacts() {
  return (
    <View style={styles.container}>
      <Text>Contacts</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  img: {
    width: "100%",
    aspectRatio: 1,
  },
});
