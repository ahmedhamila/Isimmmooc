

/*
 * ----------------------------------------------------------------------
 *                          Components & Functions                      |
 * ----------------------------------------------------------------------
 */

import { Container, Grid,TextField, Typography, Button } from '@mui/material';
import React from 'react'
import { useState } from 'react';

/*
* ----------------------------------------------------------------------
*                              Services & Models                       |
* ----------------------------------------------------------------------
*/

import { AuthVerification } from '../../../Services';

/*
 * ----------------------------------------------------------------------
 *                                Styles                                |
 * ----------------------------------------------------------------------
 */
import './SignIn.scss';
import styles from './../../../Assets/Styles/style.module.scss'
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
  /* --------------------------------------------------------------------
   *                             Functions                              |
   * --------------------------------------------------------------------
   */

    const handleSignIn = ()=>{
        const response =  AuthVerification(
            {
                username:email,
                password : password
            }
        )
        .then(response => console.log(response))
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
    </Grid>
  )
}

export default SignIn