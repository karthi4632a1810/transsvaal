import React from 'react'
import digitalMaketing from '/images/service-digital-marketing.svg'
import webDevelopment from '/images/service-web-development.svg'
import mobileDevelopment from '/images/service-mobile-development.svg'
import uiUxDesign from '/images/service-ui-ux.svg'

function DigitalMarketing() {
    return (
        <section className='container mt-5 p-5 pb-0'>
            <div className="row">
                <div className="col-lg-7 p-3 p-lg-5 d-flex justify-content-center align-items-center">
                    <img className='w-100 about-us-img' src={digitalMaketing} alt="About Us" />
                </div>
                <div className="col-lg-5 p-3 p-lg-5 d-flex flex-column justify-content-center gap-1">
                    <h1 className='display-5 text-white' >Digital Marketing</h1>
                    <p className='opacity-50'>Boost your brand visibility with our result-driven SEO, social media marketing, and targeted advertising strategies. We help you reach the right audience and maximize engagement.</p>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-8 order-1 order-lg-2 p-3 p-lg-5 d-flex justify-content-center align-items-center">
                    <img className='w-100 about-us-img' src={webDevelopment} alt="About Us" />
                </div>
                <div className="col-lg-4 order-2 order-lg-1 p-3 p-lg-5 d-flex flex-column justify-content-center gap-1">
                    <h1 className='display-5 text-white' >Web Development</h1>
                    <p className='opacity-50'>We create responsive, high-performance websites using modern technologies like HTML, CSS, JavaScript, and frameworks to ensure seamless user experiences and functionality.</p>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-7 p-3 p-lg-5 d-flex justify-content-center align-items-center">
                    <img className='w-100 about-us-img' src={mobileDevelopment} alt="About Us" />
                </div>
                <div className="col-lg-5 p-3 p-lg-5 d-flex flex-column justify-content-center gap-1">
                    <h1 className='display-5 text-white' >UI/UX Design</h1>
                    <p className='opacity-50'>Our expert designers craft intuitive, visually appealing, and user-friendly interfaces that enhance customer engagement and satisfaction.</p>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-7 order-1 order-lg-2 p-3 p-lg-5 d-flex justify-content-center align-items-center">
                    <img className='w-100 about-us-img' src={uiUxDesign} alt="About Us" />
                </div>
                <div className="col-lg-5 order-2 order-lg-1 p-3 p-lg-5 d-flex flex-column justify-content-center gap-1">
                    <h1 className='display-5 text-white' >Mobile Development</h1>
                    <p className='opacity-50'>From native to cross-platform solutions, we develop high-performing mobile applications tailored to your business needs, ensuring seamless experiences on both Android and iOS.</p>
                </div>
            </div>
        </section>
    )
}

export default DigitalMarketing