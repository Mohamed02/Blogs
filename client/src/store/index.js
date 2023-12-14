import {configureStore} from '@reduxjs/toolkit';
import authSlice from './auth-slice';
import blogSlice from './blog-slice';

const store= configureStore({reducer:{
    auth:authSlice.reducer,
    blog: blogSlice.reducer}});
export default store;
export const authAction= authSlice.actions;
export const blogAction= blogSlice.actions;