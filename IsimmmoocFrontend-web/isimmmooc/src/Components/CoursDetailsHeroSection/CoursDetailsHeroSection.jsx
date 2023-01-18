

/*
 * ----------------------------------------------------------------------
 *                          Components & Functions                      |
 * ----------------------------------------------------------------------
 */
import React from 'react'
import {Box,Grid} from '@mui/material'
import {Button} from '@mui/material';
import { useState,useEffect } from 'react';
import {motion} from 'framer-motion';
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
import bigImage from '../../Assets/Images/isimmmooc-Hero-Image-Big.png';
import mediumImage from '../../Assets/Images/isimmmooc-Hero-Image-Medium.png';
import smallImage from '../../Assets/Images/isimmmooc-Hero-Image-Small.png';

import {easing,fadeInUp,letter,container,item} from './../../Data'

function CoursDetailsHeroSection() {

  /* --------------------------------------------------------------------
   *                           Constants                                |
   * --------------------------------------------------------------------
   */
  
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

  const useWindowWidth = () => {
    const [windowWidth, setWindowWidth ] = useState(window.innerWidth);
  
    useEffect(() => {
        const handleWindowResize = () => {
            setWindowWidth(window.innerWidth);
        };
  
        window.addEventListener('resize', handleWindowResize);
        return () => window.removeEventListener('resize', handleWindowResize);
    },[]);
  
    if (windowWidth >=1300)
      return bigImage;
    else if(windowWidth <1300 && windowWidth >660)
      return mediumImage
    else if(windowWidth <=660)
      return smallImage
  };
  
  /* --------------------------------------------------------------------
   *                            Effect Hooks                            |
   * --------------------------------------------------------------------
   */

  /* --------------------------------------------------------------------
   *                                 JSX                                |
   * --------------------------------------------------------------------
   */
  const imageUrl = useWindowWidth()
  return (
    <Box
      component={motion.div}
      initial='initial'
      animate='animate'
    >
      <Box 
        paddingTop='75px' 
        className='HeroSectionTopPart' 
        component={motion.div}
        initial={{
          opacity:0,
          scale:0
        }}
        animate={{
          opacity:1,
          scale:1
        }}
        transition={{
          duration:0.3,
          ease:easing
        }}
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
              <motion.h2 variants={fadeInUp} initial='initial' animate='animate'>
                The complete cours React Native for beginner
              </motion.h2>
              <motion.p variants={fadeInUp}>
                Learn javascript,react native,Hooks
              </motion.p>
              <motion.p variants={fadeInUp}>
                created by name of formateur
              </motion.p>
            </motion.div>
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
                Enregistrer 
            </Button>
          </Grid>
          <Grid 
            className='HeroImage' 
            item xs={6} 
            style={{backgroundImage: `url(${imageUrl})` }}
            component={motion.div}
            initial={{
              x:200,
              opacity:0
            }}
            animate={{
              x:0,
              opacity:1
            }}
            transition={{
              duration:.5,
              delay:.8
            }}
          >
            
          </Grid>
        </Grid>      
      </Box>
    </Box>
    
  )
}

export default CoursDetailsHeroSection