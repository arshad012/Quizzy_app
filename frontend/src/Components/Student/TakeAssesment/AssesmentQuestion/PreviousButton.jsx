import { useDispatch, useSelector } from "react-redux";
import { ChevronLeft } from "lucide-react";
import { assesmentsSelector } from "../../../../Store/feature/assesments/selectors";
import { setAssesmentKey } from "../../../../Store/feature/assesments/assesmentSlice";
import CustomButton from "../../../Common/CustomButton";

function PreviousButton() {
    const dispatch = useDispatch();
    const { currentQuestionIndex } = useSelector(assesmentsSelector);
    const isFirstQuestion = currentQuestionIndex === 0;

    const handlePrevious = () => {
        dispatch(
            setAssesmentKey({
                key: "currentQuestionIndex",
                value: currentQuestionIndex - 1
            })
        )
    }

    return (
        <CustomButton
            disabled={isFirstQuestion}
            className="disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={handlePrevious}>
            <ChevronLeft /> Prev
        </CustomButton>
    )
}

export default PreviousButton
