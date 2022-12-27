

/*
 * ----------------------------------------------------------------------
 *                          Components & Functions                      |
 * ----------------------------------------------------------------------
 */
import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import HomeSpace from '../Spaces/VisitorSpace/HomeSpace/HomeSpace'
import SignUp from '../Spaces/VisitorSpace/SignUp/SignUp'
import SignIn from '../Spaces/VisitorSpace/SignIn/SignIn'
import ApprenantHomeSpace from '../Spaces/ApprenantSpace/ApprenantHomeSpace/ApprenantHomeSpace'
import ModifierApprenant from '../Spaces/ApprenantSpace/ModifierApprenant/ModifierApprenant'

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

function RootRouter() {

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
    
    <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<HomeSpace />}/>
            <Route exact path='/SignUp' element={<SignUp />}/>
            <Route exact path='/SignIn' element={<SignIn />}/>
            <Route exact path='/ApprenantHomeSpace' element={<ApprenantHomeSpace />}/>
            <Route exact path='/ModifierAcount' element={<ModifierApprenant />}/>
        </Routes>
    </BrowserRouter>
  )
}

export default RootRouter