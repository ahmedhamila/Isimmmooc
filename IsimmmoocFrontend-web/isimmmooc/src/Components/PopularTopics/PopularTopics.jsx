

/*
 * ----------------------------------------------------------------------
 *                          Components & Functions                      |
 * ----------------------------------------------------------------------
 */

import React from 'react'
import { Grid } from '@mui/material'
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import ComputerIcon from '@mui/icons-material/Computer';
import StoreIcon from '@mui/icons-material/Store';
import VideocamIcon from '@mui/icons-material/Videocam';
import {Button} from '@mui/material';

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

import './PopularTopics.scss'

/*
 * ----------------------------------------------------------------------
 *                                Images                                |
 * ----------------------------------------------------------------------
 */

function PopularTopics() {

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
    <div className='PopularTopics'>
        <Grid
        container
        direction='column'
        alignItems='center'
        justifyContent='center'
        gap='25px'
        >
            <Grid 
            container
            direction='column'
            alignItems='center'
            justifyContent='center'
            className='PopularTopicsHeader'>
                <h5>Browse Categories</h5>
                <h2>Popular Topics to learn</h2>
                <p>A best and cheapest way of getting know learning to make a better tomorrow</p>
            </Grid>
            <Grid 
            container
            direction='row'
            alignItems='center'
            justifyContent='center'
            className='PopularTopicsCards'
            gap='25px'
            >
                <Grid
                    container
                    direction='column'
                    sx={{
                      width : '250px',
                      height : '175px'
                    }}
                    justifyContent='center'
                    alignItems='center'
                    className='PopularTopicsCardsItem'>
                      <div className='PopularTopicsCardsItemIcon' >
                        <DesignServicesIcon  sx={{ color: '#FF7468' }} fontSize='large'/>
                      </div>
                      <div>
                        <h2>Design Sector</h2>
                        <p>5 courses</p>
                      </div>
                </Grid>
                <Grid
                    container
                    direction='column'
                    sx={{
                      width : '250px',
                      height : '175px'
                    }}
                    justifyContent='center'
                    alignItems='center'
                    className='PopularTopicsCardsItem'>
                      <div className='PopularTopicsCardsItemIcon' >
                        <ComputerIcon sx={{ color: '#453D80' }} color='#453D80' fontSize='large'/>
                      </div>
                      <div>
                        <h2>Development Sector</h2>
                        <p>4 courses</p>
                      </div>
                </Grid>
                <Grid
                    container
                    direction='column'
                    sx={{
                      width : '250px',
                      height : '175px'
                    }}
                    justifyContent='center'
                    alignItems='center'
                    className='PopularTopicsCardsItem'>
                      <div className='PopularTopicsCardsItemIcon' >
                        <StoreIcon sx={{ color: '#06DE90' }}  fontSize='large'/>
                      </div>
                      <div>
                        <h2>Design Sector</h2>
                        <p>5 courses</p>
                      </div>
                </Grid>
                <Grid
                    container
                    direction='column'
                    sx={{
                      width : '250px',
                      height : '175px'
                    }}
                    justifyContent='center'
                    alignItems='center'
                    className='PopularTopicsCardsItem'>
                      <div className='PopularTopicsCardsItemIcon' >
                        <VideocamIcon sx={{ color: '#F5B70A' }} fontSize='large'/>
                      </div>
                      <div>
                        <h2>Development Sector</h2>
                        <p>4 courses</p>
                      </div>
                </Grid>
            </Grid>
            <Grid 
            container
            direction='column'
            alignItems='center'
            justifyContent='center'
            className='PopularTopicsButton'>
                <Button
                variant='text' 
                sx={{
                    backgroundColor:'#FF7468',
                    color:'#fff',
                    "&:hover" : {
                      backgroundColor : '#fff',
                      color: '#FF7468'  ,
                    }
                  }}
                size="large"
                >
                    Browse All 
                </Button> 
                
                
            </Grid>
        </Grid>
    </div>
  )
}

export default PopularTopics