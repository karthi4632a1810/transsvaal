import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules'; // Use 'swiper/modules' for Swiper 10+

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
function Blog() {
  return (
    <section className='container blog mt-5 py-5'>
        <div className="row align-items-center justify-content-center p-4 my-5">
                <div className="col-lg-6 gap-1 d-flex flex-column flex-colmn">
                    <span className='subtitle'>From the Blog</span>
                    <h2 className='display-5 text-white'>Checkout latest news updates & articles</h2>
                </div>
                <div className="col-lg-6">
                    <p className='opacity-50'>
                    Stay informed with the latest news, updates, and insightful articles from around the world. Whether it's breaking headlines, industry trends, or expert opinions, we've got you covered. Dive into in-depth analyses, stay ahead of the curve, and never miss an important update. Keep exploring to stay updated!</p>
                </div>
            </div>
        <div className="row rounded-3 p-4">
            <div className="col-12">
            <div className="blog-swiper ">
                            <Swiper 
                            className='py-5'
            spaceBetween={30}
            centeredSlides={true}
            slidesPerView={1} // Default slides per view
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            loop={true}
            breakpoints={{
                640: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                },
                1200: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
                1400: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
            }}
            modules={[Navigation, Pagination, Autoplay]} // Pass modules here
        >
            <SwiperSlide>
                <div className='blog-box mt-5 rounded-4 p-3 p-md-4 d-flex flex-column gap-3'>
                   <img className='rounded' src="https://img.freepik.com/free-photo/businessman-using-tablet-analyze-network-growth_9975-22181.jpg?t=st=1739085104~exp=1739088704~hmac=c1d946a5157ca7fe9623c73792ffd2eed62bb297d15da9cecafbe1cf1c5e2cda&w=1060" alt="" />
                   <h4 className='mt-3'>Blog Title Goes Here</h4>
                   <p className='opacity-50'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem eligendi eius maxime voluptatem fugit repellendus ut nisi minus, explicabo numquam?.</p>
                   <a className='blog-link mt-3 d-flex justify-content-center align-items-center' href="#">
                    <span>Discover More</span>
                   </a>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='blog-box mt-5 rounded-4 p-3 p-md-4 d-flex flex-column gap-3'>
                   <img className='rounded' src="https://img.freepik.com/free-photo/businessman-using-tablet-analyze-network-growth_9975-22181.jpg?t=st=1739085104~exp=1739088704~hmac=c1d946a5157ca7fe9623c73792ffd2eed62bb297d15da9cecafbe1cf1c5e2cda&w=1060" alt="" />
                   <h4 className='mt-3'>Blog Title Goes Here</h4>
                   <p className='opacity-50'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem eligendi eius maxime voluptatem fugit repellendus ut nisi minus, explicabo numquam?.</p>
                   <a className='blog-link mt-3 d-flex justify-content-center align-items-center' href="#">
                    <span>Discover More</span>
                   </a>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='blog-box mt-5 rounded-4 p-3 p-md-4 d-flex flex-column gap-3'>
                    <img className='rounded' src="https://img.freepik.com/free-photo/businessman-using-tablet-analyze-network-growth_9975-22181.jpg?t=st=1739085104~exp=1739088704~hmac=c1d946a5157ca7fe9623c73792ffd2eed62bb297d15da9cecafbe1cf1c5e2cda&w=1060" alt="" />
                   <h4 className='mt-3'>Blog Title Goes Here</h4>
                   <p className='opacity-50'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem eligendi eius maxime voluptatem fugit repellendus ut nisi minus, explicabo numquam?.</p>
                   <a className='blog-link mt-3 d-flex justify-content-center align-items-center' href="#">
                    <span>Discover More</span>
                   </a>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='blog-box mt-5 rounded-4 p-3 p-md-4 d-flex flex-column gap-3'>
                   <img className='rounded' src="https://img.freepik.com/free-photo/businessman-using-tablet-analyze-network-growth_9975-22181.jpg?t=st=1739085104~exp=1739088704~hmac=c1d946a5157ca7fe9623c73792ffd2eed62bb297d15da9cecafbe1cf1c5e2cda&w=1060" alt="" />
                   <h4 className='mt-3'>Blog Title Goes Here</h4>
                   <p className='opacity-50'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem eligendi eius maxime voluptatem fugit repellendus ut nisi minus, explicabo numquam?.</p>
                   <a className='blog-link mt-3 d-flex justify-content-center align-items-center' href="#">
                    <span>Discover More</span>
                   </a>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='blog-box mt-5 rounded-4 p-3 p-md-4 d-flex flex-column gap-3'>
                    <img className='rounded' src="https://img.freepik.com/free-photo/businessman-using-tablet-analyze-network-growth_9975-22181.jpg?t=st=1739085104~exp=1739088704~hmac=c1d946a5157ca7fe9623c73792ffd2eed62bb297d15da9cecafbe1cf1c5e2cda&w=1060" alt="" />
                   <h4 className='mt-3'>Blog Title Goes Here</h4>
                   <p className='opacity-50'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem eligendi eius maxime voluptatem fugit repellendus ut nisi minus, explicabo numquam?.</p>
                   <a className='blog-link mt-3 d-flex justify-content-center align-items-center' href="#">
                    <span>Discover More</span>
                   </a>
                </div>
            </SwiperSlide>
           
        </Swiper>
                            </div>
            </div>
        </div>
    </section>
  )
}

export default Blog