import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import 'animate.css';

const Banner = () => {
    return (
        <div className="bg">
            <div className="banner-text animate__animated animate__flipInX">
            <h1>Hi!</h1>
            <h1>My name is Kenneth.</h1></div>
            <button className="resume-button animate__animated animate__fadeInDown" ><FontAwesomeIcon icon={faDownload} className="download"/> Click Here to Download Resume</button>
        </div>
    );
}

export default Banner;