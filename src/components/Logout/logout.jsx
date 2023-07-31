import { useNavigate } from "react-router-dom";
import { logoutUser } from "../../services/userService";
import { RiLogoutBoxRFill } from "react-icons/ri";

import { PublicRoutes } from "../../models/routes";

import { removeUser } from "../../redux/states/user";
import { useAppDispatch } from "../../hooks/store";

const Logout = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logoutUser();
      dispatch(removeUser());
      navigate(`${PublicRoutes.HOME}`);

      console.log("Logout exitoso");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center">
      <button onClick={handleLogout}>
        <RiLogoutBoxRFill className="h-7 w-7 text-color_button hover:text-hover_button" />
      </button>
    </div>
  );
};

export default Logout;
