

/*
 * ----------------------------------------------------------------------
 *                          Components & Functions                      |
 * ----------------------------------------------------------------------
 */


import React from 'react'
import { Button,Grid} from '@mui/material';
import {useSelector} from 'react-redux'
import SignUpFirstStepApprenant from './SignUpSecondStepApprenant/SignUpSecondStepApprenant'
import SignUpSecondtStepFormateur from './SignUpSecondStepFormateur/SignUpSecondStepFormateur'
import SignUpThirdtStepOrganisme from './SignUpSecondStepOrganisme/SignUpSecondStepOrganisme'
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
import styles from './../../../../Assets/Styles/style.module.scss'
/*
 * ----------------------------------------------------------------------
 *                                Images                                |
 * ----------------------------------------------------------------------
 */

function SignUpSecondStep(props) {

  /* --------------------------------------------------------------------
   *                           Constants                                |
   * --------------------------------------------------------------------
   */

  /* --------------------------------------------------------------------
   *                               Props                                |
   * --------------------------------------------------------------------
   */
  const {currentStep,goPrevious,goNext}=props
  const {userTypeSU} = useSelector((state)=>state.userInfo)
  /*--------------------------------------------------------------------
  *                                 Data                               |
  * --------------------------------------------------------------------
  */


  /* --------------------------------------------------------------------
   *                             Hooks & States                         |
   * --------------------------------------------------------------------
   */

  /* --------------------------------------------------------------------
   *                             Functions                              |
   * --------------------------------------------------------------------
   */
  function _renderSecondStepContent() {
    switch (userTypeSU) {
      case 'Apprenant':
        return <SignUpFirstStepApprenant currentStep handleGoNext={handleGoNext}  handleGoPrevious={handleGoPrevious}/>;
      case 'Formateur':
        return <SignUpSecondtStepFormateur currentStep handleGoNext={handleGoNext} handleGoPrevious={handleGoPrevious} />;
      case 'Organisme':
        return <SignUpThirdtStepOrganisme currentStep handleGoNext={handleGoNext} handleGoPrevious={handleGoPrevious} />;
      default:
        return <div>ERROR</div>;
    }
  }

  const handleGoNext = () => {
    
    goNext();
    
  };
  const handleGoPrevious = () => {
    

    goPrevious();
    
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
        className='SignUpSecondStep'
        sx={{
          width:{'xs':'100%','sm':'50%','md':'50%'}
        }}
      >
        {_renderSecondStepContent()}
      </Grid>
  )
}

export default SignUpSecondStep