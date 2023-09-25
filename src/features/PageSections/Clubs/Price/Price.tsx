import classNames from "classnames";

import { type TypeClubPriceDataMap } from "~/entities/const/clubsContent.type";
import { Expand } from "~/shared/ui/Expand/Expand";
import { Tabs } from "~/shared/ui/Tabs/Tab";
import { type FormState } from "~/shared/ui/Tabs/tabs.types";
import { useTabs } from "~/shared/ui/Tabs/useTabs";

import Style from "./price.module.scss";
import { getActiveForm } from "./price.utils";
import Styles from "../../pageSections.module.scss";

export const Price = ({
  title,
  data,
}: {
  title: string;
  data: TypeClubPriceDataMap;
}) => {
  const tabsName = Object.keys(data);
  const { activeTab, handleTabClick } = useTabs<FormState>(tabsName[0]);
  const activeForm: JSX.Element | null = getActiveForm(
    activeTab,
    tabsName,
    data
  );
  return (
    <>
      <div
        className={`${classNames({
          [Style.PriceSectionContent]: true,
          [Styles.Content]: true,
        })}`}
      >
        <Expand titleExpand={`Цены ${title}`}>
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
