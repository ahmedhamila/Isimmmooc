

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
import {motion} from 'framer-motion';
/*
* ----------------------------------------------------------------------
*                              Services & Models                       |
* ----------------------------------------------------------------------
*/

import {container,item} from './../../Data'
import {GetFormateurs,GetCoursesHomePage} from'./../../Services'


/*
 * ----------------------------------------------------------------------
 *                                Styles                                |
 * ----------------------------------------------------------------------
 */
import styles from './../../Assets/Styles/style.module.scss'
/*
 * ----------------------------------------------------------------------
 *                                Images                                |
 * ----------------------------------------------------------------------
 */


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
  const [courses,setCourses]=useState([])
  const [teachers,setTeachers]=useState([])
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
  const Getcourses = async()=>{
   
    const response = await GetCoursesHomePage()   
    const responseJson = await response.json()
    setCourses(responseJson)
    
  }
  
  const getTeachers = async()=>{
   
    const response = await GetFormateurs()   
    const responseJson = await response.json()
    setTeachers(responseJson)
    
  }
  React.useEffect(   
    ()=>{getTeachers();Getcourses()},[])
  /* --------------------------------------------------------------------
   *                                 JSX                                |
   * --------------------------------------------------------------------
   */
  return (

  <Container maxWidth="false"
  >
    <Box sx={{
        padding: "20px 0",
        position: "relative" }} >
      <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
      transition={{ duration: 0.5 }}
      variants={{
        visible: {  opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0 }
      }} 
      style={{textAlign:'center'}}>
        <p style={{color:'#ff7468',fontFamily:'Arial'}}>Meet with our teachers</p>
        <h1 >Our teachers</h1>
        <p>A best and cheapest way of getting know learning to make a better tomorrow.</p>
      </motion.div>   
      {teachers.map((teacher)=>{
          return(
      <Grid sx={{ flexGrow: 1 }} container spacing={2}>
        <Grid item xs={12}>
          <Grid container justifyContent="center" spacing={12}
          component={motion.div}
          variants={container}
          initial='hidden'
          exit='exit'
          whileInView='show'
          viewport={{once:false}}
          >
              {courses.map((course)=>{
          if (teacher.mail===course.formateur )
          return( 
              <Grid  item
              component={motion.div}
              variants={item}
              >
                <Paper
                      sx={{
                        p: 2,
                        maxWidth: 400,
                        flexGrow: 1,
                        backgroundColor: (theme) =>
                          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                        border: '1px solid rgb(206, 194, 194)',
                        boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
                        borderRadius:'15px',
                      }}
                    >  
                <Grid container >
                  <Grid item>
                    <ButtonBase sx={{ width: 140, height: 140 }}>
                      <Img alt="complex" scr={teacher.image} />
                    </ButtonBase>
                  </Grid>
                  <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                      <Grid item xs>
                        <Typography gutterBottom variant="p" fontFamily='Arial' fontWeight='bold' component="div">
                          {teacher.first_name}_{teacher.last_name}
                        </Typography>
                        <Typography variant="body2" gutterBottom color="text.secondary">
                          {course.name}
                        </Typography>
                        <Typography variant="p" color="text.secondary" fontFamily='Arial'>
                        {teacher.first_name}_{teacher.last_name} is one of the best {course.name} course mentorof our plateform.
                        </Typography>
                      </Grid>
                      <Grid item>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
               
              </Grid>
               )
              })}
          </Grid>
        </Grid>
      </Grid>
       ) })}
    </Box>
  </Container>

  )
}

export default SectionTeachers