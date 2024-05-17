import { useNavigate } from "react-router-dom";

// import pudgeBG from "~/assets/bg/pudgeBG.png";
import { RepellingBubbles } from "~/features/RepellingBubbles/Animation";
import { QUANTITY_OF_BUBBLES } from "~/features/RepellingBubbles/buble.const";
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
      {/* <img src={pudgeBG} alt="" className={Style.fixedImage} /> */}
      <div className={Style.anim}>
        <RepellingBubbles quantityOfBubbles={QUANTITY_OF_BUBBLES} />
      </div>
      <div className={Style.introContent}>
        <h1 style={{ color: "#82c91e" }}>PUDGE CYBER CLUB</h1>
        <span>Крупнейшая сеть компьютерных клубов в Беларуси</span>
        <Button
          appearance={"primary"}
          isFullWidth={true}
          onClick={handleButtonClick}
          style={{
            pointerEvents: "auto",
            backgroundColor: "#82c91e",
            color: "#1d2c08",
          }}
        >
          Забронировать место сейчас
        </Button>
      </div>
    </div>
  );
};
