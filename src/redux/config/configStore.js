import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import authSlice from '../modules/authSlice';
import posting from '../modules/postsSlice';
import comments from '../modules/commentsSlice';
import cheerSlice from '../modules/cheerSlice';

const store = configureStore({
  reducer: { authSlice, posting, comments, cheerSlice },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default store;
