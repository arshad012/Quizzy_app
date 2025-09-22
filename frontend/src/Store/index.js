import { configureStore } from '@reduxjs/toolkit';
import commonSlice from './feature/common/commonSlice.js';
import templateSlice from './feature/template/templateSlice.js';
import assesmentSlice from './feature/assesments/assesmentSlice.js';
import loginSlice from './feature/Login/loginSlice.js';
import signupSlice from './feature/SignUp/signupSlice.js';
import signupErrorsSlice from './feature/SignupErrors/signupErrorSlice.js';

import { apiSlice } from './api/index.js';

export const Store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    common: commonSlice,
    template: templateSlice,
    assesments: assesmentSlice,
    login: loginSlice,
    signup: signupSlice,
    signupErrors: signupErrorsSlice
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware)
})
