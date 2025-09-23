import { useHeading } from "../../../Hooks"
import { localStorageKey_token, localStorageKey_user } from "../../../Utils";
import CustomButton from "../../Common/CustomButton";

function Header({ showLogoutButton = false }) {
    const { heading, subHeading } = useHeading();

    const handleLogout = () => {
        localStorage.removeItem(localStorageKey_user);
        localStorage.removeItem(localStorageKey_token);
        window.location.reload();
    };

    return (
        <nav className='h-full w-full border-b top-0 sticky p-2 flex justify-between items-center bg-white z-100'>
            <div className="flex flex-col justify-center bg-white">
                <div className="text-2xl font-bold">{heading}</div>
                {subHeading && <div className="text-sm text-gray-500">{subHeading}</div>}
            </div>

            <div>
                {showLogoutButton && <CustomButton onClick={handleLogout} className="bg-red-500 hover:bg-red-600">Logout</CustomButton>}
            </div>
        </nav>
    )
}

export default Header;