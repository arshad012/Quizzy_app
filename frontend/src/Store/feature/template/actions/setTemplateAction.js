
export const setTemplateAction = (state, { payload }) => {

    let { value } = payload;

    Object.assign(state, value);
}
