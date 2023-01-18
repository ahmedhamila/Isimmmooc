

/*
 * ----------------------------------------------------------------------
 *                          Components & Functions                      |
 * ----------------------------------------------------------------------
 */
import * as React from 'react';
import Box from '@mui/material/Box';
import {Grid, Typography,Paper} from '@mui/material';
import { styled } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import CardMedia from '@mui/material/CardMedia';
import Rating from '@mui/material/Rating';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useNavigate } from "react-router-dom";
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


/*
 * ----------------------------------------------------------------------
 *                                Images                                |
 * ----------------------------------------------------------------------
 */
import reactNativeImg from '../../Assets/Images/reactNativeImg.jpg';


function MonApprentissageSection() {

  /* --------------------------------------------------------------------
   *                           Constants                                |
   * --------------------------------------------------------------------
   */
  const [age, setAge] = React.useState('');

  const [courses,setCourses]=React.useState([
    {desc:'React Native for bginner',formateurName:'Paolo yokt'}
  ])

  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 3,
    borderRadius: 0,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 0,
      backgroundColor: '#6159a2',
      height:3,
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
  const navigate=useNavigate()
  /* --------------------------------------------------------------------
   *                             Functions                              |
   * --------------------------------------------------------------------
   */
  
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const CoursClickHandle = ()=>{
    navigate("/ApprenantHomeSpace/MonApprentissage/cours")
  }  
  
  /* --------------------------------------------------------------------
   *                            Effect Hooks                            |
   * --------------------------------------------------------------------
   */

  /* --------------------------------------------------------------------
   *                                 JSX                                |
   * --------------------------------------------------------------------
   */
  return (
    <Box>
      <Box sx={{ paddingTop: '15px',
            marginTop:'5%' ,
            minHeight: '100px',
            display: 'flex',
            flexDirection: 'row',
            padding: '25px',
            color:'rgb(2,0,36)',
            backgroundColor: '#f8f8ff',
        }} >
        <Grid container rowSpacing={1}>
          <Grid 
          direction='row' 
          alignItems='center'
          justifyContent='center'
          container
          >
            <Grid item justifyContent='center' direction="row" >
                <Typography variant="h1"  color='#1C1D1F' fontWeight='bold' fontFamily='Georgia' fontSize='45px' component="div">
                  Mon Apprentissage
                </Typography> 
            </Grid>   
          </Grid>
        </Grid>    
      </Box>
      <Grid container justifyContent='center'>
        
        <Grid container spacing={10} flexDirection='row' sx={{display:'flex',justifyContent:'center',padding:3,width:'100%'}}>
          <Grid item flexDirection='column' justifyContent='center' >
            <Typography>
            Filtrer en fonction de
            </Typography>
            <FormControl sx={{ margin:0,width:'200px'}} size="small">
              <InputLabel id="demo-select-small">Catégorie</InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={age}
                label="Age"
                onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item flexDirection='column' justifyContent='center'>
            <Typography>
              <br />
            </Typography>
            <FormControl sx={{ margin:0,width:'200px'}} size="small">
              <InputLabel id="demo-select-small">Formateur</InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={age}
                label="Age"
                onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item flexDirection='column' justifyContent='center'marginLeft='4%'>
            <Typography marginLeft='2%'>
              Rechercher mes cours
            </Typography>
            <FormControl sx={{width:'250px'}} size="small">
              <Paper 
                sx={{ p: '2px 4px',border:1,borderColor:'#9d9da8',boxShadow:0, alignItems: 'center',height:'35px' }}
              > 
                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Rechercher mes cours"
                  inputProps={{ 'aria-label': 'Rechercher mes cours' }}
                />
                <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                  <SearchIcon />
                </IconButton>
              </Paper>
            </FormControl>
          </Grid> 
        </Grid> 
        {[0, 1, 2].map((value) => ( 
        <Grid container spacing={2} sx={{display:'flex',justifyContent:'center',width:'100%',marginTop:1}} key={value}>
          {[0, 1, 2,3].map((value) => (
            <Grid key={value} item >
              <IconButton>
              <Paper
                  sx={{
                    height: 300,
                    width: 220,
                    backgroundColor: (theme) =>
                      theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                    border: '1px solid rgb(206, 194, 194)',
                    
                  }}  
                  onClick={CoursClickHandle}  
              >
              <CardMedia
                    component="img"
                    height="160"
                    image={reactNativeImg}
                    alt="course photo"
                    sx={{p:0.2,cursor:'pointer'}}
                     
              />
              {courses.map((item)=>{
                return(
                      
                  <Grid padding='0px'>
                    <Typography variant="h6" fontFamily="Arial" color='#1C1D1F' fontSize='24px' fontWeight='bold'>
                        {item.desc}
                    </Typography>
                    <Typography variant="p" fontFamily="Segoe UI" color='#999d9f' fontSize='16px' >
                      {item.formateurName}
                    </Typography>
                    <Stack spacing={1}>
                      <Rating name="half-rating-read" defaultValue={4} precision={1} readOnly />
                    </Stack> 
                    <BorderLinearProgress variant="determinate" value={30} /> 
                  </Grid>)
                        
                    })}  
                  </Paper>
                  </IconButton>
              </Grid>
            ))}
        </Grid>  
        ))} 
        <Stack spacing={2} marginTop='2%' marginBottom='2%'>
          <Pagination count={10} variant="outlined" />
        </Stack> 
      </Grid>
    </Box>
  )
}

export default MonApprentissageSection