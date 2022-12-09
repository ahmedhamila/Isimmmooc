import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { makeStyles, useTheme, createTheme } from "@material-ui/core/styles";
import Paper from '@mui/material/Paper';

import './SectionComments.scss'

const useStyles = makeStyles((theme) => ({
  container: {
    padding: "20px 0",
  },
  containerHearder: {
    textAlign:'center',
    
  },
  h5: {
    color:'#f5b70a',
  }
}))
function SectionComments(){
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg" className={classes.container}>
        <Box sx={{ bgcolor: '#f8f8ff',
            height: '100%',
            padding: "20px 0",
            position: "relative" }} >
          <div className={classes.containerHearder}>
            <h5 className={classes.h5}>Membership</h5>
            <h1>What student says</h1>
            <p>A best and cheapest way of getting know learning to make a better tomorrow.</p>
          </div>    
          <Grid sx={{ flexGrow: 1 }} container spacing={2}>
            <Grid item xs={12}>
              <Grid container justifyContent="center" spacing={4}>
                {[0, 1, 2].map((value) => (
                  <Grid key={value} item >
                    <Paper
                      sx={{
                        height: 400,
                        width: 300,
                        backgroundColor: (theme) =>
                          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                      }}
                      
                     />
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </React.Fragment>
  ); 
}              

export default SectionComments



