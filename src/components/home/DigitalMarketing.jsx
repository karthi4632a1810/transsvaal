import React, { Component } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules'; // Use 'swiper/modules' for Swiper 10+

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default class DigitalMarketing extends Component {
    render() {
        return (
            <section className="overflow-hidden mb-md-5 py-5">
                <div className="digitalMarketing py-4 container-fluid my-5">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-12 py-3">
                            <div class="marquee">
                                <div class="marquee-group d-flex align-items-center">
                                    <div class="px-5 fs-3 fw-lighter">*Transform ideas into reality</div>
                                    <div class="px-5 fs-3 fw-lighter">*INSPIRED WITH CREATIVITY</div>
                                    <div class="px-5 fs-3 fw-lighter">*Design &amp; development craft</div>
                                    <div class="px-5 fs-3 fw-lighter">*unlock the potential</div>
                                    <div class="px-5 fs-3 fw-lighter">*Transform ideas into reality</div>
                                    <div class="px-5 fs-3 fw-lighter">*Transform ideas into reality</div>
                                    <div class="px-5 fs-3 fw-lighter">*INSPIRED WITH CREATIVITY</div>
                                    <div class="px-5 fs-3 fw-lighter">*Design &amp; development craft</div>
                                    <div class="px-5 fs-3 fw-lighter">*unlock the potential</div>
                                    <div class="px-5 fs-3 fw-lighter">*Transform ideas into reality</div>
                                    <div class="px-5 fs-3 fw-lighter">*Transform ideas into reality</div>
                                    <div class="px-5 fs-3 fw-lighter">*INSPIRED WITH CREATIVITY</div>
                                    <div class="px-5 fs-3 fw-lighter">*Design &amp; development craft</div>
                                    <div class="px-5 fs-3 fw-lighter">*unlock the potential</div>
                                    <div class="px-5 fs-3 fw-lighter">*Transform ideas into reality</div>
                                    <div class="px-5 fs-3 fw-lighter">*Transform ideas into reality</div>
                                    <div class="px-5 fs-3 fw-lighter">*INSPIRED WITH CREATIVITY</div>
                                    <div class="px-5 fs-3 fw-lighter">*Design &amp; development craft</div>
                                    <div class="px-5 fs-3 fw-lighter">*unlock the potential</div>
                                    <div class="px-5 fs-3 fw-lighter">*Transform ideas into reality</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
