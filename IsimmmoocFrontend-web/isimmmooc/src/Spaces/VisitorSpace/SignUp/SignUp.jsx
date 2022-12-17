

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
import { Button, Container, Grid } from "@mui/material";

import SignUpFirstStep from "./SignUpFirstStep/SignUpFirstStep";
import SignUpSecondtStep from "./SignUpSecondStep/SignUpSecondStep";
import SignUpThirdtStep from "./SignUpThirdStep/SignUpThirdStep";
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
    switch (step) {
      case 0:
        return <SignUpFirstStep/>;
      case 1:
        return <SignUpSecondtStep/>;
      case 2:
        return <SignUpThirdtStep/>;
      default:
        return <div>Not Found</div>;
    }
  }

  const handleGoNext = ()=>{
    if(currentStep<3)
        setCurrentStep((currentStep)=> currentStep+1)
  }
  const handleGoPrevious = ()=>{
    if(currentStep !== -1)
        setCurrentStep((currentStep)=> currentStep-1)
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
      <Container
        className="SignUp"
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
            justifyContent='flex-start'
            >
              {currentStep === steps.length?(
                <div>Success Step</div>
              ):(
                _renderStepContent(currentStep)
              )}
            </Grid>
              
          </Grid>
          <Grid 
          container
          direction='row'
          alignItems='center'
          justifyContent='flex-end'
          className="StepperFooter">
           
            {currentStep !== 0?(
              <Button  
                variant='text' 
                sx={{
                  backgroundColor:'#fff',
                  color:styles.PrimaryColor,
                  "&:hover" : {
                    backgroundColor : styles.PrimaryColor,
                    color: '#fff'  ,
                  },
                  my: 2, 
                  mx:1,
                  borderRadius : '3px'
                }}
                onClick={handleGoPrevious}
              >
                previous
              </Button>
            ):(
              <></>
            )}
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
          
        </Grid>
      
      </Container>
  );
};

export default SignUp;