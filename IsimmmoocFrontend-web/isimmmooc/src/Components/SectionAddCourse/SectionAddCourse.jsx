

/*
 * ----------------------------------------------------------------------
 *                          Components & Functions                      |
 * ----------------------------------------------------------------------
 */
import React, { useState } from "react";
import {
  Stepper,
  Step,
  StepLabel,
} from "@material-ui/core";
import {Grid } from "@mui/material";

import AddCourseFirstStep from './AddCourseFirstStep/AddCourseFirstStep'
import AddCourseSecondStep from './AddCourseSecondStep/AddCourseSecondStep'
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
import './SectionAddCourse.scss';

/*
 * ----------------------------------------------------------------------
 *                                Images                                |
 * ----------------------------------------------------------------------
 */


const SectionAddCourse = () => {

  /* --------------------------------------------------------------------
   *                           Constants                                |
   * --------------------------------------------------------------------
   */
  const steps = ["First Step","Second Step"]
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
  const [currentStep,setCurrentStep] = useState(0)

  /* --------------------------------------------------------------------
   *                             Functions                              |
   * --------------------------------------------------------------------
   */

    function _renderStepContent(step) {

    console.log("current step")
    console.log(step)
    switch (step) {
      case 0:
        return <AddCourseFirstStep goNext={handleGoNext}  />;
      case 1:
        return <AddCourseSecondStep  currentStep goNext={handleGoNext} goPrevious={handleGoPrevious} />;
      default:
        return <div>Not Found</div>;
    }
  }

  const handleGoNext = ()=>{
   
    if(currentStep<3)
    {
      setCurrentStep((currentStep)=> currentStep+1)
    }
  }
  const handleGoPrevious = ()=>{
    if(currentStep !== -1)
    {
      setCurrentStep((currentStep)=> currentStep-1)
    }
        
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
    <Grid
        className="AddCourse"
        container
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
      >
        <Grid
          className="AddCourseContent"
          container
        >
          <Grid
          container
          direction='column'
          gap='50px'
          >
            {/*<Grid
            className="StepperHeader"
            >
              <Stepper activeStep={currentStep}>
                  {steps.map((step,index)=>{
                      return(
                          <Step key={index}>
                            <StepLabel>
                              {step}
                            </StepLabel>
                          </Step>
                          
                      )
                  })}
              </Stepper>
                </Grid>*/}
            <Grid
            container
            direction='column'
            alignItems='center'
            justifyContent='flex-start'
            className="StepperContent"
            >
              <Grid
              container
              flexDirection='row'
              justifyContent='center'
              >
                
                  {_renderStepContent(currentStep)}
              </Grid>
                
            </Grid>
            
          </Grid>
        </Grid>
        
      
      </Grid>
  )
}

export default SectionAddCourse