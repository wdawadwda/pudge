import { clubData } from "~/features/PageSections/ClubSlider/sliderContent.const";
import { tabsClubs } from "~/shared/ui/Tabs/tabs.const";

import { ClubsDescr } from "./ClubDescr/ClubsDescr";

export function getActiveForm(activeTab: string) {
  switch (activeTab) {
    case tabsClubs[0]: {
      return <ClubsDescr data={clubData[0]} />;
    }

    case tabsClubs[1]: {
      return <ClubsDescr data={clubData[1]} />;
    }

    case tabsClubs[2]: {
      return <ClubsDescr data={clubData[2]} />;
    }

    case tabsClubs[3]: {
      return <ClubsDescr data={clubData[3]} />;
    }

    default: {
      return null;
    }
  }
}
