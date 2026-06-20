import React from 'react'

function Service() {
    const handleService = (pos, event) => {
        const serviceBg = document.querySelector('.service-bg');
        if (serviceBg) {
            serviceBg.setAttribute('data-pos', pos);
        }
        const serviceItems = document.querySelectorAll('.service-items');
        serviceItems.forEach(item => item.classList.remove('active'));

        const serviceContentItems = document.querySelectorAll('.service-content-item');
        serviceContentItems.forEach(item => item.classList.add('d-none'));

        if (event.currentTarget) {
            event.currentTarget.classList.add('active');
            serviceContentItems[event.currentTarget.getAttribute('data-pos')].classList.remove('d-none');
        }
        
    };
    return (
        <section className='service container'>
            <div className="row align-items-center justify-content-center p-4">
                <div className="col-lg-6 gap-1 d-flex flex-column flex-colmn">
                    <span className='subtitle'>our services</span>
                    <h2 className='display-5 text-white'>Explore what <span className='highlight'>services</span> we’re offering</h2>
                </div>
                <div className="col-lg-6">
                    <p className='opacity-50'>
                        We provide a wide range of passage variations, each uniquely crafted to suit diverse preferences. Most passages feature some form of alteration, incorporating humor or randomized words, ensuring originality and engagement. These variations are designed to captivate readers, offering creative and tailored content that meets different requirements and expectations effectively.</p>
                </div>
            </div>
            <div className="row align-items-center">
                <div className="col-lg-5 py-lg-5 order-lg-1 order-2">
                    <div className="dis-grid d-flex flex-lg-column justify-content-center align-items-center gap-3 gap-lg-5 p-3">
                        <div className="d-flex align-items-center gap-4 service-items  active" data-pos="0" onClick={(event) => handleService(0, event)}>
                            <div className="icon d-flex justify-content-center align-items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 14 14"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="m7.182 3.747l3.857 6.681m-.202-.351l-9.51 2.209L.72 11.23L7.386 4.1" /><path d="m3.396 11.805l.524.906a1.421 1.421 0 1 0 2.455-1.432l-.084-.145m1.153-9.297V.583m4.802 6.057H13.5m-12.111 0h1.253m.519-4.283l.886.887m6.793 0l.886-.887" /></g></svg>
                            </div>
                            <div className="d-none d-lg-flex justify-content-center gap-2 flex-column">
                                <h5 className='m-0'>Digital Marketing</h5>
                                <p className='opacity-50 m-o'>Promotes brands using SEO, social media, and targeted advertising.</p>
                            </div>
                        </div>
                        <div className="d-flex align-items-center gap-4 service-items " data-pos="1" onClick={(event) => handleService(1, event)}>
                            <div className="icon d-flex justify-content-center align-items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m19.17 12l-3.88-3.88a.996.996 0 1 1 1.41-1.41l4.59 4.59c.39.39.39 1.02 0 1.41l-2.88 2.88L17 14.17zM2.1 4.93l3.49 3.49l-2.88 2.88a.996.996 0 0 0 0 1.41L7.3 17.3a.996.996 0 1 0 1.41-1.41L4.83 12L7 9.83L19.07 21.9a.996.996 0 1 0 1.41-1.41L3.51 3.51a.996.996 0 0 0-1.41 0c-.39.4-.39 1.03 0 1.42"/></svg>
                            </div>
                            <div className="d-none d-lg-flex justify-content-center gap-2 flex-column">
                                <h5 className='m-0'>  Web Development</h5>
                                <p className='opacity-50 m-o'> Creates interactive websites using HTML, CSS, and JavaScript frameworks.</p>
                            </div>
                        </div>
                        <div className="d-flex align-items-center gap-4 service-items " data-pos="2" onClick={(event) => handleService(2, event)}>
                            <div className="icon d-flex justify-content-center align-items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491M12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V1.471zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539m-.024-7.51a3.023 3.023 0 0 0-3.019 3.019c0 1.665 1.365 3.019 3.044 3.019c1.705 0 3.093-1.376 3.093-3.068v-2.97zm7.704 0h-.098c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h.098c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49m-.097-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h.098c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019z"/></svg>
                            </div>
                            <div className="d-none d-lg-flex justify-content-center gap-2 flex-column">
                                <h5 className='m-0'> UI/UX Design</h5>
                                <p className='opacity-50 m-o'> Designs intuitive interfaces ensuring seamless, user-friendly digital experiences.</p>
                            </div>
                        </div>
                        <div className="d-flex align-items-center gap-4 service-items " data-pos="3" onClick={(event) => handleService(3, event)}>
                            <div className="icon d-flex justify-content-center align-items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M17 18H7V6h10v1h2V1H5v22h14v-6h-2zm3.38-8.38L21 11l.62-1.38L23 9l-1.38-.62L21 7l-.62 1.38L19 9z"/><path fill="currentColor" d="m16 8l-1.25 2.75L12 12l2.75 1.25L16 16l1.25-2.75L20 12l-2.75-1.25zm5 5l-.62 1.38L19 15l1.38.62L21 17l.62-1.38L23 15l-1.38-.62z"/></svg>
                            </div>
                            <div className="d-none d-lg-flex justify-content-center gap-2 flex-column">
                                <h5 className='m-0'>Mobile Development</h5>
                                <p className='opacity-50 m-o'> Builds smartphone apps with native or cross-platform development tools.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="service-content d-lg-none  mt-5">
                            <div className="service-content-item text-center" >
                                <h5 className='m-0'>Digital Marketing</h5>
                                <p className='opacity-50 m-0'>Promotes brands using SEO, social media, and targeted advertising.</p>
                            </div>
                            <div className="service-content-item text-center d-none" >
                                <h5 className='m-0'>Web Development</h5>
                                <p className='opacity-50 m-0'>Creates interactive websites using HTML, CSS, and JavaScript frameworks.</p>
                            </div>
                            <div className="service-content-item text-center d-none" >
                                <h5 className='m-0'>UI/UX Design</h5>
                                <p className='opacity-50 m-0'>Designs intuitive interfaces ensuring seamless, user-friendly digital experiences.</p>
                            </div>
                            <div className="service-content-item text-center d-none" >
                                <h5 className='m-0'>Mobile Development</h5>
                                <p className='opacity-50 m-0'>Builds smartphone apps with native or cross-platform development tools.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-7 order-lg-2 order-1 d-flex justify-content-center align-items-cente p-lg-5 p-3r">
                    <div className="service-bg"></div>
                </div>
            </div>
        </section>
    )
}

export default Service