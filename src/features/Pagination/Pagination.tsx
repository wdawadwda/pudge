import { Text, View } from "react-native";
import { textColor } from "../../entities/const/style/globalDark.style";
import { Button } from "../../shared/ui/Button/Button";
import { AntDesign } from "@expo/vector-icons";
import { Theme } from "../../store/theme/theme.type";
import * as styles from "../../entities/styles/global.style";
import { fontsStyles } from "../../../App";
import { paginationStyles } from "./pagination.style";

export interface PaginationProperties {
  currentPage: number;
  totalPages: number;
  theme: Theme;
  onPageChange: (newPage: number) => void;
}

export const Pagination = ({
  currentPage,
  totalPages,
  theme,
  onPageChange,
}: PaginationProperties) => {
  const handlePageChange = (newPage: number) => {
    onPageChange(newPage);
  };

  return (
    <View style={paginationStyles.paginationWrapper}>
      <View style={paginationStyles.buttonWrapper}>
        <Button
          style={paginationStyles.btn}
          onPress={() => handlePageChange(1)}
          disabled={currentPage === 1}
        >
          <AntDesign name="stepbackward" size={25} color={textColor} />
        </Button>
        <Button
          onPress={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <AntDesign name="arrowleft" size={25} color={textColor} />
        </Button>
      </View>
      <View>
        <Text
          style={[
            theme === "dark"
              ? styles.darkStyles.text1
              : styles.lightStyles.text1,
            fontsStyles.text2,
          ]}
        >
          Страница {currentPage} из {totalPages}
        </Text>
      </View>
      <View style={paginationStyles.buttonWrapper}>
        <Button
          style={paginationStyles.btn}
          onPress={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <AntDesign name="arrowright" size={25} color={textColor} />
        </Button>
        <Button
          onPress={() => handlePageChange(totalPages)}
          disabled={currentPage === totalPages}
        >
          <AntDesign name="stepforward" size={25} color={textColor} />
        </Button>
      </View>
    </View>
  );
};
