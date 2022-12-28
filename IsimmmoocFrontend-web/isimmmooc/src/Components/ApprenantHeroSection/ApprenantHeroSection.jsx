

/*
 * ----------------------------------------------------------------------
 *                          Components & Functions                      |
 * ----------------------------------------------------------------------
 */
import * as React from 'react';
import {Box,Grid} from '@mui/material';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';



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
import './ApprenantHeroSection.scss'
import styles from './../../Assets/Styles/style.module.scss'

/*
 * ----------------------------------------------------------------------
 *                                Images                                |
 * ----------------------------------------------------------------------
 */
import ApprenantHomeImg from '../../Assets/Images/ApprenantHome.png';

function ApprenantHeroSection() {

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
    <Box>
      <Box className='HeroSectionTopPart1' >
        <Grid container rowSpacing={2}>
          <Grid 
          direction='column' 
          alignItems='center'
          justifyContent='center'
          container
          className='HeroContent' 
          xs={6}>
            <div >
            <Paper
              sx={{
                p: 2,
                margin: 'auto',
                width: 400,
                flexGrow: 1,
                backgroundColor: (theme) =>
                  theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
              }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm container>
                  <Grid item xs container direction="column" >
                    <Grid item xs>
                      <Typography gutterBottom variant="h1" color='#1C1D1F' fontWeight='bold' fontFamily='Georgia' fontSize='32px' component="div">
                      Révélez un monde de connaissances
                      </Typography>
                      <Typography variant="p" color='#1C1D1F' fontFamily='sf pro text' fontSize='18px' gutterBottom>
                      Nos formateurs confirmés ont hâte de partager leur expérience avec vous pour vous aider à vous développer.
                      </Typography> 
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
            </div>
          </Grid>
          <Grid className='ApprenantHeroImg' item xs={6} style={{backgroundImage: `url(${ApprenantHomeImg})` }}>
            
          </Grid>
        </Grid>    
      </Box>
    </Box>
    
  )
}

export default ApprenantHeroSection