import { templateInitailState } from "../initialState"

export const resetTemplateStateAction = (state) => {

    Object.assign(state, templateInitailState);
}