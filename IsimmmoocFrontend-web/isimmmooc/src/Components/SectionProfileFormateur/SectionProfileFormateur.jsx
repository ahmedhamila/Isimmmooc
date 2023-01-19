

/*
 * ----------------------------------------------------------------------
 *                          Components & Functions                      |
 * ----------------------------------------------------------------------
 */


import {React,useState,useEffect} from 'react'
import {Grid,Avatar,Typography, Box,IconButton,Paper,CardMedia} from '@mui/material'
import { useSelector } from 'react-redux';
import reactNativeImg from '../../Assets/Images/reactNativeImg.jpg';
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
 import styles from './../../Assets/Styles/style.module.scss'

/*
 * ----------------------------------------------------------------------
 *                                Images                                |
 * ----------------------------------------------------------------------
 */

const SectionProfileFormateur = () => {

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
    const {firstName,lastName,email,phoneNumber,birthDay,cv,image}=useSelector((state)=>state.user)
    const [cvFile,setCvFile]=useState(null)
  /* --------------------------------------------------------------------
   *                             Functions                              |
   * --------------------------------------------------------------------
   */

    
  
  /* --------------------------------------------------------------------
   *                            Effect Hooks                            |
   * --------------------------------------------------------------------
   */
    useEffect(()=>{
        const getCV = async()=>{
            const response = await fetch(`http://127.0.0.1:8000/users/FormateurCV/${cv}`,{
            method:'GET',
            headers:{
              'Authorization': `Token ${localStorage.getItem("Token")}`
            }
            })
            if(response.ok)
            {
                const responsejson = await response.json()
                setCvFile(responsejson.cv)
            }
        }
        getCV()
        
        

        
    },[])

  /* --------------------------------------------------------------------
   *                                 JSX                                |
   * --------------------------------------------------------------------
   */

    return (
        <Grid  
            sx={{width:'80%',backgroundColor:'white',borderRadius:'15px',boxShadow:'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',padding:'20px',marginTop:'15px'}}
            container
            flexDirection='column'
            justifyContent='center'
            alignItems='center'
            gap='50px'
        >
            <Grid
                container
                flexDirection='row'
                justifyContent='flex-start'
                alignItems='center'
                flexWrap='nowrap'
                gap='25px'
            >
                <Grid
                    item    
                >
                    <Avatar src={image} sx={{width:75,height:75,bgcolor:'black' }} >M</Avatar>
                </Grid>
                <Grid
                    container   
                    flexDirection='column' 
                >
                    <Grid
                        item
                    >
                        <Typography variant='h6' sx={{fontWeight:'bold'}}>
                            {firstName + " " + lastName}
                        </Typography>
                    </Grid>
                    <Grid
                        item
                    >
                        <Typography variant='h7'>
                            {email}
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid
                container
                flexDirection='row'
                justifyContent='center'
                flexWrap={{sm:'wrap',md:'wrap',xl:'nowrap'}}
                gap='15px'
            >
                <Grid
                    container
                    flexDirection='column'
                    alignItems='center'
                    gap={{sm:'15px',md:'20px',xl:'75px'}}
                    borderRight={{sm:'',md:'',xl:'2px solid darkgrey'}}
                >
                    <Grid
                        item
                    >
                        <Typography variant='h6' sx={{fontWeight:'bold'}}>
                            Profile Information
                        </Typography>
                    </Grid>
                    <Grid
                        container
                        flexDirection='column'
                        justifyContent='center'
                        alignItems='center'
                        gap='25px'
                    >
                        <Grid
                            container
                            flexDirection='row'
                            alignItems='center'
                            justifyContent={{sm:'center',md:'center',xl:'flex-start'}}
                            gap='15px'
                        >
                            <Grid
                                item
                            >   
                                <Typography variant='h6' sx={{fontWeight:'bold'}}>
                                    Full Name  :
                                </Typography>
                            </Grid>
                            <Grid
                                item
                            >   
                                <Typography variant='h6' color='#A0A3B6'>
                                    {firstName +" "+lastName}
                                </Typography>
                            </Grid>
                            
                            
                        </Grid>
                        <Grid
                            container
                            flexDirection='row'
                            alignItems='center'
                            justifyContent={{sm:'center',md:'center',xl:'flex-start'}}
                            gap='15px'
                        >
                            <Grid
                                item
                            >   
                                <Typography variant='h6' sx={{fontWeight:'bold'}}>
                                    Phone   :
                                </Typography>
                            </Grid>
                            <Grid
                                item
                            >   
                                <Typography variant='h6' color='#A0A3B6'>
                                    {phoneNumber}
                                </Typography>
                            </Grid>
                            
                            
                        </Grid>
                        <Grid
                            container
                            flexDirection='row'
                            alignItems='center'
                            justifyContent={{sm:'center',md:'center',xl:'flex-start'}}
                            gap='15px'
                        >
                            <Grid
                                item
                            >   
                                <Typography variant='h6' sx={{fontWeight:'bold'}}>
                                    Birth Date   :
                                </Typography>
                            </Grid>
                            <Grid
                                item
                            >   
                                <Typography variant='h6' color='#A0A3B6'>
                                    {birthDay}
                                </Typography>
                            </Grid>
                            
                            
                        </Grid>
                        <Grid
                            container
                            flexDirection='row'
                            alignItems='center'
                            justifyContent={{sm:'center',md:'center',xl:'flex-start'}}
                            gap='15px'
                        >
                            <Grid
                                item
                            >   
                                <Typography variant='h6' sx={{fontWeight:'bold'}}>
                                    Email  :
                                </Typography>
                            </Grid>
                            <Grid
                                item
                            >   
                                <Typography variant='h6' color='#A0A3B6'>
                                    {email}
                                </Typography>
                            </Grid>
                            
                            
                        </Grid>
                    </Grid>
                    
                    
                </Grid>
                <Grid
                    container
                    flexDirection='column'
                    alignItems='center'
                >
                    <Grid>
                        <Typography variant='h6' sx={{fontWeight:'bold'}}>
                            CV
                        </Typography>
                    </Grid>
                    <Grid>
                        <Box component='img' src={cvFile} sx={{ height: "100%", width: "250px" }} ></Box>
                    </Grid>
                    
                </Grid>
            </Grid>
        </Grid>
    )
  }
  
  export default SectionProfileFormateur