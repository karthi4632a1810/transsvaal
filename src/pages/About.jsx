import React from 'react';
import Banner from '../components/Banner';
import Service from '../components/home/Service';
import WhyChooseUs from '../components/home/WhyChooseUs';
import Team from '../components/home/Team';
import CallToAction from '../components/home/CallToAction'
import Story from '../components/about/Story';
import Customer from '../components/about/Customer';

const About = () => {
  return (
    <>
      <Banner title="About Us" />
      <Story />
      <Customer />
      <Service />
      <WhyChooseUs />
      <Team />
      <CallToAction />
    </>
  );
};

export default About;
