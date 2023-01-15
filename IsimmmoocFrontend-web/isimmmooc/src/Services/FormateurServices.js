import { SERVER_API_CONFIG } from "./../Configurations"
const URL = `${SERVER_API_CONFIG.PROTOCOL}://${SERVER_API_CONFIG.HOST_NAME}:${SERVER_API_CONFIG.PORT}`;

async function AddCourse(bodyData){
    
    return fetch(URL+'/app/Cours/',{
      method:'POST',
      headers:{
        'Authorization': `Token ${localStorage.getItem("Token")}`
      },
      body:bodyData
      })
   
}

export {AddCourse}