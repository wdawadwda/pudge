import { useState, useEffect } from "react";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { bookingSchema } from "~/entities/const/validation";
import { type ErrorObject } from "~/entities/type/api.type";
import { links } from "~/router/Links";
import { booking } from "~/store/api/booking";
import { selectModalContent } from "~/store/modal/modal.selectors";
import { type ContentDell } from "~/store/modal/modal.type";

export const useBookingForm = () => {
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
    formData.append("tariff", getValues("tariff").toString());
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

  return {
    serverResponse,
    isLoading,
    navigate,
    register,
    errors,
    isValid,
    isDirty,
    onClick,
  };
};
