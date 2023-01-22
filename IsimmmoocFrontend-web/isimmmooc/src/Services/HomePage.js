import { SERVER_API_CONFIG } from "./../Configurations"
const URL = `${SERVER_API_CONFIG.PROTOCOL}://${SERVER_API_CONFIG.HOST_NAME}:${SERVER_API_CONFIG.PORT}`;

async function GetCoursesHomePage(){
    
    return fetch(URL+`/app/CoursFull`,{
      method:'GET',
      headers:{
        'Content-Type':'application/json',
      }
      })
  }
  async function GetFormateurs(){
    
    return fetch(URL+`/users/Formateur`,{
      method:'GET',
      headers:{
        'Content-Type':'application/json',
      }
      })
  }  
  export {GetCoursesHomePage,GetFormateurs}  
