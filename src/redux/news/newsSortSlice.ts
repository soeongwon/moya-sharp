import { createSlice } from "@reduxjs/toolkit";

interface Props {
  newsSortState: "top" | "latest" | "populer";
}

const initialState: Props = {
  newsSortState: "top" 
};

const newsSortSlice = createSlice({
  name: "NewsSort",
  initialState,
  reducers: {
    changeNewsOption: (state, action) => {
      state.newsSortState = action.payload;
    }
  }
});

export const { changeNewsOption } = newsSortSlice.actions;

export default newsSortSlice.reducer;
