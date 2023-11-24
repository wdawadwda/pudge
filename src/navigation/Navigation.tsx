import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home/Home";
import Shoes from "../screens/Shoes";
import { AntDesign } from "@expo/vector-icons";
import { ShoesDetail } from "../screens/ShoesDetail";
import { useColorScheme } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { themeActions } from "../store/theme/theme.slice";
import { useEffect } from "react";
import { selectTheme } from "../store/theme/theme.selectors";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Contacts from "../screens/Contacts";
import About from "../screens/About";
import * as stylesConstDark from "../entities/const/style/globalDark.style";
import * as stylesConstLight from "../entities/const/style/globalLight.style";
import { Theme } from "../store/theme/theme.type";
import { fetchClubContent, fetchMainMap } from "../store/api/contentApi";
import { useAppDispatch } from "../store/store.types";
import SelectedClub from "../screens/SelectedClub/SelectedClub";
import { Booking } from "../screens/Modal/Booking/Booking";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

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
        headerShown: false,
      }}
    >
      {() => <Home theme={theme} />}
    </Stack.Screen>
    <Stack.Screen
      name="SelectedClub"
      options={{
        headerShown: false,
      }}
    >
      {() => <SelectedClub theme={theme} />}
    </Stack.Screen>
    <Stack.Screen
      name="Booking"
      options={{
        headerShown: false,
      }}
    >
      {() => <Booking theme={theme} />}
    </Stack.Screen>
    <Stack.Screen
      name="Shoes"
      component={Shoes}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen name="Shoes Detail" component={ShoesDetail} />
  </Stack.Navigator>
);

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
  const appDispatch = useAppDispatch();
  const theme: Theme = useSelector(selectTheme);

  useEffect(() => {
    dispatch(themeActions.setTheme(isDark ? "dark" : "light"));
  }, []);

  useEffect(() => {
    const clubContentPromise = appDispatch(fetchClubContent());
    const mainMapContentPromise = appDispatch(fetchMainMap());
    return () => {
      clubContentPromise.abort("cancelled");
      mainMapContentPromise.abort("cancelled");
    };
  }, [appDispatch]);

  return (
    <NavigationContainer>
      <TabNavigator theme={theme} />
    </NavigationContainer>
  );
};
