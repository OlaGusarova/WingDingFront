import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User, UserState } from '../types';

const initialState: UserState = {
  currentUser: null,
  tempId: '',
  isLoading: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User | null>) => {
      state.currentUser = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setTempId: (state, action: PayloadAction<string>) => {
      state.tempId = action.payload;
    },
  },
});

export const { setUser, setLoading, setTempId } = userSlice.actions;
export const userReducer = userSlice.reducer;
