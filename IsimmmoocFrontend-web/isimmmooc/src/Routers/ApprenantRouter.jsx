

/*
 * ----------------------------------------------------------------------
 *                          Components & Functions                      |
 * ----------------------------------------------------------------------
 */
import React from 'react'
import {Routes,Route,Navigate} from 'react-router-dom'
import ApprenantHomeSpace from '../Spaces/ApprenantSpace/ApprenantHomeSpace/ApprenantHomeSpace'
import ModifierApprenant from '../Spaces/ApprenantSpace/ModifierApprenant/ModifierApprenant'
import MonApprentissageSpace from '../Spaces/ApprenantSpace/MonApprentissageSpace/MonApprentissageSpace'
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

function ApprenantRouter() {

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
   *                              States                                |
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
    
    <React.Fragment>
        
        <Routes>
            <Route exact path='/ApprenantHomeSpace' element={<ApprenantHomeSpace />}/>
            <Route exact path='/ModifierAcount' element={<ModifierApprenant />}/>
            <Route exact path='/ApprenantHomeSpace/ModifierAcount' element={<ModifierApprenant />}/>
            <Route exact path='/ApprenantHomeSpace/MonApprentissage' element={<MonApprentissageSpace />}/>
            <Route  path='/*' element={<Navigate to='/ApprenantHomeSpace' replace/>}/>
        </Routes>
        
        
    </React.Fragment>
    
  )
}

export default ApprenantRouter