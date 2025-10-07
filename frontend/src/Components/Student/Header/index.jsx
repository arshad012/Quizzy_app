import { useHeading } from "../../../Hooks"
import { localStorageKey_token, localStorageKey_user } from "../../../Utils";
import CustomButton from "../../Common/CustomButton";
import { useSelector, useDispatch } from "react-redux";
import { appThemeSelector } from "../../../Store/feature/appTheme/selector";
import { toggleQuizzyAppThemeColorMode } from "../../../Store/feature/appTheme/appThemeSlice";

function Header({ showLogoutButton = false, className = "h-full" }) {
    const dispatch = useDispatch();
    const { heading, subHeading } = useHeading();

    const { quizzyAppColorMode } = useSelector(appThemeSelector);
    const bgColor = quizzyAppColorMode === 'light' ? 'bg-white' : 'bg-black';
    const textColor = quizzyAppColorMode === 'light' ? 'text-black' : 'text-white';

    const handleLogout = () => {
        localStorage.removeItem(localStorageKey_user);
        localStorage.removeItem(localStorageKey_token);
        window.location.reload();
    };

    const handleToggleTheme = () => {
        dispatch(toggleQuizzyAppThemeColorMode());
    }

    return (
        <nav className={`w-full border-b top-0 sticky p-2 flex justify-between items-center z-100 ${bgColor} ${textColor} ${className}`}>
            <div className={`flex flex-col justify-center`}>
                <div className="text-2xl font-bold">{heading}</div>
                {subHeading && <div className="text-sm">{subHeading}</div>}
            </div>

            <div className="flex bg-red gap-3">
                <CustomButton onClick={handleToggleTheme}>{quizzyAppColorMode === "light" ? "Enable dark mode" : "Enable light mode"}</CustomButton>

                {showLogoutButton && <CustomButton onClick={handleLogout} className={`${quizzyAppColorMode === 'light' ? 'bg-red-500 hover:bg-red-600' : 'bg-red-400 hover:bg-red-500'}`}>Logout</CustomButton>}
            </div>
        </nav>
    )
}

export default Header;

// import { useHeading } from "../../../Hooks"

// function Header() {
//     const { heading, subHeading } = useHeading();

//     return (
//         <nav className={`h-full border-b top-0 sticky p-2 flex flex-col justify-center bg-white z-100`}>
//             <div className="text-2xl font-bold">{heading}</div>
//             {subHeading && <div className="text-sm text-gray-500">{subHeading}</div>}
//         </nav>
//     )
// }

// export default Header