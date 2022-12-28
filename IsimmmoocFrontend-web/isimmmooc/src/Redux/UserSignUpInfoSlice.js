import { createSlice } from '@reduxjs/toolkit'

export const userSignUpInfoSlice = createSlice({
  name: 'userSignUpInfo',
  initialState: {
    email:'',
    userType:'Apprenant',
    firstName :'',
    lastName :'',
    phoneNumber :'',
    birthDay :'',
    cv:'',
    organismeName:'',
    organismeWebSite:'',
    organismeAdress:'',
    password:'',
    confirmPassword:''
    
  },
  reducers: {
    updateEmail : (state,action)=>{
        state.email = action.payload
    },
    updateUserType : (state,action)=>{
        state.userType = action.payload
    },
    updateFirstName : (state,action)=>{
        state.firstName = action.payload
    },
    updateLastName : (state,action)=>{
        state.lastName = action.payload
    },
    updatePhoneNumber : (state,action)=>{
        state.phoneNumber = action.payload
    },
    updateBirthDay : (state,action)=>{
        state.birthDay = action.payload
    },
    updateCV : (state,action)=>{
        state.cv = action.payload
    },
    updateOrganismeName : (state,action)=>{
      state.organismeName = action.payload
    },
    updateOrganismeWebSite : (state,action)=>{
        state.organismeWebSite = action.payload
    },
    updateOrganismeAdress : (state,action)=>{
        state.organismeAdress = action.payload
    },
    updatePassword : (state,action)=>{
        state.password = action.payload
    },
    updateConfirmPassword : (state,action)=>{
        state.confirmPassword = action.payload
    },
  }
})

// Action creators are generated for each case reducer function
export const { updateEmail, updateUserType,updateFirstName,updateLastName,updatePhoneNumber,updateBirthDay,updateCV,updateOrganismeName,updateOrganismeWebSite,updateOrganismeAdress,updatePassword,updateConfirmPassword } = userSignUpInfoSlice.actions

export default userSignUpInfoSlice.reducer