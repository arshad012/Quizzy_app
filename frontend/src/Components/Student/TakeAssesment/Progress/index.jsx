import { useSelector } from "react-redux";
import { assesmentsSelector } from "../../../../Store/feature/assesments/selectors";
import QuestionProgress from "./QuestionProgress";
import { appThemeSelector } from "../../../../Store/feature/appTheme/selector";


function Progress() {
    const { quizzyAppColorMode } = useSelector(appThemeSelector);
    const bgColor = quizzyAppColorMode === 'light' ? 'bg-white' : 'bg-black';
    const textColor = quizzyAppColorMode === 'light' ? 'text-black' : 'text-white';
    
    const { questions } = useSelector(assesmentsSelector);

    return (
        <aside className={`lg:w-1/4 md:w-1/3 w-1/2 border-l p-2 h-full overflow-auto ${bgColor} ${textColor}`}>
            <h1 className="text-xl font-bold mb-2">Progress</h1>

            <div className="flex flex-col gap-2">
                {
                    questions.map((question, index) => (
                        <QuestionProgress 
                            key={index}
                            question={question}
                            index={index}
                        />
                    ))
                }
            </div>
        </aside>
    )
}

export default Progress
