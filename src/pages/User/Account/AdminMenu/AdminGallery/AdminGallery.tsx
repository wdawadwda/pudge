import { useNavigate } from "react-router-dom";

import { redirectTo } from "~/entities/utils/navigate.utils";
import { links } from "~/router/Links";
import { Button } from "~/shared/ui/Button/Buttons";

export const AdminGallery = () => {
  const navigate = useNavigate();
  return (
    <>
      <Button
        isFullWidth={true}
        appearance="primary"
        onClick={() => redirectTo(navigate, links.adminGalleryAddPhoto)}
      >
        Добавить Фото
      </Button>
      <Button
        isFullWidth={true}
        appearance="primary"
        onClick={() => redirectTo(navigate, links.adminGalleryRemovePhoto)}
      >
        Удалить Фото
      </Button>
    </>
  );
};
