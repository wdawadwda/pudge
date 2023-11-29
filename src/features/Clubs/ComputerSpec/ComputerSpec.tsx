import { View, Text } from "react-native";
import { useState } from "react";
import Loader from "../../../shared/ui/Loader/Loader";
import { Button } from "../../../shared/ui/Button/Button";
import { Theme } from "../../../store/theme/theme.type";

import * as globalStyles from "../../../entities/styles/global.style";
import { fontsStyles } from "../../../../App";
import {
  TypeClubData,
  TypeClubPriceDataMap,
} from "../../../entities/const/clubsContent.type";
import { tableStyles } from "../table.styles";

export const ComputerSpec = ({
  theme,
  clubData,
}: {
  theme: Theme;
  clubData: TypeClubData | null;
}) => {
  if (!clubData || !clubData.computerSpecs) {
    return <Loader />;
  }

  const [selectedTariff, setSelectedTariff] = useState<
    keyof TypeClubPriceDataMap
  >(Object.keys(clubData.computerSpecs)[0] as keyof TypeClubPriceDataMap);

  const handleTariffChange = (tariff: keyof TypeClubPriceDataMap) => {
    setSelectedTariff(tariff);
  };

  const selectedTariffData = clubData.computerSpecs[selectedTariff];

  if (!selectedTariffData) {
    return <Loader />;
  }

  return (
    <View style={tableStyles.container}>
      <View style={tableStyles.buttonContainer}>
        {Object.keys(clubData.computerSpecs).map((tariff) => (
          <Button
            key={tariff}
            style={[
              selectedTariff === tariff && tableStyles.selectedButton,
              tableStyles.button,
            ]}
            onPress={() =>
              handleTariffChange(tariff as keyof TypeClubPriceDataMap)
            }
          >
            <Text>{tariff}</Text>
          </Button>
        ))}
      </View>
      <View style={tableStyles.tableContainer}>
        <View style={tableStyles.headerRow}>
          <View style={[tableStyles.headerCell]}>
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
            >{`Железо`}</Text>
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
        <View style={tableStyles.body}>
  {selectedTariffData.content ? (
    selectedTariffData.content.map((row, rowIndex) => (
      <View key={rowIndex}>
        {Array.isArray(row) && row.map((cell, cellIndex) => (
          <View
          style={[tableStyles.bodyCell, cellIndex === 0 && tableStyles.firstCell]}
          key={cellIndex}>
            {cell && cell.main !== "" && (
              <Text
              style={[
                theme === "dark"
                  ? globalStyles.darkStyles.text1
                  : globalStyles.lightStyles.text1,
                fontsStyles.text2,
              ]}
              >{cell.main}</Text>
            )}
            {cell && cell.descr !== "" && (
              <Text
              style={[
                theme === "dark"
                  ? globalStyles.darkStyles.text2
                  : globalStyles.lightStyles.text2,
                fontsStyles.text2,
              ]}
              >{cell.descr}</Text>
            )}
          </View>
        ))}
      </View>
    ))
  ) : (
    <Text>Данные не загружены</Text>
  )}
</View>


      </View>
    </View>
  );
};
