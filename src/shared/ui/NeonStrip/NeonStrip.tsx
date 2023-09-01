import { type NeonStripColor, NeonStripColors } from "./NeonStrip.type";
import Style from "./strip.module.scss";

export const NeonStrip = ({
  color = NeonStripColors.Green,
}: {
  color: NeonStripColor;
}) => {
  const commonClasses = `${
    color === NeonStripColors.Green ? Style.green : ""
  } ${color === NeonStripColors.Yellow ? Style.yellow : ""}`;

  return (
    <div className={Style.neonStrip}>
      <div className={`${Style.topBlur} ${commonClasses}`}></div>
      <div className={`${Style.greenStrip} ${commonClasses}`}></div>
      <div className={`${Style.bottomBlur} ${commonClasses}`}></div>
    </div>
  );
};
