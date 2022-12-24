

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
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import ButtonBase from '@mui/material/ButtonBase';
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
import './SectionTeachers.scss'
import styles from './../../Assets/Styles/style.module.scss'
/*
 * ----------------------------------------------------------------------
 *                                Images                                |
 * ----------------------------------------------------------------------
 */
import teacherImg from '../../Assets/Images/teacherImg.jpg';

function SectionTeachers() {

  /* --------------------------------------------------------------------
   *                           Constants                                |
   * --------------------------------------------------------------------
   */
  const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  });
  const [teachers,setTeachers]=useState([
    {teacherName:'David Warner',
     jobTitle:'React Native',
     desc:'David Warner is one of the best react native course mentorof our plateform.'}
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
    width:"100%"}} 
  >
    <Box sx={{
        height: '100%',
        padding: "20px 0",
        position: "relative" }} >
      <div style={{textAlign:'center'}}>
        <p style={{color:'#ff7468',fontFamily:'Arial'}}>Meet with our teachers</p>
        <h1 >Our teachers</h1>
        <p>A best and cheapest way of getting know learning to make a better tomorrow.</p>
      </div>    
      <Grid sx={{ flexGrow: 1 }} container spacing={2}>
        <Grid item xs={12}>
          <Grid container justifyContent="center" spacing={12}>
            {[0, 1, 2,3].map((value) => (
              <Grid key={value} item >
                <Paper
                      sx={{
                        p: 2,
                        margin: 'auto',
                        maxWidth: 400,
                        flexGrow: 1,
                        backgroundColor: (theme) =>
                          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                        border: '1px solid rgb(206, 194, 194)',
                        boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
                        borderRadius:'15px',
                      }}
                    >
                <Grid container spacing={2}>
                  <Grid item>
                    <ButtonBase sx={{ width: 140, height: 140 }}>
                      <Img alt="complex" src={teacherImg} />
                    </ButtonBase>
                  </Grid>
                  <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                    {teachers.map((item)=>{
                    return(
                      <Grid item xs>
                        <Typography gutterBottom variant="p" fontFamily='Arial' fontWeight='bold' component="div">
                          {item.teacherName}
                        </Typography>
                        <Typography variant="body2" gutterBottom color="text.secondary">
                          {item.jobTitle}
                        </Typography>
                        <Typography variant="p" color="text.secondary" fontFamily='Arial'>
                          {item.desc}
                        </Typography>
                      </Grid>
                       )})}
                      <Grid item>
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
                        
                        >
                          View Profile 
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
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
               See All 
            </Button> 
        </Grid>
      </Grid>
      
    </Box>
  </Container>
</React.Fragment>

  )
}

export default SectionTeachers