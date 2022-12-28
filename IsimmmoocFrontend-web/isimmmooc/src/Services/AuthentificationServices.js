import { SERVER_API_CONFIG } from "./../Configurations"
const URL = `${SERVER_API_CONFIG.PROTOCOL}://${SERVER_API_CONFIG.HOST_NAME}:${SERVER_API_CONFIG.PORT}`;

async function SignUpApprenant(bodyData){
    
    const response = await fetch(URL+'/users/Apprenant/addApprenant/',{
      method:'POST',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json',
      },
      body:JSON.stringify(bodyData)
      })
    const json = await response.json()
    return json.Token
}
async function SignUpPreFormateur(bodyData){
    
    const response = await fetch(URL+'/users/Formateur/addPreFormateur/',{
      method:'POST',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json',
      },
      body:JSON.stringify(bodyData)
      })
    const json = await response.json()
    return json.Token
}
async function SignUpPreOrganisme(bodyData){
    
    const response = await fetch(URL+'/users/Organisme/addPreOrganisme/',{
      method:'POST',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json',
      },
      body:JSON.stringify(bodyData)
      })
    const json = await response.json()
    return json.Token
}
async function AuthVerification(bodyData){
    
    const response = await fetch(URL+'/auth/',{
      method:'POST',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json',
      },
      body:JSON.stringify(bodyData)
      })
    const json = await response.json()
    return json.token
}

export {SignUpApprenant,SignUpPreFormateur,SignUpPreOrganisme,AuthVerification}