

/*
 * ----------------------------------------------------------------------
 *                          Components & Functions                      |
 * ----------------------------------------------------------------------
 */

import React from "react";
import { Link } from "react-router-dom";


import { Grid,Container } from "@mui/material";

import {Typography} from "@mui/material";

import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import HomeIcon from "@material-ui/icons/Home";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailIcon from '@mui/icons-material/Mail';
import LanguageIcon from '@mui/icons-material/Language';

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
import './Footer.scss'

/*
 * ----------------------------------------------------------------------
 *                                Images                                |
 * ----------------------------------------------------------------------
 */

const Footer = (props) => {

  /* --------------------------------------------------------------------
   *                           Constants                                |
   * --------------------------------------------------------------------
   */

  /* --------------------------------------------------------------------
   *                               Props                                |
   * --------------------------------------------------------------------
   */
  const {setValue, setSelectedIndex}=props

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
    <footer className='Footer'>
      <Container>
        <div className='CopyRightContainer'>
          <a href="/" className='CopyRight'>
            Isimmmooc
          </a>
          <p style={{
            color: '#fff',
            justify:'center',
            fontSize:15,
            fontFamily:'Arial',
          }}>A best and cheapest way of getting know learning.</p>
        </div>

        <Grid
          container
          direction={{xs:'column',sm:'column', md: 'column',lg:'row'}}
          className='FooterContainer'
        >
          <Grid item className='GridItem'>
            <Grid container direction="column" spacing={3}>
              <h4
                item
                className='FooterLink'
              >
                About Us
              </h4>
              <Grid
                item
                className='FooterLink'
                component={Link}
                to="/"
                onClick={() => {
                  setValue(1);
                  setSelectedIndex(1);
                }}
              >
                Home
              </Grid>
              <Grid
                item
                className='FooterLink'
                component={Link}
                to="/"
                onClick={() => {
                  setValue(1);
                  setSelectedIndex(2);
                }}
              >
              About
              </Grid>
              <Grid
                item
                className='FooterLink'
                component={Link}
                to="/SignIn"
                onClick={() => {
                  setValue(1);
                  setSelectedIndex(3);
                }}
              >
                Courses
              </Grid> 
            </Grid>
          </Grid>
          <Grid item className='GridItem'>
              <Grid container direction="column" spacing={3}>
                <h4
                  item
                  className='FooterLink'
                  
                >
                  Helpful Links
                </h4>
                <Grid
                  item
                  className='FooterLink'
                  component={'a'}
                  href="#Teachers"
                  onClick={() => setValue(2)}
                >
                  Teachers
                </Grid>
                <Grid
                  item
                  className='FooterLink'
                  component={'a'}
                  href="#Students"
                  onClick={() => setValue(2)}
                >
                  Students
                </Grid>
              </Grid>
            </Grid>
            <Grid item className='GridItem'>
              <Grid container direction="column" spacing={3}>
                <h4
                  item
                  className='FooterLink'
                >
                  Contact Us
                </h4>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  
                }}>
                  <LocationOnIcon className='FooterIcon'/>
                  <span style={{
                  color: '#fff',              
                  }}>20 Avenue de la Corniche, Monastir, Tunisia, 5000</span>
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                }}>
                  <MailIcon className='FooterIcon'/>
                  <span style={{
                  color: '#fff',              
                  }}>isimm@isimm.u-monastir.tn</span>
                </div>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                }}>
                  <LocalPhoneIcon className='FooterIcon'/>
                  <span style={{
                  color: '#fff',              
                  }}>73 464 167</span>
                </div>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                }}>
                  <LanguageIcon className='FooterIcon'/>
                  <a href="http://www.isimm.rnu.tn/" target="_blank" style={{
                  color: '#fff',              
                  }}>http://www.isimm.rnu.tn/</a>
                </div>          
              </Grid>
            </Grid> 
          </Grid>  
        <Grid container direction="column">
          <Grid container justifyContent="space-between">
              <Grid
                item
                
                target="_blank"
                rel="noreferrer noopener"
              >
                <Typography className='CopyLight'>
                &copy; Copyright Isimmmooc,Inc {new Date().getFullYear()} 
                </Typography>
              </Grid>
              <Grid>
              <Grid
                item
                component={"a"}
                target="_blank"
                href="http://www.isimm.rnu.tn/"
              >
                <HomeIcon className='FooterIcon' />
              </Grid>
              <Grid
                item
                component={"a"}
                target="_blank"
                href="https://www.facebook.com/profile.php?id=100063489403806"
              >
                <FacebookIcon  className='FooterIcon' />
              </Grid>
              <Grid
                item
                component={"a"}
                target="_blank"
                rel="noreferrer noopener"
                href="https://www.facebook.com/profile.php?id=100063489403806"
              >
                <InstagramIcon className='FooterIcon' />
              </Grid>
              <Grid
                item
                component={"a"}
                target="_blank"
                rel="noreferrer noopener"
                href="https://www.facebook.com/profile.php?id=100063489403806"
              >
                <GitHubIcon className='FooterIcon' />
              </Grid>
 
            </Grid>  
          </Grid> 
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;