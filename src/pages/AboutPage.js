import React from 'react'
import AboutStyles from '../styles/PagesStyles/AboutStyles'
import { MainLayout } from '../styles/Layout'
import Title from '../components/Title'
import ImageSection from '../components/ImageSection'
import ServiceSection from '../components/ServiceSection'
// import ReviewSection from '../components/ReviewSection'

function AboutPage() {
  return (
    <MainLayout>
        <AboutStyles>
            <Title title={'About Me'} span={'About Me'}/>
            <ImageSection />
            <ServiceSection />
            {/* <ReviewSection /> */}
        </AboutStyles>
    </MainLayout>
  )
}

export default AboutPage