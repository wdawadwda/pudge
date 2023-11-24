import { NavigationContainer } from "@react-navigation/native";
import { useColorScheme } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { themeActions } from "../store/theme/theme.slice";
import { useEffect } from "react";
import { selectTheme } from "../store/theme/theme.selectors";
import { Theme } from "../store/theme/theme.type";
import { fetchClubContent, fetchMainMap } from "../store/api/contentApi";
import { useAppDispatch } from "../store/store.types";
import { TabNavigator } from "./Tab";

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
