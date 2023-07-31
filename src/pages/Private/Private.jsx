import { Navigate, Route } from "react-router-dom";
import { PrivateRoutes } from "../../models/routes";
import RoleGuard from "../../guards/roleGuard";
import { Profile } from "./Profile";
import { Dashboard } from "./Dashboard";
import { PublicRoutes } from "../../models/routes";
import Cart from "./Cart/Cart";
import { RoutesNotFound } from "../../utilities";

const Private = () => {
  return (
    <RoutesNotFound>
      <Route path={`/`} element={<Navigate to={PublicRoutes.HOME} />} />
      <Route path={PrivateRoutes.PROFILE} element={<Profile />} />
      <Route path={PrivateRoutes.CART} element={<Cart />} />

      <Route element={<RoleGuard />}>
        <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard />} />
      </Route>
    </RoutesNotFound>
  );
};

export default Private;
