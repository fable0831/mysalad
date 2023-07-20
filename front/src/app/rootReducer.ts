import { combineReducers } from '@reduxjs/toolkit';
import { authModalSlice } from './authModalSlice';

const rootReducer = combineReducers({
  authModal: authModalSlice.reducer,
});

export default rootReducer;
