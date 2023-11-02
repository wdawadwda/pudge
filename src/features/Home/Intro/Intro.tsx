import { useNavigate } from "react-router-dom";

import pudgeBG from "~/assets/bg/pudgeBG.png";
import { links } from "~/router/Links";
import { Button } from "~/shared/ui/Button/Buttons";

import Style from "./intro.module.scss";

export const HomeIntro = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate(links.club);
  };
  return (
    <div className={Style.intro}>
      <img src={pudgeBG} alt="" className={Style.fixedImage} />
      <div className={Style.introContent}>
        <h1>PUDGE CYBER CLUB</h1>
        <span>Крупнейшая сеть компьютерных клубов в Беларуси</span>
        <Button
          appearance={"primary"}
          isFullWidth={true}
          onClick={handleButtonClick}
        >
          Забронировать место сейчас
        </Button>
      </div>
    </div>
  );
};
