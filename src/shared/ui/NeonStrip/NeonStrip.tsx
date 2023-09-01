import Style from "./strip.module.scss";

export const NeonStrip = () => {
  return (
    <div className={Style.neonStrip}>
      <div className={Style.topBlur}></div>
      <div className={Style.greenStrip}></div>
      <div className={Style.bottomBlur}></div>
    </div>
  );
};
