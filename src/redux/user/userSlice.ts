import { createSlice } from "@reduxjs/toolkit";

interface Props {
  user: {
    name: string;
    login: boolean;
  };
}

const initialState: Props = {
  user: {
    name: "고지훈",
    login: false
  }
};

const userSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    onLogin: (state, action) => {
      state.user.login = action.payload;
    }
  }
});

export default userSlice.reducer;
export const { onLogin } = userSlice.actions;
