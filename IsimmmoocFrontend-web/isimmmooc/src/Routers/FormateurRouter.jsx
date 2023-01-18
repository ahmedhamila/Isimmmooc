

/*
 * ----------------------------------------------------------------------
 *                          Components & Functions                      |
 * ----------------------------------------------------------------------
 */
import React from 'react'
import {Routes,Route, Navigate} from 'react-router-dom'
import Dashboard from './../Spaces/FormateurSpace/Dashboard/Dashboard'
import FormateurProfile from './../Spaces/FormateurSpace/FormateurProfile/FormateurProfile'
import FormateurSideBar from './../Spaces/FormateurSpace/FormateurSideBar/FormateurSideBar'
import SectionModifierFormateur from '../Components/SectionModifierFormateur/SectionModifierFormateur'
import SectionAddCourse from '../Components/SectionAddCourse/SectionAddCourse'
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

function FormateurRouter() {

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
            
            <Route exact path='/FormateurSpace' element={<FormateurSideBar />}>
              <Route  index element={<Dashboard />}/>
              <Route  path='Account' element={<SectionModifierFormateur />}/>
              <Route  path='AddCourse' element={<SectionAddCourse />}/>
              

            </Route>
            
            <Route  path='/*' element={<Navigate to='/FormateurSpace' replace/>}/>
        </Routes>
        
        
    </React.Fragment>
    
  )
}

export default FormateurRouter