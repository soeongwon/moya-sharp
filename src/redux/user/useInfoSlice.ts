import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface userKeyword {
  title: string;
}

interface Props {
  userSavedKeywords: Array<userKeyword>;
  userCurrentTab: number;
}

const initialState: Props = {
  userSavedKeywords: [
    { title: "Twitter" },
    { title: "Facebook" },
    { title: "Line" },
    { title: "Instagram" },
    { title: "Telegram" },
    { title: "KaKao" },
    { title: "LinkedIn" }
  ],
  userCurrentTab: 0
};

const userInfoSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    addKeywordTab: state => {},
    removeKeywordTab: state => {},
    showUserTabReducer: (state, action: PayloadAction<typeof initialState>) => {
      return {
        ...state,
        ...action.payload
      };
    }
  }
});

export const { showUserTabReducer } = userInfoSlice.actions;
export default userInfoSlice.reducer;
