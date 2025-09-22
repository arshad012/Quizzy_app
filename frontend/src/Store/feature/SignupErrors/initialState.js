import { signupInitailState } from "../SignUp/initialState"

// Taking all the keys from { signupInitailState } and creating { signupErrorsInitialState } and setting each key value as false as error state needs.
const initialStateKeys = Object.keys(signupInitailState);

const signupErrorsInitialState = {}

for(let el of initialStateKeys) {

    signupErrorsInitialState[el] = false;
}

export { signupErrorsInitialState };