import React from "react";
import { Route } from "react-router-dom";
import { Home, Login, Register } from "./pages";
import Header from "./components/Header/Header";
import { PrivateRoutes, PublicRoutes } from "./models/routes";
import AuthGuard from "./guards/authGuard";
import { RoutesNotFound } from "./utilities";
import Private from "./pages/Private/Private";
import { Products } from "./pages/Products";
import { ProductDetail } from "./pages/ProductDetail";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <Header />

      <RoutesNotFound>
        <Route path="/" element={<Home />} />
        <Route path={PublicRoutes.REGISTER} element={<Register />} />
        <Route path={PublicRoutes.PRODUCTS} element={<Products />} />
        <Route
          path={`/${PublicRoutes.PRODUCT}/:productId`}
          element={<ProductDetail />}
        />
        <Route path={PublicRoutes.LOGIN} element={<Login />} />
        <Route element={<AuthGuard />}>
          <Route path={`/${PrivateRoutes.PRIVATE}/*`} element={<Private />} />
        </Route>
      </RoutesNotFound>
      <Footer />
    </>
  );
};

export default App;
