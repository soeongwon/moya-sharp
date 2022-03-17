import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getNewList, NewsType, SearchPayload } from "../../api/newsListApi";

export const fetchNewList = createAsyncThunk(
  "newlist/fetchNewsList",
  async (searchPayload: SearchPayload, thunkApi) => {
    const response = await getNewList(searchPayload);

    if (response.status !== 200) {
      return thunkApi.rejectWithValue(response.data.error);
    }
    return response.data;
  }
);

type NewsListState = {
  newListData: NewsType[];
  nextPageToken: string | undefined;
  loading: boolean;
  error: any;
};

const initialState: NewsListState = {
  newListData: [],
  nextPageToken: "",
  loading: false,
  error: null
};

const NewsListSlice = createSlice({
  name: "newsList",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchNewList.pending, state => {
      state.loading = true;
      state.newListData = [];
      state.error = null;
      state.nextPageToken = "";
    });

    builder.addCase(fetchNewList.fulfilled, (state, action) => {
      console.log(action);
      state.loading = false;
      state.newListData.push(...state.newListData, ...action.payload.stories);
      state.nextPageToken = action.payload.nextPageToken;
    });

    builder.addCase(fetchNewList.rejected, (state, action: any) => {
      console.log(action);
      state.loading = false;
      state.error = action.error.message;
      state.nextPageToken = "";
    });
  }
});

export default NewsListSlice.reducer;
