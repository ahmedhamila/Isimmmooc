

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
                The complete cours React Native for beginner
              </motion.h2>
              <motion.p variants={fadeInUp} sx={{fontSize:'20px'}}>
                Learn javascript,react native,Hooks
              </motion.p>
              <Rating name="read-only" value={value} readOnly /> 
              <motion.p variants={fadeInUp}>
                created by name of formateur
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
            style={{backgroundImage: `url(${coursePhoto})`,display:'flex' }}
            component={motion.div}
          >  
          </Grid>
        </Grid>      
      </Box>
    </Box>
    
  )
}

export default CoursDetailsHeroSection