

/*
 * ----------------------------------------------------------------------
 *                          Components & Functions                      |
 * ----------------------------------------------------------------------
 */

import React from 'react'
import Header from '../../../Components/Layouts/Header/Header'
import Footer from '../../../Components/Layouts/Footer/Footer'
import SectionComments from '../../../Components/SectionComments/SectionComments'
import HeroSection from '../../../Components/HeroSection/HeroSection'
import PopularTopics from '../../../Components/PopularTopics/PopularTopics'
import PopularCourses from '../../../Components/PopularCourses/PopularCourses'
import SectionTeachers from '../../../Components/SectionTeachers/SectionTeachers'
import SectionOrganizmes from '../../../Components/SectionOrganizmes/SectionOrganizmes'
import AboutUs from '../../../Components/AboutUs/AboutUs'

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
import './HomeSpace.scss'


/*
 * ----------------------------------------------------------------------
 *                                Images                                |
 * ----------------------------------------------------------------------
 */

function HomeSpace() {

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
  <div>
      <Header/>
      <HeroSection />
      <PopularTopics />
      <PopularCourses />
      <SectionTeachers/>
      <SectionOrganizmes/>
      <SectionComments/>
      <AboutUs/>
      <div className="FooterDisposition">
        <Footer />
      </div>
  </div>
    
  )
}

export default HomeSpace