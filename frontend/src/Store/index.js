import { configureStore } from '@reduxjs/toolkit';
import commonSlice from './feature/common/commonSlice.js';
import templateSlice from './feature/template/templateSlice.js';
import assesmentSlice from './feature/assesments/assesmentSlice.js';

import { apiSlice } from './api/index.js';

export const Store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    common: commonSlice,
    template: templateSlice,
    assesments: assesmentSlice
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware)
})
