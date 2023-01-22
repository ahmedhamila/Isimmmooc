

/*
 * ----------------------------------------------------------------------
 *                          Components & Functions                      |
 * ----------------------------------------------------------------------
 */

import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import {Button,Grid} from '@mui/material';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import {motion} from 'framer-motion';
/*
* ----------------------------------------------------------------------
*                              Services & Models                       |
* ----------------------------------------------------------------------
*/


import {container,item} from './../../Data'

/*
 * ----------------------------------------------------------------------
 *                                Styles                                |
 * ----------------------------------------------------------------------
 */
import styles from './../../Assets/Styles/style.module.scss'
/*
 * ----------------------------------------------------------------------
 *                                Images                                |
 * ----------------------------------------------------------------------
 */
import organizmeImg from '../../Assets/Images/organizmeImg.jpg';
function SectionOrganizmes() {

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
    <Container maxWidth="false" sx={{marginTop:'2%',
      width:"100%"}} 
    >
      <Box sx={{
          height: '100%',
          padding: "20px 0",
          position: "relative" }} >
        <motion.div
        component={motion.div}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        transition={{ duration: 0.5 }}
        variants={{
          visible: {  opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0 }
        }}
        style={{textAlign:'center'}}>
          <p style={{color:'#ff7468',fontFamily:'Arial'}}>Meet with our organizmes</p>
          <h1 >Our organizmes</h1>
          <p>A best and cheapest way of getting know learning to make a better tomorrow.</p>
        </motion.div>    
        <Grid sx={{ flexGrow: 1 }} container spacing={2}>
          <Grid item xs={12}>
            <Grid container justifyContent="center" spacing={12}
            component={motion.div}
            variants={container}
            initial='hidden'
            exit='exit'
            whileInView='show'
            viewport={{once:false}}
            >
                <Grid item 
                component={motion.div}
                variants={item}
                >
                  <Card sx={{ maxWidth: 500, height:420 }}>
                    <CardMedia
                      sx={{ height: 230}}
                      image={organizmeImg}
                      title="organizme photo"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="p" component="div" color="text.secondary" align='right'>
                        Graduation
                      </Typography>
                      <Typography variant="h5" align='center' fontWeight='bold'>
                      Graduation: The Premier Personal Growth Learning Platform
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button
                        variant='text' 
                        sx={{
                            marginTop:'3%',
                            backgroundColor:styles.SecondaryColor,
                            color:'#fff',
                            "&:hover" : {
                              backgroundColor : '#fff',
                              color: styles.SecondaryColor  ,
                            }
                          }}
                        size=" large"
                        >
                          View Profile 
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
            </Grid>
          </Grid>
          <Grid 
          container
          marginTop='2%'
          direction='column'
          alignItems='center'
          justifyContent='center'
          className='PopularTopicsButton'>
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
                 See All 
              </Button> 
          </Grid>
        </Grid>
        
      </Box>
    </Container>
  </React.Fragment>
  )
}

export default SectionOrganizmes