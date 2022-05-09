import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  users: [],
  error: "",
};

// Generate pending, fullfilled or rejected
export const fetchUsers = createAsyncThunk("user/fetchUsers", () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.data.map((user: any) => user.id));
  // .catch((error: Error) => {
  //   dispatch(fetchUsersFailure(error.message));
  // });
});

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  //   //   extraReducers: {
  //   //     ["cake/ordered"]: (state) => {
  //   //       state.numOfusers--;
  //   //     },
  //   //   },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
      state.error = "";
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.users = [];
      state.error = action.error.message;
    });
  },
});

export const userReducer = userSlice.reducer;
