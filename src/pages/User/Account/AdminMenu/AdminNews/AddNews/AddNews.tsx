import { useState } from "react";

import { yupResolver } from "@hookform/resolvers/yup";
import classNames from "classnames";
import { useForm } from "react-hook-form";

import { addNewsSchema } from "~/entities/const/validation";
import { type ErrorObject } from "~/entities/type/api.type";
import StylesUser from "~/features/PageSections/User/user.module.scss";
import { ServerResponse } from "~/features/ServerResponse/ServerResponse";
import { Loader } from "~/pages/Loader/Loader";
import { Button } from "~/shared/ui/Button/Buttons";
import { sendNewsData } from "~/store/api/newsApi";

import { type FormField } from "./addNews.type";
import { addNewsFormSchema } from "./formSchema";
import Style from "../../amminMenu.module.scss";

export const AddNews = () => {
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
    resolver: yupResolver(addNewsSchema),
  });

  const onClick = () => {
    setIsLoading(true);
    const formData = new FormData();
    const photoFiles = getValues("img");

    if (photoFiles instanceof FileList) {
      formData.append("title", getValues("title").toLowerCase());
      formData.append("img", photoFiles[0]);
      formData.append("text1", getValues("text1"));
      formData.append("text2", getValues("text2") as string);
      formData.append("text3", getValues("text3") as string);
    }

    sendNewsData(formData)
      .then((responseData) => {
        setServerResponse({ message: responseData.message, error: "" });
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
        {addNewsFormSchema.map((field: FormField) => (
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
              {field.type === "textarea" ? (
                <div className={StylesUser.wrap}>
                  <textarea
                    className={
                      errors[field.name]
                        ? StylesUser.errorBg
                        : isValid
                        ? StylesUser.validBG
                        : ""
                    }
                    placeholder={field.placeholder}
                    {...register(field.name)}
                  ></textarea>
                  <span>{errors[field.name]?.message || "\u00A0"}</span>
                </div>
              ) : (
                <div className={StylesUser.wrap}>
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
                  <span>{errors[field.name]?.message || "\u00A0"}</span>
                </div>
              )}
            </div>
          </div>
        ))}
        <Button
          type="button"
          onClick={onClick}
          disabled={!isValid || !isDirty || isLoading}
          appearance="primary"
          isFullWidth={true}
        >
          Добавить Новость
        </Button>
      </form>
    </div>
  );
};
