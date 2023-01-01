

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
/*
* ----------------------------------------------------------------------
*                              Services & Models                       |
* ----------------------------------------------------------------------
*/


import {container,item} from './../../Data'

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
import courseImg from '../../Assets/Images/coursePhoto.jpg';
import formateurImg from '../../Assets/Images/formateurImg.jpg';
function PopularCourses() {

  /* --------------------------------------------------------------------
   *                           Constants                                |
   * --------------------------------------------------------------------
   */
  const [courses,setCourses]=useState([
    {title:'Developement mobile',desc:'The complete dev mobile course for beginer.',formateurName:'Paolo yokt'}
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
            {[0, 1, 2].map((value) => (
              <Grid key={value} item 
              component={motion.div}
              variants={item}
              
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
                  
                  >
                  <CardMedia
                    component="img"
                    height="160"
                    image={courseImg}
                    alt="course photo"
                    sx={{p:0.2}}
                  />
                  {courses.map((item)=>{
                    return(
                      
                    <CardContent>
                      <Grid container direction='row'>
                      
                      <Typography gutterBottom variant="p" textAlign="left" marginBottom="3%" fontFamily='Segoe UI' color='#9d9da8' component="div">
                        {item.title}
                      </Typography>
                      </Grid>
                      <Typography variant="h6" marginTop="3%" fontFamily="Arial" fontSize='18' fontWeight='bold'>
                        {item.desc}
                      </Typography>
                      <Stack spacing={1} marginTop="5%">
                        <Rating name="half-rating-read" defaultValue={4} precision={1} readOnly />
                      </Stack>
                      <Stack marginTop="7%" direction='row' spacing={2}>
                      <Avatar alt="Remy Sharp" src={formateurImg} />
                      <Typography variant="p" marginTop="3%" fontFamily="Segoe UI" fontSize='12' >
                        {item.formateurName}
                      </Typography>
                      </Stack>
                      
                    </CardContent>)
                        
                    })}  
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