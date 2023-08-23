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

//! Первый вариант
// const Stack = createNativeStackNavigator();

// export const Navigation = () => {
//   const isDark = useColorScheme();
//   const dispatch = useDispatch();
//   const theme = useSelector(selectTheme);
//   useEffect(() => {
//     dispatch(themeActions.setTheme(isDark ? "dark" : "light"));
//   }, []);

//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen
//           name="Home"
//           component={Home}
//           options={({ navigation }) => ({
//             headerRight: () => (
//               <AntDesign
//                 name="stepforward"
//                 size={24}
//                 color="black"
//                 onPress={() => navigation.navigate("Shoes")}
//               />
//             ),
//           })}
//         />
//         <Stack.Screen
//           name="Shoes"
//           component={Shoes}
//           options={{
//             presentation: "modal",
//             headerStyle: {
//               backgroundColor: theme === "dark" ? "black" : "white",
//             },
//             headerTintColor: theme === "dark" ? "white" : "black",
//           }}
//         />

//         <Stack.Screen
//           name="Shoes Detail"
//           component={ShoesDetail}
//           options={{ presentation: "modal" }}
//         />
//         {/* <Stack.Group screenOptions={{ presentation: 'modal' }}> вроде не работает
//           <Stack.Screen name='Shoes' component={Shoes} />
//         </Stack.Group> */}
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

//! Второй вариант
//! Бургер почему-то не работает, но можно и так

// const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();

// // Определите стек-навигатор с экранами Home, Shoes и ShoesDetail
// const StackNavigator = ({ theme }: { theme: Theme }) => (
//   <Stack.Navigator
//     screenOptions={{
//       headerStyle: {
//         backgroundColor: theme === "dark" ? "black" : "white",
//       },
//       headerTintColor: theme === "dark" ? "white" : "black",
//     }}
//   >
//     <Stack.Screen
//       name="Home"
//       component={Home}
//       options={({ navigation }) => ({
//         headerRight: () => (
//           <FontAwesome
//             name="bars"
//             size={30}
//             color={theme === "dark" ? "white" : "black"}
//             style={{ margin: 11 }} // Отступ от края
//             onPress={() => navigation.navigate("Burger")}
//           />
//         ),
//         // Остальные опции заголовка, если необходимо
//       })}
//     />
//     <Stack.Screen
//       name="Shoes"
//       component={Shoes}
//       options={({ navigation }) => ({
//         headerLeft: () => (
//           <AntDesign
//             name="arrowleft"
//             size={24}
//             color={theme === "dark" ? "white" : "black"}
//             style={{ margin: 11 }}
//             onPress={() => navigation.navigate("Home")}
//           />
//         ),
//         // Остальные опции заголовка, если необходимо
//       })}
//     />

//     <Stack.Screen name="Shoes Detail" component={ShoesDetail} />
//     <Stack.Screen
//       name="Burger"
//       component={Burger}
//       options={{
//         presentation: "modal",
//         headerLeft: () => null,
//         headerBackVisible: false,
//       }}
//     />
//   </Stack.Navigator>
// );

// // Определите таб-навигатор с экранами Home, Contacts и About
// const TabNavigator = ({ theme }: { theme: Theme }) => (
//   <Tab.Navigator
//     screenOptions={{
//       headerStyle: {
//         backgroundColor: theme === "dark" ? "black" : "white",
//       },
//       headerTintColor: theme === "dark" ? "white" : "black",
//       tabBarStyle: {
//         backgroundColor: theme === "dark" ? "black" : "white",
//       },
//       tabBarActiveTintColor: theme === "dark" ? "white" : "black",
//     }}
//   >
//     <Tab.Screen
//       name="Home"
//       component={(props: NativeStackScreenProps<ParamListBase, "Home">) => (
//         <StackNavigator {...props} theme={theme} />
//       )}
//       options={{
//         tabBarLabel: "Главная", // Название вкладки
//         tabBarIcon: ({ color, size }) => (
//           <AntDesign name="home" size={size} color={color} /> // Иконка для Главной вкладки
//         ),
//         headerShown: false, // Отключение заголовка
//       }}
//     />

//     <Tab.Screen
//       name="Contacts"
//       component={Contacts} // Замените на ваш экран Contacts
//       options={{
//         tabBarLabel: "Контакты",
//         tabBarIcon: ({ color, size }) => (
//           <AntDesign name="contacts" size={size} color={color} /> // Иконка для вкладки "Контакты"
//         ),
//       }}
//     />
//     <Tab.Screen
//       name="About"
//       component={About} // Замените на ваш экран About
//       options={{
//         tabBarLabel: "О нас",
//         tabBarIcon: ({ color, size }) => (
//           <AntDesign name="infocirlceo" size={size} color={color} /> // Иконка для вкладки "О нас"
//         ),
//       }}
//     />
//   </Tab.Navigator>
// );

// export const Navigation = () => {
//   const isDark = useColorScheme();
//   const dispatch = useDispatch();
//   const theme: Theme = useSelector(selectTheme);
//   useEffect(() => {
//     dispatch(themeActions.setTheme(isDark ? "dark" : "light"));
//   }, []);
//   return (
//     <NavigationContainer>
//       <TabNavigator theme={theme} />
//     </NavigationContainer>
//   );
// };

// type Theme = "dark" | "light" | null;

//! Третий вариант вариант
//! Бургер кажется не работал из-за всратых документаций)

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

// Определите бургер-навигатор с экраном User
const DrawerNavigator = ({ theme }: { theme: Theme }) => (
  <Drawer.Navigator>
    <Drawer.Screen name="Home" component={Home} />
    <Drawer.Screen name="User" component={User} />
    <Drawer.Screen
      name="Shoes"
      component={() => <StackNavigator theme={theme} />}
      options={{
        headerShown: false, // Убираем заголовок с экрана "User"
      }}
    />
  </Drawer.Navigator>
);

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
  <Tab.Navigator>
    <Tab.Screen
      name="Home"
      component={() => <DrawerNavigator theme={theme} />}
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

type Theme = "dark" | "light" | null;
