import classNames from "classnames";

import { Tabs } from "~/shared/ui/Tabs/Tab";
import { tabsClubs } from "~/shared/ui/Tabs/tabs.const";
import { type FormState } from "~/shared/ui/Tabs/tabs.types";
import { useTabs } from "~/shared/ui/Tabs/useTabs";

import { getActiveForm } from "./ClubSec.util";
import Style from "./clubsSec.module.scss";
import Styles from "../pageSections.module.scss";

export const ClubsSec = () => {
  const { activeTab, handleTabClick } = useTabs<FormState>(tabsClubs[0]);

  const activeForm: JSX.Element | null = getActiveForm(activeTab);

  return (
    <div
      className={`${classNames({
        [Style.ClubsContainer]: true,
        [Styles.Container]: true,
      })}`}
    >
      <div
        className={`${classNames({
          [Style.ClubsSectionContent]: true,
          [Styles.Content]: true,
        })}`}
      >
        <h1>НАШИ КЛУБЫ:</h1>
        <Tabs
          activeTab={activeTab}
          tabs={tabsClubs}
          handleTabClick={handleTabClick}
        />
        {activeForm}
      </div>
    </div>
  );
};
