import { AntDesign } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as stylesConstDark from "../entities/const/style/globalDark.style";
import * as stylesConstLight from "../entities/const/style/globalLight.style";
import { Theme } from "../store/theme/theme.type";
import Contacts from "../screens/Contacts/Contacts";
import { Entypo } from "@expo/vector-icons";
import News from "../screens/News/News";
import { StackNavigator } from "./Stack";

const Tab = createBottomTabNavigator();

export const TabNavigator = ({ theme }: { theme: Theme }) => (
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
      name="HomeTab"
      initialParams={{ initialRoute: "Home" }}
      options={{
        tabBarLabel: "Главная",
        tabBarIcon: ({ color, size }) => (
          <AntDesign name="home" size={size} color={color} />
        ),
        headerShown: false,
      }}
    >
      {() => <StackNavigator theme={theme} />}
    </Tab.Screen>

    <Tab.Screen
      name="Contacts"
      initialParams={{ initialRoute: "Contacts" }}
      options={{
        tabBarLabel: "Контакты",
        tabBarIcon: ({ color, size }) => (
          <AntDesign name="contacts" size={size} color={color} />
        ),
        headerShown: false,
      }}
    >
      {() => <Contacts theme={theme} />}
    </Tab.Screen>

    <Tab.Screen
      name="News"
      initialParams={{ initialRoute: "News" }}
      options={{
        tabBarLabel: "Новости",
        tabBarIcon: ({ color, size }) => (
          <Entypo name="news" size={size} color={color} />
        ),
        headerShown: false,
      }}
    >
      {() => <News theme={theme} />}
    </Tab.Screen>
  </Tab.Navigator>
);
