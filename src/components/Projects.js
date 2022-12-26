import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Projects = () => {
    useEffect(() => {
        Aos.init({})
    }, []);

    return (
        <div className="projects">
            <div data-aos="fade-down" className='projects-header'>
                <h1 className="heading-text">Projects</h1>
                <div className="subheading">
                    <div className="line"></div>
                    <h2 className="subheading-text blu"><em>what</em></h2>
                    <h2 className="subheading-text"> i did</h2>
                    <div className="line"></div>
                </div>
            </div>
        </div>
    );
}

export default Projects;