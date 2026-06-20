import React from 'react'

function Banner({ title }) {
    return (
        <section className='banner container-fluid p-0 py-5'>
            <div className="row m-0 py-5 my-5">
                <div className="col-12 p-5 d-flex justify-content-center">
                    <h1 data-text={title} className='display-3 text-center'>{title}</h1>
                </div>
            </div>
        </section>
    )
}

export default Banner