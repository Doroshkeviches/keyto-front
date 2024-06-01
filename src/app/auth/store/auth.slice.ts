import { createSlice } from "@reduxjs/toolkit";

import { AuthState, DecodedUser } from "app/auth/types/auth-state.type";
import { changePassword, signIn, signUp } from "./auth.actions";
import { jwtDecode } from "jwt-decode";
const getDecodedUserFromToken = (token: string | null) => {
  if (!token) return null
  const decoded = jwtDecode(token) as DecodedUser;
  return decoded
}
const initialState: AuthState = {
  session: getDecodedUserFromToken(localStorage.getItem('access-token')),
  email: '',
  pending: {
    session: false,
    resetCode: false,
  },
  errors: {
    session: null,
    resetCode: null,

  },
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setReduxEmail: (state, { payload }) => {
      state.email = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // ============ SIGN IN ============ //
      .addCase(signIn.pending, (state, { payload }) => {
        state.pending.session = true;
        state.errors.session = null;
      })
      .addCase(signIn.fulfilled, (state, { payload }) => {
        state.pending.session = false;
        state.session = getDecodedUserFromToken(payload.access_token);
      })
      .addCase(signIn.rejected, (state, action: any & { payload: any }) => {
        state.pending.session = false;
        state.errors.session = action.payload.response.data.message;
      })
      // ============ SIGN UP ============ //
      .addCase(signUp.pending, (state, { payload }) => {
        state.pending.session = true;
        state.errors.session = null;
      })
      .addCase(signUp.fulfilled, (state, { payload }) => {
        state.pending.session = false;
        state.session = getDecodedUserFromToken(payload.access_token);
      })
      .addCase(signUp.rejected, (state, action: any & { payload: any }) => {
        state.pending.session = false;
        state.errors.session = action.payload.response.data.message;
      })
      // ============ CHANGE PASSWORD ============ //
      .addCase(changePassword.pending, (state, { payload }) => {
        state.pending.resetCode = true;
        state.errors.resetCode = null;
      })
      .addCase(changePassword.fulfilled, (state, { payload }) => {
        state.pending.resetCode = false;
        state.session = getDecodedUserFromToken(payload.access_token);
      })
      .addCase(changePassword.rejected, (state, action: any & { payload: any }) => {
        state.pending.resetCode = false;
        state.errors.resetCode = action.payload.response.data.message;
      })
  },
});

export const { setReduxEmail } = authSlice.actions;