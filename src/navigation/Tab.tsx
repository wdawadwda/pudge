import { AntDesign } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as stylesConstDark from "../entities/const/style/globalDark.style";
import * as stylesConstLight from "../entities/const/style/globalLight.style";
import { Theme } from "../store/theme/theme.type";
import Contacts from "../screens/Contacts/Contacts";
import { Entypo } from "@expo/vector-icons";
import { StackNavigator, StackNewsNavigator } from "./Stack";

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
        height: 75,
      },
      tabBarLabelStyle: {
        fontSize: 15,
        marginBottom: 10,
      },
    }}
  >
    <Tab.Screen
      name="HomeTab"
      initialParams={{ initialRoute: "Home" }}
      options={{
        tabBarLabel: "Главная",
        tabBarIcon: ({ color }) => (
          <AntDesign name="home" size={35} color={color} />
        ),
        headerShown: false,
      }}
    >
      {() => <StackNavigator theme={theme} />}
    </Tab.Screen>

    <Tab.Screen
      name="ContactsTab"
      initialParams={{ initialRoute: "Contacts" }}
      options={{
        tabBarLabel: "Контакты",
        tabBarIcon: ({ color }) => (
          <AntDesign name="contacts" size={35} color={color} />
        ),
        headerShown: false,
      }}
    >
      {() => <Contacts theme={theme} />}
    </Tab.Screen>

    <Tab.Screen
      name="NewsTab"
      initialParams={{ initialRoute: "News" }}
      options={{
        tabBarLabel: "Новости",
        tabBarIcon: ({ color }) => (
          <Entypo name="news" size={35} color={color} />
        ),
        headerShown: false,
      }}
    >
      {() => <StackNewsNavigator theme={theme} />}
    </Tab.Screen>
  </Tab.Navigator>
);
