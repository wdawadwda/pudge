import { HomeClub } from "~/features/Home/Club/HomeClub";
import { HomeIntro } from "~/features/Home/Intro/Intro";

export const HomePage = () => {
  return (
    <>
      <HomeIntro />
      <HomeClub />
    </>
  );
};
