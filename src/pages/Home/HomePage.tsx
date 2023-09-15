import { HomeIntro } from "~/features/Home/Intro/Intro";
import { Partners } from "~/features/Home/Partners/Partners";
import { Advantages } from "~/features/PageSections/Home/Advantages/Advantages";
import { ClubsH } from "~/features/PageSections/Home/ClubsH/ClubsH";
import { GeneralMap } from "~/features/PageSections/Home/GeneralMap/GeneralMap";
import { NeonStrip } from "~/shared/ui/NeonStrip/NeonStrip";

export const HomePage = () => {
  return (
    <>
      <HomeIntro />
      <NeonStrip color={"yellow"} />
      <ClubsH />
      <NeonStrip color={"yellow"} />
      <Advantages />
      <NeonStrip color={"yellow"} />
      <GeneralMap />
      <NeonStrip color={"yellow"} />
      <Partners />
    </>
  );
};
