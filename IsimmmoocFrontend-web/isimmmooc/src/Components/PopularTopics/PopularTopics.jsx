

/*
 * ----------------------------------------------------------------------
 *                          Components & Functions                      |
 * ----------------------------------------------------------------------
 */

import React from 'react'
import { Grid } from '@mui/material'
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import ComputerIcon from '@mui/icons-material/Computer';
import StoreIcon from '@mui/icons-material/Store';
import VideocamIcon from '@mui/icons-material/Videocam';
import {Button} from '@mui/material';
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

import './PopularTopics.scss'
import styles from './../../Assets/Styles/style.module.scss'
import { useEffect } from 'react';
import {container,item} from './../../Data'
/*
 * ----------------------------------------------------------------------
 *                                Images                                |
 * ----------------------------------------------------------------------
 */


function PopularTopics() {

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
   *                              States                                |
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
    <motion.div 
      className='PopularTopics' 
      initial='initial'
      animate='animate'
    >
        <Grid
        container
        direction='column'
        alignItems='center'
        justifyContent='center'
        gap='25px'
        >
            <Grid 
            container
            direction='column'
            alignItems='center'
            justifyContent='center'
            className='PopularTopicsHeader'
            component={motion.div}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
            variants={{
              visible: {  opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 }
            }}
            >
                <motion.h5 >Browse Categories</motion.h5>
                <motion.h2 >Popular Topics to learn</motion.h2>
                <motion.p >A best and cheapest way of getting know learning to make a better tomorrow.</motion.p>
            </Grid>
            <Grid 
            container
            direction='row'
            alignItems='center'
            justifyContent='center'
            className='PopularTopicsCards'
            gap='25px'
            component={motion.div}
            variants={container}
            initial='hidden'
            exit='exit'
            whileInView='show'
            viewport={{once:false}}
            >
                <Grid
                    container
                    direction='column'
                    sx={{
                      width : '250px',
                      height : '175px'
                    }}
                    justifyContent='center'
                    alignItems='center'
                    className='PopularTopicsCardsItem'
                    component={motion.div}
                    variants={item}
                    >
                      <div className='PopularTopicsCardsItemIcon' >
                        <DesignServicesIcon  sx={{ color: styles.SecondaryColor }} fontSize='large'/>
                      </div>
                      <div>
                        <h2>Design Sector</h2>
                        <p>5 courses</p>
                      </div>
                </Grid>
                <Grid
                    container
                    direction='column'
                    sx={{
                      width : '250px',
                      height : '175px'
                    }}
                    justifyContent='center'
                    alignItems='center'
                    className='PopularTopicsCardsItem'
                    component={motion.div}
                    variants={item}
                    >
                      <div className='PopularTopicsCardsItemIcon' >
                        <ComputerIcon sx={{ color: styles.PrimaryColor }} color={styles.PrimaryColor} fontSize='large'/>
                      </div>
                      <div>
                        <h2>Development Sector</h2>
                        <p>4 courses</p>
                      </div>
                </Grid>
                <Grid
                    container
                    direction='column'
                    sx={{
                      width : '250px',
                      height : '175px'
                    }}
                    justifyContent='center'
                    alignItems='center'
                    className='PopularTopicsCardsItem'
                    component={motion.div}
                    variants={item}
                    >
                      <div className='PopularTopicsCardsItemIcon' >
                        <StoreIcon sx={{ color: styles.TertiaryColor }}  fontSize='large'/>
                      </div>
                      <div>
                        <h2>Design Sector</h2>
                        <p>5 courses</p>
                      </div>
                </Grid>
                <Grid
                    container
                    direction='column'
                    sx={{
                      width : '250px',
                      height : '175px'
                    }}
                    justifyContent='center'
                    alignItems='center'
                    className='PopularTopicsCardsItem'
                    component={motion.div}
                    variants={item}
                    >
                      <div className='PopularTopicsCardsItemIcon' >
                        <VideocamIcon sx={{ color: styles.QuaternaryColor }} fontSize='large'/>
                      </div>
                      <div>
                        <h2>Development Sector</h2>
                        <p>4 courses</p>
                      </div>
                </Grid>
            </Grid>
            <Grid 
            container
            direction='column'
            alignItems='center'
            justifyContent='center'
            className='PopularTopicsButton'
            
            
            >
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
    </motion.div>
  )
}

export default PopularTopics