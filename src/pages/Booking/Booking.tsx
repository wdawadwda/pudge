import { useEffect, useState } from "react";

import { yupResolver } from "@hookform/resolvers/yup";
import classNames from "classnames";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { bookingSchema } from "~/entities/const/validation";
import { type ErrorObject } from "~/entities/type/api.type";
import { redirectTo } from "~/entities/utils/navigate.utils";
import Styles from "~/features/PageSections/pageSections.module.scss";
import StylesUser from "~/features/PageSections/User/user.module.scss";
import { ServerResponse } from "~/features/ServerResponse/ServerResponse";
import { links } from "~/router/Links";
import { Button } from "~/shared/ui/Button/Buttons";
import { booking } from "~/store/api/booking";
import { selectModalContent } from "~/store/modal/modal.selectors";
import { type ContentDell } from "~/store/modal/modal.type";

import Style from "./booking.module.scss";
import { type FormField } from "./booking.type";
import { bookingFormSchema } from "./formSchema";
import { Loader } from "../Loader/Loader";

export const Booking = () => {
  const [serverResponse, setServerResponse] = useState({
    message: "",
    error: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const content = useSelector(selectModalContent) as ContentDell;

  useEffect(() => {
    if (content === null) {
      navigate(links.home);
    }
  }, [content, navigate]);

  const {
    register,
    formState: { errors, isValid, isDirty },
    getValues,
    reset,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(bookingSchema),
  });

  const onClick = () => {
    setIsLoading(true);
    const formData = new FormData();
    formData.append("name", getValues("name").toLowerCase());
    formData.append("phone_number", getValues("phone_number").toLowerCase());
    formData.append("telegram", getValues("telegram") as string);
    formData.append("club", content.name);
    formData.append("recipient", content.contacts.email);
    formData.append("reservation_time", getValues("time"));
    formData.append("quantity_seats", getValues("quantity_seats").toString());

    booking(formData)
      .then((responseData) => {
        setServerResponse({ message: responseData.message, error: "" });
        reset();
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
      className={`${classNames({
        [Style.BookingContainer]: true,
        [Styles.Container]: true,
        [StylesUser.UserContainer]: true,
      })}`}
    >
      <div
        className={`${classNames({
          [Style.BookingContent]: true,
          [Styles.Content]: true,
          [StylesUser.UserContent]: true,
        })}`}
      >
        <Button
          appearance="secondary"
          isFullWidth={true}
          onClick={() => redirectTo(navigate, links.home)}
          style={{ marginBottom: "50px" }}
        >
          Home
        </Button>{" "}
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
          {bookingFormSchema.map((field: FormField) => (
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
            Добавить клуб
          </Button>
        </form>
      </div>
    </div>
  );
};
