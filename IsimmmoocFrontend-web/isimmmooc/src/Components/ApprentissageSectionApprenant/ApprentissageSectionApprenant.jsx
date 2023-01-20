

/*
 * ----------------------------------------------------------------------
 *                          Components & Functions                      |
 * ----------------------------------------------------------------------
 */

import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import {Box,Grid} from '@mui/material';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { useNavigate } from "react-router-dom";
import {useSelector} from "react-redux"
import {DefaultPlayer as Video} from 'react-html5video'
import 'react-html5video/dist/styles.css'
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
import './ApprentissageSectionApprenant.scss'

/*
 * ----------------------------------------------------------------------
 *                                Images                                |
 * ----------------------------------------------------------------------
 */

function ApprentissageSectionApprenant() {

  /* --------------------------------------------------------------------
   *                           Constants                                |
   * --------------------------------------------------------------------
   */
  const [model,setModel]=React.useState(false)
  const [courses,setCourses]=React.useState([])
  const {email}=useSelector((state)=>state.user)
  
  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor:'#6159a2',
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
  const CoursClickHandle = (id)=>{
    navigate(`/ApprenantHomeSpace/MonApprentissage/cours/${id}`)
  }
  const MonApprentissageClickHandler=()=>{
    navigate("/ApprenantHomeSpace/MonApprentissage")
  }
  
  const Getcourses = async()=>{
   
    const response = await GetCourses()   
    const responseJson = await response.json()
    setCourses(responseJson)
    
  }
  React.useEffect(   
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
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth='false' >
        <Box sx={{height: '50vh',  maxWidth:'100%',flexDirection: 'column'}} >
          <Grid classeName='textContainer' item>
            <h1 color='#1C1D1F' fontFamily=' Georgia'>Commençons notre apprentissage,<br/>
              {email}
            </h1>
            <a className='link1' onClick={MonApprentissageClickHandler}><span>Mon apprentissage</span></a>
            <br />
            <br />
          </Grid>
          <Grid sx={{ flexGrow: 1 }} container spacing={2}>
          <Grid item xs={12}>
          <Grid container spacing={3} flexDirection='row'>
            <Grid item>
            {courses.map((item,index)=>{
            return(
              <Paper
                sx={{
                  cursor: 'pointer',
                  border:0.1,
                  borderColor:'#8d8e8f',
                  borderRadius:'0px',
                  boxShadow:0 ,
                  p: 2,
                  margin: 'auto',
                  width:420,
                  maxHeight:150,
                  flexGrow: 1,
                  backgroundColor: (theme) =>
                    theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                }}
                onClick={()=>{CoursClickHandle(item.id)}} 
              >
                <Grid container spacing={2} key={index}>
                  <Grid item >
                    <ButtonBase sx={{ width: 150, height:'100%',borderRight:1,borderColor:'#8d8e8f', }}>
                      <Video 
                          style={{width:'100%'}}     
                      >
                          <source src={item.short_video} type="video/mp4"/>
                      </Video>
                    </ButtonBase>
                  </Grid>
                  <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                      <Grid item xs>
                        <Typography gutterBottom variant="subtitle1" component="div" fontWeight='bold' color='#999d9f' fontSize='12px'>
                          {item.name} 
                        </Typography>
                        <Typography variant="body2" gutterBottom fontWeight='bold' fontSize='20px'>
                          {item.period} Heures
                        </Typography>
                      </Grid>
                      <Grid item  xs container direction="row">
                        <Typography variant="body2" color='#999d9f' fontWeight='bold' fontSize='14px'>
                          Session by {item.formateur}
                        </Typography>
                      </Grid>
                      <BorderLinearProgress variant="determinate" value={40} />
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
                  ) })} 
            </Grid>
          </Grid>
          </Grid>
          </Grid>
        </Box>
      </Container>
    </React.Fragment>
  )
}

export default ApprentissageSectionApprenant