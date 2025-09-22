
export const setAssesmentAction = (state, { payload }) => {

    let { value } = payload;

    Object.assign(state, value);
}
