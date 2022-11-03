import { createSlice, createAsyncThunk, current } from '@reduxjs/toolkit';

import instance from '../../lib/instance';

export const __getThunk = createAsyncThunk(
  'GET_POSTING', //action value

  async (payload, thunkAPI) => {
    try {
      const data = await instance.get('api/posting');

      return thunkAPI.fulfillWithValue(data.data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
// //콜백
// axios.defaults.headers.get["authorization"] = payload.authorization;
// axios.defaults.headers.get["refresh-token"] = payload.refreshtoken;

export const __addPostThunk = createAsyncThunk(
  'ADD_POSTING', //action value

  async (payload, thunkAPI) => {
    //콜백

    try {
      // axios.defaults.headers.post['authorization'] = payload.authorization;
      // axios.defaults.headers.post['refresh-token'] = payload.refreshtoken;
      const postList = await instance.post('api/posting', payload, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      //"multipart/form-data"

      //'application/json'
      return thunkAPI.fulfillWithValue(postList.data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __getPost = createAsyncThunk(
  'GET_POST', //action value

  async (payload, thunkAPI) => {
    try {
      const data = await instance.get(`api/posting/${payload}`);

      return thunkAPI.fulfillWithValue(data.data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  posting: [],

  isLoading: false,
  isSuccess: false,
  error: null,
};

export const postsSlice = createSlice({
  name: 'posting', //모듈의 이름

  initialState,
  reducers: {}, //action value + action creator
  extraReducers: {
    [__getThunk.pending]: (state) => {
      state.isLoading = true;
    },

    [__getThunk.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__getThunk.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.posting = action.payload;
    },

    [__addPostThunk.pending]: (state) => {
      state.isLoading = true;
    },
    [__addPostThunk.fulfilled]: (state, action) => {
      state.isLoading = false;

      state.posting.push(action.payload);
    },
    [__addPostThunk.rejected]: (state, action) => {
      state.isLoading = false;
    },
    [__getPost.pending]: (state) => {
      state.isLoading = true;
    },

    [__getPost.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__getPost.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.posting = action.payload;
    },
  },
});

export const {} = postsSlice.actions;
export default postsSlice.reducer;
