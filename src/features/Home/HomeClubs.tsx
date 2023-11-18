import { View, Text, Image, Pressable } from "react-native";
import * as styles from "../../entities/styles/global.style";
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

export default function HomeClubs({ theme }: { theme: Theme }) {
  const navigation = useNavigation();
  const clubData = useSelector(selectClubDataResults);
  const dispatch = useDispatch();

  const handlePress = (clubId: number) => {
    dispatch(contentActions.setSelectedClub(clubId));
    navigation.navigate("SelectedClub" as never);
  };

  const handleBooking = (data: TypeBookingData) => {
    dispatch(contentActions.setBookingData(data));
    navigation.navigate("Booking" as never);
  };

  return (
    <View>
      <Text
        style={[
          theme === "dark" ? styles.darkStyles.text1 : styles.lightStyles.text1,
          fontsStyles.title,
        ]}
      >
        Наши клубы:
      </Text>
      <View style={homeClubs.homeClubsWrapper}>
        {clubData.length > 0 ? (
          clubData.map((club, index) => (
            <Pressable
              key={club.id}
              style={[
                homeClubs.item,
                { marginBottom: index === clubData.length - 1 ? 10 : 50 },
              ]}
              onPress={() => handlePress(club.id)}
            >
              <Text
                style={[
                  theme === "dark"
                    ? styles.darkStyles.text2
                    : styles.lightStyles.text2,
                  fontsStyles.subtitle,
                ]}
              >
                {club.name}
              </Text>
              <Image source={{ uri: club.img }} style={homeClubs.img} />
              <Text
                style={[
                  theme === "dark"
                    ? styles.darkStyles.text1
                    : styles.lightStyles.text1,
                  fontsStyles.subtitle,
                ]}
              >
                {club.contacts.address}
              </Text>
              <Text
                style={[
                  theme === "dark"
                    ? styles.darkStyles.text
                    : styles.lightStyles.text,
                  fontsStyles.subtitle2,
                ]}
              >
                {club.contacts.phone}
              </Text>
              <QuantityComputers
                theme={theme}
                quantityComputers={club.quantityComputers}
              />
              <Button
                style={homeClubs.btn}
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
            </Pressable>
          ))
        ) : (
          <Loader />
        )}
      </View>
    </View>
  );
}
