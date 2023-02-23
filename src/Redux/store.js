import { configureStore } from '@reduxjs/toolkit';
import cryptoReducer from './data';

const store = configureStore({
  reducer: {
    crypto: cryptoReducer,
  },
});

export default store;
