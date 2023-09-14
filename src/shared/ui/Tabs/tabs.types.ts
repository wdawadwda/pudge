export interface TabsProperties {
  activeTab: FormState;
  tabs: FormState[];
  handleTabClick: (tab: FormState) => void;
}

export const tabs = [" ", " "];

export type FormState = (typeof tabs)[number];
