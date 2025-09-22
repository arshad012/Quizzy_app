import { Sparkle } from "lucide-react";
import Markdown from 'react-markdown';

function AnswerComponent({ answer = "", showAnswer = true }) {

    if (!answer || !showAnswer) return;

    return (
        <div className="flex flex-col gap-2">
            <h3
                className="flex items-center gap-2 font-semibold text-base">
                <Sparkle size={15} /> Answer
            </h3>

            <div className="text-sm gap-2 p-4 border bg-green-50 text-green-800 rounded-lg max-h-[200px] overflow-y-auto">
                <Markdown>{answer}</Markdown>
            </div>
        </div>
    )
}

export default AnswerComponent
