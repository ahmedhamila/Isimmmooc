

/*
 * ----------------------------------------------------------------------
 *                          Components & Functions                      |
 * ----------------------------------------------------------------------
 */
import React from 'react'
import {Box,Grid} from '@mui/material'
import DesktopMacOutlinedIcon from '@mui/icons-material/DesktopMacOutlined';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';
import NoteAddOutlinedIcon from '@mui/icons-material/NoteAddOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import {Button} from '@mui/material';
import { useState,useEffect } from 'react';
import { useNavigate } from "react-router-dom";

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
import './HeroSection.scss'
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

function HeroSection() {

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
  const navigate=useNavigate()
  /* --------------------------------------------------------------------
   *                             Functions                              |
   * --------------------------------------------------------------------
   */
  const signUpClickHandle = ()=>{
    navigate("/SignUp")
  }
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
                Anytime Anywhere learn on your suitable schedule
              </motion.h2>
              <motion.p variants={fadeInUp}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum voluptates quod dolorem aut voluptatum rerum, 
                maiores eaque ipsa atque dolorum iusto perferendis est laboriosam qui itaque cupiditate. Obcaecati, perferendis unde?
              </motion.p>
            </motion.div>
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

      <Box 
        paddingTop='75px' 
        className='HeroSectionBottomPart' 
        component={motion.header}
        variants={letter}
      >
        <Grid container 
        direction={{sm:'column',md:'row',lg:'row'  }}
        justifyContent='center'
        alignItems='center'
        rowSpacing={1} >
          
          <Grid 
            direction='column' 
            alignItems='center'
            justifyContent='center'
            item
            xs={{sm:12,md:6}}>
              <Grid
                container 
                direction='column'
                alignItems='center'
                justifyContent='space-between'
                gap="15px"
                padding={'25px'} 
                spacing={{  md: 3 }} 
                component={motion.div}
                variants={container}
                initial='hidden'
                exit='exit'
                whileInView='show'
                viewport={{once:false}}
              >
                  <Grid 
                  container
                  direction={{xs:'column',sm:'row',md:'row' ,xl:"row" }}
                  alignItems='center'
                  justifyContent='space-evenly'
                  gap='10px'
                  >
                  
                    <Grid
                      container
                      direction={{sm:'row',md:'row'  }}
                      gap={{sm:'0px',md:'20px',xl:'20px'}}
                      sx={{
                        width : '325px',
                        height :'175px'
                      }}
                      className='Item'
                      component={motion.div}
                      variants={item}
                    >
                      <div className='ItemIcon' style={{backgroundColor:"#FF766A",borderColor:"#FF766A",color:"#FFF0E9"}}>
                        <DesktopMacOutlinedIcon />
                      </div>
                      <div>
                        <h2>Live Class</h2>
                        <p>Online Live Class Regularly</p>
                      </div>
                    </Grid>
                    <Grid
                      container
                      direction={{sm:'column',md:'row'  }}
                      gap={{sm:'0px',md:'20px',xl:'20px'}}
                      sx={{
                        width : '325px',
                        height :'175px'
                      }}
                      className='Item'
                      component={motion.div}
                      variants={item}
                    >
                      <div className='ItemIcon' style={{backgroundColor:"#7765FF",borderColor:"#7765FF",color:"#E1DDFF"}}>
                        <SmsOutlinedIcon />
                      </div>
                      <div>
                        <h2>Live Discuss</h2>
                        <p>Online Live Discussion</p>
                      </div>
                    </Grid>
                  </Grid>
                  <Grid 
                  container
                  direction={{xs:'column',sm:'row',md:'row' ,xl:"row" }}
                  alignItems='center'
                  justifyContent='space-evenly'
                  gap='10px'
                  >
                    <Grid
                      container
                      direction={{sm:'column',md:'row'  }}
                      gap={{sm:'0px',md:'20px',xl:'20px'}}
                      sx={{
                        width : '325px',
                        height :'175px'
                      }}
                      className='Item'
                      component={motion.div}
                      variants={item}
                    >
                      <div className='ItemIcon' style={{backgroundColor:styles.QuaternaryColor,borderColor:styles.QuaternaryColor,color:"#FFF6DD"}}>
                        <NoteAddOutlinedIcon />
                      </div>
                      <div>
                        <h2>Daily Task</h2>
                        <p>Online Daily Homework</p>
                      </div>
                    </Grid>
                    <Grid
                      container
                      direction={{sm:'column',md:'row'  }}
                      gap={{sm:'0px',md:'20px',xl:'20px'}}
                      sx={{
                        width : '325px',
                        height :'175px'
                      }}
                      className='Item'
                      component={motion.div}
                      variants={item}
                    >
                      <div className='ItemIcon' style={{backgroundColor:styles.TertiaryColor,borderColor:styles.TertiaryColor,color:"#EDF8F4"}}>
                        <BookmarkBorderOutlinedIcon />
                      </div>
                      <div>
                        <h2>Subjects</h2>
                        <p>Various Kind of Subjects</p>
                      </div>
                    </Grid>
                  </Grid>
              </Grid>
            </Grid>

            <Grid 
            direction='column' 
            alignItems='center'
            justifyContent='center'
            container
            xs={6}>
              <Grid 
                container
                direction='column'
                alignItems='center'
                justifyContent='center'
                flexWrap='wrap'
                component={motion.div}
                initial={{
                  y:20,
                  opacity:0
                }}
                animate={{
                  y:0,
                  opacity:1
                }}
                exit={{
                  opacity:0
                }}
                transition={{
                  duration:.5,
                  delay:1.8
                }}
              >
                <h2>
                  Start your journey today
                </h2>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                </p>
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
                onClick={signUpClickHandle}
                >
                  Sign up

                </Button>
              </Grid>
            </Grid>
        </Grid>
          
          
      </Box>
    </Box>
    
  )
}

export default HeroSection