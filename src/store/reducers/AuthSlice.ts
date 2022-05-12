import { createSlice } from '@reduxjs/toolkit';
import { IAuthModel } from '../../models/auth.model';
import { RootState } from '../store';

const initialState: IAuthModel = {
  isLoggedIn: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state) => {
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.isLoggedIn = false;
    },
  },
});

export const { login, logout } = authSlice.actions;
export const selectAuth = (state: RootState) => state.authReducer.isLoggedIn;
export default authSlice.reducer;
