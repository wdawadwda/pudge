import { useState } from "react";

export const useToggle = (isInitialState = false): [boolean, () => void] => {
  const [isOpen, setOpen] = useState(isInitialState);

  const toggle = () => {
    setOpen(!isOpen);
  };

  return [isOpen, toggle];
};
