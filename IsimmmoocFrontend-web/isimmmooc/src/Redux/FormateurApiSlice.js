import {createApi , fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { SERVER_API_CONFIG } from "./../Configurations"
const URL = `${SERVER_API_CONFIG.PROTOCOL}://${SERVER_API_CONFIG.HOST_NAME}:${SERVER_API_CONFIG.PORT}`;

export const formateurApi = createApi({
    reducerPath:"formateurApi",
    baseQuery:fetchBaseQuery({baseUrl : URL+'/app/'}),
    endpoints:(builder)=>({
        getDisciplines : builder.query({
            query : ()=>({
                url:'Discipline',
                method:'GET',
            })
        }),
        getFullCourse : builder.query({
            query : (id)=>({
                url:`CoursFull/${id}`,
                method:'GET',
            })
        })
    })

})


export const {useGetDisciplinesQuery,useGetFullCourseQuery}=formateurApi