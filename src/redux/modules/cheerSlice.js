import { createSlice, createAsyncThunk, current } from '@reduxjs/toolkit';
import instance from '../../lib/instance';

export const __getPrice = createAsyncThunk(
  'GET_PRICE',
  async (payload, thunkAPI) => {
    console.log('get', payload.id);
    try {
      const { data } = await instance.get(`/api/cheer/${payload.id}`);
      return thunkAPI.fulfillWithValue(data);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.code);
    }
  }
);

export const __postPrice = createAsyncThunk(
  'POST_PRICE',
  async (payload, thunkAPI) => {
    console.log('페이로드', payload);
    try {
      const { data } = await instance.post(`/api/cheer/${payload.id}`, payload);

      return thunkAPI.fulfillWithValue(data);
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

const initialState = {
  cheer: {
    data: [],
    isLoading: false,
    error: null,
  },
};
export const cheerSlice = createSlice({
  name: 'cheer',
  initialState,
  reducers: {},
  extraReducers: {
    [__postPrice.fulfilled]: (state, action) => {
      state.cheer.isLoading = false;
      state.cheer.data = action.payload;
    },
    [__postPrice.rejected]: (state, action) => {
      state.cheer.isLoading = false;
      state.cheer.error = action.payload;
    },
    [__postPrice.pending]: (state) => {
      state.cheer.isLoading = true;
    },
    [__getPrice.pending]: (state) => {
      state.cheer.isLoading = true;
    },
    [__getPrice.fulfilled]: (state, action) => {
      state.cheer.isLoading = false;
      state.cheer.data = action.payload;
      // state.cheer.data.push(action.payload);
    },
    [__getPrice.rejected]: (state, action) => {
      state.cheer.isLoading = false;
      state.cheer.error = action.payload;
    },
  },
});
export default cheerSlice.reducer;
