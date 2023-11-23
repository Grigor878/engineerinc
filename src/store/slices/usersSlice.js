import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import baseApi from "../../apis/baseApi";

const initialState = {
  loading: false,
  users: [],
  singleUser: null,
};

export const getUsers = createAsyncThunk("users", async () => {
  try {
    const { data } = await baseApi.get("/users");
    return data;
  } catch (err) {
    console.log(`Get Users Error: ${err.message}`);
  }
});

export const getSingleUser = createAsyncThunk("users/byId", async (id) => {
  try {
    const { data } = await baseApi.get(`/users/${id}`);
    return data;
  } catch (err) {
    console.log(`Get Single User Error: ${err.message}`);
  }
});

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    // clearUsers: (state) => {
    //   state.users = [];
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(getSingleUser.fulfilled, (state, action) => {
        state.singleUser = action.payload;
      });
  },
});

// export const { clearUsers } = userSlice.actions;
export default userSlice.reducer;
