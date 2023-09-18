import { type NeonStripColor, NeonStripColors } from "./NeonStrip.type";
import Style from "./strip.module.scss";

export const NeonStrip = ({
  color = NeonStripColors.Green,
  marginTop,
  marginBottom,
}: {
  color: NeonStripColor;
  marginTop?: string;
  marginBottom?: string;
}) => {
  const commonClasses = `${
    color === NeonStripColors.Green ? Style.green : ""
  } ${color === NeonStripColors.Yellow ? Style.yellow : ""}`;

  const stripStyle = {
    marginTop: marginTop,
    marginBottom: marginBottom,
  };

  return (
    <div className={Style.neonStrip} style={stripStyle}>
      <div className={`${Style.topBlur} ${commonClasses}`}></div>
      <div className={`${Style.greenStrip} ${commonClasses}`}></div>
      <div className={`${Style.bottomBlur} ${commonClasses}`}></div>
    </div>
  );
};
