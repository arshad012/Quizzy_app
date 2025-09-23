import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import CustomButton from "../../Components/Common/CustomButton";
import Header from "../../Components/Teacher/Header";
import { useHeading } from "../../Hooks";
import { localStorageKey_user, localStorageKey_token } from "../../Utils";

const StudentHome = () => {
  const navigate = useNavigate();
  const { setHeading, setSubHeading } = useHeading();
  const userLoginInfo = JSON.parse(localStorage.getItem(localStorageKey_user));

  useEffect(() => {
    setHeading(`Hello ${userLoginInfo?.name ?? 'user'}`);
    setSubHeading("You can start your assessment journey from here");
  }, []);

  const handleClick = (path) => {
    navigate(path);
  };

  return (
    <div>
      <Header showLogoutButton={true} />

      <h1 className="font-bold text-3xl text-center">Quizzy Home page</h1>

      <div className="w-fit m-auto mt-5 flex justify-center">
        <CustomButton
          onClick={() => handleClick(`/student/dashboard`)}
          className={`px-10 py-3 text-lg`}
        >
          Student Dashboard
        </CustomButton>
      </div>

    </div>
  );
};

export default StudentHome;