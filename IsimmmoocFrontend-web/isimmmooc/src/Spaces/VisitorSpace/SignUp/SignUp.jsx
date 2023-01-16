

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
import {  Container, Grid } from "@mui/material";

import SignUpFirstStep from "./SignUpFirstStep/SignUpFirstStep";
import SignUpSecondtStep from "./SignUpSecondStep/SignUpSecondStep";
import SignUpThirdtStep from "./SignUpThirdStep/SignUpThirdStep";
import SignUpSuccessStep from "./SignUpSuccessStep/SignUpSuccessStep";
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
import './SignUp.scss';
import styles from './../../../Assets/Styles/style.module.scss'

/*
 * ----------------------------------------------------------------------
 *                                Images                                |
 * ----------------------------------------------------------------------
 */
const SignUp = () => {

  /* --------------------------------------------------------------------
   *                           Constants                                |
   * --------------------------------------------------------------------
   */
    const steps = ["First Step","Second Step","Third Step"]
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
        return <SignUpFirstStep goNext={handleGoNext}  />;
      case 1:
        return <SignUpSecondtStep  currentStep goNext={handleGoNext} goPrevious={handleGoPrevious} />;
      case 2:
        return <SignUpThirdtStep  currentStep goNext={handleGoNext} goPrevious={handleGoPrevious} />;
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
        className="SignUp"
        container
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
      >
        <Grid
          className="SignUpContent"
          container
        >
          <Grid
          container
          direction='column'
          gap='50px'
          >
            <Grid
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
            </Grid>
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
                {currentStep === steps.length?(
                  <SignUpSuccessStep />
                ):(
                  _renderStepContent(currentStep)
                )}
              </Grid>
                
            </Grid>
            
          </Grid>
        </Grid>
      </Grid>
  );
};

export default SignUp;