import { createSlice, createAsyncThunk, current } from '@reduxjs/toolkit';
import instance from '../../lib/instance';
export const __getCommnetsByTodoId = createAsyncThunk(
  'GET_COMMENT_BY_TODO_ID',
  async (arg, thunkAPI) => {
    console.log(arg);
    try {
      const { data } = await instance.get(`/api/comments?${arg}`); //커맨트에아이디값주기
      return thunkAPI.fulfillWithValue(data);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.code);
    }
  }
);
export const __deleteComment = createAsyncThunk(
  'DELETE_COMMENT',
  async (payload, thunkAPI) => {
    console.log('페이로드', payload);
    try {
      await instance.delete(`/api/comment/${payload}`);
      return thunkAPI.fulfillWithValue(payload);
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);
export const __addComment = createAsyncThunk(
  'ADD_COMMENT',
  async (payload, thunkAPI) => {
    try {
      ////////////////////////////////////여기에comment값을더해준다
      console.log(payload);
      const { data } = await instance.post('/api/comment', payload);

      return thunkAPI.fulfillWithValue(data);
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

const initialState = {
  comments: {
    data: [],
    isLoading: false,
    error: null,
  },
  commentsByTodoId: {
    data: [],
    isLoading: false,
    error: null,
  },
};
export const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {},
  extraReducers: {
    [__getCommnetsByTodoId.pending]: (state) => {
      state.commentsByTodoId.isLoading = true;
    },
    [__getCommnetsByTodoId.fulfilled]: (state, action) => {
      state.commentsByTodoId.isLoading = false;
      state.commentsByTodoId.data = action.payload;
    },
    [__getCommnetsByTodoId.rejected]: (state, action) => {
      state.commentsByTodoId.isLoading = false;
      state.commentsByTodoId.error = action.payload;
    },
    [__addComment.fulfilled]: (state, action) => {
      state.commentsByTodoId.isLoading = false;
      state.commentsByTodoId.data.push(action.payload);
      // state.comments.data.push(action.payload);
    },
    [__addComment.rejected]: (state, action) => {
      state.commentsByTodoId.isLoading = false;
      state.commentsByTodoId.error = action.payload;
    },
    [__addComment.pending]: (state) => {
      state.commentsByTodoId.isLoading = true;
    },
    [__deleteComment.pending]: (state) => {
      state.commentsByTodoId.isLoading = true;
    },
    [__deleteComment.fulfilled]: (state, action) => {
      console.log('삭제중...', current(state));
      console.log('삭제중...', action);
      state.commentsByTodoId.isLoading = false;
      const target = state.commentsByTodoId.data.findIndex(
        (comment) => comment.id === action.payload
      );
      console.log('target', target);
      state.commentsByTodoId.data.splice(target, 1);
    },
    [__deleteComment.rejected]: (state, action) => {
      state.commentsByTodoId.isLoading = false;
      state.commentsByTodoId.error = action.payload;
    },
  },
});
export default commentsSlice.reducer;
