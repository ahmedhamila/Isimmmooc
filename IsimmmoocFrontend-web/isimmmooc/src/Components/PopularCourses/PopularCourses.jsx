

/*
 * ----------------------------------------------------------------------
 *                          Components & Functions                      |
 * ----------------------------------------------------------------------
 */

import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import {Button,Grid} from '@mui/material';
import { useState } from 'react';
import Paper from '@mui/material/Paper';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
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
import './PopularCourses.scss'
import styles from './../../Assets/Styles/style.module.scss'

/*
 * ----------------------------------------------------------------------
 *                                Images                                |
 * ----------------------------------------------------------------------
 */

function PopularCourses() {

  /* --------------------------------------------------------------------
   *                           Constants                                |
   * --------------------------------------------------------------------
   */
  const [courses,setCourses]=useState([
    {}
  ])
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
      <Container maxWidth="false" sx={{marginTop:'2%',
        width:"100%",}} 
      >
        <Box sx={{
            height: '100%',
            padding: "20px 0",
            position: "relative" }} >
          <div style={{textAlign:'center'}}>
            <h1>Our popular courses</h1>
            <p>A best and cheapest way of getting know learning to make a better tomorrow.</p>
          </div>    
          <Grid sx={{ flexGrow: 1 }} container spacing={2}>
            <Grid item xs={12}>
              <Grid container justifyContent="center" spacing={9}>
                {[0, 1, 2].map((value) => (
                  <Grid key={value} item >
                    <Paper
                      sx={{
                        height: 400,
                        width: 300,
                        backgroundColor: (theme) =>
                          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                        border: '1px solid rgb(206, 194, 194)',
                        borderRadius:'15px',
                      }}
                      
                      >

                      </Paper>
                  </Grid>
                ))}
              </Grid>
            </Grid>
            <Grid 
            container
            marginTop='2%'
            direction='column'
            alignItems='center'
            justifyContent='center'
            className='PopularTopicsButton'>
                <Button
                variant='text' 
                sx={{
                    backgroundColor:styles.SecondaryColor,
                    color:'#fff',
                    "&:hover" : {
                      backgroundColor : '#fff',
                      color: styles.SecondaryColor  ,
                    }
                  }}
                size="large"
                >
                    Browse All 
                </Button> 
            </Grid>
          </Grid>
          
        </Box>
      </Container>
    </React.Fragment>
    
  )
}

export default PopularCourses