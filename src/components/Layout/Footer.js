import './Footer.css';
import img1 from '../img/6260efc8fc9a9002669d2f4ad9956cc0.jpg';
import img2 from "../img/Spotify Logo.png";
import img3 from '../img/Facebook Logo.png'
const Footer=()=>{
    return (
        <footer>
        <div className="footer-title">
            The Generics
        </div>
        <div className="footer-icons">
            <ul>
                <li><a href="https://www.youtube.com">
                    <img src={img1} alt=""/>
                </a></li>
                <li><a href="https://spotify.com">
                    <img src={img2} alt=""/>
                </a></li>
                <li><a href="https://facebook.com">
                    <img src={img3} alt=""/>
                </a></li>
            </ul>
        </div>
        </footer>
    );
}
export default Footer;