import React from 'react'
import whyChoouseUsImg from '/images/why-choose-us.svg'

function WhyChooseUs() {
    return (
        <section className='container why-choose-us'>
            <div className="row">
                <div className="col-lg-6 d-flex justify-content-center align-items-center">
                    <img className='w-100' src={whyChoouseUsImg} alt="" />
                </div>
                <div className="col-lg-6 d-flex flex-column justify-content-center gap-1 p-4">
                    <span className='subtitle'>Company Benefits</span>
                    <h2 className='display-5 text-white text-balance'>Why should choose our <span className='highlight'>agency?</span></h2>
                    <span className='fs-4 clr-primary fst-italic'>Experience Excellence, Trust, and Results</span>
                    <p className='opacity-50'>There are many variations of passages of available but the majority have suffered. Alteration in some form, lipsum is simply free text by injected humou or randomised words even believable.</p>
                    <div className="row mt-3 p-2">
                        <div className="why col-lg-4 col-6 d-flex flex-column gap-3 p-4">
                            <div className="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M4 19h4v-8H4zm6 0h4V5h-4zm6 0h4v-6h-4zM2 21V9h6V3h8v8h6v10z" /></svg>
                            </div>
                            <h6>Leader in digital marketing</h6>
                        </div>
                        <div className="why col-lg-4 col-6 d-flex flex-column gap-3 p-4">
                            <div className="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 14 14"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="m9.008 6.709l3.43-1.516v7.672h-3.43zM4.72 4.814l2.144 3.032l2.144-1.137v6.154H4.72z" /><path d="m1.29 6.33l3.43-1.516v8.05H1.29zm12-5.193L7.851 4.613l-2.5-2.923L.878 3.988" /><path d="m10.586.678l2.703.45l-.45 2.704" /></g></svg>
                            </div>
                            <h6>Proven Highest Success Rates</h6>
                        </div>
                        <div className="why col-lg-4 col-12 d-flex flex-column gap-3 p-4">
                            <div className="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" /><path fill="currentColor" d="M19 4.741V8a3 3 0 1 1 0 6v3c0 1.648-1.881 2.589-3.2 1.6l-2.06-1.546A8.66 8.66 0 0 0 10 15.446v2.844a2.71 2.71 0 0 1-5.316.744l-1.57-5.496a4.7 4.7 0 0 1 3.326-7.73l3.018-.168a9.34 9.34 0 0 0 4.19-1.259l2.344-1.368C17.326 2.236 19 3.197 19 4.741M5.634 15.078l.973 3.407A.71.71 0 0 0 8 18.29v-3.01l-1.56-.087a5 5 0 0 1-.806-.115M17 4.741L14.655 6.11A11.3 11.3 0 0 1 10 7.604v5.819c1.787.246 3.488.943 4.94 2.031L17 17zM8 7.724l-1.45.08a2.7 2.7 0 0 0-.17 5.377l.17.015l1.45.08zM19 10v2a1 1 0 0 0 .117-1.993z" /></g></svg>
                            </div>
                            <h6>Effective Quality Marketing Solutions</h6>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default WhyChooseUs