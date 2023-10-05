import Style from "./loader.module.scss";

export const Loader = ({
  loaderWidth = "100vw",
  loaderHeight = "100vh",
  loaderMargin = "0 0 0 0",
  dotSize = "50px",
}) => {
  const loaderStyle = {
    width: loaderWidth,
    height: loaderHeight,
    margin: loaderMargin,
  };

  const dotStyle = {
    width: dotSize,
    height: dotSize,
  };

  return (
    <div className={Style.loader} style={loaderStyle}>
      <div className={`${Style.dot} ${Style.dot1}`} style={dotStyle}></div>
      <div className={`${Style.dot} ${Style.dot2}`} style={dotStyle}></div>
      <div className={`${Style.dot} ${Style.dot3}`} style={dotStyle}></div>
    </div>
  );
};
