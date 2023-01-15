

/*
 * ----------------------------------------------------------------------
 *                          Components & Functions                      |
 * ----------------------------------------------------------------------
 */

import { Container, Grid,TextField, Typography, Button ,Snackbar } from '@mui/material';

import MuiAlert from '@mui/material/Alert';
import React from 'react'
import { useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';

/*
* ----------------------------------------------------------------------
*                              Services & Models                       |
* ----------------------------------------------------------------------
*/

import { AuthVerification,Authentification } from '../../../Services';

/*
 * ----------------------------------------------------------------------
 *                                Styles                                |
 * ----------------------------------------------------------------------
 */
import './SignIn.scss';
import styles from './../../../Assets/Styles/style.module.scss'
import { updateEmail,
    updateToken,
    updateUserType,
    updateFirstName,
    updateLastName,
    updatePhoneNumber,
    updateBirthDay,
    updateCV,
    updateOrganismeName,
    updateOrganismeWebSite,
    updateOrganismeAdress, 
    updateCredentials} from '../../../Redux/UserSlice';
import { useNavigate } from 'react-router-dom';
/*
 * ----------------------------------------------------------------------
 *                                Images                                |
 * ----------------------------------------------------------------------
 */


function SignIn() {

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

  /*--------------------------------------------------------------------
  *                                 Data                               |
  * --------------------------------------------------------------------
  */


  /* --------------------------------------------------------------------
   *                             Hooks & States                         |
   * --------------------------------------------------------------------
   */
    const [email,setEmail] = useState('')
    const [password,setPassword]=useState('')
    const [open, setOpen] = useState(false);
    const [warningMessage, setWarningMessage] = useState('');
    const dispatch = useDispatch()
    const navigate = useNavigate()
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
    const handleSignIn = async()=>{

        const authResponse =  await AuthVerification(
            {
                username:email,
                password : password
            }
        )
        const authJson = await authResponse.json()

        if(authJson.token)
        {
            console.log(authJson.token)
            dispatch(updateToken(authJson.token))

            const authentificationResponse = await Authentification(
                {
                    Token:authJson.token
                }
            )
            const authentificationJson = await authentificationResponse.json()
            if(authentificationJson)
            {
                console.log(authentificationJson)
                dispatch(updateCredentials(authentificationJson))
                console.log(authentificationJson.UserType)
                if(authentificationJson.UserType =="Formateur" || authentificationJson.UserType =="PreFormateur")
                {
                    console.log("here")
                    navigate('/FormateurSpace')
                }
                if(authentificationJson.UserType =="Apprenant")
                {
                    console.log("here")
                    navigate('/ApprenantHomeSpace')
                }
                    
            }
            else
            {
                setWarningMessage('An unexpected error has occured !')
                setOpen(true)
            }
        }
        else
        {
            setWarningMessage('Unable to login using the credentials you provided !')
            setOpen(true)
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
    <Grid
        className='SignIn'
        sx={{
            width:{'xs':'90%','sm':'50%','md':'35%'}
        }}
        container
        flexDirection='column'
        alignItems='center'
        justifyContent='center'
    >
        <Grid
            className='SignInContent'
            container
            flexDirection='column'
            alignItems='center'
            justifyContent='center'
        >
            
                <Grid
                container
                flexDirection='column'
                alignItems='center'
                gap='25px'
                >
                    <Grid
                        container
                        flexDirection='row'
                        justifyContent='center'
                    >
                        <Typography className='SignInTitle' sx={{ typography: {'xs':'h5','sm':'h3','md':'h2'} }} color={styles.PrimaryColor}>
                            Isimmmooc
                        </Typography>
                        
                    </Grid>
                    <Grid
                        container
                        flexDirection='row'
                        justifyContent='center'
                    >
                        <Typography className='SignInTitle' variant='h4' >
                            Sign In
                        </Typography>
                    </Grid>
                    <Grid
                        container
                    >
                        <TextField
                            value={email}
                            onChange={(event)=>{setEmail(event.target.value)}}
                            name='Email'
                            placeholder='Enter your email'
                            label="Email"
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
                            value={password}
                            onChange={(event)=>{setPassword(event.target.value)}}
                            name='Password'
                            placeholder='Enter your Password'
                            label="Password"
                            fullWidth
                            type='password'
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
                        <Button 
                            variant='text'
                            sx={{
                            width:'100%',
                            color:'#fff',
                            backgroundColor:styles.SecondaryColor,
                            "&:hover" : {
                                color:'#fff',
                                backgroundColor:styles.SecondaryColorDark,
                            },
                            my: 2, 
                            mx:1,
                            borderRadius : '3px'
                            }}
                        onClick={handleSignIn}
                        >
                            SignIn
                        </Button>
                    </Grid>
            
            </Grid>
        </Grid>
        <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
              {warningMessage}
            </Alert>
        </Snackbar>
    </Grid>
  )
}

export default SignIn