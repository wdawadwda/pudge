import { Theme } from "../../store/theme/theme.type";
import { ReactNode } from "react";

export interface LayoutProps {
  children: ReactNode;
  theme: Theme;
}
