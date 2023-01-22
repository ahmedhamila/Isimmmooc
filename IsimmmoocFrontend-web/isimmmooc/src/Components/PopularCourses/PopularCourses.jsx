

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
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import {motion} from 'framer-motion';
import {DefaultPlayer as Video} from 'react-html5video'
import 'react-html5video/dist/styles.css'  
import { useNavigate } from "react-router-dom";
/*
* ----------------------------------------------------------------------
*                              Services & Models                       |
* ----------------------------------------------------------------------
*/


import {container} from './../../Data'
import {GetCoursesHomePage} from'./../../Services'

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
  const [model,setModel]=useState(false)
  const [courses,setCourses]=useState([])

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
  const navigate=useNavigate()
  /* --------------------------------------------------------------------
   *                             Functions                              |
   * --------------------------------------------------------------------
   */
  const CoursDetailsClickHandle = (id)=>{
    navigate(`/CoursDetails/${id}`)
  }
  const SignInClickHandle = ()=>{
    navigate(`/SignIn`)
  }
    
  
  /* --------------------------------------------------------------------
   *                            Effect Hooks                            |
   * --------------------------------------------------------------------
   */
  const Getcourses = async()=>{
   
    const response = await GetCoursesHomePage()   
    const responseJson = await response.json()
    console.log(responseJson)
    setCourses(responseJson)
    
  }
  React.useEffect(   
    ()=>{Getcourses() },[])

  /* --------------------------------------------------------------------
   *                                 JSX                                |
   * --------------------------------------------------------------------
   */
  return (
<React.Fragment>
  <Container maxWidth="false" sx={{marginTop:'2%',backgroundColor: '#6159a2',
    width:"100%",}} 
  >
    <Box sx={{
        height: '100%',
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
            style={{textAlign:'center',color:'#fff'}}>
        <h1 >Our popular courses</h1>
        <p>A best and cheapest way of getting know learning to make a better tomorrow.</p>
      </motion.div>    
      <Grid sx={{ flexGrow: 1 }} container spacing={2}>
        <Grid item xs={12}>
          <Grid container justifyContent="center" spacing={9}
          component={motion.div}
          variants={container}
          initial='hidden'
          exit='exit'
          whileInView='show'
          viewport={{once:false}}
          
          >
            {courses.map((item)=>{
              return(
              <Grid  item 
              component={motion.div}
              >
                <Paper
                  className='CoursePaper'
                  sx={{
                    height: 400,
                    width: 300,
                    backgroundColor: (theme) =>
                      theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                    border: '1px solid rgb(206, 194, 194)',
                    
                  }}
                  onClick={()=>{CoursDetailsClickHandle(item.id)}}
                  >
                 <Video 
                    style={{width:'100%'}}
                    autoPlay={model}
                    controls={['PlayPause','Seek','Time','Volume','Fullscreen']}
                  >
                    <source src={item.short_video} type="video/mp4"/>
                  </Video> 
                    <CardContent>
                      <Grid container direction='row'>
                      
                      <Typography gutterBottom variant="p" textAlign="left" marginBottom="3%" fontFamily='Segoe UI' color='#9d9da8' component="div">
                        {item.name}
                      </Typography>
                      </Grid>
                      <Typography variant="h6" marginTop="3%" fontFamily="Arial" fontSize='18' fontWeight='bold'>
                        {item.description}
                      </Typography>
                      <Stack spacing={1} marginTop="5%">
                        <Rating name="half-rating-read" defaultValue={4} precision={1} readOnly />
                      </Stack>
                      <Stack marginTop="7%" direction='row' spacing={2}>
                      <Avatar alt="Remy Sharp" src={item.formateurImg} />
                      <Typography variant="p" marginTop="3%" fontFamily="Segoe UI" fontSize='12' >
                        {item.formateur}
                      </Typography>
                      </Stack>
                    </CardContent> 
                  </Paper>
              </Grid>
              )})} 
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
            onClick={SignInClickHandle}
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