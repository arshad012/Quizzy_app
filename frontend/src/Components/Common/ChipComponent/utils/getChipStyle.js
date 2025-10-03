import { useSelector } from "react-redux";
import { ChipTypes } from "../types";
import { appThemeSelector } from "../../../../Store/feature/appTheme/selector";

export const getChipStyle = type => {
    const { quizzyAppColorMode } = useSelector(appThemeSelector);

    switch(type) {
        case ChipTypes.PRIMARY:
            return ""
        case ChipTypes.SECONDARY:
            return quizzyAppColorMode === 'light' ? "bg-blue-100" : "bg-blue-400"
        default :
            return "";
    }
}