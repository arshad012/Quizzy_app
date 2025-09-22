import { useSelector } from "react-redux";
import { assesmentsSelector } from "../../../../Store/feature/assesments/selectors";
import QuestionProgress from "./QuestionProgress";


function Progress() {
    const { questions } = useSelector(assesmentsSelector);

    return (
        <aside className='lg:w-1/4 md:w-1/3 w-1/2 border-l p-2 h-full bg-white overflow-auto'>
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
