import CustomDropDown from "../../CustomDropdown"
import { ChevronDown, CheckIcon } from 'lucide-react'


function CustomDropDownInput({ value = '', options = [], onChange }) {

    return (
        <div>
            <CustomDropDown
                trigger={
                    <div className=" flex justify-between align-center border py-2 px-1 w-full rounded-md">
                        {options.find((option) => option.id == value)?.label ?? value ?? "Add a Question type"}
                        <ChevronDown className="text-gray-500" />
                    </div>
                }
            >
                <div className="w-full">
                    {
                        options.map((option) => (
                            <div key={option.id} onClick={() => onChange(option.id)} className="flex items-center gap-2 p-1 text-sm cursor-pointer hover:bg-gray-100 rounded-sm">
                                <div className="w-5">{value == option.id && <CheckIcon size={16} />}</div>
                                <span>{option.label}</span>
                            </div>
                        ))
                    }
                </div>
            </CustomDropDown>
        </div>
    )
}

export default CustomDropDownInput