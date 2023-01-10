import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap, faStar, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import uob_logo from '../assets/img/UOB_logo.png';
import sis_logo from '../assets/img/SIS_logo.png';
import bu_logo from '../assets/img/BU_logo.png';

const Experience = () => {
    useEffect(() => {
        Aos.init({})
    }, []);

    return (
        <div className="experience">
            <div data-aos="fade-down" className='experience-header'>
                <h1 className="heading-text">EXPERIENCES</h1>
                <div className="subheading">
                    <div className="line"></div>
                    <h2 className="subheading-text blu"><em>where</em></h2>
                    <h2 className="subheading-text"> i was</h2>
                    <div className="line"></div>
                </div>
            </div>
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="September 2020 - Present"
                    contentStyle={{ background: '#660708', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid #660708' }}
                    iconStyle={{ background: '#660708', color: '#fff' }}
                    icon={<FontAwesomeIcon icon={faGraduationCap} />}>
                    <div className="main-info">
                        <img src={bu_logo} id="bu"></img>
                        <div className="main-info-text">
                            <h3 className="vertical-timeline-element-title">Boston University</h3>
                            <h4 className="vertical-timeline-element-subtitle"><FontAwesomeIcon icon={faLocationDot} /> Boston, MA</h4>
                        </div>
                    </div>
                    <p><b>BA in Computer Science</b> <em>Cumulative GPA: 3.49/4.00</em></p>
                    <p><b>Expected Graduation:</b> May 2024</p>
                    <p><b>Honors:</b> Dean's List (3 Semesters)</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="June 2022 - August 2022"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<FontAwesomeIcon icon={faBriefcase} />}>
                    <div class="main-info">
                        <img src={uob_logo} id="uob"></img>
                        <div className="main-info-text"><h3 className="vertical-timeline-element-title">United Overseas Bank</h3>
                            <h4 className="vertical-timeline-element-subtitle"><FontAwesomeIcon icon={faLocationDot} /> Jakarta, Indonesia</h4>
                        </div>
                    </div>
                    <p>
                        <b>UOB is a Singaporean multinational banking corporation ranked third in Southeast Asia</b> <a href="http://www.uob.com" target="_blank">(www.uob.com)</a>
                        <p>▪ Utilized Python and its libraries (NumPy, pandas, Matplotlib, and seaborn) to extract and visualize big data.</p> 
                        <p>▪ Researched, wrote, and published reports on how conditions affect economic indicators in Indonesia.</p>
                        <p>▪ Developed essential soft skills in the modern workplace such as leadership, communication, time 
                                management, conflict resolution and more.</p>
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="July 2018 - July 2020"
                    contentStyle={{ background: '#660708', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  #660708' }}
                    iconStyle={{ background: '#660708', color: '#fff' }}
                    icon={<FontAwesomeIcon icon={faGraduationCap} />}>
                    <div className="main-info">
                        <img src={sis_logo} id="sis"></img>
                        <div className="main-info-text">
                            <h3 className="vertical-timeline-element-title">SIS Kelapa Gading</h3>
                            <h4 className="vertical-timeline-element-subtitle"><FontAwesomeIcon icon={faLocationDot} /> Jakarta, Indonesia</h4>
                        </div>
                    </div>
                    <p>
                        <b>International Baccalaureate</b>  <em>Final Grade: 39/45</em></p>
                        <p><b>Honors:</b> Salutatorian
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                    icon={<FontAwesomeIcon icon={faStar} />} />
            </VerticalTimeline>
        </div >
    );
}

export default Experience;