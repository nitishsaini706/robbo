// App.js
import React from 'react';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection';
import OpportunitySection from './components/Opportunity/OpportunitySection';
import HowItWorksSection from './components/HowItWorks/HowItWorksSection';
import AboutSection from './components/About/AboutSection';
import ContactForm from './components/ContactForm/ContactForm';
import { Exposure } from './components/ExposureSection/Exposure';

const App = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <OpportunitySection />
      <Exposure/>
      <HowItWorksSection />
      <AboutSection />
      <ContactForm />
    </div>
  );
};

export default App;
