import { SERVER_API_CONFIG } from "./../Configurations"
const URL = `${SERVER_API_CONFIG.PROTOCOL}://${SERVER_API_CONFIG.HOST_NAME}:${SERVER_API_CONFIG.PORT}`;


async function UpdateApprenant(id,bodyData){
    
  return fetch(URL+`/users/Apprenant/${id}/`,{
    method:'PUT',
    headers:{
      'Authorization': `Token ${localStorage.getItem("Token")}`
    },
    body:bodyData
    })
 
}

async function GetCourses(){
    
    return fetch(URL+`/app/Cours`,{
      method:'GET',
      headers:{
        'Content-Type':'application/json',
        'Authorization':`Token ${localStorage.getItem("Token")}`
      }
      })
  }

async function GetCoursById(id){
    
    return fetch(URL+`/app/CoursFull/${id}`,{
      method:'GET',
      headers:{
        'Content-Type':'application/json',
        'Authorization': `Token ${localStorage.getItem("Token")}`
      },
      })
   
  } 
async function GetDiscipline(){
    
    return fetch(URL+`/app/Discipline`,{
      method:'GET',
      headers:{
        'Content-Type':'application/json',
        'Authorization': `Token ${localStorage.getItem("Token")}`
      },
      })
   
  } 
async function RegisterCourse(id){
    
    return fetch(URL+`/app/Cours/registerCourse/`,{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
        'Authorization': `Token ${localStorage.getItem("Token")}`
      },
      body:JSON.stringify({id})
      })
   
  } 

 

  export {UpdateApprenant,GetCourses,GetCoursById,GetDiscipline,RegisterCourse}  