import classNames from "classnames";
import { useSelector } from "react-redux";

import Styles from "~/features/PageSections/pageSections.module.scss";
import { Button } from "~/shared/ui/Button/Buttons";
import { deletePartner, fetchPartnersContent } from "~/store/api/contentApi";
import { selectPartnersData } from "~/store/content/content.selectors";
import { useAppDispatch } from "~/store/store.types";

export const RemovePartners = () => {
  const dispatch = useAppDispatch();
  const partners = useSelector(selectPartnersData);

  const handleDelete = async (id: number) => {
    try {
      await deletePartner(id);
      alert("Успешно удалено");
      return dispatch(fetchPartnersContent());
    } catch {
      alert("Ошибка при удалении");
    }
  };

  return (
    <div
      className={`${classNames({
        [Styles.Container]: true,
      })}`}
    >
      <div
        className={`${classNames({
          [Styles.Content]: true,
        })}`}
      >
        <ul>
          {partners.map((partner) => (
            <>
              <li style={{ marginBottom: "50px" }} key={partner.id}>
                <p>{`Вы точно хотите удалить ${partner.name}?`}</p>
                <Button
                  appearance={"alert"}
                  isFullWidth={false}
                  onClick={() => {
                    void handleDelete(partner.id);
                  }}
                >
                  Удалить
                </Button>
                <p>{`Название: ${partner.name}`}</p>
                <p>{`Ссылка: ${partner.url}`}</p>
                <img
                  src={partner.img}
                  alt={partner.name}
                  style={{ width: "100%", height: "auto" }}
                />
              </li>
            </>
          ))}
        </ul>
      </div>
    </div>
  );
};
