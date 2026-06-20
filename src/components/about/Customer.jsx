import React from 'react'
import aboutImg from '/images/grow.svg'
function Customer() {
    return (
        <section className='container'>
            <div className="row">
                <div className="col-lg-6 order-2 order-lg-1 p-3 p-lg-5 d-flex flex-column justify-content-center gap-1">
                    <span className='subtitle'>We Help You</span>
                    <h1 className='display-5 text-white' >Guiding You to Success</h1>
                    <p className='opacity-50'>At <strong className='clr-primary'>Transvaal Infotech</strong>, we believe that success is a journey, not a destination. We stand by our clients, offering the right technology, expertise, and support to help them take the next big step toward their goals.</p>
                    <p className='opacity-50'>Whether you’re a startup looking for a strong digital foundation or an established business aiming for greater heights, we provide the tools, strategies, and innovations to make it happen.</p>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 p-3 p-lg-5 d-flex justify-content-center align-items-center">
                    <img className='w-100 about-us-img' src={aboutImg} alt="About Us" />
                </div>
            </div>
        </section>
    )
}

export default Customer