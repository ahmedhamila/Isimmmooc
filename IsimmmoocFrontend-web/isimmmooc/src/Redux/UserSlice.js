import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    id:'',
    email:'',
    token:'',
    userType:'',
    firstName :'',
    lastName :'',
    phoneNumber :'',
    birthDay :'',
    image :'',
    cv:'',
    registeredCourses:[],
    organismeName:'',
    organismeWebSite:'',
    organismeAdress:'',
  },
  reducers: {
    updateId : (state,action)=>{
        state.id = action.payload
    },
    updateEmail : (state,action)=>{
        state.email = action.payload
    },
    updateToken : (state,action)=>{
        state.token = action.payload
        localStorage.setItem("Token",state.token)
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
    updateImage : (state,action)=>{
        state.image = action.payload
    },
    updateCV : (state,action)=>{
        state.cv = action.payload
    },
    updateRegisteredCourses : (state,action)=>{
        state.registeredCourses = action.payload
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
    updateCredentials : (state,action)=>
    {
        state.id=action.payload.user.id
        state.email=action.payload.user.mail
        state.token=action.payload.Token
        state.userType=action.payload.UserType
        state.firstName=action.payload.user.first_name?action.payload.user.first_name:null
        state.lastName=action.payload.user.last_name?action.payload.user.last_name:null
        state.phoneNumber=action.payload.user.phone_number?action.payload.user.phone_number:null
        state.birthDay=action.payload.user.date_of_birth?action.payload.user.date_of_birth:null
        state.image=action.payload.user.image?action.payload.user.image:null
        state.cv=action.payload.user.cv?action.payload.user.cv:null
        state.organismeName=action.payload.user.name?action.payload.user.name:null
        state.organismeWebSite=action.payload.user.web_site?action.payload.user.web_site:null
        state.organismeAdress=action.payload.user.adress?action.payload.user.adress:null
        state.registeredCourses=action.payload.user.registered_courses?action.payload.user.registered_courses:[]
    }
  }
})

// Action creators are generated for each case reducer function
export const { updateId,updateEmail,updateToken, updateUserType,updateFirstName,updateLastName,updatePhoneNumber,updateBirthDay,updateImage,updateCV,updateOrganismeName,updateOrganismeWebSite,updateOrganismeAdress,updateCredentials } = userSlice.actions

export default userSlice.reducer