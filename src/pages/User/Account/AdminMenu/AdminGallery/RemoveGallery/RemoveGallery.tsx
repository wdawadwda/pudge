import { useState } from "react";

import { yupResolver } from "@hookform/resolvers/yup";
import classNames from "classnames";
import { useForm } from "react-hook-form";

import { removeGalleryValidationSchema } from "~/entities/const/validation";
import { type ErrorObject } from "~/entities/type/api.type";
import StylesUser from "~/features/PageSections/User/user.module.scss";
import { ServerResponse } from "~/features/ServerResponse/ServerResponse";
import { Loader } from "~/pages/Loader/Loader";
import { Button } from "~/shared/ui/Button/Buttons";
import { fetchClubContent } from "~/store/api/contentApi";
import { deleteAllPhotosByClubName } from "~/store/api/galleryApi";
import { useAppDispatch } from "~/store/store.types";

import { removeGallerySchema } from "./formSchema";
import { type FormField } from "./RemoveGallery.type";
import Style from "../../amminMenu.module.scss";

export const RemoveGallery = () => {
  const [serverResponse, setServerResponse] = useState({
    message: "",
    error: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useAppDispatch();
  const {
    register,
    formState: { errors, isValid, isDirty },
    getValues,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(removeGalleryValidationSchema),
  });

  const onClick = () => {
    setIsLoading(true);

    deleteAllPhotosByClubName(getValues("name").toLowerCase())
      .then(() => {
        setServerResponse({ message: `Успешно удалено`, error: "" });
        return dispatch(fetchClubContent());
      })
      .catch((error: ErrorObject) => {
        setServerResponse({ message: "", error: error.message });
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div
      className={classNames({
        [Style.AdminBtnContainer]: true,
        [StylesUser.UserContent]: true,
      })}
    >
      {serverResponse && (serverResponse.message || serverResponse.error) && (
        <ServerResponse
          message={serverResponse.message}
          error={serverResponse.error}
        />
      )}
      {isLoading && (
        <Loader
          loaderWidth="100%"
          loaderHeight="100%"
          dotSize="30px"
          loaderMargin="0 0 77px 0"
        />
      )}
      <form>
        {removeGallerySchema.map((field: FormField) => (
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
          disabled={!isValid || !isDirty || isLoading}
          appearance="primary"
          isFullWidth={true}
        >
          Удалить Галерею
        </Button>
      </form>
    </div>
  );
};
