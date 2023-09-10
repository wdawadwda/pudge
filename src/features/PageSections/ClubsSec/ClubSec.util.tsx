import { clubData } from "~/features/PageSections/ClubSlider/sliderContent.const";
import { tabsClubs } from "~/shared/ui/Tabs/tabs.const";

import { ClubsDescr } from "./ClubDescr/ClubsDescr";

export interface ComputerSpecs {
  comfort: string;
  vip: string;
}

export function getActiveForm(activeTab: string) {
  let imgPrice = "";
  let computerSpecs: ComputerSpecs = {
    comfort: "",
    vip: "",
  };

  switch (activeTab) {
    case tabsClubs[0]: {
      imgPrice = clubData[0]?.priceIMG || "";
      computerSpecs = clubData[0]?.computerSpecs || {};
      return (
        <ClubsDescr
          title={tabsClubs[0]}
          imgPrice={imgPrice}
          computerSpecs={computerSpecs}
        />
      );
    }

    case tabsClubs[1]: {
      imgPrice = clubData[1]?.priceIMG || "";
      computerSpecs = clubData[1]?.computerSpecs || {};
      return (
        <ClubsDescr
          title={tabsClubs[1]}
          imgPrice={imgPrice}
          computerSpecs={computerSpecs}
        />
      );
    }

    case tabsClubs[2]: {
      imgPrice = clubData[2]?.priceIMG || "";
      computerSpecs = clubData[2]?.computerSpecs || {};
      return (
        <ClubsDescr
          title={tabsClubs[2]}
          imgPrice={imgPrice}
          computerSpecs={computerSpecs}
        />
      );
    }

    case tabsClubs[3]: {
      imgPrice = clubData[3]?.priceIMG || "";
      computerSpecs = clubData[3]?.computerSpecs || {};
      return (
        <ClubsDescr
          title={tabsClubs[3]}
          imgPrice={imgPrice}
          computerSpecs={computerSpecs}
        />
      );
    }

    default: {
      return null;
    }
  }
}
