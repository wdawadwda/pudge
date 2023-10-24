import { type NavigateFunction } from "react-router-dom";

export const goBack = (navigate: NavigateFunction) => {
  navigate(-1);
};

export const redirectTo = (navigate: NavigateFunction, path: string) => {
  navigate(path);
};
