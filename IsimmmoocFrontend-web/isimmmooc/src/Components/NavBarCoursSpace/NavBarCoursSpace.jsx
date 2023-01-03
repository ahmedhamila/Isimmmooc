

/*
 * ----------------------------------------------------------------------
 *                          Components & Functions                      |
 * ----------------------------------------------------------------------
 */

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MoreIcon from '@mui/icons-material/MoreVert';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import Avatar from '@mui/material/Avatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { useNavigate } from "react-router-dom";
import ComputerIcon from '@mui/icons-material/Computer';
import Rating from '@mui/material/Rating';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

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
import './NavBarCoursSpace.scss'

/*
 * ----------------------------------------------------------------------
 *                                Images                                |
 * ----------------------------------------------------------------------
 */

 export default function NavBarCoursSpace() {

  /* --------------------------------------------------------------------
   *                           Constants                                |
   * --------------------------------------------------------------------
   */
  const navigate=useNavigate()
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [value, setValue] = React.useState(2);
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

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const ProfileClickHandle = ()=>{
    navigate("/ApprenantHomeSpace/ModifierAcount")
  }
  const MonApprentissageClickHandle = ()=>{
    navigate("/ApprenantHomeSpace/MonApprentissage")
  }
  const handleSignOut=()=> {
    localStorage.removeItem("Token")
    navigate(0);
}

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      id={menuId}
      keepMounted
      open={isMenuOpen}
      onClose={handleMenuClose}
      PaperProps={{
        elevation: 0,
        sx: {
          overflow: 'visible',
          filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
          mt: 1.5,
          '& .MuiAvatar-root': {
            width: 32,
            height: 32,
            ml: -0.5,
            mr: 1,
          },
          '&:before': {
            content: '""',
            display: 'block',
            position: 'absolute',
            top: 0,
            right: 14,
            width: 10,
            height: 10,
            bgcolor: 'background.paper',
            transform: 'translateY(-50%) rotate(45deg)',
            zIndex: 0,
          },
        },
      }}
      transformOrigin={{ horizontal: 'right', vertical: 'top' }}
      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
    >
        <MenuItem onClick={ProfileClickHandle}>
            <Avatar /> Yosomran@Gmail.com
            </MenuItem>
            <Divider />
            <MenuItem onClick={MonApprentissageClickHandle}>
            <ListItemIcon>
                <ComputerIcon fontSize="small" />
            </ListItemIcon>
            Mon apprentissage
            </MenuItem>
            <MenuItem onClick={ProfileClickHandle}>
            <ListItemIcon>
                <Settings fontSize="small" />
            </ListItemIcon>
            Modifier compte 
            </MenuItem>
            <MenuItem onClick={handleSignOut}>
            <ListItemIcon>
                <Logout fontSize="small" />
            </ListItemIcon>
            Logout
        </MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={MonApprentissageClickHandle}>
        <IconButton size="large" color="inherit">
          <ComputerIcon fontSize="small" />
        </IconButton>
        <p>Mon apprentissage</p>
      </MenuItem>
      <MenuItem onClick={ProfileClickHandle}>
        <IconButton
          size="large"
          color="inherit"
        >
          <Settings fontSize="small" />
        </IconButton>
        <p>Modifier compte</p>
      </MenuItem>
      <MenuItem onClick={handleSignOut}>
        <IconButton
          size="large"
          aria-haspopup="true"
          color="inherit"
        >
          <Logout fontSize="small" />           
        </IconButton>
        <p>Logout</p>
      </MenuItem>
    </Menu>
  );

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className='AppBarStyle'>
        <Toolbar>
          <Grid container flex-direction='row' > 
            <Typography
            noWrap
            variant="h6"
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' },marginRight:'2%',fontWeight:'bold' }}
            >
            Isimmmooc   
            </Typography>
            <Typography
            noWrap
            variant="p"
            component="div"
            sx={{ display:'flex',fontFamily:'sf pro text', fontSize:'30px',textAlign:'center' }}
            >
            React Native for beginner   
            </Typography>
          </Grid> 
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit" onClick={handleClickOpen}>
              <StarOutlineIcon />
              <Typography>
                Votre Note
              </Typography>
            </IconButton>  
            <Dialog
            open={open}
            onClose={handleClose}
            >
              <DialogTitle sx={{textAlign:'center',fontWeight:'bold',fontSize:'26px',color:'#1C1F1D'}}>
                Quelle note attribueriez-vous à ce cours ?
              </DialogTitle>
              <DialogTitle sx={{textAlign:'center',color:'#1C1F1D',fontWeight:'bold'}}>
                Sélectionnez une note
              </DialogTitle>
              <DialogContent sx={{marginLeft: 'auto', marginRight: 'auto'}}>
              <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
               />
              </DialogContent>
            </Dialog>
        
            <IconButton
              size="small"
              edge="end"
              sx={{ ml: 2 }}
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
             <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  )
}

