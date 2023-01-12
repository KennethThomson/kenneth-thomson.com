import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import 'animate.css';
import resume from '../assets/KennethThomsonResume.pdf'

const Banner = () => {
    return (
        <div className="bg" id="home">
            <div className="banner-text animate__animated animate__flipInX">
                <h1>Hi!</h1>
                <h1>My name is Kenneth.</h1></div>
            <form action={resume} method="get" target="_blank" className="resume-download-form">
            <button className="resume-button animate__animated animate__fadeInDown" type="submit"><FontAwesomeIcon icon={faDownload} className="download" />Click Here to Download Resume</button>
            </form>
        </div>
    );
}

export default Banner;