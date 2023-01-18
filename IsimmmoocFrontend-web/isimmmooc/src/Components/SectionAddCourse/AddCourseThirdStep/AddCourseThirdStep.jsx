

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

  import {AddQuestion} from './../../../Services'
  import {AddAnswer} from './../../../Services'

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

const AddCourseThirdStep = (props) => {

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
  const NbChaps = sessionStorage.getItem('NBChapitres')
  const arr=[]
  for(var i = 0 ; i < NbChaps ; i++){
    arr.push({ question: '', correctAnswer: '', otherAnswers: '' });
    }
  console.log(arr)
  const [questions, setQuestions] = useState(arr);

  console.log(questions)
  
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
    if( !questions.some(question => question.question.length===0) &&  !questions.some(question => question.correctAnswer.length===0) &&  !questions.some(question => question.otherAnswers.length===0))
    {
      questions.map(async(question,index) => {
        let formData = new FormData()
        formData.append('question_text',question.question)
        formData.append('number_options',question.otherAnswers.split(',').length +1)
        formData.append('chapitre',sessionStorage.getItem(`ChapitreID${index+1}`))

        const response = await AddQuestion(formData)
        if(response.ok)
        {
          const responseJson = await response.json()
          console.log(responseJson)
          const questionId=responseJson.id
          let formDataAnswer = new FormData()
          formData.append('answer_text',question.correctAnswer)
          formData.append('correct',true)
          formData.append('question',questionId)

          const responseA = await AddAnswer(formData)
          if(responseA.ok)
          {
            const responseAJson = await responseA.json()
            console.log(responseAJson)
            let wrongAnswersArray =question.otherAnswers.split(',')
            console.log(wrongAnswersArray)
            wrongAnswersArray.map(async(wrongAnswer)=>{
                let formDataAnswer = new FormData()
                formData.append('answer_text',wrongAnswer)
                formData.append('correct',false)
                formData.append('question',questionId)

                const responseWA = await AddAnswer(formData)
                if(responseWA.ok)
                {
                  const responseWAJson = await responseWA.json()
                  console.log(responseWAJson)
                }
                else
                {
                  setWarningMessage('An Error has occured while adding Answers !')
                  setOpen(true)
                  return; 
                }
                
            })
          }
          else
          {
            setWarningMessage('An Error has occured while adding Answers !')
            setOpen(true)
            return;
          }
          
          sessionStorage.removeItem(`ChapitreID${index+1}`)
        }
        else
        {
          setWarningMessage('An Error has occured while adding Questions !')
          setOpen(true)
          return;
        }
        

        
      })
      sessionStorage.removeItem('CoursID')
      sessionStorage.removeItem('NBChapitres')
      goNext()
    }
    else
    {
      setWarningMessage('All fields must be filled !')
      setOpen(true)
      return;
    }
      
      
      
      
  }
  const handleCorrectAnswerChange = (e, index) => {
    const newQuestions = [...questions];
    newQuestions[index].correctAnswer = e.target.value;
    setQuestions(newQuestions);
  };

  const handleQuestionChange = (e, index) => {
    const newQuestions = [...questions];
    newQuestions[index].question = e.target.value;
    setQuestions(newQuestions);
  };

  const handleOtherAnswers = (e, index) => {
    const newQuestions = [...questions];
    newQuestions[index].otherAnswers = e.target.value;
    setQuestions(newQuestions);
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
        className='AddCourseThirdStep'
        container
        sx={{
          width:{'xs':'100%','sm':'100%','md':'70%'},
          paddingTop:questions.length > 2?'75px':'15px'
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
          
          {questions.map((question, index) => (
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
                    <Typography> Question du Chapitre {index+1}</Typography>
                  </Grid>
                  
                </Grid>
                
              </AccordionSummary>
              <AccordionDetails sx={{ display:'flex',flexDirection:'row',justifyContent:'center'}}>
                <Grid container flexDirection='column' sx={{width:{'xs':'100%','sm':'70%','md':'70%'}}}  alignItems='center' justifyContent='center' gap='15px'>
                <Grid container flexDirection='row' sx={{width:'100%'}}>
                    <TextareaAutosize
                      placeholder="Question"
                      value={question.question}
                      onChange={(e) => handleQuestionChange(e, index)}
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
                      label="Correct Answer"
                      value={question.correctAnswer}
                      onChange={(e) => handleCorrectAnswerChange(e, index)}
                      fullWidth
                    />
                  </Grid>
                  <Grid container flexDirection='row' sx={{width:'100%'}}>
                    <Typography variant='h6'>
                        Other Options (Maximum of 4 Comma seperated options)
                    </Typography>
                    <TextField
                      value={question.otherAnswers}
                      onChange={(e) => handleOtherAnswers(e, index)}
                      label="Options"
                      placeholder='Eg. option1,option2,option3'
                      fullWidth
                      sx={{
                        marginTop:'10px',
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
          className="StepperFooterAddCourseThirdStep">
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



export default AddCourseThirdStep;