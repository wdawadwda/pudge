import { useNavigate } from "react-router-dom";

import { redirectTo } from "~/entities/utils/navigate.utils";
import { links } from "~/router/Links";
import { Button } from "~/shared/ui/Button/Buttons";

import Style from "../amminMenu.module.scss";

export const AdminPartners = () => {
  const navigate = useNavigate();
  return (
    <div className={Style.AdminBtnContainer}>
      <Button
        isFullWidth={true}
        appearance="primary"
        onClick={() => redirectTo(navigate, links.adminPartnersAdd)}
      >
        Добавить партнёров
      </Button>
      <Button
        isFullWidth={true}
        appearance="primary"
        onClick={() => redirectTo(navigate, links.adminPartnersRemove)}
      >
        Улалить партнёров
      </Button>
    </div>
  );
};
