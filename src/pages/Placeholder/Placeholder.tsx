import { useEffect } from "react";

import { faPersonDigging } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

import { links } from "~/router/Links";

import Style from "./placeholder.module.scss";

export const Placeholder = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(links.home);
  }, [navigate]);

  return (
    <div className={Style.container}>
      <FontAwesomeIcon icon={faPersonDigging} />
      <h3>Ведутся</h3>
      <h3>Технические работы</h3>
    </div>
  );
};
