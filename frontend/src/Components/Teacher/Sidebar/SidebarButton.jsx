import { useSelector } from "react-redux"
import { commonSelector } from "../../../Store/feature/common/selectors"
import { appThemeSelector } from "../../../Store/feature/appTheme/selector";

function SidebarButton({onclick, icon, label}) {
    const { quizzyAppColorMode } = useSelector(appThemeSelector);
    const {isSidebarOpen} = useSelector(commonSelector);

    return (
        <div title={isSidebarOpen ? "" : "Expand"}>
            <div onClick={onclick} className={`flex gap-3 p-2 rounded-md cursor-pointer ${quizzyAppColorMode === 'light' ? 'hover:bg-gray-200' : 'hover:bg-gray-800'}`}>
                <span>{icon}</span>
                {isSidebarOpen && <span>{label}</span>}
            </div>
        </div>
    )
}

export default SidebarButton
