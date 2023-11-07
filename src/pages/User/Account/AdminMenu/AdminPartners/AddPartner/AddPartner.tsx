import { useState } from "react";

import { yupResolver } from "@hookform/resolvers/yup";
import classNames from "classnames";
import { useForm } from "react-hook-form";

import { addPartnerFormValidationSchema } from "~/entities/const/validation";
import { type ErrorObject } from "~/entities/type/api.type";
import StylesUser from "~/features/PageSections/User/user.module.scss";
import { ServerResponse } from "~/features/ServerResponse/ServerResponse";
import { Loader } from "~/pages/Loader/Loader";
import { Button } from "~/shared/ui/Button/Buttons";
import { fetchPartnersContent, sendPartner } from "~/store/api/contentApi";
import { useAppDispatch } from "~/store/store.types";

import { type FormField } from "./AddPartner.type";
import { addPartnerFormSchema } from "./formSchema";
import Style from "../../amminMenu.module.scss";

export const AddPartner = () => {
  const dispatch = useAppDispatch();
  const [serverResponse, setServerResponse] = useState({
    message: "",
    error: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    formState: { errors, isValid, isDirty },
    getValues,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(addPartnerFormValidationSchema),
  });

  const onClick = () => {
    setIsLoading(true);
    const formData = new FormData();
    const photoFiles = getValues("img");

    if (photoFiles instanceof FileList) {
      formData.append("name", getValues("name").toLowerCase());
      formData.append("url", getValues("url"));
      formData.append("img", photoFiles[0]);
    }

    sendPartner(formData)
      .then(() => {
        setServerResponse({
          message: `Успешно`,
          error: "",
        });
        return dispatch(fetchPartnersContent());
      })
      .catch((error: ErrorObject) => {
        setServerResponse({
          message: "",
          error: `Что-то пошло не так ${error.message}`,
        });
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
      {isLoading && (
        <Loader
          loaderWidth="100%"
          loaderHeight="100%"
          dotSize="30px"
          loaderMargin="0 0 77px 0"
        />
      )}
      <form>
        {serverResponse && (serverResponse.message || serverResponse.error) && (
          <ServerResponse
            message={serverResponse.message}
            error={serverResponse.error}
          />
        )}
        {addPartnerFormSchema.map((field: FormField) => (
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
          Добавить Партнёров
        </Button>
      </form>
    </div>
  );
};
