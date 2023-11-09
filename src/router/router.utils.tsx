import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

import { selectUser, selectUserStaff } from "~/store/user/user.selectors";

import { links } from "./Links";

export const AccessControlRoute = ({
  isProtected = false,
  isPublicOnly = false,
}) => {
  const user = useSelector(selectUser);

  if (user && isProtected) {
    return <Outlet />;
  }

  if (!user && isPublicOnly) {
    return <Outlet />;
  }

  return <Navigate to={links.home} replace />;
};

export const AccessControlStaff = ({
  isProtected = false,
  isPublicOnly = false,
}) => {
  const isStaff = useSelector(selectUserStaff);

  if (isStaff && isProtected) {
    return <Outlet />;
  }

  if (!isStaff && isPublicOnly) {
    return <Outlet />;
  }

  return <Navigate to={links.home} replace />;
};

export const IsTechnicalWorks = ({ isWorks = false }) => {
  const isStaff = useSelector(selectUserStaff);

  if (isStaff && isWorks) {
    return <Outlet />;
  }

  return <Navigate to={links.technicalWorks} replace />;
};
