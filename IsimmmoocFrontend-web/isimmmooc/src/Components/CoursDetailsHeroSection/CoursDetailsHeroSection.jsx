

/*
 * ----------------------------------------------------------------------
 *                          Components & Functions                      |
 * ----------------------------------------------------------------------
 */
import React,{useState} from 'react'
import {Box,Grid} from '@mui/material'
import {Button} from '@mui/material';
import {motion} from 'framer-motion';
import Rating from '@mui/material/Rating';
import {  Link, useNavigate, useParams } from 'react-router-dom';
import {DefaultPlayer as Video} from 'react-html5video'
import 'react-html5video/dist/styles.css'
import Snackbar from '@mui/material/Snackbar'
import MuiAlert from '@mui/material/Alert';
/*
* ----------------------------------------------------------------------
*                              Services & Models                       |
* ----------------------------------------------------------------------
*/

import {GetCoursById,RegisterCourse} from './../../Services'

/*
 * ----------------------------------------------------------------------
 *                                Styles                                |
 * ----------------------------------------------------------------------
 */
import './CoursDetailsHeroSection.scss'
import styles from './../../Assets/Styles/style.module.scss'

/*
 * ----------------------------------------------------------------------
 *                                Images                                |
 * ----------------------------------------------------------------------
 */

import {fadeInUp} from './../../Data'
import { useSelector } from 'react-redux';

function CoursDetailsHeroSection() {

  /* --------------------------------------------------------------------
   *                           Constants                                |
   * --------------------------------------------------------------------
   */
const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  
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
  const [course,setCourse]=React.useState({})
  const {id}=useParams()
  const [value, setValue] = React.useState(4);
  const [model,setModel]=React.useState(false)
  const[warningMessage,setWarningMessage]=useState('')
  const [open, setOpen] = useState(false);
  const navigate = useNavigate()
  const {registeredCourses} = useSelector((state)=>state.user)
  console.log(registeredCourses)
  /* --------------------------------------------------------------------
   *                             Functions                              |
   * --------------------------------------------------------------------
   */
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
    
  };
  const handleRegister = async()=>{
      const response = await RegisterCourse(id)
      if (response.ok)
      {
        navigate(0)
      }
      else
      {
        setWarningMessage('An error has occured while regitering this course')
        setOpen(true)
      }
      
  }
  
  /* --------------------------------------------------------------------
   *                            Effect Hooks                            |
   * --------------------------------------------------------------------
   */
  React.useEffect(()=>{
    const Getcourse = async()=>{
  
      const response = await GetCoursById(id)   
      const responseJson = await response.json()
      console.log(responseJson)
      setCourse(responseJson)
    }
    Getcourse() ; 
    
  },[])
  /* --------------------------------------------------------------------
   *                                 JSX                                |
   * --------------------------------------------------------------------
   */
  return (
    
    <Box
      component={motion.div}
    >
      <Box 
        paddingTop='75px' 
        className='HeroSectionTopPart' 
        component={motion.div}
      >
        <Grid 
          container 
          rowSpacing={1}
          component={motion.div}
        >
          <Grid 
          direction='column' 
          alignItems='center'
          justifyContent='center'
          container
          className='HeroContent' 
          xs={6}>
            <motion.div>
              <motion.h2 variants={fadeInUp}>
                The complete cours {course.name} for {course.difficulty === 'BG'?'Beginner':course.difficulty === 'AV'?'Advanced':'Intermediate'}
              </motion.h2>
              <motion.p variants={fadeInUp} sx={{fontSize:'20px'}}>
                {course.description}
              </motion.p>
              <Rating name="read-only" value={value} readOnly /> 
              <motion.p variants={fadeInUp}>
                created by {course.formateur}
              </motion.p>
              {

              }
              {
                
                registeredCourses.some((Thiscourse) => Thiscourse.id === course.id)?
                (
                  <div>
                    <p>
                    You are already registered to this course
                    </p>
                    <Link to='/ApprenantHomeSpace/MonApprentissage'>
                      Click here to view all your registered courses
                    </Link>
                  </div>
                  
                )
                :
                (
                  <Button
                    variant='text' 
                    sx={{
                        alignItems:'left',
                        backgroundColor:styles.SecondaryColor,
                        color:'#fff',
                        "&:hover" : {
                          backgroundColor : '#fff',
                          color: styles.SecondaryColor  ,
                        }
                      }}
                    size="large"
                    onClick={handleRegister}
                    >
                        Enregistrer 
                </Button>
                )
              }
              
            </motion.div>

          </Grid>
          <Grid 
            marginTop='3%'
            height='200px'
            width='300px'
            item xs={4} 
            style={{display:'flex' }}
            component={motion.div}
          >  
          <Video 
          style={{width:'100%'}}
          autoPlay={model}
          controls={['PlayPause','Seek','Time','Volume','Fullscreen']}
        >
          <source src={course.short_video} type="video/mp4"/>
        </Video>
          </Grid>
        </Grid>  
        <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
            {warningMessage}
          </Alert>
      </Snackbar>    
      </Box>
    </Box>
    
  )
}

export default CoursDetailsHeroSection