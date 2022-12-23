

async function SignUpApprenant(bodyData){
    
    const response = await fetch('http://127.0.0.1:8000/users/Apprenant/addApprenant/',{
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
    
    const response = await fetch('http://127.0.0.1:8000/users/Formateur/addPreFormateur/',{
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
    
    const response = await fetch('http://127.0.0.1:8000/users/Organisme/addPreOrganisme/',{
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
    
    const response = await fetch('http://127.0.0.1:8000/auth/',{
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