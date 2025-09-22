import { getEmptyQuestion } from "../../Utils/getEmptyQuestion";

export const addNewQuestionTypeAction = (state, { payload }) => {

    const { questionType } = payload;

    let newQuestion = getEmptyQuestion(questionType);

    state.questionTypes.push(newQuestion);
}
