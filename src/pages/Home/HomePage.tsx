import { HomeIntro } from "~/features/Home/Intro/Intro";
import { Advantages } from "~/features/PageSections/Home/Advantages/Advantages";
import { ClubsH } from "~/features/PageSections/Home/ClubsH/ClubsH";
// import { ClubSlider } from "~/features/PageSections/ClubSlider/ClubSlider";
import { NeonStrip } from "~/shared/ui/NeonStrip/NeonStrip";

export const HomePage = () => {
  return (
    <>
      <HomeIntro />
      <NeonStrip color={"yellow"} />
      <ClubsH />
      <NeonStrip color={"yellow"} />
      <Advantages />
      {/* <ClubSlider /> */}
    </>
  );
};
