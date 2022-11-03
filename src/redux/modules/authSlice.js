import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import { API_URL } from '../../shared/Request.jsx';
import { removeCookie, setCookie } from '../../lib/cookies';
import instance from '../../lib/instance';

export const addMemberThunk = createAsyncThunk(
  'ADD_MEMBER',
  async (payload, thunkAPI) => {
    console.log('페이로드', payload);
    try {
      const { data } = await instance.post('/api/member/signup', payload);

      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
// export const checkInMemberThunk = createAsyncThunk(
//   'CHECK_IN_MEMBER',

//   async (payload, thunkAPI) => {
//     console.log(payload);
//     try {
//       const { data } = await instance.post('/api/member/login', payload);
//       console.log('data', data);

//       if (data.success === true) {
//         setCookie('Access', data.request.getResponseHeader('Authorization'), {
//           expires: 30,
//         });
//         setCookie('Refresh', data.request.getResponseHeader('Refresh-Token'), {
//           expires: 30,
//         });
//         return thunkAPI.fulfillWithValue(data);
//       }

//       // sessionStorage.setItem('nickname', res.data.data.nickname);
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );

export const checkOutMemberThunk = createAsyncThunk(
  'CHECK_OUT_MEMBER',
  async (payload, thunkAPI) => {
    try {
      await instance.post('/api/auth/member/logout');

      sessionStorage.clear('nickname');

      removeCookie('Access');
      removeCookie('Refresh');

      return thunkAPI.fulfillWithValue(true);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
const initialState = {
  member: [],
  isLoading: false,
  error: null,
};
const authSlice = createSlice({
  name: 'member',
  initialState,
  reducers: {},
  extraReducers: {
    [addMemberThunk.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.member.push(action.payload);
    },
    [addMemberThunk.pending]: (state) => {
      state.isLoading = true;
    },
    [addMemberThunk.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    // [checkInMemberThunk.fulfilled]: (state, action) => {
    //   state.isLoading = false;
    //   state.success = true;
    // },
    // [checkInMemberThunk.pending]: (state) => {
    //   state.isLoading = true;
    // },
    // [checkInMemberThunk.rejected]: (state, action) => {
    //   state.isLoading = false;
    //   state.error = action.payload;
    // },
    [checkOutMemberThunk.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.success = action.payload;
    },
    [checkOutMemberThunk.pending]: (state) => {
      state.isLoading = true;
    },
    [checkOutMemberThunk.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});
export default authSlice.reducer;
