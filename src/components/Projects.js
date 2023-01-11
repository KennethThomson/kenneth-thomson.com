import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import chip8 from '../assets/img/chip8.png'
import secure_login_registration from '../assets/img/secure_login_registration.png'
import chess_visualization from '../assets/img/chess_visualization.png'
import personal_website from '../assets/img/personal_website.png'

const Projects = () => {
    useEffect(() => {
        Aos.init({})
    }, []);

    return (
        <div className="projects">
            <div data-aos="fade-down" className='projects-header'>
                <h1 className="heading-text">PROJECTS</h1>
                <div className="subheading">
                    <div className="line"></div>
                    <h2 className="subheading-text blu"><em>what</em></h2>
                    <h2 className="subheading-text"> i did</h2>
                    <div className="line"></div>
                </div>
            </div>
            <div className="projects-grid">
                <div className="projects-grid-item" data-aos="fade-down" data-aos-delay="400">
                    <img src={chip8}></img>
                    <h2><span>C++</span></h2>
                    <h2><a href="https://github.com/KennethThomson/chip8_emulator" target="_blank">CHIP-8 Emulator</a></h2>
                    <p>Coded an emulator that replicated the functionalities of a CHIP-8, an interpreted programming language.</p>
                    <p>Implemented the memory, registers, stack, stack pointer, timers, keys, display, and all 34 instructional 
opcodes, as well as ROM loading and the fetch, decode, and execute cycle for the CPU.</p>
                </div>
                <div className="projects-grid-item" data-aos="fade-down" data-aos-delay="600">
                    <img src={personal_website}></img>
                    <h2><span>React</span><span>Javascript</span><span>HTML</span><span>CSS</span></h2>
                    <h2><a href="https://github.com/KennethThomson/personal_website" target="_blank">Personal Website</a></h2>
                    <p>Designed a website using Figma and built it using React, a Javascript framework.</p>
                    <p>Made use of various React libraries, HTML, and CSS to style and create effects for the website.</p>
                </div>
                <div className="projects-grid-item" data-aos="fade-down" data-aos-delay="600">
                    <img src={secure_login_registration}></img>
                    <h2><span>HTML</span><span>CSS</span><span>PHP</span><span>MySQL</span></h2>
                    <h2><a href="https://github.com/KennethThomson/secure_login-registration" target="_blank">Secure Login and Registration</a></h2>
                    <p>Designed an interactive website with a secure login and registration system using a web server database.</p>
                    <p>Used prepared SQL queries and password hashing to prevent SQL injections and attacks for better security.</p>
                    <p>Utilized PHP and MySQL to insert and retrieve private information into and from a secure database.</p>
                </div>
                <div className="projects-grid-item" data-aos="fade-down" data-aos-delay="400">
                    <img src={chess_visualization}></img>
                    <h2><span>Python</span></h2>
                    <h2><a href="https://github.com/KennethThomson/chess_visualization" target="_blank">Chess Data Visualization</a></h2>
                    <p>Analysed data from over 20,000 games to derive various conclusions about chess openings and endgames.</p>
                    <p>Extracted and visualized the data using Python and its libraries (NumPy, pandas, Matplotlib, and seaborn).</p>
                </div>
            </div>
        </div>
    );
}

export default Projects;