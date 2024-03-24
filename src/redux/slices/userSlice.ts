import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface userState {
  id: number;
  name: string;
  email: string;
  isVerify: boolean;
}

const initialState = {
  id: 0,
  name: "",
  email: "",
  isVerify: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginAction: (state, action: PayloadAction<userState>) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.isVerify = action.payload.isVerify;
    },
    logoutAction: (state, action) => {
      state.id = 0;
      state.name = "";
      state.email = "";
      state.isVerify = false;
    },
  },
});

export const { loginAction, logoutAction } = userSlice.actions;
export default userSlice.reducer;
