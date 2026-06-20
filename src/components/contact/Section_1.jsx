import React from 'react'
import aboutImg from '/images/story.svg'

function Section_1() {
    return (
        <section className='container mt-5 pt-5 overflow-hidden'>
            <div className="row justify-content-center">
                <div className="col-lg-8 p-3 d-flex align-items-center flex-column justify-content-center gap-1 p-4">
                    <span className='subtitle text-center'>Contact Us</span>
                    <h2 className='display-5 text-white text-center text-balance' >Let’s Build Something Great Together!</h2>
                    <p className='opacity-50 text-center'>At <strong className='clr-primary'>Transvaal Infotech</strong>, we’re always ready to connect, collaborate, and create. Whether you have a question, need expert advice, or want to discuss a project, our team is here to help.</p>
                </div>
                <div className="col-lg-12 p-3 p-lg-5 d-flex flex-column flex-lg-row justify-content-center align-items-center gap-3">
                    <div className="puz rounded-4 d-flex flex-column gap-5 justify-content-center align-items-center">
                        <div className="icon display-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke-dasharray="64" stroke-dashoffset="64" d="M8 3c0.5 0 2.5 4.5 2.5 5c0 1 -1.5 2 -2 3c-0.5 1 0.5 2 1.5 3c0.39 0.39 2 2 3 1.5c1 -0.5 2 -2 3 -2c0.5 0 5 2 5 2.5c0 2 -1.5 3.5 -3 4c-1.5 0.5 -2.5 0.5 -4.5 0c-2 -0.5 -3.5 -1 -6 -3.5c-2.5 -2.5 -3 -4 -3.5 -6c-0.5 -2 -0.5 -3 0 -4.5c0.5 -1.5 2 -3 4 -3Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0" /><animateTransform id="lineMdPhoneCallLoop0" fill="freeze" attributeName="transform" begin="0.6s;lineMdPhoneCallLoop0.begin+2.7s" dur="0.5s" type="rotate" values="0 12 12;15 12 12;0 12 12;-12 12 12;0 12 12;12 12 12;0 12 12;-15 12 12;0 12 12" /></path><path stroke-dasharray="4" stroke-dashoffset="4" d="M15.76 8.28c-0.5 -0.51 -1.1 -0.93 -1.76 -1.24M15.76 8.28c0.49 0.49 0.9 1.08 1.2 1.72"><animate fill="freeze" attributeName="stroke-dashoffset" begin="lineMdPhoneCallLoop0.begin+0s" dur="2.7s" keyTimes="0;0.111;0.259;0.37;1" values="4;0;0;4;4" /></path><path stroke-dasharray="6" stroke-dashoffset="6" d="M18.67 5.35c-1 -1 -2.26 -1.73 -3.67 -2.1M18.67 5.35c0.99 1 1.72 2.25 2.08 3.65"><animate fill="freeze" attributeName="stroke-dashoffset" begin="lineMdPhoneCallLoop0.begin+0.2s" dur="2.7s" keyTimes="0;0.074;0.185;0.333;0.444;1" values="6;6;0;0;6;6" /></path></g></svg>
                        </div>
                        <p className='fs-4'><a className='d-flex flex-column align-items-end' href="tel:+917010413271">+91 70104 13271 <span className='small-font opacity-50'>Call Now</span></a></p>
                    </div>
                    <div className="puz rounded-4 d-flex flex-column gap-4 justify-content-center align-items-center">
                        <div className="icon display-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"><path stroke-linecap="round" d="M2 11.083a4 4 0 0 1 1.706-3.277l6-4.2a4 4 0 0 1 4.588 0l6 4.2A4 4 0 0 1 22 11.083V19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2z" /><path d="m2.5 9.5l7.001 5.501a4 4 0 0 0 4.998 0L21.5 9.5" /></g></svg>
                        </div>
                        <p className='fs-5'><a className='d-flex flex-column align-items-end' href="mailto:transvaalinfotechpvtltd@gmail.com">transvaalinfotechpvtltd <span className='small-font opacity-50'>@gmail.com</span></a></p>
                    </div>
                    <div className="puz rounded-4 d-flex flex-column gap-4 justify-content-center align-items-center ">
                        <div className="icon display-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 12q.825 0 1.413-.587T14 10t-.587-1.412T12 8t-1.412.588T10 10t.588 1.413T12 12m0 7.35q3.05-2.8 4.525-5.087T18 10.2q0-2.725-1.737-4.462T12 4T7.738 5.738T6 10.2q0 1.775 1.475 4.063T12 19.35M12 22q-4.025-3.425-6.012-6.362T4 10.2q0-3.75 2.413-5.975T12 2t5.588 2.225T20 10.2q0 2.5-1.987 5.438T12 22m0-12"/></svg>
                        </div>
                        <p className='fs-6 text-center'><a className='d-flex flex-column align-items-center' href="#">No : 11/5 kalaingar Nagar 3rd street Tharamani  <span className='small-font opacity-50'>Chennai - 600113</span></a></p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section_1
