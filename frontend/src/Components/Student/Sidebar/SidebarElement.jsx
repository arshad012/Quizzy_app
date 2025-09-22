import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { commonSelector } from "../../../Store/feature/common/selectors";


function SidebarElement({to, label, icon}) {
    const {isSidebarOpen} = useSelector(commonSelector);

    return (
        <NavLink to={to} className={({isActive}) => (isActive ? "text-blue-500" : "hover:text-blue-500") }>
            <div className={`flex gap-2 p-2 hover:bg-gray-100 rounded-md ${isSidebarOpen ? 'justify-start' : 'justify-center'}`}>
                <span>{icon}</span>
                {isSidebarOpen && <span>{label}</span>}
            </div>
        </NavLink>
    )
}

export default SidebarElement
