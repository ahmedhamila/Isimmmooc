

/*
 * ----------------------------------------------------------------------
 *                          Components & Functions                      |
 * ----------------------------------------------------------------------
 */

import * as React from 'react';
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
    <div className='ApprenantHome'>
    <NavBarApprenantSpace />
    <ApprenantHeroSection />
    <ApprentissageSectionApprenant/>
    {[0, 1, 2].map((value) => (
    <SectionApprenantCourses key={value} />
    ))}
    <Footer />
    </div>
  )
}

export default ApprenantHomeSpace