import React from 'react'
import Header from '../../Components/Layouts/Header/Header'
import Footer from '../../Components/Layouts/Footer/Footer'
import SectionComments from '../../Components/SectionComments/SectionComments'
import './HomeSpace.scss'
import HeroSection from '../../Components/HeroSection/HeroSection'
import PopularTopics from '../../Components/PopularTopics/PopularTopics'
function HomeSpace() {
  return (
  <div>
      <Header/>
      <HeroSection />
      <PopularTopics />
      <SectionComments/>
      <div className="FooterDisposition">
        <Footer />
      </div>
  </div>
    
  )
}

export default HomeSpace