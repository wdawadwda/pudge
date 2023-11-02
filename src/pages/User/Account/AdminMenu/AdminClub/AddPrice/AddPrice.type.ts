export type FormField = {
  label: string;
  placeholder: string;
  subLabel?: string;
  name: "name" | "tariff" | "section" | NameFieldCels;
  type: "text" | "section";
};
type NameFieldCels =
  | "oneRowOneСel"
  | "oneRowTwoСel"
  | "oneRowTwoСelDesc"
  | "oneRowThreeСel"
  | "oneRowThreeСelDesc"
  | "twoRowOneСel"
  | "twoRowTwoСel"
  | "twoRowTwoСelDesc"
  | "twoRowThreeСel"
  | "twoRowThreeСelDesc"
  | "threeRowOneСel"
  | "threeRowTwoСel"
  | "threeRowTwoСelDesc"
  | "threeRowThreeСel"
  | "threeRowThreeСelDesc"
  | "fourRowOneСel"
  | "fourRowTwoСel"
  | "fourRowTwoСelDesc"
  | "fourRowThreeСel"
  | "fourRowThreeСelDesc"
  | "fiveRowOneСel"
  | "fiveRowTwoСel"
  | "fiveRowTwoСelDesc"
  | "fiveRowThreeСel"
  | "fiveRowThreeСelDesc"
  | "DescrOne"
  | "DescrTwo"
  | "DescrThree"
  | "DescrFour"
  | "DescrFive";
