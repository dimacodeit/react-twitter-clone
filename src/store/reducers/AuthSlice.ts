import { IAuthModel } from '@Models/auth.model';
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '@Store/store';

const initialState: IAuthModel = {
  login: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, { payload }) => {
      state.login = payload;
    },
    logout: (state) => {
      state.login = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export const selectAuth = (state: RootState) => state.authReducer.login;
export default authSlice.reducer;
