import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faGlobe, faWrench } from '@fortawesome/free-solid-svg-icons';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Skills = () => {
    useEffect(() => {
        Aos.init({})
    }, []);

    return (
        <div className="skills">
            <div className="skills-container" data-aos="zoom-in">
                <div data-aos="fade" data-aos-delay="300">
                    <h1 className="heading-text">SKILLS</h1>
                    <div className="subheading">
                        <div className="line"></div>
                        <h2 className="subheading-text blu"><em>why</em></h2>
                        <h2 className="subheading-text"> i can</h2>
                        <div className="line"></div>
                    </div></div>

                <div className="grid-container">
                    <div className="card" data-aos="fade-down" data-aos-delay="400">
                        <h2><FontAwesomeIcon icon={faCode} />Programming Language</h2>
                        <ul>
                            <li>Python</li>
                            <li>Java</li>
                            <li>Javascript</li>
                            <li>C</li>
                            <li>Assembly</li>
                            <li>Bash</li>
                        </ul>
                    </div>
                    <div className="card" data-aos="fade-down" data-aos-delay="500">
                        <h2><FontAwesomeIcon icon={faGlobe} />Web</h2>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>React</li>
                            <li>Bootstrap</li>
                        </ul>
                    </div>
                    <div className="card" data-aos="fade-down" data-aos-delay="600">
                        <h2><FontAwesomeIcon icon={faWrench} />Tools</h2>
                        <ul>
                            <li>GitHub</li>
                            <li>Docker</li>
                            <li>Vim</li>
                            <li>LaTeX</li>
                            <li>Matlab</li>
                            <li>Adobe Creative Cloud</li>
                            <li>Microsoft Office</li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Skills;