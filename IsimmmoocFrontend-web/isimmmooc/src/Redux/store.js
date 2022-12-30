import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userSignUpInfoReducer from './UserSignUpInfoSlice'
import userReducer from './UserSlice'
import { userApi } from "./UserApiSlice";
export default configureStore({
    reducer:{
        userInfo:userSignUpInfoReducer,
        user:userReducer,
        [userApi.reducerPath]:userApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware)
});