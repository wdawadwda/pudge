import { useDispatch, useSelector } from "react-redux";

import pudgeBG from "~/assets/bg/pudgeBG.png";
import { Modal } from "~/features/Modal/modal";
import { Button } from "~/shared/ui/Button/Buttons";
import { selectIsShowModal } from "~/store/modal/modal.selectors";
import { modalActions } from "~/store/modal/modal.slice";

import Style from "./intro.module.scss";

export const HomeIntro = () => {
  const isShowModal = useSelector(selectIsShowModal);
  const dispatch = useDispatch();

  return (
    <div className={Style.intro}>
      <img src={pudgeBG} alt="" className={Style.fixedImage} />
      <div className={Style.introContent}>
        <h1>PUDGE CYBER CLUB</h1>
        <span>
          Pudge.by – это новый компьютерный клуб в Минске, оборудованный всем
          необходимым для качественной и атмосферной онлайн-игры. К нам в
          киберклуб приходят ценители активного киберспортивного и виртуального
          отдыха, а также для того, чтоб найти единомышленников. Благодаря
          производительным компьютерам, вы можете поиграть в любую новинку или
          состязаться с мощным онлайн-противником без подвисания и «глюков».
        </span>
        <Button
          appearance={"primary"}
          isFullWidth={true}
          onClick={() => dispatch(modalActions.toggleModal())}
        >
          Забронировать место сейчас
        </Button>
      </div>
      {isShowModal && <Modal />}
    </div>
  );
};
