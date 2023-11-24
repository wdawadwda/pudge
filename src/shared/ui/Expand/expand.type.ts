import { ReactNode } from "react";
import { Theme } from "../../../store/theme/theme.type";

export interface ExpandProps {
  children: ReactNode;
  theme: Theme;
  label: string;
}
