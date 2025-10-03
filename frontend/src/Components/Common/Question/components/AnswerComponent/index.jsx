import { Sparkle } from "lucide-react";
import Markdown from 'react-markdown';
import { useSelector } from "react-redux";
import { appThemeSelector } from "../../../../../Store/feature/appTheme/selector";

function AnswerComponent({ answer = "", showAnswer = true }) {
    const { quizzyAppColorMode } = useSelector(appThemeSelector);
    const bgColor = quizzyAppColorMode === 'light' ? 'green-50' : 'green-100';
    const textColor = quizzyAppColorMode === 'light' ? 'green-800' : 'green-800';

    if (!answer || !showAnswer) return;

    return (
        <div className="flex flex-col gap-2">
            <h3
                className="flex items-center gap-2 font-semibold text-base">
                <Sparkle size={15} /> Answer
            </h3>

            <div className={`text-sm gap-2 p-4 border rounded-lg max-h-[200px] overflow-y-auto bg-${bgColor} text-${textColor}`}>
                <Markdown>{answer}</Markdown>
            </div>
        </div>
    )
}

export default AnswerComponent
