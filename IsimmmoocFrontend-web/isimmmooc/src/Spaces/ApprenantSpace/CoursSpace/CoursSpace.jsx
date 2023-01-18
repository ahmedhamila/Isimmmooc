

/*
 * ----------------------------------------------------------------------
 *                          Components & Functions                      |
 * ----------------------------------------------------------------------
 */

import React from 'react'
import Footer from '../../../Components/Layouts/Footer/Footer'
import NavBarApprenantSpace from '../../../Components/NavBarApprenantSpace/NavBarApprenantSpace'
import CoursHeroSection from '../../../Components/CoursHeroSection/CoursHeroSection'
import CoursSpaceStepper from "./CoursSpaceStepper/CoursSpaceStepper";
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

function CoursSpace() {

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
      <NavBarApprenantSpace/>
      <CoursHeroSection />
      <CoursSpaceStepper/>
      <Footer />
    </div>
  )
}

export default CoursSpace