

/*
 * ----------------------------------------------------------------------
 *                          Components & Functions                      |
 * ----------------------------------------------------------------------
 */

import React, { useState ,useEffect} from 'react'
import Footer from '../../../Components/Layouts/Footer/Footer'
import NavBarApprenantSpace from '../../../Components/NavBarApprenantSpace/NavBarApprenantSpace'
import CoursHeroSection from '../../../Components/CoursHeroSection/CoursHeroSection'
import CoursSpaceStepper from "../../../Components/CoursSpaceStepper/CoursSpaceStepper";
import { json, useParams } from 'react-router-dom';
/*
* ----------------------------------------------------------------------
*                              Services & Models                       |
* ----------------------------------------------------------------------
*/
import {GetCoursById} from '../../../Services'

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
  const [courses,setCourses]=useState([])
  const {id}=useParams()
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
  const Getcourses = async()=>{
   
    const response = await GetCoursById()   
    const responseJson = await response.json()
    setCourses(responseJson)
    
  }
  useEffect(   
    ()=>{Getcourses() ; },[])
  
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
      {courses.map((item)=>{
      return(
      <div>
      <CoursHeroSection nameCours={item.name} periodCours={item.period} difficultyCours={item.difficulty} />
      <CoursSpaceStepper/>
       </div> 
      ) })}
      <Footer />
    </div>
  )
}

export default CoursSpace