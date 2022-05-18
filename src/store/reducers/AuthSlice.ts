import { IAuthModel } from '@Models/auth.model';
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '@Store/store';

const initialState: IAuthModel = {
  login: localStorage.getItem('authName')
    ? localStorage.getItem('authName')
    : null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signIn: (state, { payload }) => {
      state.login = payload;
    },
    signOut: (state) => {
      state.login = null;
    },
  },
});

export const { signIn, signOut } = authSlice.actions;
export const selectAuth = (state: RootState) => state.authReducer.login;
export default authSlice.reducer;
