import React, { useState } from 'react';
import Cta from '/images/cta-frame.svg';

function CallToAction() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: 'Digital Marketing'
    });

    const botToken = "7705611985:AAHgqolW_zjqLOezUaB1TtJf1xdQ2-rAkDA";
    const chatId = "-1002266213746";  // Replace with your actual group ID

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        document.querySelector("[type='submit']").classList.add("loading");
        const cta = document.querySelector(".cta"); 

        const message = `
        🚀 *New Inquiry from Website* 🚀\n👤 *Name:* ${formData.name}\n📧 *Email:* ${formData.email}\n📞 *Phone:* ${formData.phone}\n💼 *Service:* ${formData.service}        `;

        const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

        try {
            await fetch(url, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    chat_id: chatId,
                    text: message,
                    parse_mode: "Markdown"
                })
            });
            setTimeout(() => {
                cta.classList.add("sended");
            }, 1000);
        } catch (error) {
            console.error("Error sending message:", error);
            alert("Failed to send message!");
        }
    };

    return (
        <section className='container cta py-5 my-lg-5'>
            <div className="row align-items-center">
                <div className="col-lg-9 cta-img col-xl-6 p-4">
                    <img className='w-100' src={Cta} alt="" />
                    <div className="cta-character"></div>
                    <div className="mobile-frame p-4 pt-5 d-flex flex-column">
                        <h5>Trasvaal Form</h5>
                        <form onSubmit={handleSubmit}>
                            <div className="form-floating mb-3 mt-4">
                                <input required pattern='^\w+(.*?)' type="text" className="form-control" id="cta-name" name="name" placeholder="Your Name" onChange={handleChange} />
                                <label htmlFor="cta-name">Your Name</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input required pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}" type="email" className="form-control" id="cta-email" name="email" placeholder="name@example.com" onChange={handleChange} />
                                <label htmlFor="cta-email">Email address</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input required pattern="\d{10,}" type="tel" className="form-control" id="cta-num" name="phone" placeholder="Your Phone" onChange={handleChange} />
                                <label htmlFor="cta-num">Your Phone</label>
                            </div>
                            <div className="form-floating mb-3">
                                <select className="form-select" id="cta-select" name="service" onChange={handleChange}>
                                    <option value="Digital Marketing">Digital Marketing</option>
                                    <option value="Web Development">Web Development</option>
                                    <option value="UI/UX Design">UI/UX Design</option>
                                    <option value="Mobile Application">Mobile Application</option>
                                </select>
                                <label htmlFor="cta-select">Services</label>
                            </div>
                            <button type="submit" className="custom-btn px-3 w-100 mt-auto mb-4"><span>Submit</span></button>
                        </form>
                    </div>
                    <div className="left-hand"></div>
                </div>
                <div className="col-lg-6 p-4 d-flex flex-column justify-content-center gap-1">
                    <span className='subtitle'>Get in Touch</span>
                    <h1 className='display-5 text-white'>Stay Connected & Take the Next Step</h1>
                    <p className='opacity-50'>Have questions or ready to get started? Fill out the form and let us know how we can help. Whether it's inquiries, collaborations, or support, we're here for you. Submit your details, and our team will reach out to you shortly!</p>
                </div>
            </div>
        </section>
    );
}

export default CallToAction;
