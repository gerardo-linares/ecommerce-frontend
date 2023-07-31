import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../services/userService";
import { saveUser } from "../../redux/states/user";
import { PublicRoutes } from "../../models/routes";
import { useAppDispatch } from "../../hooks/store";

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const user = Object.fromEntries(formData);

    const data = await loginUser(user);
    dispatch(saveUser(data.payload));
    navigate(`${PublicRoutes.HOME}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8 px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="text-center text-3xl font-extrabold text-gray-900">
          LOGIN PUBLIC
        </h2>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div>
            <h2 className="text-center text-xl font-semibold text-gray-900">
              Iniciar sesión
            </h2>
          </div>
          <div className="mt-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email:
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-color_button focus:border-color_button sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password:
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-color_button focus:border-color_button  sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-color_button hover:bg-hover_button focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-color_button"
                >
                  Ingresar
                </button>
              </div>
            </form>
            <div className="mt-4 text-center">
              <p className="text-sm text-gray-600">
                ¿No estás registrado?{" "}
                <Link
                  to="/register"
                  className="font-medium text-color_button hover:text-hover_button"
                >
                  Hazlo aquí
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
