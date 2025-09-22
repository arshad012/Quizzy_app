import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import CustomButton from "../../Components/Common/CustomButton";
import Header from "../../Components/Teacher/Header";
import { useHeading } from "../../Hooks";
import { loginSelector } from "../../Store/feature/Login/selector";
import { logoutUser } from "../../Store/feature/Login/loginSlice";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { setHeading, setSubHeading } = useHeading();
  const { userLoginInfo } = useSelector(loginSelector);

  useEffect(() => {
    setHeading(userLoginInfo && `Hello ${userLoginInfo.name}`);
    setSubHeading("You can start your assesment journey from here");
  }, []);

  const handleClick = (forUser) => {
    navigate(`${forUser}/dashboard`);
  };

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <div>
      <Header showLogoutButton={true} onClick={handleLogout} />

      <h1 className="font-bold text-3xl text-center">Quizzy Home page</h1>

      <div className="w-fit m-auto mt-5 flex justify-center">
        <CustomButton
          onClick={() => handleClick(`/${((userLoginInfo.userType).toLowerCase())}`)}
          className={`px-10 py-3 text-lg`}
        >
          {userLoginInfo?.userType} Dashboard
        </CustomButton>
      </div>

    </div>
  );
};

export default Home