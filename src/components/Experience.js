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
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
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
                        <div className="main-info-text"><h3 className="vertical-timeline-element-title">UOB</h3>
                            <h4 className="vertical-timeline-element-subtitle"><FontAwesomeIcon icon={faLocationDot} /> Jakarta, Indonesia</h4>
                        </div>
                    </div>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="July 2018 - July 2020"
                    contentStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(233, 30, 99)' }}
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    icon={<FontAwesomeIcon icon={faGraduationCap} />}>
                    <div className="main-info">
                        <img src={sis_logo} id="sis"></img>
                        <div className="main-info-text">
                            <h3 className="vertical-timeline-element-title">SIS Kelapa Gading</h3>
                            <h4 className="vertical-timeline-element-subtitle"><FontAwesomeIcon icon={faLocationDot} /> Jakarta, Indonesia</h4>
                        </div></div><p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
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