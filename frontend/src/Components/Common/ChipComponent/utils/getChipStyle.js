import { ChipTypes } from "../types";

export const getChipStyle = type => {

    switch(type) {
        case ChipTypes.PRIMARY:
            return ""
        case ChipTypes.SECONDARY:
            return "bg-blue-100"
        default :
            return "";
    }
}