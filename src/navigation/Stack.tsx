import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home/Home";
import { Theme } from "../store/theme/theme.type";
import SelectedClub from "../screens/SelectedClub/SelectedClub";
import { Booking } from "../screens/Modal/Booking/Booking";
import Contacts from "../screens/Contacts/Contacts";
import News from "../screens/News/News";
import { NewsDetail } from "../screens/News/NewsDetail";
import { StatusBar } from "react-native";

const Stack = createNativeStackNavigator();

export const StackNavigator = ({ theme }: { theme: Theme }) => (
  <>
    <StatusBar
      backgroundColor={theme === "dark" ? "black" : "rgb(82, 82, 82)"}
      barStyle={theme === "dark" ? "light-content" : "dark-content"}
    />
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
        name="Contacts"
        options={{
          headerShown: false,
        }}
      >
        {() => <Contacts theme={theme} />}
      </Stack.Screen>
    </Stack.Navigator>
  </>
);

export const StackNewsNavigator = ({ theme }: { theme: Theme }) => (
  <>
    <StatusBar
      backgroundColor={theme === "dark" ? "black" : "rgb(82, 82, 82)"}
      barStyle={theme === "dark" ? "light-content" : "dark-content"}
    />
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: theme === "dark" ? "black" : "white",
        },
        headerTintColor: theme === "dark" ? "white" : "black",
      }}
    >
      <Stack.Screen
        name="News"
        options={{
          headerShown: false,
        }}
      >
        {() => <News theme={theme} />}
      </Stack.Screen>

      <Stack.Screen
        name="News Detail"
        options={{
          headerShown: false,
        }}
      >
        {() => <NewsDetail theme={theme} />}
      </Stack.Screen>
    </Stack.Navigator>
  </>
);
