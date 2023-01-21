/*
 * ----------------------------------------------------------------------
 *                          Components & Functions                      |
 * ----------------------------------------------------------------------
 */

import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Snackbar from '@mui/material/Snackbar'
import PhotoIcon from '@mui/icons-material/Photo';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import MuiAlert from '@mui/material/Alert';
import { Button,Slide,Dialog,DialogTitle,DialogActions,DialogContent,DialogContentText } from '@mui/material';

/*
* ----------------------------------------------------------------------
*                              Services & Models                       |
* ----------------------------------------------------------------------
*/

import {UpdateApprenant} from './../../Services'

/*
 * ----------------------------------------------------------------------
 *                                Styles                                |
 * ----------------------------------------------------------------------
 */
import styles from './../../Assets/Styles/style.module.scss'
import './SectionModifierApprenant.scss'

/*
 * ----------------------------------------------------------------------
 *                                Images                                |
 * ----------------------------------------------------------------------
 */

 /* --------------------------------------------------------------------
   *                           Constants                                |
   * --------------------------------------------------------------------
   */


function  SectionModifierApprenant (props) {

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

  const[warningMessage,setWarningMessage]=useState('')
  const [open, setOpen] = useState(false);
  const [openDialog,setOpenDialog]=useState(false)
  const navigate = useNavigate()

  const [profileImg,setProfileImg]=useState(image)
  /* --------------------------------------------------------------------
   *                             Functions                              |
   * --------------------------------------------------------------------
   */
  const imageHandler=(e) =>{
    setProfileImg(URL.createObjectURL(e.target.files[0]))
    setImageUpdate(e.target.files[0])
  }

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


  const updateApprenant = async()=>{
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
    const response = await UpdateApprenant(id,formData)
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
    <React.Fragment>
    <CssBaseline />
    <Container fixed sx={{marginTop:'7%',marginBottom:'4%'}}>
      <Grid sx={{ bgcolor: '#ffff', height: '100%',border:1,borderColor:'#9d9da8' }} container>
  
        <Grid container sx={{borderBottom:1,borderColor:'#9d9da8'}} flexDirection='row' justifyContent='center'>
          <Grid item >
            <Avatar src={profileImg} sx={{width:75,height:75,bgcolor:'black' }} ></Avatar>
          </Grid>
          <Grid item sx={{marginLeft:'5%'}}>
            <Typography sx={{marginLeft:'30%',marginTop:'3%',marginBottom:'3%',color:'#1C1D1F',fontFamily:'sf pro text',fontWeight:'bold',fontSize:'30px'}}>
              Profil public
            </Typography>
            <Typography >
            Ajoutez des informations vous concernant
            </Typography>
          </Grid>
        </Grid>
        <Grid container direction='column' gap='20px'sx={{marginLeft:'20%',marginRight:'18%',marginTop:'1%'}}>
            <Typography sx={{fontWeight:'bold',marginBottom:'1%',fontSize:'20px' }}>
            Informations de base :
            </Typography>
            <Grid
           container
           width={{sm:'100%',md:'90%',xl:'80%'}}
            >
                <TextField fullWidth label="First name"value={firstNameUpdate} onChange={handleFirstName}  placeholder={firstName}
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
                }} />
            </Grid>
            <Grid
           container
           width={{sm:'100%',md:'90%',xl:'80%'}}
            >
                <TextField fullWidth label="Last name" 
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
                }} />
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
                <TextField fullWidth
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
              <label htmlFor="input" className='image-upload'>
              <PhotoIcon>add_photo_alternate</PhotoIcon>
              Choose your photo
              </label>
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
              onClick={updateApprenant}
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
    </Container>
  </React.Fragment>

  )

}
export default SectionModifierApprenant