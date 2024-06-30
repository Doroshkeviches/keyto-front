import { createAsyncThunk } from "@reduxjs/toolkit";
import repository from "repository";

export const getUser = createAsyncThunk<any>("GET/users", async (_, { rejectWithValue }) => {
  try {
    const response = await repository.get("/users");
    return response.data;
  } catch (error: any) {
    console.log(error)
    return rejectWithValue(error);
  }
});


