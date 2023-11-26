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

export const getSingleUserData = createAsyncThunk("users/byId", async (id) => {
  try {
    const { data } = await baseApi.get(`/users/${id}?_embed=reports`);
    return data;
  } catch (err) {
    console.log(`Get Single User Error: ${err.message}`);
  }
});

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    clearUser: (state) => {
      state.singleUser = null;
    },
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
      .addCase(getSingleUserData.fulfilled, (state, action) => {
        state.singleUser = action.payload;
      });
  },
});

export const { clearUser } = userSlice.actions;
export default userSlice.reducer;
