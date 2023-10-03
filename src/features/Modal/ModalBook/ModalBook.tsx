import Logo from "~/assets/logo/logo.png";
import { ReactComponent as Iinstagram } from "~/assets/social/instagram.svg";
import { ReactComponent as VK } from "~/assets/social/vk.svg";
import { socialLinks } from "~/router/Links";
import { Button } from "~/shared/ui/Button/Buttons";

import Style from "./modalBook.module.scss";

export const ModalBook = () => {
  return (
    <div className={Style.modalBook}>
      <div className={Style.modalBook__top}>
        <img src={Logo} alt="" />
        <h2>Варианты брони:</h2>
      </div>
      <div className={Style.modalBook__bottom}>
        <div className={Style.btnWrapper}>
          <Button disabled={true} appearance="primary">
            Через сайт
          </Button>
          <a href={socialLinks.vk} target="_blank" rel="noreferrer">
            <Button appearance="primary" contentLeft={<VK />}></Button>
          </a>
          <a href={socialLinks.instagram} target="_blank" rel="noreferrer">
            <Button appearance="primary" contentLeft={<Iinstagram />}></Button>
          </a>
        </div>
      </div>
    </div>
  );
};
