

/*
 * ----------------------------------------------------------------------
 *                          Components & Functions                      |
 * ----------------------------------------------------------------------
 */
import {Fragment, React,useState,forwardRef} from 'react'
import {Grid,Box,LinearProgress,Typography,TextField,MenuItem,TextareaAutosize,InputAdornment,Button,Snackbar,Slide,Dialog,DialogTitle,DialogActions,DialogContent,DialogContentText} from '@mui/material'

import MuiAlert from '@mui/material/Alert';
import { useParams,useNavigate } from 'react-router-dom'
import { useGetFullCourseQuery,useGetDisciplinesQuery } from '../../Redux/FormateurApiSlice'
/*
* ----------------------------------------------------------------------
*                              Services & Models                       |
* ----------------------------------------------------------------------
*/

import {UpdateCourse} from './../../Services'

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

const SectionCourseFormateur = () => {

  /* --------------------------------------------------------------------
   *                           Constants                                |
   * --------------------------------------------------------------------
   */
  const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
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
    const {id}=useParams()
    console.log(id)

    const {data :coursData ,error:coursError,isLoading:coursIsLoading,isSuccess:coursIsSuccess} = useGetFullCourseQuery(id)
    const {data :disciplineData,error:disciplineError,isLoading:disciplineIsLoading,isSuccess:disciplineIsSuccess} = useGetDisciplinesQuery()
    
    if(disciplineData)
    {
        console.log("************")
        console.log(disciplineData)
    }
    const [coursName,setCoursName]=useState('')

    const [coursPeriode,setCoursPeriode]=useState('')

    const [coursDifficulty, setCoursDifficulty] = useState('');

    const [coursDiscipline, setCoursDiscipline] = useState('');

    const [coursDescription, setCoursDescription] = useState('');

    const [coursVideo, setCoursVideo] = useState(null);

    const [coursPeriodeError,setCoursPeriodeError] = useState(false)
    const [open, setOpen] = useState(false);
    const [warningMessage, setWarningMessage] = useState('');
    const [openDialog,setOpenDialog]=useState(false)
    const navigate = useNavigate()
    if(coursData)
    {
        console.log("////")
        console.log(coursData)
    }
  /* --------------------------------------------------------------------
   *                             Functions                              |
   * --------------------------------------------------------------------
   */
  const handleCloseDialog = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
    navigate('/FormateurSpace/Courses')
  };
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

  const handleUpdate = async () => {
    if(coursName.length <2)
    {
      setWarningMessage("Invalid name(Min Length is 2 ) !")
      setOpen(true);
      return;
    }
    if(coursPeriodeError || coursPeriode.length === 0)
    {
      setWarningMessage("Invalid Periode !")
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
      formData.append('discipline',disciplineData.find(discipline => discipline.name === coursDiscipline).id)

      const response = await UpdateCourse(id,formData)
      if(response.ok)
      {
        const responseJson = await response.json()
        console.log(responseJson)
        setOpenDialog(true)
      }
      else
      {
        setWarningMessage('An Error has occured while Updating the course !')
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
        {(coursIsLoading || disciplineIsLoading)?(
            <Box sx={{ width: '100%' }}>
                <LinearProgress />
                <LinearProgress />
                <LinearProgress />
            </Box>
        ):
        (
            (coursData && disciplineData)?(
                <Grid
                    className="ViewCourse"
                    container
                    flexDirection='column'
                    justifyContent='center'
                    alignItems='center'
                    sx={{width:'80%',backgroundColor:'white',borderRadius:'15px',boxShadow:'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'}}
                >
                    <Grid
                    className="ViewCourseContent"
                    container
                    >
                    <Grid
                    container
                    direction='column'
                    gap='50px'
                    >
                        <Grid
                        container
                        direction='column'
                        alignItems='center'
                        justifyContent='flex-start'
                        className="CourseContent"
                        >
                        <Grid
                        container
                        flexDirection='row'
                        justifyContent='center'
                        
                        >
                            <Grid
                                container
                                flexDirection='column'
                                alignItems='flex-start'
                                gap='35px'
                                flexBasis={0}
                                flexGrow={1}
                                flexShrink={0}
                                padding='25px'
                                >
                                    <Grid
                                        container
                                        flexDirection='row'
                                        flexWrap='nowrap'
                                        gap='15px'
                                        justifyContent='center'
                                    >
                                        <Typography variant='h2'>
                                            Edit Course
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
                                            placeholder={coursData.name}
                                            label={`Name(${coursData.name})`}
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
                                            label={`Periode(${coursData.period})`}
                                            type='number'
                                            error={coursPeriodeError}
                                            placeholder={coursData.period}
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
                                        label={`Difficulty(${coursData.difficulty === 'BG'?'Beginner':coursData.difficulty === 'AV'?'Advanced':'Intermediate'})`}
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
                                        label={`Discipline (${coursData.discipline})`}
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
                                            {disciplineData.map((discipline,index)=>{
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
                                            placeholder={coursData.description}
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
                                    <Grid
                                        container
                                        flexDirection='row'
                                        justifyContent='center'
                                        fullWidth
                                        gap='15px'
                                        >
                                            <Grid
                                                container
                                                width='200px'
                                            >
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
                                                    borderRadius : '3px',
                                                    borderColor:'red',
                                                    width:'100%'
                                                    }}
                                                    onClick={handleUpdate}
                                                >
                                                    Update
                                                </Button>
                                            </Grid>
                                        </Grid>
                                </Grid>
                            
                        </Grid>
                            
                        </Grid>
                        
                    </Grid>
                    
                    </Grid>
                    
                    <Snackbar open={open} autoHideDuration={4000}  onClose={handleClose}>
                        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                            {warningMessage}
                        </Alert>
                    </Snackbar>
                    <Dialog
                        open={openDialog}
                        TransitionComponent={Transition}
                        keepMounted
                        onClose={handleCloseDialog}
                        aria-describedby="alert-dialog-slide-description"
                    >
                        <DialogTitle>{"Details Updated"}</DialogTitle>
                        <DialogContent>
                        <DialogContentText id="alert-dialog-slide-description">
                            Course details have been successfully updated
                        </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                        <Button onClick={handleCloseDialog}>OK</Button>
                        </DialogActions>
                    </Dialog>
                </Grid>
            ):
            (
                <Box sx={{ width: '100%' }}>
                    <LinearProgress />
                    <LinearProgress />
                    <LinearProgress />
                </Box>
            )
        )
    }
    </Fragment>
  )
}

export default SectionCourseFormateur