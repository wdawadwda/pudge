import { useSelector } from "react-redux";

import Logo from "~/assets/logo/logo.png";
import { ReactComponent as Iinstagram } from "~/assets/social/instagram.svg";
import { ReactComponent as VK } from "~/assets/social/vk.svg";
import { type TypeClubContacts } from "~/entities/const/content/clubsContent.type";
import { socialLinks } from "~/router/Links";
import { Button } from "~/shared/ui/Button/Buttons";
import { selectModalContent } from "~/store/modal/modal.selectors";

import Style from "./modalBook.module.scss";

export const ModalBook = () => {
  const content = useSelector(selectModalContent) as TypeClubContacts;

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
          <a href={content.instagram} target="_blank" rel="noreferrer">
            <Button appearance="primary" contentLeft={<Iinstagram />} />
          </a>
        </div>
      </div>
    </div>
  );
};
