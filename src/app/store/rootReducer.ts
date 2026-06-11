import { combineReducers } from '@reduxjs/toolkit';
import { api } from '@/shared/api';
import { userReducer } from '@/entities/user';

export const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  user: userReducer,
});
