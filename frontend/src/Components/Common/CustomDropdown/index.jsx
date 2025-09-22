import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';


function CustomDropDown({ trigger, children }) {
    return (
        <div className="relative w-full">
            <Tippy
                interactive={true}
                placement="bottom-start"
                trigger="click"
                arrow={false}
                className="!bg-white !text-black border rounded-md shadow-xl !w-full !max-w-full"
                content={children}
            >
                {trigger}
            </Tippy>
        </div>
    )
}

export default CustomDropDown
