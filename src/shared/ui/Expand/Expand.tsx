import { useState } from "react";

import { faArrowDown, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Style from "./expand.module.scss";

export const Expand = ({
  titleExpand,
  children,
}: {
  titleExpand: string;
  children: React.ReactNode;
}) => {
  const [isExpanded, setExpanded] = useState(false);
  const toggleExpand = () => {
    setExpanded(!isExpanded);
  };
  return (
    <>
      <h3 className={Style.togleTitle} onClick={toggleExpand}>
        {`${titleExpand}`}
        <span>
          {isExpanded ? (
            <FontAwesomeIcon icon={faArrowRight} />
          ) : (
            <FontAwesomeIcon icon={faArrowDown} />
          )}
        </span>
      </h3>
      <div
        className={Style.child}
        style={{
          opacity: isExpanded ? 1 : 0,
          maxHeight: isExpanded ? "100%" : "0",
        }}
      >
        {children}
      </div>
    </>
  );
};
