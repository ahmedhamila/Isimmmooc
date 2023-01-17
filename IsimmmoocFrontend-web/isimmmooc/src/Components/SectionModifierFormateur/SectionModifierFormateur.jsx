/*
 * ----------------------------------------------------------------------
 *                          Components & Functions                      |
 * ----------------------------------------------------------------------
 */

import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import PhotoIcon from '@mui/icons-material/Photo';
import {Component} from 'react'
import { useSelector } from 'react-redux';
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
import './SectionModifierFormateur.scss'
import { ReadMoreRounded } from '@mui/icons-material';
import { useState } from 'react';

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
  const {image,firstName,lastName,email,phoneNumber}=useSelector((state)=>state.user)
  const [profileImg,setProfileImg]=useState('https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png')
  /* --------------------------------------------------------------------
   *                             Functions                              |
   * --------------------------------------------------------------------
   */
  const imageHandler=(e) =>{
    const reader = new FileReader();
    reader.onload=()=>{
      if(reader.readyState=== 2 ){
        setProfileImg({profileImg:reader.result})
      }
    }
    reader.readAsDataURL(e.target.files[0])
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
    <Grid  sx={{width:'80%',backgroundColor:'white',borderRadius:'15px',boxShadow:'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'}}>
      <Grid  container flexDirection='column' gap='15px'>
  
        <Grid container  flexDirection='row' justifyContent='center' gap='70px'>
          <Grid item >
            <Avatar src={image} sx={{width:75,height:75,bgcolor:'black' }} >M</Avatar>
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
                <TextField fullWidth label="First name" placeholder={firstName} id="fullWidth" />
            </Grid>
            <Grid
              container
              width={{sm:'100%',md:'90%',xl:'80%'}}
            >
                <TextField fullWidth label="Last name" placeholder={lastName} id="fullWidth" />
            </Grid>
            <Grid
              container
              width={{sm:'100%',md:'90%',xl:'80%'}}
            >
                <TextField fullWidth label="E-mail" placeholder={email} id="fullWidth" />
            </Grid>
            <Grid
              container
              width={{sm:'100%',md:'90%',xl:'80%'}}
            >
                <TextField fullWidth label="Phone number" placeholder={phoneNumber.substr(4)} id="fullWidth" />
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
          
          <Grid container direction='column' alignItems='center' className="containerImg" >
            <Grid >
              <img src={profileImg} alt="" id="img" className='img' width='15%'/>
            </Grid>
            
            <Grid container flexDirection='row' justifyContent='center'>
              <input type="file" name="image-upload" id="input" accept='image/*' onChange={imageHandler}/>
              <label htmlFor="input" className='image-upload'>
              <PhotoIcon>add_photo_alternate</PhotoIcon>
              Choose your photo
              </label>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </React.Fragment>

  )

}
export default SectionModifierFormateur