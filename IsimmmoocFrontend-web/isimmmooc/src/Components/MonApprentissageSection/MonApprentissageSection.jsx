

/*
 * ----------------------------------------------------------------------
 *                          Components & Functions                      |
 * ----------------------------------------------------------------------
 */
import * as React from 'react';
import Box from '@mui/material/Box';
import {Grid, Typography,Paper} from '@mui/material';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import CardMedia from '@mui/material/CardMedia';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { useNavigate } from "react-router-dom";
import {useEffect } from 'react';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
/*
* ----------------------------------------------------------------------
*                              Services & Models                       |
* ----------------------------------------------------------------------
*/
import {GetCourses} from './../../Services'

/*
 * ----------------------------------------------------------------------
 *                                Styles                                |
 * ----------------------------------------------------------------------
 */


/*
 * ----------------------------------------------------------------------
 *                                Images                                |
 * ----------------------------------------------------------------------
 */
import reactNativeImg from '../../Assets/Images/reactNativeImg.jpg';


function MonApprentissageSection() {

  /* --------------------------------------------------------------------
   *                           Constants                                |
   * --------------------------------------------------------------------
   */
  const [age, setAge] = React.useState('');

  const [courses,setCourses]=React.useState([])

  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 3,
    borderRadius: 0,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 0,
      backgroundColor: '#6159a2',
      height:3,
    },
  }));
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
  
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const CoursClickHandle = (id)=>{
    navigate(`/ApprenantHomeSpace/MonApprentissage/cours/${id}`)
  } 

  
  const Getcourses = async()=>{
   
    const response = await GetCourses()   
    const responseJson = await response.json()
    setCourses(responseJson)
    
  }
  useEffect(   
    ()=>{Getcourses() ; },[])
  
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
      <Box sx={{ paddingTop: '15px',
            marginTop:'5%' ,
            minHeight: '100px',
            display: 'flex',
            flexDirection: 'row',
            padding: '25px',
            color:'rgb(2,0,36)',
            backgroundColor: '#f8f8ff',
        }} >
        <Grid container rowSpacing={1}>
          <Grid 
          direction='row' 
          alignItems='center'
          justifyContent='center'
          container
          >
            <Grid item justifyContent='center' direction="row" >
                <Typography variant="h1"  color='#1C1D1F' fontWeight='bold' fontFamily='Georgia' fontSize='45px' component="div">
                  Mon Apprentissage
                </Typography> 
            </Grid>   
          </Grid>
        </Grid>    
      </Box>
      <Grid container justifyContent='center'>
        
        <Grid container spacing={2} sx={{display:'flex',justifyContent:'center',width:'100%',marginTop:1}} >
          {courses.map((item,index)=>{
            return(
              <IconButton key={index}>
                <Paper
                    sx={{
                      height: 300,
                      width: 220,
                      backgroundColor: (theme) =>
                        theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                      border: '1px solid rgb(206, 194, 194)',
                      
                    }}  
                    onClick={()=>{CoursClickHandle(item.id)}}  
                >
                  <CardMedia
                        component="img"
                        height="160"
                        image={reactNativeImg}
                        alt="course photo"
                        sx={{p:0.2,cursor:'pointer'}}
                        
                  />        
                  <Grid padding='0px'>
                    <Typography variant="h6" fontFamily="Arial" color='#1C1D1F' fontSize='20px' fontWeight='bold'>
                        {item.name}
                    </Typography>
                    <Typography variant="p" fontFamily="Segoe UI" color='#999d9f' fontSize='16px' >
                      {item.formateur}
                    </Typography>
                    <Stack spacing={1}>
                      <Rating name="half-rating-read" defaultValue={4} precision={1} readOnly />
                    </Stack> 
                    <BorderLinearProgress variant="determinate" value={30} /> 
                  </Grid> 
                </Paper>
              </IconButton>
              ) })} 
        </Grid>  
      </Grid>
    </Box>
  )
}

export default MonApprentissageSection