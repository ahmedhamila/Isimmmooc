

/*
 * ----------------------------------------------------------------------
 *                          Components & Functions                      |
 * ----------------------------------------------------------------------
 */

import * as React from 'react';
import {Box,Grid} from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
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
import './CoursHeroSection.scss'

/*
 * ----------------------------------------------------------------------
 *                                Images                                |
 * ----------------------------------------------------------------------
 */
function CoursHeroSection(Props) {

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
    <Box className='CoursHeroSection' sx={{ flexGrow: 1 }}>
      <Grid container justifyContent='center' >
        <Grid 
        width='100%'
        alignItems='center'
        container 
        xs={8}>
          <Typography sx={{fontFamily:'Inter',fontWeight:'bold',fontSize:'38px'}}>
            {Props.nameCours}
          </Typography>  
        </Grid>
        <Grid container  alignItems='center'xs={8}>
            <AccessTimeIcon />
            <Typography marginLeft='1%' marginRight='3%'>
            {Props.periodCours} heures
            </Typography>
            <SignalCellularAltIcon />
            <Typography marginLeft='1%'>
            {Props.difficultyCours}
            </Typography>
        </Grid>
      </Grid>    
    </Box>
  )
}

export default CoursHeroSection