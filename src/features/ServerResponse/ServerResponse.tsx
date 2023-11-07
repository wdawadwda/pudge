import SytleMess from "~/pages/User/sytleMess.module.scss";

type ServerResponseProperties = {
  message: string | null;
  error: string | null;
};

export const ServerResponse = ({
  message,
  error,
}: ServerResponseProperties) => {
  const responseStyle = message
    ? SytleMess.mesWrapSuccess
    : SytleMess.mesWrapError;
  const textStyle = message ? SytleMess.textSuccess : SytleMess.textError;
  const responseMessage = message || error;

  return (
    <div className={responseStyle}>
      <span className={textStyle}>{responseMessage}</span>
    </div>
  );
};
