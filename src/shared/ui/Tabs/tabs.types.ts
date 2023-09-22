export interface TabsProperties {
  activeTab: FormState;
  tabs: FormState[];
  handleTabClick: (tab: FormState) => void;
}

export type FormState = string[number];
