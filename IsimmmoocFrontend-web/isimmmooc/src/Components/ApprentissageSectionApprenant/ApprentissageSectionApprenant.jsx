

/*
 * ----------------------------------------------------------------------
 *                          Components & Functions                      |
 * ----------------------------------------------------------------------
 */

import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import {Box,Grid} from '@mui/material';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
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
import './ApprentissageSectionApprenant.scss'

/*
 * ----------------------------------------------------------------------
 *                                Images                                |
 * ----------------------------------------------------------------------
 */
import playVedioImg from '../../Assets/Images/playVedio.png';
function ApprentissageSectionApprenant() {

  /* --------------------------------------------------------------------
   *                           Constants                                |
   * --------------------------------------------------------------------
   */
  const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  });
  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor:'#6159a2',
    },
  }));
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
      <CssBaseline />
      <Container maxWidth='false' >
        <Box sx={{height: '50vh',  maxWidth:'100%',flexDirection: 'column'}} >
          <Grid classeName='textContainer' item>
            <h1 color='#1C1D1F' fontFamily=' Georgia'>Commençons notre apprentissage,<br/>
              yosomran@Gmail.Com
            </h1>
            <a className='link1'><span>Mon apprentissage</span></a>
            <br />
            <br />
          </Grid>
          <Grid sx={{ flexGrow: 1 }} container spacing={2}>
          <Grid item xs={12}>
          <Grid container spacing={3} flexDirection='row'>
          {[0, 1, 2].map((value) => (
            <Grid key={value} item>
              <Paper
                sx={{
                  cursor: 'pointer',
                  border:0.1,
                  borderColor:'#8d8e8f',
                  borderRadius:'0px',
                  boxShadow:0 ,
                  p: 2,
                  margin: 'auto',
                  width:420,
                  maxHeight:150,
                  flexGrow: 1,
                  backgroundColor: (theme) =>
                    theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                }}
              >

                <Grid container spacing={2}>
                  <Grid item >
                    <ButtonBase sx={{ width: 128, height:'100%',borderRight:1,borderColor:'#8d8e8f', }}>
                      <Img alt="complex" src={playVedioImg} />
                    </ButtonBase>
                  </Grid>
                  <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                      <Grid item xs>
                        <Typography gutterBottom variant="subtitle1" component="div" fontWeight='bold' color='#999d9f' fontSize='12px'>
                          React Native 
                        </Typography>
                        <Typography variant="body2" gutterBottom fontWeight='bold' fontSize='20px'>
                          15.Components
                        </Typography>
                      </Grid>
                      <Grid item  xs container direction="row">
                        <Typography variant="body2" color='#999d9f' fontWeight='bold' fontSize='14px'>
                          Session.
                        </Typography>
                        <Typography variant="body2" color='#999d9f' fontSize='12px'>
                          Il reste 17 min
                        </Typography>
                      </Grid>
                      <BorderLinearProgress variant="determinate" value={40} />
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          ))}
          </Grid>
          </Grid>
          </Grid>
        </Box>
      </Container>
    </React.Fragment>
  )
}

export default ApprentissageSectionApprenant