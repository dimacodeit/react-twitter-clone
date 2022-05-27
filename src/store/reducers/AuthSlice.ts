import { IAuthModel } from '@Models/auth';
import { createSlice } from '@reduxjs/toolkit';
import { lsGetItem } from '@Utils/ls-get-item';

const initialState: IAuthModel = {
  login: lsGetItem('authName', null),
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
export default authSlice.reducer;
