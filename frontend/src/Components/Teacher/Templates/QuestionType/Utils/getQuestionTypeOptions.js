import { QuestionTypes } from "../../../../../Types";


export const getQuestionTypeOptions = (questionType = QuestionTypes.MULTIPLE_CHOICE) => {

    switch (questionType) {
        case QuestionTypes.MULTIPLE_CHOICE:
            return [
                {
                    id: "includeHints",
                    label: "Include Hints",
                },
                {
                    id: "includeExplanation",
                    label: "Include Explanations",
                },
                {
                    id: "shuffleOptions",
                    label: "Shuffle Options",
                },
                {
                    id: "enableNegativeMarking",
                    label: "Enable Negative Marking",
                },
            ];
        default:
            return [
                {
                    id: "includeHints",
                    label: "Include Hints",
                },
                {
                    id: "includeExplanation",
                    label: "Include Explanations",
                },
                {
                    id: "enableNegativeMarking",
                    label: "Enable Negative Marking",
                },
            ];
    }
};