import React from 'react';
import AboutSection from '../../components/about-section/about-section';
import Events from '../../components/events/events';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import Landing from '../../components/landing/landing';
import Section from '../../components/section1/section';
import Speakers from '../../components/speakers/speakers';
import SuccessSection from '../../components/success-section/success-section';
import TrainingSection from '../../components/training-section/training-section';

const Home = () => {
    
    return (
        <>
            <Landing />
            <Section />
            <AboutSection />
            <TrainingSection />
            <SuccessSection />
            <Events />
            <Speakers/>
        </>
        );
    
}
 
export default Home