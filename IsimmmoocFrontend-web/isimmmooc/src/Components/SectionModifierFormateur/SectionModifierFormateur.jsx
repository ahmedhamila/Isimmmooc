/*
 * ----------------------------------------------------------------------
 *                          Components & Functions                      |
 * ----------------------------------------------------------------------
 */

import * as React from 'react';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Snackbar from '@mui/material/Snackbar'
import MuiAlert from '@mui/material/Alert';
import TextField from '@mui/material/TextField';
import PhotoIcon from '@mui/icons-material/Photo';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { Button,Slide,Dialog,DialogTitle,DialogActions,DialogContent,DialogContentText } from '@mui/material';
/*
* ----------------------------------------------------------------------
*                              Services & Models                       |
* ----------------------------------------------------------------------
*/

import {UpdateFormateur} from './../../Services'

/*
 * ----------------------------------------------------------------------
 *                                Styles                                |
 * ----------------------------------------------------------------------
 */
import styles from './../../Assets/Styles/style.module.scss'
import { useNavigate } from 'react-router-dom';


/*
 * ----------------------------------------------------------------------
 *                                Images                                |
 * ----------------------------------------------------------------------
 */

 /* --------------------------------------------------------------------
   *                           Constants                                |
   * --------------------------------------------------------------------
   */


