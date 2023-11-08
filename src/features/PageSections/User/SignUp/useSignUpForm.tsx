import { yupResolver } from "@hookform/resolvers/yup";
import { AxiosError } from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { regValidYup } from "~/entities/const/validation";
import { SignUpApiRequest, ErrorDetailSignUp, Status } from "~/entities/type/api.type";
import { registerUser } from "~/store/api/userApi";

export const useSignUpForm = () => {
  const [status, setStatus] = useState<Status>("idle");
  const [detailMessage, setDetailMessage] = useState({
    defaultAxios: "",
    username: "",
    email: "",
    password: "",
    successMessage: "",
  });
  const {
    register,
    formState: { errors, isValid, isDirty },
    getValues,
    reset,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(regValidYup),
  });

  const onSignUp = () => {
    const { email, password, username } = getValues() as SignUpApiRequest;
    const userData = { email, password, username };
    setStatus("loading");

    registerUser(userData)
      .then(() => {
        setStatus("success");
        setDetailMessage({
          ...detailMessage,
          defaultAxios: "",
          email: "",
          password: "",
          username: "",
          successMessage: "Проверьте вашу почту",
        });
        reset();
      })
      .catch((error) => {
        const axiosError = error as AxiosError<ErrorDetailSignUp>;
        setStatus("error");
        const errorMessage = axiosError.response?.data;
        const defaultMessage = axiosError.message;
        if (errorMessage !== undefined) {
          setDetailMessage({
            ...detailMessage,
            defaultAxios: defaultMessage,
            email: errorMessage.email || "",
            password: errorMessage.password || "",
            username: errorMessage.username || "",
            successMessage: "",
          });
        }
      });
  };

  return {
    status,
    detailMessage,
    register,
    errors,
    isValid,
    isDirty,
    onSignUp,
  };
};
