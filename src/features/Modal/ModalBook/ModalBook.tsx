import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Logo from "~/assets/logo/logo.png";
import { ReactComponent as Iinstagram } from "~/assets/social/instagram.svg";
import { ReactComponent as VK } from "~/assets/social/vk.svg";
import { redirectTo } from "~/entities/utils/navigate.utils";
import { links, socialLinks } from "~/router/Links";
import { Button } from "~/shared/ui/Button/Buttons";
import { selectModalContent } from "~/store/modal/modal.selectors";
import { modalActions } from "~/store/modal/modal.slice";
import { type Booking } from "~/store/modal/modal.type";

import Style from "./modalBook.module.scss";

export const ModalBook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const content = useSelector(selectModalContent) as Booking;

  return (
    <div className={Style.modalBook}>
      <div className={Style.modalBook__top}>
        <img src={Logo} alt="" />
        <h2>Варианты брони:</h2>
      </div>
      <div className={Style.modalBook__bottom}>
        <div className={Style.btnWrapper}>
          <Button
            onClick={() => {
              dispatch(modalActions.toggleModal(null));
              redirectTo(navigate, links.booking);
            }}
            appearance="primary"
          >
            Через сайт
          </Button>
          <a href={socialLinks.vk} target="_blank" rel="noreferrer">
            <Button appearance="primary" contentLeft={<VK />}></Button>
          </a>
          <a href={content.contacts.instagram} target="_blank" rel="noreferrer">
            <Button appearance="primary" contentLeft={<Iinstagram />} />
          </a>
        </div>
      </div>
    </div>
  );
};
