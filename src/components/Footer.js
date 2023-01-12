import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';

const Footer = () => {
    return (
        <div className="footer">
            <p><FontAwesomeIcon icon={faCopyright}></FontAwesomeIcon> 2022 Kenneth Thomson</p>
            <p> Created using React.js</p>
        </div>
    );
}
 
export default Footer;