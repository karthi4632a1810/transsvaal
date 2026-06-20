import React from 'react'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
function Testimonial() {
    const handleNextBtnTestimoial = (e) => {
        const testimonials = document.querySelectorAll('.testimonials');
        let activeIndex = Array.from(testimonials).findIndex(testimonial => testimonial.classList.contains('active'));

        testimonials[activeIndex].classList.remove('active');
        activeIndex = (activeIndex + 1) % testimonials.length;
        testimonials[activeIndex].classList.add('active');

        let name = testimonials[activeIndex].getAttribute('data-name');
        let img = testimonials[activeIndex].getAttribute('data-img');
        document.querySelector('.profile').style.backgroundImage = img;
        document.querySelector('.profile').setAttribute('data-name', name);
    
    }
    const handlePrevBtnTestimoial = (e) => {
        const testimonials = document.querySelectorAll('.testimonials');
        let activeIndex = Array.from(testimonials).findIndex(testimonial => testimonial.classList.contains('active'));

        testimonials[activeIndex].classList.remove('active');
        activeIndex = (activeIndex - 1 + testimonials.length) % testimonials.length;
        testimonials[activeIndex].classList.add('active');

        let name = testimonials[activeIndex].getAttribute('data-name');
        let img = testimonials[activeIndex].getAttribute('data-img');
        document.querySelector('.profile').style.backgroundImage = img;
        document.querySelector('.profile').setAttribute('data-name', name);
    }
    const handleTestimonial = (e) => {
        const testimonials = document.querySelectorAll('.testimonials');
        testimonials.forEach(testimonial => {
            testimonial.classList.remove('active');
        })
        let pos = e.target.getAttribute('data-pos');
        testimonials[pos].classList.add('active');

        let name = e.target.getAttribute('data-name');
        let img = e.target.getAttribute('data-img');
        document.querySelector('.profile').style.backgroundImage = img;
        document.querySelector('.profile').setAttribute('data-name', name);
    }
    return (
        <section className='container testimoial py-5 my-5 overflow-hidden'>
            <div className="row pb-5">
                <div className="col-lg-3 order-2 order-lg-1 col-6">
                    <div className="testimonial-img">
                        <div className="liee"></div>
                        <div style={{ "--bg": "url(https://www.emmawatson.net/wp-content/uploads/2021/11/thumb2-emma-watson-british-actress-portrait-face-photoshoot.jpg)" }} data-name="Emma Wartson" className="profile"></div>
                        <div className="testimonials-box rounded-3 ps-3 pt-3">
                            <div data-name="Emma Watson" data-img="url(https://www.emmawatson.net/wp-content/uploads/2021/11/thumb2-emma-watson-british-actress-portrait-face-photoshoot.jpg)" className='testimonials active p-4 p-lg-5  flex-column gap-2'>
                                <div className="stars" style={{ "--rating": 4.5 }}></div>
                                <p><span className='opacity-50'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem eligendi eius maxime voluptatem fugit repellendus ut nisi minus, explicabo numquam?.</span></p>
                            </div>
                            <div data-name="The Rock" data-img="url(https://images.thedirect.com/media/photos/johnr.jpg)" className='testimonials p-4 p-lg-5  flex-column gap-2'>
                                <div className="stars" style={{ "--rating": 4.5 }}></div>
                                <p > <span className='opacity-50'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem eligendi eius maxime voluptatem fugit repellendus ut nisi minus, explicabo numquam?.</span></p>
                            </div>
                            <div data-name="Deadpool" data-img="url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcFkTJ0dmfW2WIRktJr6J3rM7rTcm9yV-UBA&s)" className='testimonials p-4 p-lg-5  flex-column gap-2'>
                                <div className="stars" style={{ "--rating": 4.5 }}></div>
                                <p > <span className='opacity-50'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem eligendi eius maxime voluptatem fugit repellendus ut nisi minus, explicabo numquam?.</span></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-5 order-1 order-lg-2 offset-lg-4 d-flex flex-column justify-content-center gap-1 p-4">
                    <span className='subtitle'>Our feedbacks</span>
                    <h2 className='display-5 text-white text-balance'>
                        What 
                        they’re 
                        talking?</h2>
                    <p className='opacity-50'> Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean solldin, lorem is simply free text quis bibendum.</p>
                    <div className="d-flex gap-3 mt-5 align-items-center">
                        <div data-name="Emma Watson" data-img="url(https://www.emmawatson.net/wp-content/uploads/2021/11/thumb2-emma-watson-british-actress-portrait-face-photoshoot.jpg)" data-pos="0" onClick={(e)=> handleTestimonial(e)} title="Emma Watson" style={{"--bg":"url(https://www.emmawatson.net/wp-content/uploads/2021/11/thumb2-emma-watson-british-actress-portrait-face-photoshoot.jpg)"}} className="profile-img btn"></div>
                        <div data-name="The Rock" data-img="url(https://images.thedirect.com/media/photos/johnr.jpg)" data-pos="1" onClick={(e)=> handleTestimonial(e)} title="The Rock" style={{"--bg":"url(https://images.thedirect.com/media/photos/johnr.jpg)"}} className="profile-img btn"></div>
                        <div data-name="Deadpool" data-img="url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcFkTJ0dmfW2WIRktJr6J3rM7rTcm9yV-UBA&s)" data-pos="2" onClick={(e)=> handleTestimonial(e)} title="Deadpool" style={{"--bg":"url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcFkTJ0dmfW2WIRktJr6J3rM7rTcm9yV-UBA&s)"}} className="profile-img btn"></div>
                        <a href="#" className='fs-5 d-flex justify-content-center align-items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 21q-.425 0-.712-.288T11 20v-7H4q-.425 0-.712-.288T3 12t.288-.712T4 11h7V4q0-.425.288-.712T12 3t.713.288T13 4v7h7q.425 0 .713.288T21 12t-.288.713T20 13h-7v7q0 .425-.288.713T12 21"/></svg>
                        </a>
                    </div>
                    <div className="d-flex justify-content-md-start justify-content-end align-items-center gap-3 mt-5 mt-md-3">
                        <button onClick={(e) => handlePrevBtnTestimoial(e)} className="custom-btn fs-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="em" viewBox="0 0 24 24"><path fill="currentColor" d="m9.55 12l7.35 7.35q.375.375.363.875t-.388.875t-.875.375t-.875-.375l-7.7-7.675q-.3-.3-.45-.675t-.15-.75t.15-.75t.45-.675l7.7-7.7q.375-.375.888-.363t.887.388t.375.875t-.375.875z"/></svg>
                        </button>
                        <button onClick={(e) => handleNextBtnTestimoial(e)} className="custom-btn fs-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m14.475 12l-7.35-7.35q-.375-.375-.363-.888t.388-.887t.888-.375t.887.375l7.675 7.7q.3.3.45.675t.15.75t-.15.75t-.45.675l-7.7 7.7q-.375.375-.875.363T7.15 21.1t-.375-.888t.375-.887z"/></svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonial