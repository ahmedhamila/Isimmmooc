

/*
 * ----------------------------------------------------------------------
 *                          Components & Functions                      |
 * ----------------------------------------------------------------------
 */
import React from 'react'
import {Box,Grid} from '@mui/material'
import {Button} from '@mui/material';
import {motion} from 'framer-motion';
import Rating from '@mui/material/Rating';
import { json, useParams } from 'react-router-dom';
import {DefaultPlayer as Video} from 'react-html5video'
import 'react-html5video/dist/styles.css'
/*
* ----------------------------------------------------------------------
*                              Services & Models                       |
* ----------------------------------------------------------------------
*/

import {GetCoursById} from './../../Services'

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
import coursePhoto from '../../Assets/Images/coursePhoto.jpg';

import {fadeInUp} from './../../Data'

function CoursDetailsHeroSection() {

  /* --------------------------------------------------------------------
   *                           Constants                                |
   * --------------------------------------------------------------------
   */
  const [course,setCourse]=React.useState({})
  const {id}=useParams()
  const [value, setValue] = React.useState(4);
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
  React.useEffect(()=>{
    const Getcourse = async()=>{
  
      const response = await GetCoursById(id)   
      const responseJson = await response.json()
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
            >
                Enregistrer 
            </Button>
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
          >
            <source src={course.short_video} type="video/mp4"/>
          </Video>
          </Grid>
        </Grid>      
      </Box>
    </Box>
    
  )
}

export default CoursDetailsHeroSection