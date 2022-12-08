import React from 'react'
import {Box,Grid} from '@mui/material'
import bigImage from '../../Assets/Images/isimmmooc-Hero-Image-Big.png';
import mediumImage from '../../Assets/Images/isimmmooc-Hero-Image-Medium.png';
import smallImage from '../../Assets/Images/isimmmooc-Hero-Image-Small.png';
import DesktopMacOutlinedIcon from '@mui/icons-material/DesktopMacOutlined';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';
import NoteAddOutlinedIcon from '@mui/icons-material/NoteAddOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import ThemedButton from '../Buttons/ThemedButton/ThemedButton';
import { useState,useEffect } from 'react';
import './HeroSection.scss'
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
function HeroSection() {

  const imageUrl = useWindowWidth()
  return (
    <Box>
      <Box paddingTop='75px' className='HeroSectionTopPart' >
        <Grid container rowSpacing={1} >
          <Grid 
          direction='column' 
          alignItems='center'
          justifyContent='center'
          container
          className='HeroContent' 
          xs={6}>
            <div >
              <h2>
                Anytime Anywhere learn on your suitable schedule
              </h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum voluptates quod dolorem aut voluptatum rerum, 
                maiores eaque ipsa atque dolorum iusto perferendis est laboriosam qui itaque cupiditate. Obcaecati, perferendis unde?
              </p>
            </div>
          </Grid>
          <Grid className='HeroImage' item xs={6} style={{backgroundImage: `url(${imageUrl})` }}>
            
          </Grid>
        </Grid>
          
          
      </Box>

      <Box paddingTop='75px' className='HeroSectionBottomPart' >
        <Grid container rowSpacing={1} >
          
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
              justifyContent='space-between'
              gap="15px"
              padding={'25px'} 
              spacing={{  md: 3 }} 
              columns={{ sm: 4, md: 12 }}>
                  <Grid 
                  container
                  direction={{sm:'column',md:'row' ,xl:"row" }}
                  alignItems='center'
                  justifyContent='space-evenly'>
                    <Grid
                    container
                    direction={{sm:'column',md:'row'  }}
                    gap={{sm:'0px',md:'20px',xl:'20px'}}
                    sx={{
                      width : {sm:'175px',md:'250px',xl:'325px'},
                      height : {sm:'fit-content',md:'fit-content',lg:'fit-content',xl:'175px'}
                    }}
                    className='Item'
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
                      width : {sm:'175px',md:'250px',xl:'325px'},
                      height : {sm:'fit-content',md:'fit-content',lg:'fit-content',xl:'175px'}
                    }}
                    className='Item'>
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
                  direction={{sm:'column',md:'row' ,xl:"row" }}
                  alignItems='center'
                  justifyContent='space-evenly'>
                    <Grid
                    container
                    direction={{sm:'column',md:'row'  }}
                    gap={{sm:'0px',md:'20px',xl:'20px'}}
                    sx={{
                      width : {sm:'175px',md:'250px',xl:'325px'},
                      height : {sm:'fit-content',md:'fit-content',lg:'fit-content',xl:'175px'}
                    }}
                    className='Item'
                    >
                      <div className='ItemIcon' style={{backgroundColor:"#F5B70A",borderColor:"#F5B70A",color:"#FFF6DD"}}>
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
                      width : {sm:'175px',md:'250px',xl:'325px'},
                      height : {sm:'fit-content',md:'fit-content',lg:'fit-content',xl:'175px'}
                    }}
                    className='Item'>
                      <div className='ItemIcon' style={{backgroundColor:"#06DE90",borderColor:"#06DE90",color:"#EDF8F4"}}>
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
              >
                <h2>
                  Start your journey today
                </h2>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                </p>
                <ThemedButton 
                variant='text' 
                value='Sign up'
                sx={{}}
                theme='ThemeSecondaryFilled'
                size="large"
                />
              </Grid>
            </Grid>
        </Grid>
          
          
      </Box>
    </Box>
    
  )
}

export default HeroSection