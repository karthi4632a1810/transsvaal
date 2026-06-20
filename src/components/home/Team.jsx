import React from 'react'

function Team() {
    return (
        <section className='container team'>
            <div className="row align-items-center justify-content-center p-4">
                <div className="col-lg-6 gap-1 d-flex flex-column flex-colmn">
                    <span className='subtitle'>Meet Our Team</span>
                    <h2 className='display-5 text-white'>The People Behind Our Success</h2>
                </div>
                <div className="col-lg-6">
                    <p className='opacity-50'>
                        Our team is a dynamic blend of talented individuals, each bringing unique skills and creativity to the table. With a shared passion for innovation and excellence, we collaborate to turn ideas into reality. Every team member plays a crucial role in delivering high-quality solutions, ensuring a seamless experience and outstanding results. Get to know the minds driving our success!</p>
                </div>
            </div>
            <div className="row p-md-5 pe-5">
                <div className="col-12 col-lg-4 team-box">
                    <div className="team-profile d-flex flex-column p-5 gap-1">
                        <h4 className='mt-auto ps-5'>Emma Watson</h4>
                        <p className='ps-5'>Co Founder</p>
                        <div className="d-flex socials">
                        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none"><g clip-path="url(#akarIconsFacebookFill0)"><path fill="currentColor" fill-rule="evenodd" d="M0 12.067C0 18.034 4.333 22.994 10 24v-8.667H7V12h3V9.333c0-3 1.933-4.666 4.667-4.666c.866 0 1.8.133 2.666.266V8H15.8c-1.467 0-1.8.733-1.8 1.667V12h3.2l-.533 3.333H14V24c5.667-1.006 10-5.966 10-11.933C24 5.43 18.6 0 12 0S0 5.43 0 12.067" clip-rule="evenodd"/></g><defs><clipPath id="akarIconsFacebookFill0"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs></g></svg></a>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-4 team-box">
                    <div className="team-profile d-flex flex-column p-5 gap-1">
                        <h4 className='mt-auto ps-5'>Daniel Radcliffe</h4>
                        <p className='ps-5'>Developer</p>
                        <div className="d-flex socials">

                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-4 team-box">
                    <div className="team-profile d-flex flex-column p-5 gap-1">
                        <h4 className='mt-auto ps-5'>Bonnie Wright</h4>
                        <p className='ps-5'>Ui/UX Desiger</p>
                        <div className="d-flex socials">

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Team