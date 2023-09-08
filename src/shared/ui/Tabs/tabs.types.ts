import { type tabsClubs } from "./tabs.const";

export interface TabsProperties {
  activeTab: FormState;
  tabs: FormState[];
  handleTabClick: (tab: FormState) => void;
}

export type FormState = (typeof tabsClubs)[number];
