import { NavigationContainer, ParamListBase } from "@react-navigation/native";
import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Shoes from "../screens/Shoes";
import { type RootStackParamList } from "./navigation.type";
import Ionicons from "@expo/vector-icons/Ionicons";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { ShoesDetail } from "../screens/ShoesDetail";
import { useColorScheme } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { themeActions } from "../store/theme/theme.slice";
import { useEffect } from "react";
import { selectTheme } from "../store/theme/theme.selectors";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Contacts from "../screens/Contacts";
import About from "../screens/About";
import Burger from "../screens/Burger";
import { createDrawerNavigator } from "@react-navigation/drawer";
import User from "../screens/User";
import * as stylesConstDark from "../entities/const/style/globalDark";
import * as stylesConstLight from "../entities/const/style/globalLight";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// Определите стек-навигатор с экранами Home, Shoes и ShoesDetail
const StackNavigator = ({ theme }: { theme: Theme }) => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: theme === "dark" ? "black" : "white",
      },
      headerTintColor: theme === "dark" ? "white" : "black",
    }}
  >
    <Stack.Screen
      name="Home"
      options={{
        headerShown: false, // Убираем заголовок с экрана "User"
      }}
      component={() => <Home theme={theme} />}
    />
    <Stack.Screen
      name="Shoes"
      component={Shoes}
      options={{
        headerShown: false, // Убираем заголовок с экрана "User"
      }}
    />
    <Stack.Screen name="Shoes Detail" component={ShoesDetail} />
  </Stack.Navigator>
);

// Определите таб-навигатор с экранами Home, Contacts и About
const TabNavigator = ({ theme }: { theme: Theme }) => (
  <Tab.Navigator
    screenOptions={{
      tabBarActiveTintColor: stylesConstDark.backgroundColorSecond3,
      tabBarInactiveTintColor: theme === "dark" ? "gray" : "gray",
      tabBarStyle: {
        backgroundColor:
          theme === "dark"
            ? stylesConstDark.backgroundColor
            : stylesConstLight.backgroundColor,
        borderTopColor: stylesConstDark.backgroundColorSecond3,
      },
    }}
  >
    <Tab.Screen
      name="Home"
      component={() => <StackNavigator theme={theme} />}
      initialParams={{ initialRoute: "Home" }}
      options={{
        tabBarLabel: "Главная",
        tabBarIcon: ({ color, size }) => (
          <AntDesign name="home" size={size} color={color} />
        ),
        headerShown: false,
      }}
    />
    <Tab.Screen
      name="Contacts"
      component={Contacts}
      options={{
        tabBarLabel: "Контакты",
        tabBarIcon: ({ color, size }) => (
          <AntDesign name="contacts" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="About"
      component={About}
      options={{
        tabBarLabel: "О нас",
        tabBarIcon: ({ color, size }) => (
          <AntDesign name="infocirlceo" size={size} color={color} />
        ),
      }}
    />
  </Tab.Navigator>
);

export const Navigation = () => {
  const isDark = useColorScheme();
  const dispatch = useDispatch();
  const theme: Theme = useSelector(selectTheme);
  useEffect(() => {
    dispatch(themeActions.setTheme(isDark ? "dark" : "light"));
  }, []);
  return (
    <NavigationContainer>
      <TabNavigator theme={theme} />
    </NavigationContainer>
  );
};

export type Theme = "dark" | "light" | null;
