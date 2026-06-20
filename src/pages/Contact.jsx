import React from 'react';
import Banner from '../components/Banner';
import Section_1 from '../components/contact/Section_1';
import CallToAction from '../components/home/CallToAction'
import Map from '../components/contact/Map';

const Contact = () => {
  return (
    <>
      <Banner title="Contact Us" />
      <Section_1 />
      <Map />
      <CallToAction />
    </>
  );
};

export default Contact;
