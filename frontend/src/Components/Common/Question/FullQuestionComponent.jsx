import ChipsComponent from "./components/ChipsComponent"
import Question from "./index"

function FullQuestionComponent({ question, index }) {

    return (
        <div className="border p-4 rounded-lg shadow-xl">
            
            <ChipsComponent question={question} index={index} />

            <div className="mt-5">
                <Question question={question} currentQuestionIndex={index} />
            </div>
        </div>
    )
}

export default FullQuestionComponent
