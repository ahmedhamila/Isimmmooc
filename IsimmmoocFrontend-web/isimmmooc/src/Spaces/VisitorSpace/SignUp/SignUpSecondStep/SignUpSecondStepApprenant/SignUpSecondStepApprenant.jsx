

/*
 * ----------------------------------------------------------------------
 *                          Components & Functions                      |
 * ----------------------------------------------------------------------
 */

import React from 'react'
import { Grid,TextField,Button,Snackbar } from '@mui/material';
import {useSelector,useDispatch} from 'react-redux'
import { updateBirthDay,updateFirstName,updateLastName,updatePhoneNumber } from '../../../../../Redux/UserSignUpInfoSlice';
import MuiAlert from '@mui/material/Alert';
/*
* ----------------------------------------------------------------------
*                              Services & Models                       |
* ----------------------------------------------------------------------
*/



/*
 * ----------------------------------------------------------------------
 *                                Styles                                |
 * ----------------------------------------------------------------------
 */
import styles from './../../../../../Assets/Styles/style.module.scss'
import { useState } from 'react';

/*
 * ----------------------------------------------------------------------
 *                                Images                                |
 * ----------------------------------------------------------------------
 */

function SignUpSecondStepApprenant(props) {

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
    const {currentStep,handleGoNext,handleGoPrevious}=props
  /*--------------------------------------------------------------------
  *                                 Data                               |
  * --------------------------------------------------------------------
  */


  /* --------------------------------------------------------------------
   *                             Hooks & States                         |
   * --------------------------------------------------------------------
   */
  const {firstName,lastName,phoneNumber,birthDay} = useSelector((state)=>state.userInfo)
  const dispatch = useDispatch()

  const [firstNameError,setFirstNameError] = useState(false)
  const [lastNameError,setLastNameError] = useState(false)
  const [phoneNumberError,setPhoneNumberError] = useState(false)
  const [dateError,setDateError] = useState(false)

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
  const validateFirstName =(firstName)=>{
    var regex = /[a-zA-Z]+[a-zA-Z]+/
    console.log(regex.test(firstName))
    return (regex.test(firstName) && !(/\d/.test(firstName)))
  }
  const handleFirstName = (event) => {
        setFirstNameError(!validateFirstName(event.target.value))
        dispatch(updateFirstName(event.target.value));
  };
  const validateLastName =(lastName)=>{
    var regex = /[a-zA-Z]+[a-zA-Z]+/
    console.log(regex.test(lastName))
    return (regex.test(lastName) && !(/\d/.test(lastName)))
  }
  const handleLastName = (event) => {
        setLastNameError(!validateLastName(event.target.value))
        dispatch(updateLastName(event.target.value));
  };
  const validatePhoneNumber =(phoneNumber)=>{
    var regex = /[2579][0-9]{7}|(3[012]|4[01]|8[0128])[0-9]{6}|42[16][0-9]{5}/
    console.log(regex.test(phoneNumber))
    return (regex.test(phoneNumber) && phoneNumber.length === 8)
  }
  const handlePhoneNumber = (event) => {
        setPhoneNumberError(!validatePhoneNumber(event.target.value))
        dispatch(updatePhoneNumber(event.target.value));
  };
  const validateDate =(date)=>{
    return (date.length===10)
  }
  const handleDate = (event) => {
        setDateError(!validateDate(event.target.value))
        dispatch(updateBirthDay(event.target.value));
  };


  const goNext = () => {
    
    if ( !validateFirstName(firstName))
    {
      setWarningMessage('Invalid First Name !')
      setOpen(true)
      return
    }
    if ( !validateLastName(lastName))
    {
      setWarningMessage('Invalid last Name !')
      setOpen(true)
      return
    }
    if ( !validatePhoneNumber(phoneNumber))
    {
      setWarningMessage('Invalid Phone Number !')
      setOpen(true)
      return
    }
    if ( !validateDate(birthDay))
    {
      setWarningMessage('Invalid Birthday !')
      setOpen(true)
      return
    }
    handleGoNext();
    
  };
  const goPrevious = () => {
    

    handleGoPrevious();
    
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
        className='SignUpSecondStepApprenant'
        container
        flexDirection='column'
        alignItems='flex-start'
        gap='10px'
        >
        <Grid
          container
        >
          <TextField
            value={firstName}
            onChange={handleFirstName}
            name='Prenom'
            placeholder='Entrez votre Prenom'
            label="Prenom"
            fullWidth
            sx={{
              width:'100%',
              '& label.Mui-focused': {
                color: firstNameError?'red':styles.PrimaryColorLight,
              },
              '& .MuiInput-underline:after': {
                borderBottomColor: styles.PrimaryColorLight,
              },
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: firstNameError?'red':styles.PrimaryColorLight,
                },
                '&:hover fieldset': {
                  borderColor: firstNameError?'red':styles.PrimaryColorLight,
                },
                '&.Mui-focused fieldset': {
                  borderColor: firstNameError?'red':styles.PrimaryColorLight,
                },
              },
            }}
            />
        </Grid>
        <Grid
          container
        >
          <TextField
            value={lastName}
            onChange={handleLastName}
            name='Nom'
            placeholder='Entrez votre Nom'
            label="Nom"
            fullWidth
            sx={{
              width:'100%',
              '& label.Mui-focused': {
                color: lastNameError?'red':styles.PrimaryColorLight,
              },
              '& .MuiInput-underline:after': {
                borderBottomColor: styles.PrimaryColorLight,
              },
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: lastNameError?'red':styles.PrimaryColorLight,
                },
                '&:hover fieldset': {
                  borderColor: lastNameError?'red':styles.PrimaryColorLight,
                },
                '&.Mui-focused fieldset': {
                  borderColor: lastNameError?'red':styles.PrimaryColorLight,
                },
              },
            }}
            />
        </Grid>
        <Grid
          container
        >
          <TextField
            value={phoneNumber}
            onChange={handlePhoneNumber}
            name='Phone number'
            placeholder='Eg. 55436333'
            label="Phone number"
            fullWidth
            sx={{
              width:'100%',
              '& label.Mui-focused': {
                color: phoneNumberError?'red':styles.PrimaryColorLight,
              },
              '& .MuiInput-underline:after': {
                borderBottomColor: styles.PrimaryColorLight,
              },
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: phoneNumberError?'red':styles.PrimaryColorLight,
                },
                '&:hover fieldset': {
                  borderColor: phoneNumberError?'red':styles.PrimaryColorLight,
                },
                '&.Mui-focused fieldset': {
                  borderColor: phoneNumberError?'red':styles.PrimaryColorLight,
                },
              },
            }}
            />
        </Grid>
        <Grid
          container
        >
          <TextField
            value={birthDay}
            onChange={handleDate}
            name='Date de Naissance'
            type='date'
            fullWidth
            label="Date de naissance"
            InputLabelProps={{
                shrink: true,
              }}
            sx={{
              width:'100%',
              '& label.Mui-focused': {
                color: dateError?'red':styles.PrimaryColorLight,
              },
              '& .MuiInput-underline:after': {
                borderBottomColor: styles.PrimaryColorLight,
              },
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: dateError?'red':styles.PrimaryColorLight,
                },
                '&:hover fieldset': {
                  borderColor: dateError?'red':styles.PrimaryColorLight,
                },
                '&.Mui-focused fieldset': {
                  borderColor: dateError?'red':styles.PrimaryColorLight,
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
                onClick={goPrevious}
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
                onClick={goNext}
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

export default SignUpSecondStepApprenant