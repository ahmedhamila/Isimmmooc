

/*
 * ----------------------------------------------------------------------
 *                          Components & Functions                      |
 * ----------------------------------------------------------------------
 */

import * as React from 'react';
import {Box,Grid} from '@mui/material';
import Container from '@mui/material/Container';
import { useState } from 'react';
import Paper from '@mui/material/Paper';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import { useNavigate } from "react-router-dom";


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
import './SectionApprenantCourses.scss'

/*
 * ----------------------------------------------------------------------
 *                                Images                                |
 * ----------------------------------------------------------------------
 */
import courseImg from '../../Assets/Images/coursePhoto.jpg';
import formateurImg from '../../Assets/Images/formateurImg.jpg';

function SectionApprenantCourses() {

  /* --------------------------------------------------------------------
   *                           Constants                                |
   * --------------------------------------------------------------------
   */
  const navigate=useNavigate()
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
  const CoursDetailsClickHandle = ()=>{
    navigate("/ApprenantHomeSpace/CoursDetails")
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
    <Container maxWidth="false" sx={{ width:"100%", marginBottom:'3%',marginTop:'1%'}} >
        <Box sx={{
            height: '100%',
            padding: "20px 0",
            position: "relative" }} >
            <Grid classeName='textContainer' item>
                <h1 color='#1C1D1F' >Meilleurs cours dans la catégorie <a className='link'>React Native</a></h1>
            </Grid>  
            <Grid sx={{ flexGrow: 1 }} container spacing={2}>
                <Grid item xs={12}>
                <Grid container justifyContent="center" spacing={2}>
                    {[0, 1, 2,3,4].map((value) => (
                    <Grid key={value} item >
                        <Paper
                        className='CoursePaper'
                        onClick={CoursDetailsClickHandle}
                        sx={{
                            height: 350,
                            width: 250,
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
                           
                            <Typography gutterBottom variant="p" textAlign="left" marginBottom="2%" marginTop="0" fontFamily='Segoe UI' color='#9d9da8' component="div">
                                {item.title}
                            </Typography>
                        
                            <Typography variant="h6" fontFamily="Arial" fontSize='16px' fontWeight='bold'>
                                {item.desc}
                            </Typography>
                            <Stack spacing={1} marginTop="2%">
                                <Rating name="half-rating-read" defaultValue={4} precision={1} readOnly />
                            </Stack>
                            <Stack marginTop="2%" direction='row' spacing={2}>
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
            </Grid>     
        </Box>
    </Container>
    </React.Fragment>

  )
}

export default SectionApprenantCourses