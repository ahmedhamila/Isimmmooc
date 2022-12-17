

/*
 * ----------------------------------------------------------------------
 *                          Components & Functions                      |
 * ----------------------------------------------------------------------
 */


import React from 'react'
import { Container,Grid, TextField,ToggleButton,ToggleButtonGroup, Typography } from '@mui/material';

import { useState } from 'react';
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

/*
 * ----------------------------------------------------------------------
 *                                Images                                |
 * ----------------------------------------------------------------------
 */

function SignUpFirstStep() {

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
    const [email,setEmail]=useState(null)
    const [userType,setUserType]=useState('Apprenant')

  /* --------------------------------------------------------------------
   *                             Functions                              |
   * --------------------------------------------------------------------
   */

  const handleUserType = (event, newUserType) => {
    if(newUserType !==null)
      setUserType(newUserType);
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
            onTextChange={(newEmail)=>{setEmail(newEmail)}}
            name='Email'
            placeholder='Eg. example@email.com'
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
          flexDirection='column'
          >
            <Typography variant='h6' color={styles.SecondaryColor}>
              Vous etes un ?
            </Typography>
            <ToggleButtonGroup
              value={userType}
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
      </Grid>
  )
}

export default SignUpFirstStep