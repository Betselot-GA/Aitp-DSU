import React from 'react';
import AboutLanding from '../../components/about-landing/about-landing';
import OurJourney from '../../components/our-journey/our-journey';
import Speakers from '../../components/speakers/speakers';
import Stats from '../../components/stats/stats';
import SuccessSection from '../../components/success-section/success-section';
const About = () => {
 
    return (
        <div>
            <AboutLanding />
            <OurJourney />
            <Stats />
            <SuccessSection />
            <Speakers/>
            </div>
        )
    
}
 
export default About;