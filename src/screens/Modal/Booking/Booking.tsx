import { Theme } from "../../../store/theme/theme.type";
import { Layout } from "../../../features/Layout/Layout";
import { Controller, useForm } from "react-hook-form";
import { TextInput } from "react-native-gesture-handler";
import { ScrollView, Text, View } from "react-native";
import { Button } from "../../../shared/ui/Button/Button";
import { yupResolver } from "@hookform/resolvers/yup";
import { bookingSchema } from "../../../entities/const/validation";
import { bookingFormSchema } from "./formSchema";
import { useSelector } from "react-redux";
import { selectBookingData } from "../../../store/content/content.selectors";
import Loader from "../../../shared/ui/Loader/Loader";
import { FormField } from "./booking.type";
import { useState } from "react";
import { ErrorObjectContent } from "src/store/content/content.types";
import { ServerResponse } from "../../../shared/ui/ServerResponse/ServerResponse";
import { booking } from "../../../store/api/booking";
import * as styles from "../../../entities/styles/global.style";
import { fontsStyles } from "../../../../App";
import { BackButton } from "../../../shared/ui/Button/BackButton/BackButton";
import { useNavigation } from "@react-navigation/native";

export const Booking = ({ theme }: { theme: Theme }) => {
  const navigation = useNavigation();
  const bookingData = useSelector(selectBookingData);
  const [isLoading, setIsLoading] = useState(false);
  const [serverResponse, setServerResponse] = useState({
    message: "",
    error: "",
  });
  const {
    control,
    getValues,
    reset,
    formState: { errors, isDirty, isValid },
  } = useForm({ resolver: yupResolver(bookingSchema), mode: "onChange" });

  const onSubmit = () => {
    setIsLoading(true);
    if (bookingData) {
      const formData = new FormData();
      formData.append("name", getValues("name").toLowerCase());
      formData.append("phone_number", getValues("phone_number").toLowerCase());
      formData.append("telegram", getValues("telegram") as string);
      formData.append("club", bookingData.name);
      formData.append("recipient", bookingData.email);
      formData.append("reservation_time", getValues("time"));
      formData.append("quantity_seats", getValues("quantity_seats").toString());
      formData.append("tariff", getValues("tariff").toString().toLowerCase());
      booking(formData)
        .then((responseData) => {
          setServerResponse({ message: responseData.message, error: "" });
          reset();
        })
        .catch((error: ErrorObjectContent) => {
          setServerResponse({ message: "", error: error.message });
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  };

  return (
    <Layout theme={theme}>
      <BackButton onPress={() => navigation.goBack()} />
      <ScrollView>
        {isLoading && <Loader />}
        {serverResponse && (serverResponse.message || serverResponse.error) && (
          <ServerResponse
            message={serverResponse.message}
            error={serverResponse.error}
          />
        )}
        {bookingData || !isLoading ? (
          bookingFormSchema.map((field: FormField) => (
            <View style={{ marginTop: 10 }} key={field.name}>
              <Text
                style={[
                  theme === "dark"
                    ? styles.darkStyles.text
                    : styles.lightStyles.text,
                  fontsStyles.text,
                ]}
              >
                {field.label}
              </Text>
              <Controller
                control={control}
                render={({ field: { onChange } }) => (
                  <TextInput
                    placeholder={field.placeholder}
                    onChangeText={(text) => onChange(text)}
                    placeholderTextColor={
                      theme === "dark"
                        ? styles.darkStyles.text.color
                        : styles.lightStyles.text.color
                    }
                    style={[
                      theme === "dark"
                        ? styles.darkStyles.text
                        : styles.lightStyles.text,
                      fontsStyles.text2,
                    ]}
                  />
                )}
                name={field.name}
              />
              <Text style={{ color: "red" }}>
                {errors[field.name]?.message || ""}
              </Text>
            </View>
          ))
        ) : (
          <Loader />
        )}

        <Button onPress={onSubmit} disabled={!isDirty || !isValid || isLoading}>
          Забронировать
        </Button>
      </ScrollView>
    </Layout>
  );
};
