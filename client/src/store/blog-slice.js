import { createSlice } from "@reduxjs/toolkit";
const blogSlice = createSlice({
    name: 'blog',
    initialState:{
        blogs:[],
        blogUnderReview: {
            title: "",
            content: ""
        }
    },
    reducers:{
        setBlogsList(state, action){
            state.blogs = action.payload;
        },
        updateForm(state,action){
            
        },
        setBlogForReview(state,action){
            state.blogUnderReview= action.payload
        }
    }
})
export const {setBlogForReview} = blogSlice.actions;
export default blogSlice;