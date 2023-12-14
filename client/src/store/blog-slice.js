import { createSlice } from "@reduxjs/toolkit";
const blogSlice = createSlice({
    name: 'blog',
    initialState:{
        blogs:[]
    },
    reducers:{
        setBlogsList(state, action){
            console.log('action payload', action);
            state.blogs = action.payload;
        },
        updateForm(state,action){
            
        }
    }
})
export default blogSlice;