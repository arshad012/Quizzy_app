
export const setLoginKeyAction = (state, { payload }) => {

    const { key, value } = payload;
    state[key] = value;
}