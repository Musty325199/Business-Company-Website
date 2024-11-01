
import '../../Components/Footer/Footer.css';
import About from '../../Pages/About/About';
import whatsapp_icon from '../../assets/whatsapp-icon.png';
import twitter_icon from '../../assets/twitter-icon.png';





const Footer = () => {
  return (
    <div className='footer'>
        <div className="company-details">
        <h4 className='logo'><a href="#"> JAMES CONSULTING</a></h4>
            <p className="address">500 Terry Francine Street, San Francisco, CA 94158</p>
            <p className="email">Mail: info@mysite.com</p>
            <p className="phone">Tel: 123-456-7890</p>
        </div>

        <div className="footer-menu">
            <ul className="footer-menu-links">
            <h5 className='text-uppercase'>menu</h5>
                <li><a href="/about" to={<About/>}> About</a></li>
                <li><a href="/projects">Projects</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/plan">Plans & Pricings</a></li>
                <li><a href="/tools">Tools & Tips</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </div>

        <div className="footer-socials">
            <h5 className='text-uppercase'>Socials</h5>
            <div className="social-links">
                <a href=""><img src={whatsapp_icon} alt="" /></a>
                <a href=""> <img src={twitter_icon} alt="" /></a>
            </div>
            <div className="footer-owner">
                <p style={{fontSize:'0.8rem'}}>© 2035 by JAMES CONSULTING.</p>
                <p style={{fontSize:'0.8rem'}}>Developed by Musty</p>
            </div>
        </div>
    </div>
  )
}

export default Footer