import { useState } from "react";

import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";

import { Button } from "~/shared/ui/Button/Buttons";
import { selectModalContent } from "~/store/modal/modal.selectors";
import { type ContentPhotoSlider } from "~/store/modal/modal.type";

import Style from "./modalPhotoSlider.module.scss";

export const ModalPhotoSlider = () => {
  const content = useSelector(selectModalContent) as ContentPhotoSlider;
  const [currentImageIndex, setCurrentImageIndex] = useState(
    content.index || 0
  );

  const previousImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  const nextImage = () => {
    if (currentImageIndex < content.data.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const isPreviousDisabled = currentImageIndex === 0;
  const isNextDisabled = currentImageIndex === content.data.length - 1;

  return (
    <div className={Style.modalPhotoSlider}>
      <img src={content.data[currentImageIndex].img} alt="" />

      <Button
        className={Style.modalPhotoSlider__left}
        onClick={previousImage}
        disabled={isPreviousDisabled}
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </Button>
      <Button
        className={Style.modalPhotoSlider__right}
        onClick={nextImage}
        disabled={isNextDisabled}
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </Button>
    </div>
  );
};
