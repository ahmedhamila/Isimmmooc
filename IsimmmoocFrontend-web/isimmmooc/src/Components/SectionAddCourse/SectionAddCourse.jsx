

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
import AddCourseThirdStep from './AddCourseThirdStep/AddCourseThirdStep'
import AddCourseSuccessStep from './AddCourseSuccessStep/AddCourseSuccessStep'
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


const SectionAddCourse = () => {

  /* --------------------------------------------------------------------
   *                           Constants                                |
   * --------------------------------------------------------------------
   */
  const steps = ["First Step","Second Step",'ThirdStep']
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
      case 2:
        return <AddCourseThirdStep  currentStep goNext={handleGoNext} goPrevious={handleGoPrevious} />;
      case 3:
        return <AddCourseSuccessStep  currentStep goNext={handleGoNext} goPrevious={handleGoPrevious} />;
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
        sx={{width:'80%',backgroundColor:'white',borderRadius:'15px',boxShadow:'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'}}
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