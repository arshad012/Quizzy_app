import { getChipStyle } from "./utils/index";
import { ChipTypes } from "./types";


function ChipComponent({ text = "", type = ChipTypes.PRIMARY, className = "" }) {
    if (!text) return;

    return (
        <div className={`${className} text-sm border border-black w-fit px-2 rounded-full ${getChipStyle(type)}`}>
            {text}
        </div>
    )
}

export default ChipComponent
