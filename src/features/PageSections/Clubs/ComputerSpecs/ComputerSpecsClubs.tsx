import classNames from "classnames";

import { type TypeClubComputerSpecs } from "~/entities/const/content/clubsContent.type";
import { Expand } from "~/shared/ui/Expand/Expand";
import { Tabs } from "~/shared/ui/Tabs/Tab";
import { type FormState } from "~/shared/ui/Tabs/tabs.types";
import { useTabs } from "~/shared/ui/Tabs/useTabs";

import { getActiveForm } from "./computerSpecs.utils";
import Style from "./computerSpecsClubs.module.scss";
import Styles from "../../pageSections.module.scss";

export const ComputerSpecsClubs = ({
  title,
  сomputerData,
}: {
  title: string;
  сomputerData: TypeClubComputerSpecs;
}) => {
  const tabsName = Object.keys(сomputerData);
  const { activeTab, handleTabClick } = useTabs<FormState>(tabsName[0]);
  const activeForm: JSX.Element | null = getActiveForm(
    activeTab,
    tabsName,
    сomputerData
  );
  return (
    <>
      <div
        className={`${classNames({
          [Style.ComputerSpecsClubsContent]: true,
          [Styles.Content]: true,
        })}`}
      >
        <Expand titleExpand={`Железо ${title}`}>
          <Tabs
            activeTab={activeTab}
            tabs={tabsName}
            handleTabClick={handleTabClick}
          />
          {activeForm}
        </Expand>
      </div>
    </>
  );
};
