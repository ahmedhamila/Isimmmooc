

/*
 * ----------------------------------------------------------------------
 *                          Components & Functions                      |
 * ----------------------------------------------------------------------
 */


import React, { useState } from 'react'
import { Button,Grid, TextField,ToggleButton,ToggleButtonGroup, Typography,Snackbar } from '@mui/material';

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
import './SignUpFirstStep.scss';
import styles from './../../../../Assets/Styles/style.module.scss'
import { useDispatch, useSelector } from 'react-redux';
import { updateEmail, updateUserTypeSU } from '../../../../Redux/UserSignUpInfoSlice';

/*
 * ----------------------------------------------------------------------
 *                                Images                                |
 * ----------------------------------------------------------------------
 */

function SignUpFirstStep(props) {

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
    const {goNext}=props
  /*--------------------------------------------------------------------
  *                                 Data                               |
  * --------------------------------------------------------------------
  */


  /* --------------------------------------------------------------------
   *                             Hooks & States                         |
   * --------------------------------------------------------------------
   */
  const {email,userTypeSU} = useSelector((state)=>state.userInfo)
  const dispatch = useDispatch()
  const [emailError,setEmailError]=useState(false)
  const [open, setOpen] = useState(false);
  const [warningMessage, setWarningMessage] = useState('');


  

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
  const validateEmail =(email)=>{
    var regex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/
    console.log(regex.test(email))
    return regex.test(email)
  }

  const handleUserType = (event, newUserType) => {
    if(newUserType !==null)
      dispatch(updateUserTypeSU(newUserType));
  };
  const handleEmail = (event) => {
      setEmailError(!validateEmail(event.target.value))
      dispatch(updateEmail(event.target.value));
  };

  const handleGoNext = () => {
    if(validateEmail(email))
      goNext();
    else
    {
      setWarningMessage("Invalid Email !")
      setOpen(true);
    }
      
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
        className='SignUpFirstStep'
        sx={{
          width:{'xs':'100%','sm':'50%','md':'50%'}
        }}
      >
        <Grid
        container
        flexDirection='column'
        alignItems='flex-start'
        gap='35px'
        flexBasis={0}
        flexGrow={1}
        flexShrink={0}
        >
          <Grid
          container
          >
          <TextField
            value={email}
            onChange={handleEmail}
            name='Email'
            placeholder='Eg. example@email.com'
            label="Email"
            fullWidth
            error={emailError}
            sx={{
              width:'100%',
              '& label.Mui-focused': {
                color: emailError?'red':styles.PrimaryColorLight,
              },
              '& .MuiInput-underline:after': {
                borderBottomColor: styles.PrimaryColorLight,
              },
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: emailError?'red':styles.PrimaryColorLight,
                },
                '&:hover fieldset': {
                  borderColor: emailError?'red':styles.PrimaryColorLight,
                },
                '&.Mui-focused fieldset': {
                  borderColor: emailError?'red':styles.PrimaryColorLight,
                },
              },
            }}
          />
          </Grid>
          <Grid
          container
          flexDirection='column'
          >
            <Typography variant='h6' color={styles.SecondaryColor}>
              Vous êtes un ?
            </Typography>
            <ToggleButtonGroup
              value={userTypeSU}
              exclusive
              onChange={handleUserType}
              aria-label="text alignment"
              fullWidth
            >
              <ToggleButton 
                size={'small'}
                value="Apprenant" 
                aria-label="Apprenant"
                sx={{
                  backgroundColor:styles.PrimaryColorLight,
                  color:'#fff',
                  "&:hover" : {
                    backgroundColor : styles.PrimaryColor,
                    color: '#fff'  ,
                  },
                  "&.Mui-selected, &.Mui-selected:hover":{
                    backgroundColor:styles.PrimaryColor,
                    color:'#fff'
                  },
                  my: 2, 
                  borderRadius : '3px'
                }}
              >
                Apprenant
              </ToggleButton>
              <ToggleButton 
                size={'small'}
                value="Formateur" 
                aria-label="Formateur"
                sx={{
                  backgroundColor:styles.PrimaryColorLight,
                  color:'#fff',
                  "&:hover" : {
                    backgroundColor : styles.PrimaryColor,
                    color: '#fff'  ,
                  },
                  "&.Mui-selected, &.Mui-selected:hover":{
                    backgroundColor:styles.PrimaryColor,
                    color:'#fff'
                  },
                  my: 2, 
                  borderRadius : '3px'
                }}
              >
                Formateur
              </ToggleButton>
              <ToggleButton 
                size={'small'}
                value="Organisme" 
                aria-label="Organisme"
                sx={{
                  backgroundColor:styles.PrimaryColorLight,
                  color:'#fff',
                  "&:hover" : {
                    backgroundColor : styles.PrimaryColor,
                    color: '#fff'  ,
                  },
                  "&.Mui-selected, &.Mui-selected:hover":{
                    backgroundColor:styles.PrimaryColor,
                    color:'#fff'
                  },
                  my: 2, 
                  borderRadius : '3px'
                }}
              >
                Organisme
              </ToggleButton>
            </ToggleButtonGroup>
          </Grid>
        </Grid>
        <Grid 
          container
          direction='row'
          alignItems='center'
          justifyContent='flex-end'
          className="StepperFooter">
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
          <Snackbar open={open} autoHideDuration={4000}  onClose={handleClose}>
            <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
              {warningMessage}
            </Alert>
          </Snackbar>
      </Grid>
  )
}

export default SignUpFirstStep