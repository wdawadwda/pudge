import classNames from "classnames";

import { redirectTo } from "~/entities/utils/navigate.utils";
import Styles from "~/features/PageSections/pageSections.module.scss";
import StylesUser from "~/features/PageSections/User/user.module.scss";
import { ServerResponse } from "~/features/ServerResponse/ServerResponse";
import { links } from "~/router/Links";
import { Button } from "~/shared/ui/Button/Buttons";

import Style from "./booking.module.scss";
import { type FormField } from "./booking.type";
import { bookingFormSchema } from "./formSchema";
import { useBookingForm } from "./useBookingForm";
import { Loader } from "../Loader/Loader";

export const Booking = () => {
  const {
    serverResponse,
    isLoading,
    navigate,
    register,
    errors,
    isValid,
    isDirty,
    onClick,
  } = useBookingForm();

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
            Забронировать
          </Button>
        </form>
      </div>
    </div>
  );
};
