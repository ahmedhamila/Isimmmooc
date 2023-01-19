import { SERVER_API_CONFIG } from "./../Configurations"
const URL = `${SERVER_API_CONFIG.PROTOCOL}://${SERVER_API_CONFIG.HOST_NAME}:${SERVER_API_CONFIG.PORT}`;


async function GetCourses(){
    
    return fetch(URL+`/app/Cours`,{
      method:'GET',
      headers:{
        'Content-Type':'application/json',
        'Authorization':`Token ${localStorage.getItem("Token")}`
      }
      })
  }

  export {GetCourses}  