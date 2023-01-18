import { SERVER_API_CONFIG } from "./../Configurations"
const URL = `${SERVER_API_CONFIG.PROTOCOL}://${SERVER_API_CONFIG.HOST_NAME}:${SERVER_API_CONFIG.PORT}`;

async function SignUpApprenant(bodyData){
    
    return fetch(URL+'/users/Apprenant/addApprenant/',{
      method:'POST',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json',
      },
      body:JSON.stringify(bodyData)
      })
    
}
async function SignUpPreFormateur(bodyData){
    
    return fetch(URL+'/users/Formateur/addPreFormateur/',{
      method:'POST',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json',
      },
      body:JSON.stringify(bodyData)
      })
}
async function SignUpPreOrganisme(bodyData){
    
    return fetch(URL+'/users/Organisme/addPreOrganisme/',{
      method:'POST',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json',
      },
      body:JSON.stringify(bodyData)
      })
}
async function AuthVerification(bodyData){
    
    return fetch(URL+'/auth/',{
      method:'POST',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json',
      },
      body:JSON.stringify(bodyData)
      })
}
async function Authentification(bodyData){
    
    return fetch(URL+'/users/User/getUser/',{
      method:'POST',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json',
      },
      body:JSON.stringify(bodyData)
      })
}

export {SignUpApprenant,SignUpPreFormateur,SignUpPreOrganisme,AuthVerification,Authentification}