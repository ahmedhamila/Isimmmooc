

/*
 * ----------------------------------------------------------------------
 *                          Components & Functions                      |
 * ----------------------------------------------------------------------
 */
import React, { Fragment, useState } from 'react'
import { Button,Grid, TextField,MenuItem,Snackbar,InputAdornment, TextareaAutosize,Accordion,AccordionSummary,AccordionDetails, Typography,IconButton } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import MuiAlert from '@mui/material/Alert';
/*
* ----------------------------------------------------------------------
*                              Services & Models                       |
* ----------------------------------------------------------------------
*/

  import {AddChapitre} from './../../../Services'

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

const AddCourseSecondStep = (props) => {

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
  const {currentStep,goNext,goPrevious}=props
  /*--------------------------------------------------------------------
  *                                 Data                               |
  * --------------------------------------------------------------------
  */


  /* --------------------------------------------------------------------
   *                             Hooks & States                         |
   * --------------------------------------------------------------------
   */
  const [open, setOpen] = useState(false);
  const [warningMessage, setWarningMessage] = useState('');
  const [chapitres, setChapitres] = useState([{ title: '', description: '', video: null }]);

  
  
  /* --------------------------------------------------------------------
   *                             Functions                              |
   * --------------------------------------------------------------------
   */
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  }
  const handleGoNext = async() => {
      console.log(sessionStorage.getItem('CoursID'))
      if(!chapitres.some(chapitre => chapitre.title.length===0) && !chapitres.some(chapitre => chapitre.description.length===0) && !chapitres.some(chapitre => chapitre.video===null) )
      {
        chapitres.map(async(chapitre,index) => {
          let formData = new FormData()
          formData.append('title',chapitre.title)
          formData.append('video',chapitre.video)
          formData.append('presentation',chapitre.description)
          formData.append('cours',sessionStorage.getItem('CoursID'))
  
          const response = await AddChapitre(formData)
          if(response.ok)
          {
            const responseJson = await response.json()
            console.log(responseJson)
            sessionStorage.setItem(`ChapitreID${index+1}`,responseJson.id)
          }
          else
          {
            setWarningMessage('An Error has occured while adding the chapters !')
            setOpen(true)
            return;
          }
          
        })
        sessionStorage.removeItem('CoursID')
        sessionStorage.setItem('NBChapitres',chapitres.length)
        goNext()
      }
      else
      {
        setWarningMessage('All fields must be filled !')
        setOpen(true)
        return;
      }
      
      
      
      
  }
  const handleTitleChange = (e, index) => {
    const newChapitres = [...chapitres];
    newChapitres[index].title = e.target.value;
    setChapitres(newChapitres);
  };

  const handleDescriptionChange = (e, index) => {
    const newChapitres = [...chapitres];
    newChapitres[index].description = e.target.value;
    setChapitres(newChapitres);
  };

  const handleVideoChange = (e, index) => {
    const newChapitres = [...chapitres];
    newChapitres[index].video = e.target.files[0];
    setChapitres(newChapitres);
  };

  const handleAddChapitre = () => {
    if(chapitres.length <5)
      setChapitres([...chapitres, { title: '', description: '', video: null }]);
    else
    {
      setWarningMessage('Maximum of 5 Chapitres')
      setOpen(true)
    }
  };

  const handleRemoveChapitre = (index) => {
    setChapitres(chapitres.filter((a, i) => i !== index));
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
    <Grid
        className='AddCourseSecondStep'
        container
        sx={{
          width:{'xs':'100%','sm':'100%','md':'70%'},
          paddingTop:chapitres.length > 2?'75px':'15px'
        }}
        justifyContent='center'
        alignItems='center'
        flexDirection='row'
      >
        <Grid
          container
          flexDirection='column'
          justifyContent='center'
          alignItems='center'
          gap='15px'
        >
          
          {chapitres.map((chapitre, index) => (
            <Grid  container flexDirection='row' flexWrap='nowrap' key={index} >
              <Accordion sx={{width:'100%'}}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                sx={{
                  width:'100%',
                }}
              >
                <Grid container flexDirection='row' justifyContent='space-between' alignItems='center' sx={{padding:'5px'}}>
                  <Grid>
                    <Typography>Chapitre {index+1}</Typography>
                  </Grid>
                  <Grid>
                    <IconButton disabled={chapitres.length === 1} onClick={(e) => {e.stopPropagation();handleRemoveChapitre(index)}}>
                      <RemoveIcon />
                    </IconButton>
                    <IconButton
                      onClick={(e)=>{ e.stopPropagation(); handleAddChapitre()}}
                    >
                      <AddIcon />
                    </IconButton>
                  </Grid>
                  
                </Grid>
                
              </AccordionSummary>
              <AccordionDetails sx={{ display:'flex',flexDirection:'row',justifyContent:'center'}}>
                <Grid container flexDirection='column' sx={{width:{'xs':'100%','sm':'70%','md':'70%'}}}  alignItems='center' justifyContent='center' gap='15px'>
                  <Grid container flexDirection='row' sx={{width:'100%'}}>
                    <TextField
                      label="Title"
                      value={chapitre.title}
                      onChange={(e) => handleTitleChange(e, index)}
                      fullWidth
                    />
                  </Grid>
                  <Grid container flexDirection='row' sx={{width:'100%'}}>
                    <TextareaAutosize
                      placeholder="Description"
                      value={chapitre.description}
                      onChange={(e) => handleDescriptionChange(e, index)}
                      minRows={5}
                      maxRows={10}
                      style={{
                        width:'100%',
                        resize:'none'
                        }}
                    />
                  </Grid>
                  <Grid container flexDirection='row' sx={{width:'100%'}}>
                    <TextField
                      onChange={(e) => handleVideoChange(e, index)}
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
                
                </AccordionDetails>
              </Accordion>
              
            </Grid>
          ))}
   
        </Grid>
            
            <Grid 
          container
          direction='row'
          alignItems='center'
          justifyContent='flex-end'
          className="StepperFooterAddCourseSecondStep">
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
                  borderColor:'red'
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



export default AddCourseSecondStep;