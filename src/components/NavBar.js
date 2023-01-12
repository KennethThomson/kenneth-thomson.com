import { Link } from "react-scroll";

const NavBar = () => {
    return (
        <div className="navbar">
            <ul>
                <li><Link to="home" spy={true} smooth={true} offset={50} duration={500}>HOME</Link></li>
                <li><Link to="about" spy={true} smooth={true} offset={50} duration={500}>ABOUT</Link></li>
                <li><Link to="skills" spy={true} smooth={true} offset={50} duration={500}>SKILLS</Link></li>
                <li><Link to="experiences" spy={true} smooth={true} offset={50} duration={500}>EXPERIENCES</Link></li>
                <li><Link to="projects" spy={true} smooth={true} offset={50} duration={500}>PROJECTS</Link></li>
                <li><Link to="contact" spy={true} smooth={true} offset={50} duration={500}>CONTACT</Link></li>
            </ul>
        </div>
    );
}
 
export default NavBar;