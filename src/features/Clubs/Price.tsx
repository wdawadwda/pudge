import { View, Text, StyleSheet } from "react-native";
import { useState } from "react";
import Loader from "../../shared/ui/Loader/Loader";
import { Button } from "../../shared/ui/Button/Button";
import { backgroundColorSecond4 } from "../../entities/const/style/globalDark.style";
import { Theme } from "../../store/theme/theme.type";

import * as globalStyles from "../../entities/styles/global.style";
import { fontsStyles } from "../../../App";
import {
  TypeClubData,
  TypeClubPriceDataMap,
} from "../../entities/const/clubsContent.type";
import { backgroundColor2 } from "../../entities/const/style/globalLight.style";
import { backgroundColor2 as darkBackgroundColor2 } from "../../entities/const/style/globalDark.style";

export const PriceTable = ({
  theme,
  clubData,
}: {
  theme: Theme;
  clubData: TypeClubData | null;
}) => {
  if (!clubData || !clubData.price) {
    return <Loader />;
  }

  const [selectedTariff, setSelectedTariff] = useState<
    keyof TypeClubPriceDataMap
  >(Object.keys(clubData.price)[0] as keyof TypeClubPriceDataMap);

  const handleTariffChange = (tariff: keyof TypeClubPriceDataMap) => {
    setSelectedTariff(tariff);
  };

  const selectedTariffData = clubData.price[selectedTariff];

  if (!selectedTariffData) {
    return <Loader />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        {Object.keys(clubData.price).map((tariff) => (
          <Button
            key={tariff}
            style={[
              selectedTariff === tariff && styles.selectedButton,
              styles.button,
            ]}
            onPress={() =>
              handleTariffChange(tariff as keyof TypeClubPriceDataMap)
            }
          >
            <Text>{tariff}</Text>
          </Button>
        ))}
      </View>
      <View style={styles.tableContainer}>
        <View style={styles.headerRow}>
          <View style={[styles.headerCell]}>
            <Text
              style={[
                theme === "dark"
                  ? globalStyles.darkStyles.text1
                  : globalStyles.lightStyles.text1,
                fontsStyles.subtitle,
                {
                  marginBottom: 0,
                },
              ]}
            >{`Цены`}</Text>
            {selectedTariffData.tariff && (
              <Text
                style={[
                  theme === "dark"
                    ? globalStyles.darkStyles.text2
                    : globalStyles.lightStyles.text2,
                  fontsStyles.subtitle,
                ]}
              >{`${selectedTariffData.tariff}`}</Text>
            )}
          </View>
        </View>
        <View style={styles.body}>
          {selectedTariffData.rows.map((row, rowIndex) => (
            <View
              key={rowIndex}
              style={[
                theme === "dark" ? styles.bodyRowDark : styles.bodyRowLight,
                styles.bodyRow,
              ]}
            >
              {row.map((cell, cellIndex) => (
                <View
                  key={cellIndex}
                  style={[styles.bodyCell, cellIndex === 0 && styles.firstCell]}
                >
                  <Text
                    style={[
                      theme === "dark"
                        ? globalStyles.darkStyles.text1
                        : globalStyles.lightStyles.text1,
                      fontsStyles.text2,
                    ]}
                  >
                    {cell.main}
                  </Text>
                  {cell.descr && (
                    <Text
                      style={[
                        theme === "dark"
                          ? globalStyles.darkStyles.text2
                          : globalStyles.lightStyles.text2,
                        fontsStyles.text2,
                      ]}
                    >
                      {cell.descr}
                    </Text>
                  )}
                </View>
              ))}
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  m: {
    padding: 0,
  },
  container: {
    flex: 1,
    flexDirection: "column",
    margin: 10,
  },
  tableContainer: {
    flex: 1,
    width: "100%",
    flexDirection: "column",
  },
  headerRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
  },
  headerCell: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  firstCell: {
    flex: 1,
    alignItems: "flex-start",
  },
  body: {
    flexDirection: "column",
  },
  bodyRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    height: 50,
  },
  bodyRowDark: {
    borderColor: darkBackgroundColor2,
  },
  bodyRowLight: {
    borderColor: backgroundColor2,
  },
  bodyCell: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "column",
    justifyContent: "space-around",
    marginTop: 10,
  },
  button: {
    borderRadius: 0,
  },
  selectedButton: {
    backgroundColor: backgroundColorSecond4,
  },
});
