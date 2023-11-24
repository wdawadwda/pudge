import { View, Text, Image, Pressable, Linking } from "react-native";
import * as globalStyles from "../../entities/styles/global.style";
import { useDispatch, useSelector } from "react-redux";
import { Theme } from "../../store/theme/theme.type";
import { selectClubDataResults } from "../../store/content/content.selectors";
import { homeClubs } from "./homeClubs.style";
import Loader from "../../shared/ui/Loader/Loader";
import { fontsStyles } from "../../../App";
import { useNavigation } from "@react-navigation/native";
import { contentActions } from "../../store/content/content.slice";
import { QuantityComputers } from "./QuantityComputers/QuantityComputers";
import { Button } from "../../shared/ui/Button/Button";
import { TypeBookingData } from "../../store/content/content.types";
import { OpenMapsLink } from "../../shared/ui/Button/OpenMapsLink/OpenMapsLink";
import { Expand } from "../../shared/ui/Expand/Expand";

export default function ContactsSection({ theme }: { theme: Theme }) {
  const clubData = useSelector(selectClubDataResults);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handlePhonePress = (phoneNumber: string) => {
    if (phoneNumber) {
      Linking.openURL(`tel:${phoneNumber}`);
    }
  };

  const handleBooking = (data: TypeBookingData) => {
    dispatch(contentActions.setBookingData(data));
    navigation.navigate("Booking" as never);
  };

  return (
    <View>
      {clubData.length > 0 ? (
        clubData.map((club, index) => (
          <View style={{ marginBottom: 25 }}>
            <Expand label={`Контакты ${club.name}`} theme={theme} key={index}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text
                  style={[
                    theme === "dark"
                      ? globalStyles.darkStyles.text1
                      : globalStyles.lightStyles.text1,
                    fontsStyles.text2,
                  ]}
                  onPress={() => handlePhonePress(club.contacts.phone)}
                >
                  {club.contacts.phone}
                </Text>
                <OpenMapsLink
                  title={"Карта клуба"}
                  mapUrl={club.map}
                ></OpenMapsLink>
              </View>
              <Button
                style={{ marginTop: 25 }}
                onPress={(e) => {
                  e.stopPropagation();
                  handleBooking({
                    email: club.contacts.email,
                    name: club.name,
                  });
                }}
              >
                Забронировать
              </Button>
            </Expand>
          </View>
        ))
      ) : (
        <Loader />
      )}
    </View>
  );
}
