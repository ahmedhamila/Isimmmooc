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

import './NavBar.scss'

const drawerWidth = 240;

function NavBar(props) {
  const { window } = props;
  const pages=Pages.PagesArray
  const navigate=useNavigate()
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const container = window !== undefined ? () => window().document.body : undefined;

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const signUpClickHandle = ()=>{
    console.log("eeeeeeee")
    navigate("/SignUp")
  }

  const drawer = (
    <Box className='DrawerBox' onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
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
            color:'#FF7468',
            "&:hover" : {
              backgroundColor : '#FF7468',
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
          color:'#FF7468',
          "&:hover" : {
            backgroundColor : '#FF7468',
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
    <AppBar position="fixed" className='NavBar'>
        <Container maxWidth="xl">
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
                component="a"
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
                component="a"
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
            <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex' }}}>
                {pages.map((page,index) => (
                <Button
                key={index}
                sx={{ mx:1,my: 2, color: 'white', display: 'block', }}
                >
                  {page}
                </Button>
                    
                
                ))}
            </Box>
            {/* ////////////////////////////////////// */}
            {/* Authentifation Buttons */}
            <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex' }, justifyContent:'flex-end'} }>
                
                <Button
                variant='text' 
                sx={{
                  backgroundColor:'transparent',
                  color:'#fff',
                  my: 2 , 
                  mx:2
                }}
                >
                  Log in
                </Button>
                 
                <Button 
                variant='contained'
                sx={{
                  backgroundColor:'#fff',
                  color:'#FF7468',
                  "&:hover" : {
                    backgroundColor : '#FF7468',
                    color: '#fff'  ,
                  },
                  my: 2, 
                  borderRadius : '3px'
                }}
                onClick={signUpClickHandle}
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