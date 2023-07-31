import React, { useEffect, useState } from "react";
import { profileUser } from "../../../services/userService";

const Profile = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await profileUser();
        setUserData(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow">
        <h2 className="text-2xl font-bold text-center mb-6">
          Perfil de Usuario
        </h2>
        {userData ? (
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-medium">
              Nombre:
            </label>
            <p className="mt-1">{userData.name}</p>
          </div>
        ) : (
          <p>Cargando datos del perfil...</p>
        )}

        {userData ? (
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium">
              Usuario N°:
            </label>
            <p className="mt-1">{userData.id}</p>
          </div>
        ) : null}
        {userData ? (
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium">
              Carrito N°:
            </label>
            <p className="mt-1">{userData.cart}</p>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Profile;
