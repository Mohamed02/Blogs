import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState:{
    },
    reducers:{
        userLoggedIn(state){
            state.loggedIn = true;
        },
        userLoggedOut(state){
            state.loggedIn = false;
        },
        setLoginData(state,action){
console.log('inside set login data', action.payload)
            state.user = action.payload;
        }
    }
})
export default authSlice;