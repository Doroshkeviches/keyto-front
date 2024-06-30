import { createSlice } from "@reduxjs/toolkit";

import { AuthState } from "app/auth/types/auth-state.type";
import { jwtDecode } from "jwt-decode";
import { getUser } from "./user.actions";

const initialState: any = {
  user: null,
  pending: {
    user: false
  },
  errors: {
    user: null
  }
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setReduxEmail: (state, { payload }) => {
      state.user = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // ============ SIGN IN ============ //
      .addCase(getUser.pending, (state, { payload }) => {
        state.pending.user = true;
        state.errors.user = null;
      })
      .addCase(getUser.fulfilled, (state, { payload }) => {
        state.pending.session = false;
        state.user = payload
      })
      .addCase(getUser.rejected, (state, action: any & { payload: any }) => {
        state.pending.user = false;
        state.errors.user = action.payload.response.data.message;
      })

  },
});

export const { setReduxEmail } = userSlice.actions;