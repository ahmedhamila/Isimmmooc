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
    <Grid  sx={{width:'80%'}}>
      <Grid sx={{ bgcolor: '#ffff', height: '100%',border:1,borderColor:'#9d9da8' }} container>
  
        <Grid container sx={{borderBottom:1,borderColor:'#9d9da8'}} flexDirection='row' justifyContent='center'>
          <Grid item >
            <Avatar src={image} sx={{width:75,height:75,bgcolor:'black' }} >M</Avatar>
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
        <Grid container direction='column'sx={{marginLeft:'20%',marginRight:'18%',marginTop:'1%'}}>
            <Typography sx={{fontWeight:'bold',marginBottom:'1%',fontSize:'20px' }}>
            Informations de base :
            </Typography>
            <Grid
           width={{sm:'400px',md:'600px',xl:'700px'}}
           sx={{
               marginBottom:'2%',
           }}
            >
                <TextField fullWidth label="First name" placeholder={firstName} id="fullWidth" />
            </Grid>
            <Grid
           width={{sm:'400px',md:'600px',xl:'700px'}}
           sx={{
               marginBottom:'2%',
           }}
            >
                <TextField fullWidth label="Last name" placeholder={lastName} id="fullWidth" />
            </Grid>
            <Grid
            width={{sm:'400px',md:'600px',xl:'700px'}}
            sx={{
                marginBottom:'2%',
            }}
            >
                <TextField fullWidth label="E-mail" placeholder={email} id="fullWidth" />
            </Grid>
            <Grid
            width={{sm:'400px',md:'600px',xl:'700px'}}
            sx={{
                marginBottom:'2%',
            }}
            >
                <TextField fullWidth label="Phone number" placeholder={phoneNumber.substr(4)} id="fullWidth" />
            </Grid>
        </Grid>
        <Grid container direction='column'sx={{marginLeft:'20%',marginTop:'1%',marginBottom:'5%'}}>
          <Typography sx={{fontWeight:'bold',marginBottom:'1%',fontSize:'20px' }}>
          Photo :
          </Typography>
          <Typography sx={{fontWeight:'bold',marginBottom:'1%',marginLeft:'3%' }}>
          Ajouter/Modifier l'image
          </Typography>  
          <Grid  direction='column' className="containerImg" marginLeft='10%'>
            <Grid sx={{width:'150px',
              height:'150px',
              marginLeft:'10%',
              border:1,
             
            }}>
              <img src={profileImg} alt="" id="img" className='img' width='15%'/>
            </Grid>
            <input type="file" name="image-upload" id="input" accept='image/*' onChange={imageHandler}/>
            <Grid sx={{
              width:'100%',
              marginTop:'1rem',
              display:'flex',
              marginLeft:'8%',
            }}>
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