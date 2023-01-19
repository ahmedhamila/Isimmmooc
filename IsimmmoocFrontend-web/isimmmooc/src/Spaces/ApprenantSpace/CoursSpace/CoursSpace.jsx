

/*
 * ----------------------------------------------------------------------
 *                          Components & Functions                      |
 * ----------------------------------------------------------------------
 */

import React, { useState ,useEffect} from 'react'
import Footer from '../../../Components/Layouts/Footer/Footer'
import NavBarApprenantSpace from '../../../Components/NavBarApprenantSpace/NavBarApprenantSpace'
import CoursHeroSection from '../../../Components/CoursHeroSection/CoursHeroSection'
import {Box} from '@mui/material';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import VideoSpace from './../../../Components/VideoSpace/VideoSpace'
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import CoursQuiz from './../../../Components/CoursQuiz/CoursQuiz'
import AvisApprenant from './../../../Components/AvisApprenant/AvisApprenant'
import { json, useParams } from 'react-router-dom';
/*
* ----------------------------------------------------------------------
*                              Services & Models                       |
* ----------------------------------------------------------------------
*/
import {GetCoursById} from '../../../Services'

/*
 * ----------------------------------------------------------------------
 *                                Styles                                |
 * ----------------------------------------------------------------------
 */
  import './CoursSpace.scss'
/*
 * ----------------------------------------------------------------------
 *                                Images                                |
 * ----------------------------------------------------------------------
 */

function CoursSpace() {

  /* --------------------------------------------------------------------
   *                           Constants                                |
   * --------------------------------------------------------------------
   */
 
  const {id}=useParams()
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
  const [course,setCourse]=useState({})
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState({});
  const [steps,setSteps]=useState([])
  const [value, setValue] = React.useState('1');


  /* --------------------------------------------------------------------
   *                             Functions                              |
   * --------------------------------------------------------------------
   */
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };
  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? 
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };
  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };
  
  /* --------------------------------------------------------------------
   *                            Effect Hooks                            |
   * --------------------------------------------------------------------
   */
  
    useEffect(()=>{
      const Getcourse = async()=>{
    
        const response = await GetCoursById(id)   
        const responseJson = await response.json()
        var sts=[]
        for(var i=0;i<responseJson.chapitres.length;i++)
        {
          sts.push(responseJson.chapitres[i].title)
        }
        setSteps(sts)
        console.log(steps)
        setCourse(responseJson)
        
      }
      Getcourse() ; 
      
    },[])

    
  /* --------------------------------------------------------------------
   *                                 JSX                                |
   * --------------------------------------------------------------------
   */
  return (
    <div className='ApprenantHome'>
      <NavBarApprenantSpace/>
      <div>
      <CoursHeroSection nameCours={course.name} periodCours={course.period} difficultyCours={course.difficulty} />
      <Box className='CoursSpaceStepper'> 
        <Stepper nonLinear activeStep={activeStep}>
          {steps.map((label, index) => (
            <Step key={label} completed={completed[index]}>
              <StepButton color="inherit" onClick={handleStep(index)}>
                {label}
              </StepButton>
            </Step>
          ))}
        </Stepper>
        <div>
          {allStepsCompleted() ? (
            <React.Fragment>
              <Typography sx={{ mt: 2, mb: 1 }}>
                All steps completed - Congratulations
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                <Box sx={{ flex: '1 1 auto' }} />
                <Button onClick={handleReset}>Reset</Button>
              </Box>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Typography sx={{ mt: 2, mb: 1, py: 1 }}>
                <VideoSpace videoUri={course.chapitres[activeStep].video}/>
                {/*<CoursContenuTabs description={course.chapitres[activeStep].presentation} question={course.chapitres[activeStep].questions}/>*/}
                <Box sx={{ width: '100%', typography: 'body1' }}>
                <TabContext value={value}>
                  <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                      <Tab label="Présentation" value="1" />
                      <Tab label="Quiz" value="2" />
                      <Tab label="Avis" value="3" />
                    </TabList>
                  </Box>
                  
                  <TabPanel value="1" >{course.chapitres[activeStep].presentation}</TabPanel>
                  <TabPanel value="2">
                    <CoursQuiz questions={course.chapitres[activeStep].questions}/>
                  </TabPanel>
                  <TabPanel value="3">
                    <AvisApprenant/>
                  </TabPanel>
                </TabContext>
              </Box>
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                <Button
                  color="inherit"
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  sx={{ mr: 1 }}
                >
                  Back
                </Button>
                <Box sx={{ flex: '1 1 auto' }} />
                <Button onClick={handleNext} sx={{ mr: 1 }}>
                  Next
                </Button>
                {activeStep !== steps.length &&
                  (completed[activeStep] ? (
                    <Typography variant="caption" sx={{ display: 'inline-block' }}>
                      Step {activeStep + 1} already completed
                    </Typography>
                  ) : (
                    <Button onClick={handleComplete}>
                      {completedSteps() === totalSteps() - 1
                        ? 'Finish'
                        : 'Complete Step'}
                    </Button>
                  ))}
              </Box>
            </React.Fragment>
          )}
        </div>
      </Box>
       </div> 
      <Footer />
    </div>
  )
}

export default CoursSpace