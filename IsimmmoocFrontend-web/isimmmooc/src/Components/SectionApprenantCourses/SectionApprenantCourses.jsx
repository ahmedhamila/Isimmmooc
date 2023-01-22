

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
import { useNavigate } from "react-router-dom";


/*
* ----------------------------------------------------------------------
*                              Services & Models                       |
* ----------------------------------------------------------------------
*/

import {GetCourses,GetDiscipline} from './../../Services'

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


function SectionApprenantCourses() {

  /* --------------------------------------------------------------------
   *                           Constants                                |
   * --------------------------------------------------------------------
   */
  const [courses,setCourses]=React.useState([])
  const [disciplines,setDisciplines]=React.useState([])
  const navigate=useNavigate()

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
  const CoursDetailsClickHandle = (id)=>{
    navigate(`/ApprenantHomeSpace/CoursDetails/${id}`)
  }
  const Getcourses = async()=>{
   
    const response = await GetCourses()   
    const responseJson = await response.json()
    console.log(responseJson)
    setCourses(responseJson)
    
  }
  const Getdisciplines = async()=>{
   
    const response = await GetDiscipline()   
    const responseJson = await response.json()
    console.log(responseJson)
    setDisciplines(responseJson)
    
  }
  React.useEffect(   
    ()=>{Getcourses() ;Getdisciplines() },[])
    
  
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
    {disciplines.map((discipline,index)=>{
        return(
        <Box sx={{
            padding: "20px 0",
            position: "relative" }} >
            <Grid classeName='textContainer' item>
                <h1 color='#1C1D1F' >Meilleurs cours dans la catégorie <a className='link'>{discipline.name}</a></h1>
            </Grid>  
            <Grid sx={{ flexGrow: 1 }} container spacing={2}>
                <Grid item xs={12}>
                <Grid container justifyContent="center" spacing={2}>
                {courses.map((item,index)=>{
                    if (item.discipline === discipline.name )
                    return(
                        <Grid  item key={index}>
                        <Paper
                        className='CoursePaper'
                        onClick={()=>{CoursDetailsClickHandle(item.id)}}
                        sx={{  
                            width: 250,
                            backgroundColor: (theme) =>
                            theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                            border: '1px solid rgb(206, 194, 194)',
                            
                        }}  
                        >
                        <CardMedia
                            component="img"
                            height="160"
                            image={item.formateurImg}
                            alt="course photo"
                            sx={{p:0.2}}
                        />
                        
                         <CardContent>
                            <Typography variant="p" marginTop="3%" fontFamily="Segoe UI" fontSize='12' >
                                {item.formateur}
                            </Typography>
                            <Typography gutterBottom variant="p" textAlign="left" marginBottom="2%" marginTop="0" fontFamily='Segoe UI' color='#9d9da8' component="div">
                                {item.name}
                            </Typography>
                            <Typography variant="h6" fontFamily="Arial" fontSize='16px' fontWeight='bold'>
                                {item.description}
                            </Typography>
                            <Stack spacing={1} marginTop="2%">
                                <Rating name="half-rating-read" defaultValue={4} precision={1} readOnly />
                            </Stack>
                            </CardContent> 
                        </Paper>
                    </Grid>
                    )
                })}
                </Grid>
                </Grid>
            </Grid>     
        </Box>
    ) })}
</Container>
    </React.Fragment>
  )
}

export default SectionApprenantCourses