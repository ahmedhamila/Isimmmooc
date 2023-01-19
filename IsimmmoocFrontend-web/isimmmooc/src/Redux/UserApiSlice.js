import {createApi , fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { SERVER_API_CONFIG } from "./../Configurations"
const URL = `${SERVER_API_CONFIG.PROTOCOL}://${SERVER_API_CONFIG.HOST_NAME}:${SERVER_API_CONFIG.PORT}`;

export const userApi = createApi({
    reducerPath:"userApi",
    baseQuery:fetchBaseQuery({baseUrl : URL+'/users/'}),
    endpoints:(builder)=>({
        getUserCredentials : builder.query({
            query : (body)=>({
                url:'User/getUser/',
                method:'POST',
                body,
            })
        }),
        
    })

})


export const {useGetUserCredentialsQuery}=userApi