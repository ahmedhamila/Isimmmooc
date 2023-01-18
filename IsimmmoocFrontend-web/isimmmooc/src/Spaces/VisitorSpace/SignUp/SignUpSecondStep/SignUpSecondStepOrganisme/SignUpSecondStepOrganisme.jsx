

/*
 * ----------------------------------------------------------------------
 *                          Components & Functions                      |
 * ----------------------------------------------------------------------
 */

import React from 'react'
import {useState} from 'react'
import { Grid,TextField,Snackbar,Button } from '@mui/material';
import {useSelector,useDispatch} from 'react-redux'
import { updateOrganismeName,updateOrganismeWebSite,updateOrganismeAdress,updatePhoneNumber } from '../../../../../Redux/UserSignUpInfoSlice';
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
/*
 * ----------------------------------------------------------------------
 *                                Images                                |
 * ----------------------------------------------------------------------
 */

function SignUpSecondStepOrganisme(props) {

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
  const {organismeName,organismeAdress,organismeWebSite,phoneNumber} = useSelector((state)=>state.userInfo)
  const dispatch = useDispatch()

  const [organismeNameError,setOrganismeNameError] = useState(false)
  const [organismeAdressError,setOrganismeAdressError] = useState(false)
  const [phoneNumberError,setPhoneNumberError] = useState(false)
  const [organismeWebSiteError,setOrganismeWebSiteError] = useState(false)

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
  const validateOrganismeName =(organismeName)=>{
    var regex = /[a-zA-Z]+[a-zA-Z]+/
    console.log(regex.test(organismeName))
    return (regex.test(organismeName))
  }
  const handleOrganismeName = (event) => {
        setOrganismeNameError(!validateOrganismeName(event.target.value))
        dispatch(updateOrganismeName(event.target.value));
  };
  const validateOrganismeWebSite =(organismeWebSite)=>{
    var regex = new RegExp("^(http[s]?:\\/\\/(www\\.)?|ftp:\\/\\/(www\\.)?|www\\.){1}([0-9A-Za-z-\\.@:%_\+~#=]+)+((\\.[a-zA-Z]{2,3})+)(/(.)*)?(\\?(.)*)?");
    console.log(regex.test(organismeWebSite))
    return (regex.test(organismeWebSite))
  }
  const handleOrganismeWebSite = (event) => {
        setOrganismeWebSiteError(!validateOrganismeWebSite(event.target.value))
        dispatch(updateOrganismeWebSite(event.target.value));
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
  const validateOrganismeAdress =(organismeAdress)=>{
    return (organismeAdress.length > 4)
  }
  const handleOrganismeAdress = (event) => {
        setOrganismeAdressError(!validateOrganismeAdress(event.target.value))
        dispatch(updateOrganismeAdress(event.target.value));
  };


  const goNext = () => {
    
    if ( !validateOrganismeName(organismeName))
    {
      setWarningMessage('Invalid Organisme Name !')
      setOpen(true)
      return
    }
    if ( !validateOrganismeWebSite(organismeWebSite))
    {
      setWarningMessage('Invalid Organisme WebSite !')
      setOpen(true)
      return
    }
    if ( !validatePhoneNumber(phoneNumber))
    {
      setWarningMessage('Invalid Phone Number !')
      setOpen(true)
      return
    }
    if ( !validateOrganismeAdress(organismeAdress))
    {
      setWarningMessage('Invalid Organisme Adress !')
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
    className='SignUpSecondStepOrganisme'
    container
    flexDirection='column'
    alignItems='flex-start'
    gap='10px'
    >
    <Grid
      container
    >
      <TextField
        value={organismeName}
        onChange={handleOrganismeName}
        name='Nom Organisme'
        placeholder='Entrez nom d Organisme'
        label="Nom Organisme"
        fullWidth
        sx={{
              width:'100%',
              '& label.Mui-focused': {
                color: organismeNameError?'red':styles.PrimaryColorLight,
              },
              '& .MuiInput-underline:after': {
                borderBottomColor: styles.PrimaryColorLight,
              },
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: organismeNameError?'red':styles.PrimaryColorLight,
                },
                '&:hover fieldset': {
                  borderColor: organismeNameError?'red':styles.PrimaryColorLight,
                },
                '&.Mui-focused fieldset': {
                  borderColor: organismeNameError?'red':styles.PrimaryColorLight,
                },
              },
            }}
        />
    </Grid>
    <Grid
      container
    >
      <TextField
        value={organismeWebSite}
        onChange={handleOrganismeWebSite}
        name='Organisme WebSite'
        placeholder='Entrez Organisme WebSite'
        label="Organisme WebSite"
        fullWidth
        sx={{
              width:'100%',
              '& label.Mui-focused': {
                color: organismeWebSiteError?'red':styles.PrimaryColorLight,
              },
              '& .MuiInput-underline:after': {
                borderBottomColor: styles.PrimaryColorLight,
              },
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: organismeWebSiteError?'red':styles.PrimaryColorLight,
                },
                '&:hover fieldset': {
                  borderColor: organismeWebSiteError?'red':styles.PrimaryColorLight,
                },
                '&.Mui-focused fieldset': {
                  borderColor: organismeWebSiteError?'red':styles.PrimaryColorLight,
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
        value={organismeAdress}
        onChange={handleOrganismeAdress}
        name='Organisme Adress'
        type='text'
        placeholder='Entrez Adress d Organisme'
        fullWidth
        label="Organisme Adress"
        sx={{
              width:'100%',
              '& label.Mui-focused': {
                color: organismeAdressError?'red':styles.PrimaryColorLight,
              },
              '& .MuiInput-underline:after': {
                borderBottomColor: styles.PrimaryColorLight,
              },
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: organismeAdressError?'red':styles.PrimaryColorLight,
                },
                '&:hover fieldset': {
                  borderColor: organismeAdressError?'red':styles.PrimaryColorLight,
                },
                '&.Mui-focused fieldset': {
                  borderColor: organismeAdressError?'red':styles.PrimaryColorLight,
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

export default SignUpSecondStepOrganisme