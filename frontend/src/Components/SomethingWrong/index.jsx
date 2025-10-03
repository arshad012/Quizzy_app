import CustomButton from "../Common/CustomButton";
import { useSelector } from "react-redux";
import { appThemeSelector } from "../../Store/feature/appTheme/selector";

function SomethingWrong() {
    const { quizzyAppColorMode } = useSelector(appThemeSelector);
    const textColor = quizzyAppColorMode === 'light' ? 'text-red-500' : 'text-red-300';

    return (
        <div>
            <p className={`${textColor} text-center mt-10 text-3xl`}>Something went wrong</p>

            <div className={`${textColor} flex flex-col items-center mt-3 gap-4`}>
                <p className="text-center text-xl">Please try again</p>
                <CustomButton className="px-5" onClick={() => window.location.reload()}>Retry</CustomButton>
            </div>
        </div>
    )
}

export default SomethingWrong;
