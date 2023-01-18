

/*
 * ----------------------------------------------------------------------
 *                          Components & Functions                      |
 * ----------------------------------------------------------------------
 */


import React from 'react'
import {useState} from 'react'
import { Button,Grid,TextField,Snackbar } from '@mui/material';
import {useSelector,useDispatch} from 'react-redux'
import { updateConfirmPassword,updatePassword} from '../../../../Redux/UserSignUpInfoSlice';
import MuiAlert from '@mui/material/Alert';
/*
* ----------------------------------------------------------------------
*                              Services & Models                       |
* ----------------------------------------------------------------------
*/

import { SignUpApprenant,SignUpPreFormateur,SignUpPreOrganisme } from '../../../../Services';

/*
 * ----------------------------------------------------------------------
 *                                Styles                                |
 * ----------------------------------------------------------------------
 */
import './SignUpThirdStep.scss';
import styles from './../../../../Assets/Styles/style.module.scss'
/*
 * ----------------------------------------------------------------------
 *                                Images                                |
 * ----------------------------------------------------------------------
 */

function SignUpThirdStep(props) {

  /* --------------------------------------------------------------------
   *                           Constants                                |
   * --------------------------------------------------------------------
   */
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  /* --------------------------------------------------------------------
   *                               Props                                |
   * --------------------------------------------------------------------
   */
  const {currentStep,goPrevious,goNext}=props
  /*--------------------------------------------------------------------
  *                                 Data                               |
  * --------------------------------------------------------------------
  */


  /* --------------------------------------------------------------------
   *                             Hooks & States                         |
   * --------------------------------------------------------------------
   */
  const {
    email,
    userTypeSU,
    firstName,
    lastName,
    phoneNumber,
    birthDay,
    cv,
    organismeName,
    organismeWebSite,
    organismeAdress,
    password,
    confirmPassword
  } = useSelector((state)=>state.userInfo)
  const dispatch = useDispatch()

  const [passwordError,setPasswordError] = useState(false)

  const[warningMessage,setWarningMessage]=useState('')
  const [open, setOpen] = useState(false);

  /* --------------------------------------------------------------------
   *                             Functions                              |
   * --------------------------------------------------------------------
   */

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const validatePasswordConfirm =(passwordConfirm)=>{
    return (passwordConfirm === password)
  }
  const hadnlePasswordConfirm = (event) => {
        setPasswordError(!validatePasswordConfirm(event.target.value))
        dispatch(updateConfirmPassword(event.target.value));
  };

  const handleGoNext = async() => {
    if ( !validatePasswordConfirm(confirmPassword))
    {
      setWarningMessage('Passwords must match !')
      setOpen(true)
      return
    }

    if(userTypeSU === "Apprenant")
    {
      const response = await SignUpApprenant({
        first_name:firstName,
        last_name:lastName,
        date_of_birth:birthDay,
        mail:email,
        phone_number:"+216"+phoneNumber,
        password:password,
      })
      if(response.ok)
      {
        const responseJson = response.json()
        console.log(responseJson.token)
      }
      else
      {
        const responseJson=response.json()
        setWarningMessage('Error ocresponseJson.cured when signing up !')
        setOpen(true)
        return
      }
      
    }
    else if(userTypeSU === "Formateur")
    {
      
      const response = await SignUpPreFormateur({
        first_name:firstName,
        last_name:lastName,
        date_of_birth:birthDay,
        mail:email,
        phone_number:"+216"+phoneNumber,
        password:password,
        cv:cv
      })
      if(response.ok)
      {
        const responseJson=response.json()
        console.log(responseJson.token)
      }
      else
      {
        setWarningMessage('Error occured when signing up !')
        setOpen(true)
        return
      }
      
    }
    else if(userTypeSU === "Organisme")
    {
      const response = await SignUpPreOrganisme({
        name:organismeName,
        email:email,
        adress:organismeAdress,
        web_site:organismeWebSite,
        phone_number:"+216"+phoneNumber,
        password:password
      })
      if(response.ok)
      {
        const responseJson=response.json()
        console.log(responseJson.token)
      }
      else
      {
        setWarningMessage('Error occured when signing up !')
        setOpen(true)
        return
      }
      
    }
    

    goNext();
    
  };
  const handleGoPrevious = () => {
    
    goPrevious();
    
  };
  
  /* --------------------------------------------------------------------
   *                            Effect Hooks                            |
   * --------------------------------------------------------------------
   */

  /* --------------------------------------------------------------------
   *                                 JSX                                |
   * --------------------------------------------------------------------
   */
  return (
      <Grid
        className='SignUpThirdStep'
        sx={{
          width:{'xs':'100%','sm':'50%','md':'50%'}
        }}
        container
        flexDirection='column'
        alignItems='flex-start'
        gap='10px'
      >
        <Grid
          container
        >
          <TextField
            value={password}
            onChange={(event)=>{dispatch(updatePassword(event.target.value))}}
            name='Password'
            placeholder='Entrez votre Password'
            label="Password"
            type='password'
            fullWidth
            sx={{
              width:'100%',
              '& label.Mui-focused': {
                color: styles.PrimaryColorLight,
              },
              '& .MuiInput-underline:after': {
                borderBottomColor: styles.PrimaryColorLight,
              },
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: styles.PrimaryColorLight,
                },
                '&:hover fieldset': {
                  borderColor: styles.PrimaryColorLight,
                },
                '&.Mui-focused fieldset': {
                  borderColor: styles.PrimaryColorLight,
                },
              },
            }}
            />
        </Grid>
        <Grid
          container
        >
          <TextField
            value={confirmPassword}
            onChange={hadnlePasswordConfirm}
            name='ConfirmePassword'
            placeholder='Confirmer votre Password'
            label="Confirme Password"
            type='password'
            fullWidth
            sx={{
              width:'100%',
              '& label.Mui-focused': {
                color: passwordError?'red':styles.PrimaryColorLight,
              },
              '& .MuiInput-underline:after': {
                borderBottomColor: styles.PrimaryColorLight,
              },
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: passwordError?'red':styles.PrimaryColorLight,
                },
                '&:hover fieldset': {
                  borderColor: passwordError?'red':styles.PrimaryColorLight,
                },
                '&.Mui-focused fieldset': {
                  borderColor: passwordError?'red':styles.PrimaryColorLight,
                },
              },
            }}
            />
        </Grid>
      
        <Grid 
          container
          direction='row'
          alignItems='center'
          justifyContent='flex-end'
          className="StepperFooter">
           
            {currentStep !== 0?(
              <Button  
                variant='text' 
                sx={{
                  backgroundColor:'#fff',
                  color:styles.PrimaryColor,
                  "&:hover" : {
                    backgroundColor : styles.PrimaryColor,
                    color: '#fff'  ,
                  },
                  my: 2, 
                  mx:1,
                  borderRadius : '3px'
                }}
                onClick={handleGoPrevious}
              >
                previous
              </Button>
            ):(
              <></>
            )}
             <Button 
                variant='text'
                sx={{
                  backgroundColor:'#fff',
                  color:styles.SecondaryColor,
                  "&:hover" : {
                    backgroundColor : styles.SecondaryColor,
                    color: '#fff'  ,
                  },
                  my: 2, 
                  mx:1,
                  borderRadius : '3px'
                }}
                onClick={handleGoNext}
              >
                next
              </Button>
          </Grid>
          <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
              {warningMessage}
            </Alert>
          </Snackbar>
    </Grid>
  )
}

export default SignUpThirdStep