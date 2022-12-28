

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
import { Button } from '@mui/material';
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


function SectionModifierApprenant() {

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

  /* --------------------------------------------------------------------
   *                             Functions                              |
   * --------------------------------------------------------------------
   */

    
  
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
      <Box sx={{ bgcolor: '#ffff', height: '100%',border:1,borderColor:'#9d9da8' }} >
  
        <Grid container sx={{borderBottom:1,borderColor:'#9d9da8',height:'18%'}}>
          <Grid item sx={{marginLeft:'25%'}}>
            <Avatar sx={{width:100,height:'100%',bgcolor:'black' }}>M</Avatar>
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
        <Grid container direction='column'sx={{marginLeft:'20%',marginTop:'1%'}}>
            <Typography sx={{fontWeight:'bold',marginBottom:'1%',fontSize:'20px' }}>
            Informations de base :
            </Typography>
            <Grid
            sx={{
                width: 700,
                maxWidth: '100%',
                marginBottom:'2%',
               
            }}
            >
                <TextField fullWidth label="First name" id="fullWidth" />
            </Grid>
            <Grid
            sx={{
                width: 700,
                maxWidth: '100%',
                marginBottom:'2%',
            }}
            >
                <TextField fullWidth label="Last name" id="fullWidth" />
            </Grid>
            <Grid
            sx={{
                width: 700,
                maxWidth: '100%',
                marginBottom:'2%',
            }}
            >
                <TextField fullWidth label="E-mail" id="fullWidth" />
            </Grid>
            <Grid
            sx={{
                width: 700,
                maxWidth: '100%',
                marginBottom:'2%',
            }}
            >
                <TextField fullWidth label="Phone number" id="fullWidth" />
            </Grid>
        </Grid>
        <Grid container direction='column'sx={{marginLeft:'20%',marginTop:'1%'}}>
            <Typography sx={{fontWeight:'bold',marginBottom:'1%',fontSize:'20px' }}>
            Photo :
            </Typography>
            <Typography sx={{fontWeight:'bold',marginBottom:'1%',marginLeft:'3%' }}>
            Ajouter/Modifier l'image
            </Typography> 
            
        </Grid>
      </Box>
    </Container>
  </React.Fragment>
  )
}

export default SectionModifierApprenant