import { Sparkle } from 'lucide-react';

function ExplanationComponent({ explanations = "", showExplanation = true }) {

    if (!showExplanation || explanations.length === 0) return;

    return (
        <div className="flex flex-col gap-2">
            <h3
                className="flex items-center gap-2 font-semibold text-base">
                <Sparkle size={15} /> explanations
            </h3>

            <div className="text-sm gap-2 p-4 border rounded-lg max-h-[200px] overflow-y-auto">
                {explanations.map((explanation) => (
                    <p>{explanation}</p>
                ))}
            </div>
        </div>
    )
}

export default ExplanationComponent
