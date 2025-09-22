import { CircleSmall, Lightbulb } from "lucide-react"
import { useToggle } from "../../../../../Hooks"

function HintComponent({ hints = [] }) {
    const { isVisible, toggle } = useToggle(false);

    if (hints.length === 0) return;

    return (
        <div className="flex flex-col gap-2">
            <h3
                onClick={toggle}
                className="flex items-center gap-2 text-blue-500 hover:text-blue-800 text-sm">
                <Lightbulb /> {isVisible ? "Hide Hints" : "Show Hints"}
            </h3>

            {isVisible &&
                <div className="text-sm flex flex-col gap-2 p-4 border border-blue-500 bg-blue-50 rounded-lg text-blue-800 max-h-[200px] overflow-y-auto">
                    {
                        hints.map((hint, i) => (
                            <p key={i} className="flex items-center gap-1">
                                <CircleSmall size={15} /> {hint}
                            </p>
                        ))
                    }
                </div>
            }
        </div>
    )
}

export default HintComponent
