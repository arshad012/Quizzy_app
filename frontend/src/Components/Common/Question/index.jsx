import AnswerComponent from './components/AnswerComponent';
import ExplanationComponent from './components/ExplanationComponent';
import HintComponent from './components/HintComponent';
import HandleQuestionRender from './HandleQuestionRender'
import { defaultQuestionConfig, extractAnswer } from './utils/index';


function Question({ question, currentQuestionIndex, config = defaultQuestionConfig }) {

    return <div className='flex flex-col gap-4'>
        {question.question && <h2 className='text-2xl font-bold'>{currentQuestionIndex + 1}. {question.question}</h2>}

        <div>
            <HintComponent hints={question.hints || []} />
        </div>

        <div>
            <HandleQuestionRender
                question={question}
                letUserAnswer={config.letUserAnswer}
            />
        </div>

        {
            config.showAnswer &&
            <div>
                <AnswerComponent answer={extractAnswer(question)} />
            </div>
        }

        {
            config.showExplanation &&
            <div>
                <ExplanationComponent explanations={question.explanations || []} />
            </div>
        }
    </div>
}

export default Question
