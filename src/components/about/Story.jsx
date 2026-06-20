import React from 'react'
import aboutImg from '/images/story.svg'

function Story() {
    return (
        <section className='container mt-5 py-5'>
            <div className="row">
            <div className="col-lg-6 p-3 p-lg-5 d-flex justify-content-center align-items-center">
                <img className='w-100 about-us-img' src={aboutImg}  alt="About Us" />
            </div>
                <div className="col-lg-6 p-3 p-lg-5 d-flex flex-column justify-content-center gap-1">
                    <span className='subtitle'>About Us</span>
                    <h1 className='display-5 text-white' >Empowering Businesses with Smart IT Solutions</h1>
                    <p className='opacity-50'>At <strong className='clr-primary'>Transvaal Infotech</strong>, we are driven by innovation, growth, and technology. Just like a rising arrow symbolizes progress and success, our mission is to help businesses scale new heights through cutting-edge IT solutions.</p>
                    <p className='opacity-50'>With expertise in software development, digital transformation, and IT consulting, we craft tailored solutions that empower businesses to thrive in a fast-paced digital world</p>
                </div>
                
            </div>
        </section>
    )
}

export default Story