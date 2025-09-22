
export const updateErrorStateAction = (state, { payload }) => {
    
    const { key, value } = payload;
    state[key] = value;
}