import { useState } from "react";

import { yupResolver } from "@hookform/resolvers/yup";
import classNames from "classnames";
import { useForm } from "react-hook-form";

import {
  type TariffType,
  type ComputerSpecsRequest,
} from "~/entities/const/content/clubsContent.type";
import { addSpecSchema } from "~/entities/const/validation";
import { type ErrorObject } from "~/entities/type/api.type";
import StylesUser from "~/features/PageSections/User/user.module.scss";
import { ServerResponse } from "~/features/ServerResponse/ServerResponse";
import { Loader } from "~/pages/Loader/Loader";
import { Button } from "~/shared/ui/Button/Buttons";
import { fetchClubContent, sendClubData } from "~/store/api/contentApi";
import { useAppDispatch } from "~/store/store.types";

import {
  type Position,
  type FormField,
  type DescrPosition,
} from "./AddSpecs.type";
import { addSpecsFormSchema } from "./formSchema";
import Style from "../../amminMenu.module.scss";

export const AddSpecs = () => {
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
    resolver: yupResolver(addSpecSchema),
  });

  const onClick = () => {
    setIsLoading(true);
    const createContentItem = (
      position: Position,
      descrPosition: DescrPosition
    ) => {
      return {
        main: getValues(position),
        descr: getValues(descrPosition),
      };
    };

    const contentItems = [
      [createContentItem("onePosition", "onePositionDescr")],
      [createContentItem("twoPosition", "twoPositionDescr")],
      [createContentItem("threePosition", "threePositionDescr")],
      [createContentItem("fourPosition", "fourPositionDescr")],
      [createContentItem("fivePosition", "fivePositionDescr")],
      [createContentItem("sixPosition", "sixPositionDescr")],
      [createContentItem("sevenPosition", "sevenPositionDescr")],
      [createContentItem("eightPosition", "eightPositionDescr")],
    ];

    const tariff = getValues("tariff").toLowerCase() as TariffType;
    const formData = {
      computerSpecs: {
        name: getValues("name").toLowerCase(),
        [tariff]: {
          tariff: tariff,
          content: contentItems as unknown as {
            main: string;
            descr: string;
          }[][],
        },
      },
    } as ComputerSpecsRequest;

    sendClubData(formData)
      .then((responseData) => {
        setServerResponse({ message: responseData.message, error: "" });
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
        {addSpecsFormSchema.map((field: FormField) => (
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
          Добавить Железо
        </Button>
      </form>
    </div>
  );
};
