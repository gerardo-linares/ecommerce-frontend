import React from "react";
import { Link } from "react-router-dom";
import Logout from "../Logout/Logout";
import { useAppSelector } from "../../hooks/store";
import { FaShoppingBag, FaUserCircle } from "react-icons/fa";

const Header = () => {
  const user = useAppSelector((state) => state.user);
  const role = user.role;
  const name = user.name;

  console.log(role);
  console.log(name);

  return (
    <nav className="w-full mx-auto bg-slate-100 rounded-lg shadow-lg p-4 mb-4 flex justify-between text-center fixed h-20 items-center z-50 px-16">
      <Link to="/">
        <div>Logo</div>
      </Link>
      <ul className="flex gap-6 text-xl mx-auto items-center">
        <Link to="/" className="text-color_button hover:text-hover_button">
          <li>Home</li>
        </Link>
        <Link
          to="/products"
          className="text-color_button hover:text-hover_button"
        >
          <li>Products</li>
        </Link>

        {role === "superadmin" && (
          <Link
            to="/private/dashboard"
            className="text-color_button hover:text-hover_button"
          >
            <li>Admin</li>
          </Link>
        )}
      </ul>

      <ul className="flex gap-5">
        <Link
          to="/private/cart"
          className="text-color_button hover:text-hover_button"
        >
          <li className="flex gap-1">
            <FaShoppingBag className="w-6 h-6" />
            <span>{}</span>
          </li>
        </Link>
        {name && (
          // Si el nombre existe, se muestra el enlace de profile
          <Link
            to="/private/profile"
            className="text-color_button hover:text-hover_button"
          >
            <li>
              <FaUserCircle className="w-7 h-7" />
            </li>
          </Link>
        )}
        {name ? (
          // Si el nombre existe, se muestra el enlace de logout
          <Logout />
        ) : (
          // Si el nombre no existe, se muestran los enlaces de login y register
          <>
            <Link
              to="/login"
              className="text-color_button hover:text-hover_button"
            >
              <li>Login</li>
            </Link>
            <Link
              to="/register"
              className="text-color_button hover:text-hover_button"
            >
              <li>Register</li>
            </Link>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Header;
