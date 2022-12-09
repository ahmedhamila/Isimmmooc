import React from "react";
import { Link } from "react-router-dom";

//make styles
import { makeStyles, useTheme, createTheme } from "@material-ui/core/styles";

import Container from "@material-ui/core/Container";

//grid
import Grid from "@material-ui/core/Grid";

//mediaquery
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Typography from '@material-ui/core/Typography';
//sns icon
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import HomeIcon from "@material-ui/icons/Home";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailIcon from '@mui/icons-material/Mail';
import LanguageIcon from '@mui/icons-material/Language';

const useStyles = makeStyles((theme) => ({
  footer: {
    background: 'rgb(2,0,36)',
    background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(69,61,128,1) 50%, rgba(255,116,104,1) 100%)',
    width: `100%`,
    position: "relative",
    overflow: "hidden",
    zIndex: 1302,
    padding: "20px 0",
    justifyContent: 'space-between',
  },
  footerContainer: {
    position: "relative",
    zIndex: 10,
    justifyContent: 'space-between',
  },
  footerLink: {
    textDecoration: "none",
    color: "#fff",

  },
  gridItem: {
    margin: "2.25em",
    [theme.breakpoints.down("sm")]: {
      margin: "0.5em",
    },
  },
  snsIcon: {
    width: "40px",
    height: "40px",
    color: "white",
    margin: "10px",
    [theme.breakpoints.down("xs")]: {
      width: "30px",
      height: "30px",
    },
  },
  copyRightContainer: {
    position: "relative",
    zIndex: 50,
    margin: "30px 10px ",
  },
  copyRight: {
    color: "#fff",
    textDecoration: "none",
    fontSize: 30,
    fontFamily:"Impact",
  },
  copylight:{
    color: "#fff",
    textDecoration: "none",
    fontSize: 15,
    fontFamily:"Arial",
    textAlign:"center",
    
    marginTop:50,
  },
}));

const Footer = ({ setValue, setSelectedIndex }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <div className={classes.copyRightContainer}>
          <a href="#" className={classes.copyRight}>
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
          direction={matchesSM ? "column" : "row"}
          justify="center"
          className={classes.footerContainer}
        >
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={3}>
              <h4
                item
                className={classes.footerLink}
              >
                About Us
              </h4>
              <Grid
                item
                className={classes.footerLink}
                component={Link}
                to="/custom-software"
                onClick={() => {
                  setValue(1);
                  setSelectedIndex(1);
                }}
              >
                Home
              </Grid>
              <Grid
                item
                className={classes.footerLink}
                component={Link}
                to="/mobile-apps"
                onClick={() => {
                  setValue(1);
                  setSelectedIndex(2);
                }}
              >
              About
              </Grid>
              <Grid
                item
                className={classes.footerLink}
                component={Link}
                to="/web-sites"
                onClick={() => {
                  setValue(1);
                  setSelectedIndex(3);
                }}
              >
                Courses
              </Grid> 
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
              <Grid container direction="column" spacing={3}>
                <h4
                  item
                  className={classes.footerLink}
                  
                >
                  Helpful Links
                </h4>
                <Grid
                  item
                  className={classes.footerLink}
                  component={Link}
                  to="/revolution"
                  onClick={() => setValue(2)}
                >
                  Teachers
                </Grid>
                <Grid
                  item
                  className={classes.footerLink}
                  component={Link}
                  to="/revolution"
                  onClick={() => setValue(2)}
                >
                  Students
                </Grid>
                <Grid
                  item
                  className={classes.footerLink}
                  component={Link}
                  to="/revolution"
                  onClick={() => setValue(2)}
                >
                  Organizmes
                </Grid>
              </Grid>
            </Grid>
            <Grid item className={classes.gridItem}>
              <Grid container direction="column" spacing={3}>
                <h4
                  item
                  className={classes.footerLink}
                >
                  Contact Us
                </h4>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  
                }}>
                  <LocationOnIcon className={classes.snsIcon}/>
                  <span style={{
                  color: '#fff',              
                  }}>20 Avenue de la Corniche, Monastir, Tunisia, 5000</span>
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                }}>
                  <MailIcon className={classes.snsIcon}/>
                  <span style={{
                  color: '#fff',              
                  }}>isimm@isimm.u-monastir.tn</span>
                </div>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                }}>
                  <LocalPhoneIcon className={classes.snsIcon}/>
                  <span style={{
                  color: '#fff',              
                  }}>73 464 167</span>
                </div>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                }}>
                  <LanguageIcon className={classes.snsIcon}/>
                  <Link to="http://www.isimm.rnu.tn/" style={{
                  color: '#fff',              
                  }}>http://www.isimm.rnu.tn/</Link>
                </div>          
              </Grid>
            </Grid> 
          </Grid>  
        <Grid container direction="column">
          <Grid container justify="space-between">
              <Grid
                item
                component={"a"}
                target="_blank"
                rel="noreferrer noopener"
              >
                <Typography className={classes.copylight}>
                &copy;Copyright Isimmmooc {new Date().getFullYear()} 
                </Typography>
              </Grid>
              <Grid>
              <Grid
                item
                component={"a"}
                target="_blank"
                rel="noreferrer noopener"
                href="https://satoruakiyama.com"
              >
                <HomeIcon className={classes.snsIcon} />
              </Grid>
              <Grid
                item
                component={"a"}
                target="_blank"
                rel="noreferrer noopener"
                href="https://www.facebook.com/satoruakiyama1998"
              >
                <FacebookIcon className={classes.snsIcon} />
              </Grid>
              <Grid
                item
                component={"a"}
                target="_blank"
                rel="noreferrer noopener"
                href="https://www.instagram.com/developer_satoru_akiyama/"
              >
                <InstagramIcon className={classes.snsIcon} />
              </Grid>
              <Grid
                item
                component={"a"}
                target="_blank"
                rel="noreferrer noopener"
                href="https://github.com/SatoruAkiyama/material-ui-header-and-footer/"
              >
                <GitHubIcon className={classes.snsIcon} />
              </Grid>
 
            </Grid>  
          </Grid> 
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;