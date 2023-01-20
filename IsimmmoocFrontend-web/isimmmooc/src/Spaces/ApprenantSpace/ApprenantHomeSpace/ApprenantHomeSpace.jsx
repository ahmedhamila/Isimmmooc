

/*
 * ----------------------------------------------------------------------
 *                          Components & Functions                      |
 * ----------------------------------------------------------------------
 */

import * as React from 'react';
import { Grid } from 'semantic-ui-react';
import NavBarApprenantSpace from '../../../Components/NavBarApprenantSpace/NavBarApprenantSpace';
import ApprenantHeroSection from '../../../Components/ApprenantHeroSection/ApprenantHeroSection';
import ApprentissageSectionApprenant from '../../../Components/ApprentissageSectionApprenant/ApprentissageSectionApprenant';
import Footer from '../../../Components/Layouts/Footer/Footer'
import SectionApprenantCourses from '../../../Components/SectionApprenantCourses/SectionApprenantCourses';
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
import './ApprenantHomeSpace.scss'



/*
 * ----------------------------------------------------------------------
 *                                Images                                |
 * ----------------------------------------------------------------------
 */


function ApprenantHomeSpace() {

  /* --------------------------------------------------------------------
   *                           Constants                                |
   * --------------------------------------------------------------------
   */
 
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

  /* --------------------------------------------------------------------
   *                             Functions                              |
   * --------------------------------------------------------------------
   */

    
  
  /* --------------------------------------------------------------------
   *                            Effect Hooks                            |
   * --------------------------------------------------------------------
   */

  /* --------------------------------------------------------------------
   *                                 JSX                                |
   * --------------------------------------------------------------------
   */
  return (
    <Grid className='ApprenantHome'>
    <NavBarApprenantSpace />
    <ApprenantHeroSection />
    <ApprentissageSectionApprenant/>
    <SectionApprenantCourses  />
    <Footer />
    </Grid>
  )
}

export default ApprenantHomeSpace