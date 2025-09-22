import { useState } from "react";
import QuestionDetails from "./QuestionDetails";
import QuestionTitle from "./QuestionTitle";

function QuestionAccordian({question, answers, index}) {
    const [open, setOpen] = useState(false);

    const toggleShow = () => {
        setOpen(prev => !prev);
    }

    return (
        <div>
            <QuestionTitle
                onClick={toggleShow}
                index={index}
                question={question}
                answers={answers}
            />
            {open &&
                <QuestionDetails
                    question={question}
                    answers={answers}
                    index={index}
                />
            }
        </div>
    )
}

export default QuestionAccordian
