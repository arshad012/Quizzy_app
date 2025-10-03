import { appThemeSelector } from "../../../Store/feature/appTheme/selector";
import { useSelector } from "react-redux";

function CustomButton({ children, className = '', ...props }) {
  const { quizzyAppColorMode } = useSelector(appThemeSelector);

  return (
    <button
      className={`flex items-center gap-1 p-2 text-sm rounded-md cursor-pointer ${quizzyAppColorMode === 'light' ? 'bg-blue-500 text-white hover:bg-blue-600' : 'bg-blue-400 text-white hover:bg-blue-500'} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default CustomButton
