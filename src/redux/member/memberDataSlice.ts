import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Action } from "history";
// 여기서 저장할 목록
// 유료회원이 지정한 키워드 리스트
//
//
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
    { title: "LinkedIn" },
  ],
  userCurrentTab: 0,
};

const memberDataSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    addKeyword: (state,action) => {
      state.userSavedKeywords.push(...state.userSavedKeywords,...action.payload)
    },
    removeKeyword: (state) => {},
    showUserTabReducer: (state, action: PayloadAction<typeof initialState>) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { showUserTabReducer,addKeyword } = memberDataSlice.actions;
export default memberDataSlice.reducer;
