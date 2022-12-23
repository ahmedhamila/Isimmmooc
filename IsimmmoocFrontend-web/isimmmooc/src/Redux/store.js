import { configureStore } from "@reduxjs/toolkit";
import userSignUpInfoReducer from './UserSignUpInfoSlice'
export default configureStore({
    reducer:{
        userInfo:userSignUpInfoReducer
    }
});