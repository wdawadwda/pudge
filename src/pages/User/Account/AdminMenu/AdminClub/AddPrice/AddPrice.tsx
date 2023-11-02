import { yupResolver } from "@hookform/resolvers/yup";
import classNames from "classnames";
import { useForm } from "react-hook-form";

import {
  type TariffType,
  type PriceRequest,
} from "~/entities/const/content/clubsContent.type";
import { addPriceschema } from "~/entities/const/validation";
import StylesUser from "~/features/PageSections/User/user.module.scss";
import { Button } from "~/shared/ui/Button/Buttons";
import { fetchClubContent, sendClubData } from "~/store/api/contentApi";
import { useAppDispatch } from "~/store/store.types";

import { type FormField } from "./AddPrice.type";
import { addPriceFormSchema } from "./formSchema";
import Style from "../../amminMenu.module.scss";

export const AddPrice = () => {
  const dispatch = useAppDispatch();
  const {
    register,
    formState: { errors, isValid, isDirty },
    getValues,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(addPriceschema),
  });

  const onClick = () => {
    const tariff = getValues("tariff").toLowerCase() as TariffType;
    const formData = {
      price: {
        name: getValues("name").toLowerCase(),
        [tariff]: {
          tariff: tariff,
          rows: [
            [
              { main: getValues("oneRowOneСel") as string },
              {
                main: getValues("oneRowTwoСel") as string,
                descr: getValues("oneRowTwoСelDesc"),
              },
              {
                main: getValues("oneRowThreeСel") as string,
                descr: getValues("oneRowThreeСelDesc"),
              },
            ],
            [
              { main: getValues("twoRowOneСel") as string },
              {
                main: getValues("twoRowTwoСel") as string,
                descr: getValues("twoRowTwoСelDesc"),
              },
              {
                main: getValues("twoRowThreeСel") as string,
                descr: getValues("twoRowThreeСelDesc"),
              },
            ],
            [
              { main: getValues("threeRowOneСel") as string },
              {
                main: getValues("threeRowTwoСel") as string,
                descr: getValues("threeRowTwoСelDesc"),
              },
              {
                main: getValues("threeRowThreeСel") as string,
                descr: getValues("threeRowThreeСelDesc"),
              },
            ],
            [
              { main: getValues("fourRowOneСel") as string },
              {
                main: getValues("fourRowTwoСel") as string,
                descr: getValues("fourRowTwoСelDesc"),
              },
              {
                main: getValues("fourRowThreeСel") as string,
                descr: getValues("fourRowThreeСelDesc"),
              },
            ],
            [
              { main: getValues("fiveRowOneСel") as string },
              {
                main: getValues("fiveRowTwoСel") as string,
                descr: getValues("fiveRowTwoСelDesc"),
              },
              {
                main: getValues("fiveRowThreeСel") as string,
                descr: getValues("fiveRowThreeСelDesc"),
              },
            ],
          ],
          description: [
            [getValues("DescrOne")] as string[],
            [getValues("DescrTwo")] as string[],
            [getValues("DescrThree")] as string[],
            [getValues("DescrFour")] as string[],
            [getValues("DescrFive")] as string[],
          ],
        },
      },
    } as PriceRequest;

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
        {addPriceFormSchema.map((field: FormField, index) => (
          <div key={`${field.name}-${index}`}>
            {field.type === "section" && (
              <div className={StylesUser.separator}>{field.label}</div>
            )}
            {field.type !== "section" && (
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
                  {field.subLabel && <br />}
                  {field.subLabel}
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
            )}
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
