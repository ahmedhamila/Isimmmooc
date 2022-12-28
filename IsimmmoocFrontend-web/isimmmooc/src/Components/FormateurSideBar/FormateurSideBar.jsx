

/*
 * ----------------------------------------------------------------------
 *                          Components & Functions                      |
 * ----------------------------------------------------------------------
 */

import React, { Fragment } from 'react';
import { useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import {Box,Grid,List,Typography,Divider,IconButton,InputBase,Tooltip,Avatar,Menu,MenuItem,Button} from '@mui/material'
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import SearchIcon from '@mui/icons-material/Search';

import avatarImage from './../../Assets/Images/2.jpg'


import './FormateurSideBar.scss';
import styles from './../../Assets/Styles/style.module.scss'

    const drawerWidth = 240;
    const settings = ['Profile', 'Account', 'Sign Out'];
    const tabs = ['Dashboard','Courses','Your Organisme','Maybe Something','Maybe Something else']

  
    const openedMixin = (theme) => ({
        width: drawerWidth,
        transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
        }),
        overflowX: 'hidden',
    });
  
    const closedMixin = (theme) => ({
        transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: `calc(${theme.spacing(7)} + 1px)`,
        [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
        },
    });
  
    const DrawerHeader = styled('div')(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        
    }));
  
    const AppBar = styled(MuiAppBar, {
        shouldForwardProp: (prop) => prop !== 'open',
    })(({ theme, open }) => ({
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
        }),
        ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
        }),
    }));
  
    const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
        ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
        }),
    );



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
    

/*
 * ----------------------------------------------------------------------
 *                                Images                                |
 * ----------------------------------------------------------------------
 */

function FormateurSideBar() {

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
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [forceClose,setForceClose]= useState(false)
  /* --------------------------------------------------------------------
   *                             Functions                              |
   * --------------------------------------------------------------------
   */

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [anchorElUser, setAnchorElUser] = useState(null);
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  
  /* --------------------------------------------------------------------
   *                            Effect Hooks                            |
   * --------------------------------------------------------------------
   */


  /* --------------------------------------------------------------------
   *                                 JSX                                |
   * --------------------------------------------------------------------
   */
  return (
    <Box sx={{ display: 'flex' }}>
      
        <AppBar 
            position="fixed" 
            sx={{
                backgroundColor:styles.PrimaryColorDark,
                color:'#fff',
                paddingRight:'25px'
            }}
            open={open}
        >
            <Grid
                container
                flexDirection='row'
                wrap='nowrap'
            >
                <Grid
                    container
                    flexDirection='row'
                    wrap='nowrap'
                    sx={{width:'fit-content'}}
                >
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{
                        marginLeft: 5,
                        ...(open && { display: 'none' }),
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                </Grid>
                <Grid
                    container
                    flexDirection='row'
                    wrap='nowrap'
                    justifyContent='space-between'
                >
                    <Grid
                        container
                        flexDirection='row'
                        sx={{width:'fit-content',paddingY:'15px'}}

                    >
                        <InputBase sx={{ ml: 2, flex: 1, color:"black",backgroundColor:'#fff',borderRadius:'5px' }} placeholder="Search" />
                        <IconButton type="button" sx={{ p: 1,color:"#fff" }}>
                            <SearchIcon />
                        </IconButton>
                    </Grid>
                    <Grid
                        container
                        flexDirection='row'
                        justifyContent='flex-start'
                        alignItems='center'
                        wrap='nowrap'
                        sx={{width:'fit-content'}}
                        gap='5px'
                    >
                        <Button 
                                variant='text'
                                sx={{
                                color:styles.PrimaryColorDark,
                                backgroundColor:"#fff",
                                "&:hover" : {
                                    color:'#fff',
                                    backgroundColor:styles.SecondaryColorDark,
                                },
                                my: 2, 
                                mx:1,
                                borderRadius : '3px',
                                flexWrap:'nowrap'
                                }}
                            //onClick={}
                            >
                                Add new course
                        </Button>
                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Open settings">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    <Avatar alt="Remy Sharp" src={avatarImage} />
                                </IconButton>
                            </Tooltip>
                            <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                            >
                                {settings.map((setting) => (
                                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center">{setting}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
        </AppBar>
      <Drawer 
        variant="permanent" 
        open={open}
      >
        <DrawerHeader
            
        sx={{backgroundColor:styles.PrimaryColorDark,color:'#fff',textAlign:"center",justifyContent:'space-between',paddingLeft:'15px',paddingTop:'6.5px'}}
        >
            <Typography>
                Isimmmooc
            </Typography>
            <IconButton onClick={handleDrawerClose}>
                {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon sx={{color:'#fff'}}/>}
            </IconButton>
        </DrawerHeader>
        <Divider />
        
          
            <List 
                sx={{backgroundColor:styles.PrimaryColorDark,color:'#fff',height:'100%'}}
            >
              <Grid
                flexDirection='column'
                justifyContent='space-between'
                sx={{height:'100%'}}
                container
              >
                <Grid
                  flexDirection='column'
                  gap='10px'
                  container
                >
              {tabs.map((text, index) => (
                <Fragment>
                  <ListItem key={text} disablePadding sx={{ display: 'block' }}>
                    <ListItemButton
                      sx={{
                        minHeight: 48,
                        justifyContent: open ? 'initial' : 'center',
                        px: 2.5,
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : 'auto',
                          justifyContent: 'center',
                          color:"#fff"
                        }}
                      >
                        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                      </ListItemIcon>
                      <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                    </ListItemButton>
                  </ListItem>     
                  {(index === (Math.floor(tabs.length/2)))?<Divider sx={{color:'#fff',backgroundColor:'#fff'}} />:<></>}
                </Fragment>
                
                
              ))}
              </Grid>
              <Grid
            flexDirection='column'
            container
          >
            <Button 
              variant='text'
              sx={{
              color:styles.PrimaryColorDark,
              backgroundColor:"#fff",
              "&:hover" : {
                  color:'#fff',
                  backgroundColor:styles.SecondaryColorDark,
              },
              my: 2, 
              mx:1,
              borderRadius : '3px',
              flexWrap:'nowrap'
              }}
              //onClick={}
            >
              {open?'Sign Out':<ChevronLeftIcon />}
            </Button>
          </Grid>
              </Grid>
            </List>
        
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Typography >
          Main Content
        </Typography>
      </Box>
    </Box>
  );
}



export default FormateurSideBar;