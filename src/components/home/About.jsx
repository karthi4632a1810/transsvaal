import React from 'react'
import aboutImg from '/images/about-us.svg'

function About() {
    return (
        <section className='container my-5 about-us'>
            <div className="row py-5">
                <div className="col-lg-6 p-3 p-lg-5 d-flex justify-content-center align-items-center">
                    <img className='w-100 about-us-img' src={aboutImg}  alt="About Us" />
                </div>
                <div className="col-lg-5 p-3 d-flex flex-column justify-content-center gap-1 p-4">
                    <span className='subtitle'>Who We Are</span>
                    <h1 className='display-5 text-white' >Transvaal Infotech</h1>
                    <p className='opacity-50'>we are more than just an IT solutions provider - we are your partners in innovation and growth. Our company was established with the mission of
                        simplifying technology for businesses, regardless of size or industry. With a forward-thinking mindset and a passion for excellence, we deliver tailored IT solutions that enhance
                        efficiency, productivity, and profitability.</p>
                    <div className="d-flex py-3 gap-1 align-items-center about-list">
                        <div className="icon d-flex justify-content-center align-items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 14 14"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="m7.182 3.747l3.857 6.681m-.202-.351l-9.51 2.209L.72 11.23L7.386 4.1" /><path d="m3.396 11.805l.524.906a1.421 1.421 0 1 0 2.455-1.432l-.084-.145m1.153-9.297V.583m4.802 6.057H13.5m-12.111 0h1.253m.519-4.283l.886.887m6.793 0l.886-.887" /></g></svg>
                        </div>
                        <div className="d-flex flex-column justify-content-center">
                            <h6>Leading in marketing</h6>
                            <p className='opacity-50 m-0'>Knowledge of technologies rules better than anyone which we apply in our daily work</p>
                        </div>
                    </div>
                    <div className="d-flex py-3 gap-1 align-items-center about-list">
                        <div className="icon d-flex justify-content-center align-items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 14 14"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5 .5H1.5a1 1 0 0 0-1 1V5a1 1 0 0 0 1 1H5a1 1 0 0 0 1-1V1.5a1 1 0 0 0-1-1M12.5 8H9a1 1 0 0 0-1 1v3.5a1 1 0 0 0 1 1h3.5a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1M5 8H1.5a1 1 0 0 0-1 1v3.5a1 1 0 0 0 1 1H5a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1m5.75-2V.5M8 3.25h5.5" /></svg>
                        </div>
                        <div className="d-flex flex-column justify-content-center">
                            <h6>Expert developers</h6>
                            <p className='opacity-50 m-0'>Knowledge of technologies rules better than anyone which we apply in our daily work</p>
                        </div>
                    </div>
                    <div className="d-flex flex-column flex-lg-row gap-5 align-items-lg-center mt-4">
                        <div className="d-flex gap-3 align-items-center">
                            <div className="img" ></div>
                            <div className="d-flex flex-column justify-content-center">
                                <h6>Karthikeyan</h6>
                                <p className='m-0'>CO FOUNDER</p>
                            </div>
                        </div>
                        <button
                            className="custom-btn px-3 mx-auto"><a href="https://drive.google.com/file/d/1Ymux6hkGD5FMBdyKUKaukoa5RZy9ag3L/view?usp=drivesdk">Download</a></button>
                        <button
                            className="custom-btn px-3 mx-auto"><a href="/transvaal.apk">Download</a></button>
                    </div>

                </div>
            </div>
        </section >
    )
}

export default About