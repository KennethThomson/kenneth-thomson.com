import face from "../assets/img/selfie.JPG"
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const About = () => {
    useEffect(() => {
        Aos.init({once:true})
    }, []);

    return (
        <div className="aboutme">
            <div data-aos="fade-down">
                <h1 className="heading-text">ABOUT ME</h1>
                <div className="subheading">
                    <div className="line"></div>
                    <h2 className="subheading-text blu"><em>who</em></h2>
                    <h2 className="subheading-text"> i am</h2>
                    <div className="line"></div>
                </div>
            </div>
            <div className="container">
                <img src={face} alt="face" data-aos="fade-right"></img>
                <div data-aos="fade-left">
                    <p>Nice to meet you!</p>
                    <p>I'm a junior majoring in Computer Science at Boston University and an international student from Indonesia.</p>
                    <p>I like to be productive by spending my time improving myself. This means you'll often see me doing work, going to the gym or reading a good book. My friends call me a workaholic... but it can't be that <b>bad</b>, right?</p>
                    <p>At Boston University, I've taken courses on <em>computer systems, probability in computing, combinatorics, data structures and algorithms,</em> and many more.</p>
                    <p>I aim to use the skills I've cultivated to work with like-minded ambitious people and create an impact on the people around me.</p>
                </div>
            </div>
        </div>
    );
}

export default About;