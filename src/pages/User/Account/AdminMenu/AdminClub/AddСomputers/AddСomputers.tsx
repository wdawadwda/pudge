import { yupResolver } from "@hookform/resolvers/yup";
import classNames from "classnames";
import { useForm } from "react-hook-form";

import { type QuantityComputersRequest } from "~/entities/const/content/clubsContent.type";
import { addComputersSchema } from "~/entities/const/validation";
import StylesUser from "~/features/PageSections/User/user.module.scss";
import { Button } from "~/shared/ui/Button/Buttons";
import { fetchClubContent, sendClubData } from "~/store/api/contentApi";
import { useAppDispatch } from "~/store/store.types";

import { type FormField } from "./AddСomputers.type";
import { addComputersFormSchema } from "./formSchema";
import Style from "../../amminMenu.module.scss";

export const AddСomputers = () => {
  const dispatch = useAppDispatch();
  const {
    register,
    formState: { errors, isValid, isDirty },
    getValues,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(addComputersSchema),
  });

  const onClick = () => {
    const formData: QuantityComputersRequest = {
      quantityComputers: {
        name: getValues("name").toLowerCase(),
        comfort: getValues("comfort").toLowerCase(),
        vip: getValues("vip").toLowerCase(),
        bootcamp: getValues("bootcamp").toLowerCase(),
        ps: getValues("ps").toLowerCase(),
      },
    };
    try {
      const responseData = sendClubData(formData);
      console.warn("Успешно отправлено:", responseData);
      void dispatch(fetchClubContent());
    } catch (error) {
      console.error("Ошибка отправки:", error);
    }
  };

  return (
    <div
      className={classNames({
        [Style.AdminBtnContainer]: true,
        [StylesUser.UserContent]: true,
      })}
    >
      <form>
        {addComputersFormSchema.map((field: FormField) => (
          <div key={field.name}>
            <div>
              <label
                className={
                  errors[field.name]
                    ? StylesUser.errorText
                    : isValid
                    ? StylesUser.validText
                    : ""
                }
              >
                {field.label}
              </label>
              <input
                className={
                  errors[field.name]
                    ? StylesUser.errorBg
                    : isValid
                    ? StylesUser.validBG
                    : ""
                }
                type={field.type}
                placeholder={field.placeholder}
                {...register(field.name)}
              />
            </div>
            <span>{errors[field.name]?.message || "\u00A0"}</span>
          </div>
        ))}
        <Button
          type="button"
          onClick={onClick}
          disabled={!isValid || !isDirty}
          appearance="primary"
          isFullWidth={true}
        >
          Добавить клуб
        </Button>
      </form>
    </div>
  );
};
