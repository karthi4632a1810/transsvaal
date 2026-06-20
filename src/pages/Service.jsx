import React from 'react'
import Banner from '../components/Banner';
import Intro from '../components/service/Intro';
import DigitalMarketing from '../components/service/DigitalMarketing';
import CallToAction from '../components/home/CallToAction';

function Service() {
  return (
    <>
     <Banner title="Service" />
     <Intro />
     <DigitalMarketing />
     <CallToAction />
    </>
  )
}

export default Service