

/*
 * ----------------------------------------------------------------------
 *                          Components & Functions                      |
 * ----------------------------------------------------------------------
 */

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Button } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import MenuIcon from '@mui/icons-material/Menu';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

import {Pages} from '../../Data'
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
import './NavBar.scss'
import styles from './../../Assets/Styles/style.module.scss'
/*
 * ----------------------------------------------------------------------
 *                                Images                                |
 * ----------------------------------------------------------------------
 */
let easing = [0.6,-0.05,0.01,0.99];
const stagger = {
  animate:{
    transition:{
      delayChildren:0.4,
      staggerChildren:0.2,
      staggerDirection:1
    }
  }
}



const transition = {duration:1.4,ease:[0.6,0.01,-0.05,0.9]};



const header={
  initial:{
    y:-60,
    opacity:0,
    transition:{duration:0.05, ease:easing}
  },
  animate:{
    y:0,
    opacity:1,
    animation:{
      duration:0.6,
      ease:easing
    }
  }
};
function NavBar(props) {
  /* --------------------------------------------------------------------
   *                           Constants                                |
   * --------------------------------------------------------------------
   */
  const drawerWidth = 240;
  /* --------------------------------------------------------------------
   *                               Props                                |
   * --------------------------------------------------------------------
   */
  const { window } = props;
  /*--------------------------------------------------------------------
  *                                 Data                               |
  * --------------------------------------------------------------------
  */
  const pages=Pages.PagesArray

  /* --------------------------------------------------------------------
   *                              Hooks & States                        |
   * --------------------------------------------------------------------
   */

  const navigate=useNavigate()
  const [mobileOpen, setMobileOpen] = React.useState(false);

  /* --------------------------------------------------------------------
   *                             Functions                              |
   * --------------------------------------------------------------------
   */

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const signUpClickHandle = ()=>{
    navigate("/SignUp")
  }
  const signInClickHandle = ()=>{
    navigate("/SignIn")
  }
  
  /* --------------------------------------------------------------------
   *                            Effect Hooks                            |
   * --------------------------------------------------------------------
   */

  /* --------------------------------------------------------------------
   *                                 JSX                                |
   * --------------------------------------------------------------------
   */
  
  const container = window !== undefined ? () => window().document.body : undefined;

  

  const drawer = (
    <Box 
      className='DrawerBox' 
      onClick={handleDrawerToggle}
      sx={{ textAlign: 'center' }}
    >
      <Typography
        variant="h6" 
        sx={{ my: 2 }}
        >
        Isimmmooc
      </Typography>
      <Divider />
      <List className='DrawerList'>
        {pages.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem  >
          <Button 
          variant='text' 
          sx={{
            backgroundColor:'#fff',
            color:styles.SecondaryColor,
            "&:hover" : {
              backgroundColor : styles.SecondaryColor,
              color: '#fff'  ,
            },
            width:'100%'
          }}
          >
            Log in
          </Button>
                 
        </ListItem>
        <ListItem>
        <Button
        variant='text' 
        sx={{
          backgroundColor:'#fff',
          color:styles.SecondaryColor,
          "&:hover" : {
            backgroundColor : styles.SecondaryColor,
            color: '#fff'  ,
          },
          width:'100%'
        }}
        onClick={signUpClickHandle}
        >
          Sign up
        </Button>

        </ListItem>
      </List>
    </Box>
  );

  return (
    <AppBar 
      position="fixed" 
      className='NavBar'
      component={motion.div}
      initial='initial'
      animate='animate'
    >
        <Container 
          maxWidth="xl"
          component={motion.header}
          variants={stagger}
        >
            <Toolbar disableGutters>
            <IconButton
                sx={{ mr: 2, display: { xs: 'block', sm: 'none' } }}
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                >
                <MenuIcon />
            </IconButton>
            <Typography
                variant="h6"
                noWrap
                component={motion.div}
                variants={header}
                href="/"
                sx={{
                mr: 2,
                display: { xs: 'none', sm: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
                }}
            >
                Isimmmooc
            </Typography>
              {/* Draxer Box*/}
            <Box component="nav">
                <Drawer
                container={container}
                variant='temporary'
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                    display: { xs: 'block', sm: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
                >
                {drawer}
                </Drawer>
            </Box>
            {/* ////////////////////////////////////// */}
            {/* Title display on resize */}
            <Typography
                variant="h5"
                noWrap
                component={motion.div}
                variants={header}
                href=""
                sx={{
                mr: 2,
                display: { xs: 'flex', sm: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
                }}
            >
                Isimmmooc
            </Typography>
            {/* ////////////////////////////////////// */}
            {/* Pages List */}
            <Box 
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex' }}}
              component={motion.div}
              variants={stagger}
            >
                {pages.map((page,index) => (
                <Button
                  key={index}
                  sx={{ mx:1,my: 2, color: 'white', display: 'block', }}
                  component={motion.span}
                  variants={header}
                >
                  {page}
                </Button>
                    
                
                ))}
            </Box>
            {/* ////////////////////////////////////// */}
            {/* Authentifation Buttons */}
            <Box 
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex' }, justifyContent:'flex-end'} }
              component={motion.div}
              variants={stagger}
            >
                
                <Button
                  variant='text' 
                  sx={{
                    backgroundColor:'transparent',
                    color:'#fff',
                    my: 2 , 
                    mx:2
                  }}
                  onClick={signInClickHandle}
                  component={motion.span}
                  variants={header}
                >
                  Log in
                </Button>
                 
                <Button 
                  variant='contained'
                  sx={{
                    backgroundColor:'#fff',
                    color:styles.SecondaryColor,
                    "&:hover" : {
                      backgroundColor : styles.SecondaryColor,
                      color: '#fff'  ,
                    },
                    my: 2, 
                    borderRadius : '3px'
                  }}
                  onClick={signUpClickHandle}
                  component={motion.span}
                  variants={header}
                >
                  Sign up
                </Button >
                
            
            </Box>
            {/* ////////////////////////////////////// */}
            </Toolbar>
        </Container>
        </AppBar>
  );
}
export default NavBar;