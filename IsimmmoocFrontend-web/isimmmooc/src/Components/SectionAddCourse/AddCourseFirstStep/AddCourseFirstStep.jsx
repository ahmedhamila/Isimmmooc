

/*
 * ----------------------------------------------------------------------
 *                          Components & Functions                      |
 * ----------------------------------------------------------------------
 */

import React, { Fragment, useState } from 'react'
import { Button,Grid, TextField,MenuItem,Snackbar,InputAdornment, TextareaAutosize,Box,LinearProgress, Typography } from '@mui/material';

import MuiAlert from '@mui/material/Alert';
import {useGetDisciplinesQuery} from './../../../Redux/FormateurApiSlice'
/*
* ----------------------------------------------------------------------
*                              Services & Models                       |
* ----------------------------------------------------------------------
*/

import {AddCourse} from './../../../Services'

/*
 * ----------------------------------------------------------------------
 *                                Styles                                |
 * ----------------------------------------------------------------------
 */
import styles from './../../../Assets/Styles/style.module.scss'
/*
 * ----------------------------------------------------------------------
 *                                Images                                |
 * ----------------------------------------------------------------------
 */

const AddCourseFirstStep = (props) => {

  /* --------------------------------------------------------------------
   *                           Constants                                |
   * --------------------------------------------------------------------
   */
  
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  /* --------------------------------------------------------------------
   *                               Props                                |
   * --------------------------------------------------------------------
   */
  const {goNext}=props

  /*--------------------------------------------------------------------
  *                                 Data                               |
  * --------------------------------------------------------------------
  */
  const {data ,error,isLoading,isSuccess} = useGetDisciplinesQuery()
  

  /* --------------------------------------------------------------------
   *                             Hooks & States                         |
   * --------------------------------------------------------------------
   */
  
  const [coursName,setCoursName]=useState('')

  const [coursPeriode,setCoursPeriode]=useState('')

  const [coursDifficulty, setCoursDifficulty] = useState('');

  const [coursDiscipline, setCoursDiscipline] = useState('');

  const [coursDescription, setCoursDescription] = useState('');

  const [coursVideo, setCoursVideo] = useState(null);

  const [coursPeriodeError,setCoursPeriodeError] = useState(false)

  

  const [open, setOpen] = useState(false);
  const [warningMessage, setWarningMessage] = useState('');


  /* --------------------------------------------------------------------
   *                             Functions                              |
   * --------------------------------------------------------------------
   */

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const handleCoursName = (event) => {
      setCoursName(event.target.value)
  };
  const handleCoursPeriode = (event) => {
      
      setCoursPeriode(event.target.value)
      if(event.target.value <=0 )
        setCoursPeriodeError(true)
      else
      setCoursPeriodeError(false)
  };
  const handleChangeCoursDifficulty = (event) => {
    setCoursDifficulty(event.target.value);
  };
  const handleChangeCoursDiscipline = (event) => {
    setCoursDiscipline(event.target.value);
  };

  const handleChangeCoursDescription = (event) => {
    setCoursDescription(event.target.value);
  };
  const handleChangeCoursVideo = (event) => {
    setCoursVideo(event.target.files[0]);
  };

  const handleGoNext = async () => {
    if(coursPeriodeError || coursPeriode.length === 0)
    {
      setWarningMessage("Invalid Periode !")
      setOpen(true);
      return;
    }
    if(coursName.length <2)
    {
      setWarningMessage("Invalid name(Min Length is 2 ) !")
      setOpen(true);
      return;
    }
    if(coursDifficulty.length === 0)
    {
      setWarningMessage("Please chose a Difficulty !")
      setOpen(true);
      return;
    }
    if(coursDiscipline.length === 0)
    {
      setWarningMessage("Please chose a Discipline !")
      setOpen(true);
      return;
    }
    if(coursDescription.length <2)
    {
      setWarningMessage("Invalid Description(Min Length is 2 ) !")
      setOpen(true);
      return;
    }
    if( !coursVideo)
    {
      setWarningMessage("Must Upload a Video!")
      setOpen(true);
      return;
    }
    
      let formData = new FormData()
      formData.append('name',coursName)
      formData.append('short_video',coursVideo)
      formData.append('description',coursDescription)
      formData.append('period',coursPeriode)
      formData.append('difficulty',coursDifficulty)
      formData.append('discipline',coursDiscipline)

      const response = await AddCourse(formData)
      if(response.ok)
      {
        const responseJson = await response.json()
        sessionStorage.setItem('CoursID',responseJson.id)
        console.log(responseJson)
        goNext();
      }
      else
      {
        setWarningMessage('An Error has occured while adding the course !')
        setOpen(true)
        return; 
      }
      
    
    
    
      
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
    <Fragment>
        
        
    {
        
        isLoading?(
            <Box sx={{ width: '100%' }}>
              <LinearProgress />
              <LinearProgress />
              <LinearProgress />
            </Box>
          ):
          (
            <Grid
          className='AddCourseFirstStep'
          container
          sx={{
            width:{'xs':'100%','sm':'50%','md':'50%'}
          }}
        >
          <Grid
          container
          flexDirection='column'
          alignItems='flex-start'
          gap='35px'
          flexBasis={0}
          flexGrow={1}
          flexShrink={0}
          >
              <Grid
                  container
                  flexDirection='row'
                  flexWrap='nowrap'
                  gap='15px'
                  justifyContent='center'
              >
                  <Typography variant='h2'>
                    New Course
                  </Typography>
              
              </Grid>
              <Grid
                  container
                  flexDirection='row'
                  flexWrap='nowrap'
                  gap='15px'
              >
                  <Grid
                      container
                  >
                  <TextField
                      value={coursName}
                      onChange={handleCoursName}
                      name='Name'
                      placeholder='Eg. Cours UI/UX'
                      label="Name"
                      fullWidth
                      sx={{
                      width:'100%',
                      '& label.Mui-focused': {
                          color: styles.PrimaryColorLight,
                      },
                      '& .MuiInput-underline:after': {
                          borderBottomColor: styles.PrimaryColorLight,
                      },
                      '& .MuiOutlinedInput-root': {
                          '& fieldset': {
                          borderColor: styles.PrimaryColorLight,
                          },
                          '&:hover fieldset': {
                          borderColor: styles.PrimaryColorLight,
                          },
                          '&.Mui-focused fieldset': {
                          borderColor: styles.PrimaryColorLight,
                          },
                      },
                      }}
                  />
                  </Grid>
                  <Grid
                      container
                  >
                  <TextField
                      value={coursPeriode}
                      onChange={handleCoursPeriode}
                      name='Periode'
                      label="Periode"
                      type='number'
                      error={coursPeriodeError}
                      placeholder='En Heure'
                      id="outlined-adornment-weight"
                      InputProps={{
                          endAdornment: <InputAdornment position="end">H</InputAdornment>,
                        }}
                      fullWidth
                      sx={{
                      width:'100%',
                      '& label.Mui-focused': {
                          color: coursPeriodeError?'red':styles.PrimaryColorLight,
                      },
                      '& .MuiInput-underline:after': {
                          borderBottomColor: coursPeriodeError?'red':styles.PrimaryColorLight,
                      },
                      '& .MuiOutlinedInput-root': {
                          '& fieldset': {
                          borderColor: coursPeriodeError?'red':styles.PrimaryColorLight,
                          },
                          '&:hover fieldset': {
                          borderColor: coursPeriodeError?'red':styles.PrimaryColorLight,
                          },
                          '&.Mui-focused fieldset': {
                          borderColor: coursPeriodeError?'red':styles.PrimaryColorLight,
                          },
                      },
                      }}
                  />
                  </Grid>
              </Grid>
            
            <Grid
              container
              flexDirection='row'
              flexWrap='nowrap'
              gap='15px'
            >
              <Grid
                  container
                  flexDirection='column'
              >
                  <TextField
                  select
                  value={coursDifficulty}
                  onChange={handleChangeCoursDifficulty}
                  name='Difficulty'
                  label="Difficulty"
                  fullWidth
                  sx={{
                  width:'100%',
                  '& label.Mui-focused': {
                      color: styles.PrimaryColorLight,
                  },
                  '& .MuiInput-underline:after': {
                      borderBottomColor: styles.PrimaryColorLight,
                  },
                  '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                      borderColor: styles.PrimaryColorLight,
                      },
                      '&:hover fieldset': {
                      borderColor: styles.PrimaryColorLight,
                      },
                      '&.Mui-focused fieldset': {
                      borderColor: styles.PrimaryColorLight,
                      },
                  },
                  }}
                      
                  >
                      <MenuItem value={'BG'}>Beginner</MenuItem>
                      <MenuItem value={'MD'}>Intermediate</MenuItem>
                      <MenuItem value={'AV'}>Advanced</MenuItem>
                  </TextField>
              </Grid>
              <Grid
              container
              flexDirection='column'
              >
                  <TextField
                  select
                  value={coursDiscipline}
                  onChange={handleChangeCoursDiscipline}
                  name='Discipline'
                  label="Discipline"
                  fullWidth
                  sx={{
                  width:'100%',
                  '& label.Mui-focused': {
                      color: styles.PrimaryColorLight,
                  },
                  '& .MuiInput-underline:after': {
                      borderBottomColor: styles.PrimaryColorLight,
                  },
                  '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                      borderColor: styles.PrimaryColorLight,
                      },
                      '&:hover fieldset': {
                      borderColor: styles.PrimaryColorLight,
                      },
                      '&.Mui-focused fieldset': {
                      borderColor: styles.PrimaryColorLight,
                      },
                  },
                  }}
                      
                  >
                      {data.map((discipline,index)=>{
                          return(
                              <MenuItem key={discipline.name} value={discipline.name}>{discipline.name}</MenuItem>
                          )
                      })}
                      
                      
                  </TextField>
              </Grid>
            </Grid>
            <Grid
              container
              flexDirection='row'
              flexWrap='nowrap'
              gap='15px'
            >
              <Grid
                  container
              >
                  <TextareaAutosize 
                    value={coursDescription}
                    onChange={handleChangeCoursDescription}
                    name='Description'
                    placeholder='Cours Description'
                    label="Description"
                    minRows={4}
                    maxRows={10}
                    style={{
                      width:'100%',
                      resize:'none'
                      }}
                    sx={{
                    '& label.Mui-focused': {
                        color: styles.PrimaryColorLight,
                    },
                    '& .MuiInput-underline:after': {
                        borderBottomColor: styles.PrimaryColorLight,
                    },
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                        borderColor: styles.PrimaryColorLight,
                        },
                        '&:hover fieldset': {
                        borderColor: styles.PrimaryColorLight,
                        },
                        '&.Mui-focused fieldset': {
                        borderColor: styles.PrimaryColorLight,
                        },
                    },
                    }} 
                  />
                      
              </Grid>
            </Grid>
            <Grid
              container
              flexDirection='row'
              flexWrap='nowrap'
              gap='15px'
            >
              <Grid
                  container
              >
                  <TextField
                      onChange={handleChangeCoursVideo}
                      type='file'
                      label="Video"
                      InputLabelProps={{
                          shrink: true,
                        }}
                      fullWidth
                      sx={{
                        width:'100%',
                        '& label.Mui-focused': {
                          color: styles.PrimaryColorLight,
                        },
                        '& .MuiInput-underline:after': {
                          borderBottomColor: styles.PrimaryColorLight,
                        },
                        '& .MuiOutlinedInput-root': {
                          '& fieldset': {
                            borderColor: styles.PrimaryColorLight,
                          },
                          '&:hover fieldset': {
                            borderColor: styles.PrimaryColorLight,
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: styles.PrimaryColorLight,
                          },
                        },
                      }}
                  />
              </Grid>
            </Grid>
          </Grid>
          <Grid 
            container
            direction='row'
            alignItems='center'
            justifyContent='flex-end'
            className="StepperFooter">
              <Button 
                  variant='text'
                  sx={{
                    backgroundColor:'#fff',
                    color:styles.SecondaryColor,
                    "&:hover" : {
                      backgroundColor : styles.SecondaryColor,
                      color: '#fff'  ,
                    },
                    my: 2, 
                    mx:1,
                    borderRadius : '3px'
                  }}
                  onClick={handleGoNext}
                >
                  next
                </Button>
            </Grid>
            <Snackbar open={open} autoHideDuration={4000}  onClose={handleClose}>
              <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                {warningMessage}
              </Alert>
            </Snackbar>
      </Grid>
          )
    }
    </Fragment>
  )
}

export default AddCourseFirstStep