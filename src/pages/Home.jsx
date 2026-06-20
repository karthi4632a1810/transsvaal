import React from 'react';
import SliderBanner from '../components/home/SliderBanner';
import DigitalMarketing from '../components/home/digitalMarketing';
import About from '../components/home/About';
import Service from '../components/home/Service';
import WhyChooseUs from '../components/home/WhyChooseUs';
import Testimonial from '../components/home/Testimonial';
import CallToAction from '../components/home/CallToAction';
import Blog from '../components/home/Blog';
import Team from '../components/home/Team';


const Home = () => {
  return (
    <div className="container-fluid px-0">
      <SliderBanner></SliderBanner>
      <About />
      <Service />
      <DigitalMarketing />
      <WhyChooseUs/>
      <Blog />
      <Testimonial />
      <Team />
      <CallToAction />
    </div>
  );
};

export default Home;