function  SectionModifierFormateur (props) {

  /* --------------------------------------------------------------------
   *                           Constants                                |
   * --------------------------------------------------------------------
   */
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  /* --------------------------------------------------------------------
   *                               Props                                |
   * --------------------------------------------------------------------
   */

  /*--------------------------------------------------------------------
  *                                 Data                               |
  * --------------------------------------------------------------------
  */


  /* --------------------------------------------------------------------
   *                             Hooks & States                         |
   * --------------------------------------------------------------------
   */
  const {id,image,firstName,lastName,birthDay,phoneNumber}=useSelector((state)=>state.user)
  
  const [firstNameUpdate,setFirstNameUpdate]=useState('')
  const [firstNameError,setFirstNameError] = useState(false)
    
  const [lastNameUpdate,setLastNameUpdate]=useState('')
  const [lastNameError,setLastNameError] = useState(false)

  const [birthDayUpdate,setBirthDayUpdate]=useState('')
  const [birthDayError,setBirthDayError]=useState(false)

  const [phoneNumberUpdate,setPhoneNumberUpdate]=useState('')
  const [phoneNumberError,setPhoneNumberError] = useState(false)

  const[imageUpdate,setImageUpdate]=useState(null)

  const [profileImg,setProfileImg]=useState(image)

  const[warningMessage,setWarningMessage]=useState('')
  const [open, setOpen] = useState(false);
  const [openDialog,setOpenDialog]=useState(false)
  const navigate = useNavigate()
  /* --------------------------------------------------------------------
   *                             Functions                              |
   * --------------------------------------------------------------------
   */
  const handleClose = (event, reason) => {
    setOpenDialog(false);
  };
  const handleCloseDialog = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
    navigate(0)
  };
  const imageHandler=(e) =>{
    setProfileImg(URL.createObjectURL(e.target.files[0]))
    setImageUpdate(e.target.files[0])
  }
  const validateFirstName =(firstName)=>{
    var regex = /[a-zA-Z]+[a-zA-Z]+/
    console.log(regex.test(firstName))
    return (regex.test(firstName) && !(/\d/.test(firstName)))
  }
  const handleFirstName = (event) => {
        setFirstNameError(!validateFirstName(event.target.value))
        setFirstNameUpdate(event.target.value)
  };
  const validateLastName =(lastName)=>{
    var regex = /[a-zA-Z]+[a-zA-Z]+/
    console.log(regex.test(lastName))
    return (regex.test(lastName) && !(/\d/.test(lastName)))
  }
  const handleLastName = (event) => {
        setLastNameError(!validateLastName(event.target.value))
        setLastNameUpdate(event.target.value)
  };
  const validateBirthDay =(birthDay)=>{
    return (birthDay.length===10)
  }

  const handleBirthDay = (event) => {
      setBirthDayError(!validateBirthDay(event.target.value))
      setBirthDayUpdate(event.target.value)
  };
  const validatePhoneNumber =(phoneNumber)=>{
    var regex = /[2579][0-9]{7}|(3[012]|4[01]|8[0128])[0-9]{6}|42[16][0-9]{5}/
    console.log(regex.test(phoneNumber))
    return (regex.test(phoneNumber) && phoneNumber.length === 8)
  }
  const handlePhoneNumber = (event) => {
        setPhoneNumberError(!validatePhoneNumber(event.target.value))
        setPhoneNumberUpdate(event.target.value)
  };


  const updateFormateur = async()=>{
    if ( !validateFirstName(firstNameUpdate))
    {
      setWarningMessage('Invalid First Name !')
      setOpen(true)
      return
    }
    if ( !validateLastName(lastNameUpdate))
    {
      setWarningMessage('Invalid last Name !')
      setOpen(true)
      return
    }
    if ( !validateBirthDay(birthDayUpdate))
    {
      setWarningMessage('Invalid Birthday !')
      setOpen(true)
      return
    }
    if ( !validatePhoneNumber(phoneNumberUpdate))
    {
      setWarningMessage('Invalid Phone Number !')
      setOpen(true)
      return
    }
    let formData = new FormData()
    formData.append('first_name',firstNameUpdate)
    formData.append('last_name',lastNameUpdate)
    formData.append('phone_number','+216'+phoneNumberUpdate)
    formData.append('date_of_birth',birthDayUpdate)
    if (imageUpdate)
      formData.append('image',imageUpdate)
    const response = await UpdateFormateur(id,formData)
    if(response.ok)
    {
      const responseJson = await response.json()
      setOpenDialog(true)
    }
    else
    {
      setWarningMessage('An Error has occured while updating your profile !')
      setOpen(true)
      return; 
    }
    
  }
  /* --------------------------------------------------------------------
   *                            Effect Hooks                            |
   * --------------------------------------------------------------------
   */
  

  /* --------------------------------------------------------------------
   *                                 JSX                                |
   * --------------------------------------------------------------------
   */
  return (
    <Grid container sx={{width:'80%',backgroundColor:'white',borderRadius:'15px',boxShadow:'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'}}>
      <Grid  container flexDirection='column' gap='15px'>
  
        <Grid container  flexDirection='row' justifyContent='center' gap='70px'>
          <Grid item >
            <Avatar src={profileImg} sx={{width:75,height:75,bgcolor:'black' }} >M</Avatar>
          </Grid>
          <Grid item >
            <Typography sx={{color:'#1C1D1F',fontFamily:'sf pro text',fontWeight:'bold',fontSize:'30px'}}>
              Profil public
            </Typography>
            <Typography >
            Ajoutez des informations vous concernant
            </Typography>
          </Grid>
        </Grid>
        <Grid container direction='column' alignItems='center' gap='15px'>
            <Typography sx={{fontWeight:'bold'}}>
            Informations de base :
            </Typography>
            <Grid
              container
              width={{sm:'100%',md:'90%',xl:'80%'}}
            >
                <TextField 
                  fullWidth 
                  label="First name" 
                  value={firstNameUpdate} onChange={handleFirstName} 
                  placeholder={firstName} 
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
              width={{sm:'100%',md:'90%',xl:'80%'}}
            >
                <TextField 
                  fullWidth 
                  label="Last name" 
                  value={lastNameUpdate} 
                  onChange={handleLastName} 
                  placeholder={lastName} 
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
              width={{sm:'100%',md:'90%',xl:'80%'}}
            >
                <TextField 
                  fullWidth 
                  label={"BirthDay("+birthDay+")" }
                  value={birthDayUpdate} 
                  onChange={handleBirthDay} 
                  type='date'
                  InputLabelProps={{
                    shrink: true,
                  }}
                  sx={{
                    width:'100%',
                    '& label.Mui-focused': {
                      color: birthDayError?'red':styles.PrimaryColorLight,
                    },
                    '& .MuiInput-underline:after': {
                      borderBottomColor: styles.PrimaryColorLight,
                    },
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: birthDayError?'red':styles.PrimaryColorLight,
                      },
                      '&:hover fieldset': {
                        borderColor: birthDayError?'red':styles.PrimaryColorLight,
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: birthDayError?'red':styles.PrimaryColorLight,
                      },
                    },
                  }}
                />
            </Grid>
            <Grid
              container
              width={{sm:'100%',md:'90%',xl:'80%'}}
            >
                <TextField 
                  fullWidth 
                  label="Phone number"
                  value={phoneNumberUpdate} 
                  onChange={handlePhoneNumber} 
                  placeholder={phoneNumber.substr(4)} 
                  id="fullWidth" 
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
        </Grid>
        <Grid container direction='column' alignItems='center'>
          <Grid>
            <Typography >
            Photo :
            </Typography>
            <Typography >
            Ajouter/Modifier l'image
            </Typography>  
          </Grid>
          
          <Grid container direction='row'  alignItems='center' justifyContent='center' className="containerImg" > 
            <Grid container flexDirection='row' width='fit-content' justifyContent='flex-start'>
              <input type="file" name="image-upload" id="input" accept='image/*' onChange={imageHandler}/>
            </Grid>
          </Grid>
          <Grid container flexDirection='row' justifyContent='center'>
          <Button 
              variant='text'
              sx={{
              color:styles.PrimaryColorDark,
              backgroundColor:"#fff",
              "&:hover" : {
                  color:'#fff',
                  backgroundColor:styles.SecondaryColorDark,
              },
              my: 2, 
              mx:1,
              borderRadius : '3px',
              flexWrap:'nowrap'
              }}
              onClick={updateFormateur}
            >
              Submit Changes
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          {warningMessage}
        </Alert>
      </Snackbar>
      <Dialog
        open={openDialog}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleCloseDialog}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Details Updated"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Account details have been successfully updated
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>OK</Button>
        </DialogActions>
      </Dialog>
    </Grid>

  )

}
export default SectionModifierFormateur