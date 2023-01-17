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

async function AddChapitre(bodyData){
    
    return fetch(URL+'/app/Chapitre/',{
      method:'POST',
      headers:{
        'Authorization': `Token ${localStorage.getItem("Token")}`
      },
      body:bodyData
      })
   
}
async function AddQuestion(bodyData){
    
    return fetch(URL+'/app/Question/',{
      method:'POST',
      headers:{
        'Authorization': `Token ${localStorage.getItem("Token")}`
      },
      body:bodyData
      })
   
}
async function AddAnswer(bodyData){
    
    return fetch(URL+'/app/Answer/',{
      method:'POST',
      headers:{
        'Authorization': `Token ${localStorage.getItem("Token")}`
      },
      body:bodyData
      })
   
}

export {AddCourse,AddChapitre,AddQuestion,AddAnswer}