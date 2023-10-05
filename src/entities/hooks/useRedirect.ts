import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

export const useRedirect = (
  path: string,
  delay: number,
  status?: "success" | "error" | "idle" | "loading",
  difPath?: string
) => {
  const navigate = useNavigate();
  const [isRedirect, setRedirect] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setRedirect(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (isRedirect && (status === "success" || status === "error")) {
      if (status === "success" && path) {
        navigate(path, { replace: true });
      } else if (status === "error" && difPath) {
        navigate(difPath, { replace: true });
      }
    }
  }, [isRedirect, navigate, path, status, difPath]);

  return null;
};
