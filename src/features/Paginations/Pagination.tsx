import {
  faArrowLeft,
  faArrowRight,
  faStepBackward,
  faStepForward,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

import { Button } from "~/shared/ui/Button/Buttons";

import Style from "./pagination.module.scss";
import { type PaginationProperties } from "./pagination.type";

export const Pagination = ({
  currentPage,
  totalPages,
  baseUrl,
  onPageChange,
}: PaginationProperties) => {
  const navigate = useNavigate();
  const handlePageChange = (newPage: number) => {
    onPageChange(newPage);
    const newUrl = `${baseUrl}/${newPage}`;
    navigate(newUrl);
  };

  return (
    <div className={Style.pagination}>
      <div className={Style.buttonWrapper}>
        <Button
          className={Style.buttonWrapper__button}
          onClick={() => handlePageChange(1)}
          disabled={currentPage === 1}
        >
          <FontAwesomeIcon icon={faStepBackward} />
        </Button>
        <Button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </Button>
      </div>
      <div className={Style.pagination__center}>
        Страница {currentPage} из {totalPages}
      </div>
      <div className={Style.buttonWrapper}>
        <Button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <FontAwesomeIcon icon={faArrowRight} />
        </Button>
        <Button
          className={Style.buttonWrapper__button}
          onClick={() => handlePageChange(totalPages)}
          disabled={currentPage === totalPages}
        >
          <FontAwesomeIcon icon={faStepForward} />
        </Button>
      </div>
    </div>
  );
};
