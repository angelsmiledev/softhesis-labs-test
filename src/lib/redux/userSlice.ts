import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  isLoggedIn: boolean;
  name: string;
  email: string;
}

const initialState: UserState = {
  isLoggedIn: false,
  name: "",
  email: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ email: string; name: string }>) => {
      state.isLoggedIn = true;
      state.email = action.payload.email;
      state.name = action.payload.name;
    },
    updateProfile: (
      state,
      action: PayloadAction<{ name: string; email: string }>
    ) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.name = "";
      state.email = "";
    },
  },
});

export const { login, updateProfile, logout } = userSlice.actions;
export default userSlice.reducer;
