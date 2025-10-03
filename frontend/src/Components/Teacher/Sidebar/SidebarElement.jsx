import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { commonSelector } from "../../../Store/feature/common/selectors";
import { appThemeSelector } from "../../../Store/feature/appTheme/selector";


function SidebarElement({to, label, icon}) {
    const { quizzyAppColorMode } = useSelector(appThemeSelector);
    const { isSidebarOpen } = useSelector(commonSelector);

    return (
        <NavLink title={isSidebarOpen ? null : label} to={to} className={({isActive}) => (isActive && quizzyAppColorMode === 'light' ? "text-blue-500" : isActive && quizzyAppColorMode === 'dark' ? "text-blue-300" : "") }>
            <div className={`flex gap-2 p-2 rounded-md ${quizzyAppColorMode === 'light' ? 'hover:bg-gray-100 hover:text-blue-500' : 'hover:bg-gray-800 hover:text-blue-300'} ${isSidebarOpen ? 'justify-start' : 'justify-center'}`}>
                <span>{icon}</span>
                {isSidebarOpen && <span>{label}</span>}
            </div>
        </NavLink>
    )
}

export default SidebarElement