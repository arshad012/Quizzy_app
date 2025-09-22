import { assesmentInitailState } from "../initialState";

export const resetAssesmentStateAction = (state) => {

    Object.assign(state, assesmentInitailState);
}