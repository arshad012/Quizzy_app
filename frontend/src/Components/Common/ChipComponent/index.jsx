import { getChipStyle } from "./utils/index";
import { ChipTypes } from "./types";
import { useSelector } from "react-redux";
import { appThemeSelector } from "../../../Store/feature/appTheme/selector";


function ChipComponent({ text = "", type = ChipTypes.PRIMARY, className = "" }) {
    const { quizzyAppColorMode } = useSelector(appThemeSelector);
    const borderColor = quizzyAppColorMode === 'light' ? 'black' : 'white';
    const textColor = quizzyAppColorMode === 'light' ? 'black' : 'white';

    if (!text) return;

    return (
        <div className={`${className} text-sm text-${textColor}-200 border border-${borderColor} w-fit px-2 rounded-full ${getChipStyle(type)}`}>
            {text}
        </div>
    )
}

export default ChipComponent
