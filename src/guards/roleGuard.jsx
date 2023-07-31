import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { Roles } from "../models/roles";
import { PublicRoutes } from "../models/routes";

const RoleGuard = () => {
  const userState = useSelector((store) => store.user);
  console.log(userState);
  return userState.role === Roles.ADMIN ? (
    <Outlet />
  ) : (
    <Navigate replace={true} to={PublicRoutes.HOME} />
  );
};

export default RoleGuard;
