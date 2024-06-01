import { createAsyncThunk } from "@reduxjs/toolkit";

import { TokenDto } from "app/auth/types/token-dto.type";
import repository from "repository";

export const signIn = createAsyncThunk<TokenDto, { email: string, password: string }>("POST/signin", async (body, { rejectWithValue }) => {
  try {
    const response = await repository.post("/auth/signin", body);
    localStorage.setItem('access-token', response.data.access_token)
    return response.data;
  } catch (error: any) {
    return rejectWithValue(error);
  }
});

export const signUp = createAsyncThunk<TokenDto, { email: string, password: string }>("POST/signup", async (body, { rejectWithValue }) => {
  try {
    const response = await repository.post('/auth/signup', body);
    localStorage.setItem('access-token', response.data.access_token)
    return response.data;
  } catch (error: any) {
    return rejectWithValue(error);
  }
});

export const changePassword = createAsyncThunk<TokenDto, { email: string, resetToken: string, password: string, password_confirm: string }>("POST/change-password", async (body, { rejectWithValue }) => {
  try {
    const response = await repository.post("/auth/change-password", body);
    localStorage.setItem('access-token', response.data.access_token)
    return response.data;
  } catch (error: any) {
    return rejectWithValue(error);
  }
});
