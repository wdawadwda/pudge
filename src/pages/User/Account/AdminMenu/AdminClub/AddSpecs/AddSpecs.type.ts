export type FormField = {
  label: string;
  placeholder: string;
  name: "tariff" | "name" | Position | DescrPosition;
  type: "text";
};

export type Position =
  | "onePosition"
  | "twoPosition"
  | "threePosition"
  | "fourPosition"
  | "fivePosition"
  | "sixPosition"
  | "sevenPosition"
  | "eightPosition";

export type DescrPosition =
  | "onePositionDescr"
  | "twoPositionDescr"
  | "threePositionDescr"
  | "fourPositionDescr"
  | "fivePositionDescr"
  | "sixPositionDescr"
  | "sevenPositionDescr"
  | "eightPositionDescr";
