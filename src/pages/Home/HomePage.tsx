import { HomeIntro } from "~/features/Home/Intro/Intro";
import { Advantages } from "~/features/PageSections/Advantages/Advantages";
import { ClubSlider } from "~/features/PageSections/ClubSlider/ClubSlider";

export const HomePage = () => {
  return (
    <>
      <HomeIntro />
      <Advantages />
      <ClubSlider />
    </>
  );
};
