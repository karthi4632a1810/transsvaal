import React from 'react'
import intro from '/images/service-intro.svg'
function Intro() {
    return (
        <section className='container mt-5 pt-5 overflow-hidden'>
            <div className="row justify-content-center">
                <div className="col-lg-8 p-3 d-flex align-items-center flex-column justify-content-center gap-1 p-4">
                    <span className='subtitle text-center'>Our Service</span>
                    <h2 className='display-5 text-white text-center text-balance' >Driving Growth Through Collaboration</h2>
                    <p className='opacity-50 text-center'>At <strong className='clr-primary'>Transvaal Infotech</strong>, we believe that success is built on strong partnerships and innovative solutions. Just like a team working together towards a shared goal, we help businesses navigate the digital landscape, boost engagement, and drive growth. Our expertise in web development, mobile applications, UI/UX design, and digital marketing ensures that your business stays ahead in an ever-evolving world.</p>
                </div>
                <div className="col-lg-10">
                    <img src={intro} className='w-100' alt="" />
                </div>
            </div>
        </section>
    )
}

export default Intro