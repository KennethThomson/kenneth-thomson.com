import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { useRef } from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {
    useEffect(() => {
        Aos.init({})
    }, []);

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_nq7ijib', 'template_t7yzfoh', form.current, 'MV2QhJM_3X_xWy_WA')
        .then((result) => {
            alert(result.text);
        }, (error) => {
            alert(error.text);
        });
    }
    
    return (
        <div className="contact" id="contact">
            <div data-aos="fade-down" className='contact-header'>
                <h1 className="heading-text">CONTACT</h1>
                <div className="subheading">
                    <div className="line"></div>
                    <h2 className="subheading-text blu"><em>how</em></h2>
                    <h2 className="subheading-text"> we connect</h2>
                    <div className="line"></div>
                </div>
            </div>
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name="from_name" placeholder="Name" required data-aos="zoom-in" data-aos-delay="400"/>
                <input type="email" name="from_email" placeholder="Email" required data-aos="zoom-in" data-aos-delay="600"/>
                <textarea name="message" placeholder="Message" required data-aos="zoom-in" data-aos-delay="800"/>
                <input type="submit" value="SEND" data-aos="zoom-in" data-aos-delay="1000"/>
            </form>
        </div>);
}
 
export default Contact;