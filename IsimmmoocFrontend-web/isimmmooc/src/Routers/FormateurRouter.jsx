

/*
 * ----------------------------------------------------------------------
 *                          Components & Functions                      |
 * ----------------------------------------------------------------------
 */
import React from 'react'
import {Routes,Route, Navigate} from 'react-router-dom'
import Dashboard from './../Spaces/FormateurSpace/Dashboard/Dashboard'
import FormateurSideBar from './../Spaces/FormateurSpace/FormateurSideBar/FormateurSideBar'
import SectionModifierFormateur from '../Components/SectionModifierFormateur/SectionModifierFormateur'
import SectionProfileFormateur from '../Components/SectionProfileFormateur/SectionProfileFormateur'
import SectionCoursesFormateur from '../Components/SectionCoursesFormateur/SectionCoursesFormateur'
import SectionCourseFormateur from '../Components/SectionCourseFormateur/SectionCourseFormateur'
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
              <Route  index element={<SectionProfileFormateur />}/>
              <Route  path='Account' element={<SectionModifierFormateur />}/>
              <Route  path='Profile' element={<SectionProfileFormateur />}/>
              <Route  path='Courses' element={<SectionCoursesFormateur />}/>
              <Route  path='Courses/:id' element={<SectionCourseFormateur />}/>
              <Route  path='AddCourse' element={<SectionAddCourse />}/>
              

            </Route>
            
            <Route  path='/*' element={<Navigate to='/FormateurSpace' replace/>}/>
        </Routes>
        
        
    </React.Fragment>
    
  )
}

export default FormateurRouter