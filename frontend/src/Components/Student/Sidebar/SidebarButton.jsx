import { useSelector } from "react-redux"
import { commonSelector } from "../../../Store/feature/common/selectors";

function SidebarButton({onclick, icon, label}) {
    const {isSidebarOpen} = useSelector(commonSelector);

    return (
        <div>
            <div onClick={onclick} className="flex gap-3 p-2 rounded-md cursor-pointer hover:bg-gray-200">
                <span>{icon}</span>
                {isSidebarOpen && <span>{label}</span>}
            </div>
        </div>
    )
}

export default SidebarButton
