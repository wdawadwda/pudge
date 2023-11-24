import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home/Home";
import Shoes from "../screens/Shoes";
import { ShoesDetail } from "../screens/ShoesDetail";
import { Theme } from "../store/theme/theme.type";
import SelectedClub from "../screens/SelectedClub/SelectedClub";
import { Booking } from "../screens/Modal/Booking/Booking";
import Contacts from "../screens/Contacts/Contacts";

const Stack = createNativeStackNavigator();

export const StackNavigator = ({ theme }: { theme: Theme }) => (
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

    {/* Удалить */}
    <Stack.Screen
      name="Shoes"
      component={Shoes}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen name="Shoes Detail" component={ShoesDetail} />
    {/* Удалить */}
  </Stack.Navigator>
);
