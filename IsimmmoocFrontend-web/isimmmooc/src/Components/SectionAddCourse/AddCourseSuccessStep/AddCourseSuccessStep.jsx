

/*
 * ----------------------------------------------------------------------
 *                          Components & Functions                      |
 * ----------------------------------------------------------------------
 */

import React from 'react'
import { Grid,Typography } from '@mui/material';
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
import { Link } from 'react-router-dom';

/*
 * ----------------------------------------------------------------------
 *                                Images                                |
 * ----------------------------------------------------------------------
 */

function AddCourseSuccessStep() {

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
    <Grid
        className='AddCourseSuccessStep'
        sx={{
          width:{'xs':'100%','sm':'100%','md':'100%'},
          padding:'50px'
        }}
        container
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
        gap='10px'
    >
        <Grid
            container
            flexDirection='row'
            justifyContent='center'
        >
            <Typography className='SuccessText' variant='h3' align='center'>
                The Course Have been successfully added
            </Typography>
            
        </Grid> 
        <Grid 
            container
            justifyContent='center'
        >
            <Link to='/FormateurSpace'>
                Click Here To go back to Dashboard
            </Link>
        </Grid>
    </Grid>
  )
}

export default AddCourseSuccessStep