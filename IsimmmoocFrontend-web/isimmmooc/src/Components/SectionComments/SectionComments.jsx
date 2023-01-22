

/*
 * ----------------------------------------------------------------------
 *                          Components & Functions                      |
 * ----------------------------------------------------------------------
 */


import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
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
import './SectionComments.scss'
import styles from './../../Assets/Styles/style.module.scss'


/*
 * ----------------------------------------------------------------------
 *                                Images                                |
 * ----------------------------------------------------------------------
 */
import imageProfile from '../../Assets/Images/2.jpg';
import commentIcon from '../../Assets/Images/comment-icom.png';
function SectionComments(){

  /* --------------------------------------------------------------------
   *                           Constants                                |
   * --------------------------------------------------------------------
   */
  const [comments,setComments]=useState([
    {txt:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum voluptates quod dolorem aut voluptatum rerum, maiores eaque ipsa atque dolorum iusto perferendis est laboriosam qui itaque cupiditate. Obcaecati, perferendis unde?',
     userName:'Yosra Omran'},
     {txt:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum voluptates quod dolorem aut voluptatum rerum, maiores eaque ipsa atque dolorum iusto perferendis est laboriosam qui itaque cupiditate. Obcaecati, perferendis unde?',
     userName:'Ahmed Hamila'}
  ])
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
    <React.Fragment>
      <Container maxWidth="false" sx={{marginTop:'2%',
        backgroundColor: '#f8f8ff',
        width:"100%",}} 
      >
        <Box sx={{ bgcolor: '#f8f8ff',
            height: '100%',
            padding: "20px 0",
            position: "relative" }} >
          <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
          variants={{
            visible: {  opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 }
          }}
          style={{textAlign:'center'}}>
            <h5 style={{color:styles.QuaternaryColor}}>Membership</h5>
            <h1>What student says</h1>
            <p>A best and cheapest way of getting know learning to make a better tomorrow.</p>
          </motion.div>    
          <Grid sx={{ flexGrow: 1 }} container spacing={2}>
            <Grid item xs={12}>
              <Grid container justifyContent="center" spacing={4}
              component={motion.div}
              variants={container}
              initial='hidden'
              exit='exit'
              whileInView='show'
              viewport={{once:false}}
              >
                {comments.map((item,index)=>{
                        return(
                
                  <Grid  item 
                  component={motion.div}
                  key={index}
                  >
                    <Paper
                      sx={{
                        height: 400,
                        width: 300,
                        backgroundColor: (theme) =>
                          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                        border: '1px solid rgb(206, 194, 194)',
                        boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
                        borderRadius:'15px',
                      }}
                      
                      >
                      
                        <CardContent>
                          <Grid container direction='row'>
                          <img src={commentIcon} alt="commentIcon" />
                          <Typography gutterBottom variant="h6" textAlign="center" fontWeight='bold' marginBottom="3%" marginLeft='10%' color='$SecondaryColor' component="div">
                            {item.userName}
                          </Typography>
                          </Grid>
                          <CardMedia 
                            component="img"
                            height="170"
                            image={imageProfile}
                            alt="userName photo"
                            sx={{ borderRadius: '50%' }}
                          />
                          <Typography variant="body2" marginTop="3%" align='justify' fontFamily="Arial" fontSize='16'>
                            {item.txt}
                          </Typography>
                        </CardContent>
                      </Paper>
                  </Grid>
                  )
                            
                })}
              </Grid>
            </Grid>
          </Grid>
       
        </Box>
      </Container>
    </React.Fragment>
  ); 
}              

export default SectionComments



