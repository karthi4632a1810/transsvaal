import React from 'react'
import introVideo from '/video/transvaal-intro.mp4'

function SliderBanner() {
    return (
        <section className='SlideBanner mt-md-0 mt-5 pt-0'>
            <video className='w-100' muted autoPlay loop src={introVideo}></video>
        </section>
    )
}

export default SliderBanner