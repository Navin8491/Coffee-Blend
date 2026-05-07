import React from 'react';
import PageHeader from '../components/PageHeader';
import AboutStory from '../components/AboutStory';
import TestimonySection from '../components/TestimonySection';
import CounterSection from '../components/CounterSection';

const About = () => {
  return (
    <div>
      <PageHeader title="About Us" bgImage="/images/bg_3.jpg" />
      <AboutStory />
      <TestimonySection />
      <CounterSection />
    </div>
  );
};

export default About;
