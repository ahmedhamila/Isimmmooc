

/*
 * ----------------------------------------------------------------------
 *                          Components & Functions                      |
 * ----------------------------------------------------------------------
 */

import React from 'react'
import { Grid } from 'semantic-ui-react';
import NavBarApprenantSpace from '../../../Components/NavBarApprenantSpace/NavBarApprenantSpace';
import Footer from '../../../Components/Layouts/Footer/Footer'

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
import './ModifierApprenant.scss'
import SectionModifierApprenant from '../../../Components/SectionModifierApprenant/SectionModifierApprenant';

/*
 * ----------------------------------------------------------------------
 *                                Images                                |
 * ----------------------------------------------------------------------
 */

function ModifierApprenant() {

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
    <SectionModifierApprenant/>
    <Footer />
    </div>
  )
}

export default ModifierApprenant