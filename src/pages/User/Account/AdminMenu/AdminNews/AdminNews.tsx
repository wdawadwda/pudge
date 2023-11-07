import { useNavigate } from "react-router-dom";

import { redirectTo } from "~/entities/utils/navigate.utils";
import { links } from "~/router/Links";
import { Button } from "~/shared/ui/Button/Buttons";

export const AdminNews = () => {
  const navigate = useNavigate();
  return (
    <>
      <Button
        isFullWidth={true}
        appearance="primary"
        onClick={() => redirectTo(navigate, links.adminNewsAdd)}
      >
        Добавить Новость
      </Button>
    </>
  );
};
