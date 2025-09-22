export const setSignupKeyAction = (state, { payload }) => {

    const { key, value } = payload;

    state[key] = value;
}