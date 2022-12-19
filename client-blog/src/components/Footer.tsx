import { Link } from 'react-router-dom'
import logo from "../img/omnifood-logo.png"
import {AiOutlineInstagram } from 'react-icons/ai'
import { FaFacebook } from 'react-icons/fa'
import { BsTwitter } from 'react-icons/bs'
import '../css/general.css'
import '../css/style.css'
import '../css/queries.css'

const Footer = ()=>{
  return (
    <footer className="footer">
      <div className="container grid grid--footer">
        <div className="logo-col">
          <Link to="#" className="footer-logo">
            <img className="logo" src={logo} alt="ronewa logo"/>
          </Link>

          <ul className="social-links">
            <li>
              <Link className="footer-link" to="#"><AiOutlineInstagram className="social-icon" name="logo-instagram" /></Link>
            </li>
            <li>
              <Link className="footer-link" to="#"><FaFacebook className="social-icon" name="logo-facebook"></FaFacebook></Link>
            </li>
            <li>
              <Link className="footer-link" to="#"><BsTwitter className="social-icon" name="logo-twitter"></BsTwitter></Link>
            </li>
          </ul>

          <p className="copyright">
            Copyright &copy; <span className="year">2022</span> by Ronewa, Inc.
            All rights reserved.
          </p>
        </div>
        <div className="address-col">
          <p className="footer-heading">Contact us</p>
          <address className="contact">
            <p className="address">
              190 Scheiding St., 2nd Floor, Pretoria, ZA 0002
            </p>
            <p>
              <a className="footer-link" href="tel:2778-667-1901">2778-667-1901</a>
              <br />
              <a className="footer-link" href="mailto:hello@ronewa.com">
                hello@ronewa.com
              </a>
            </p>
          </address>
        </div>
        <nav className="nav-col">
          <p className="footer-heading">Account</p>
          <ul className="footer-nav">
            <li><Link className="footer-link" to="#">Create account</Link></li>
            <li><Link className="footer-link" to="#">Sign in</Link></li>
            <li><Link className="footer-link" to="#">iOS app</Link></li>
            <li><Link className="footer-link" to="#">Android app</Link></li>
          </ul>
        </nav>
        <nav className="nav-col">
          <p className="footer-heading">Company</p>
          <ul className="footer-nav">
            <li><Link className="footer-link" to="#">About Omnifood</Link></li>
            <li><Link className="footer-link" to="#">For Business</Link></li>
            <li><Link className="footer-link" to="#">Cooking partners</Link></li>
            <li><Link className="footer-link" to="#">Careers</Link></li>
          </ul>
        </nav>
        <nav className="nav-col">
          <p className="footer-heading">Resourcers</p>
          <ul className="footer-nav">
            <li><Link className="footer-link" to="#">Recipe directory</Link></li>
            <li><Link className="footer-link" to="#">Help center</Link></li>
            <li><Link className="footer-link" to="#">Privacy & terms</Link></li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}
export default Footer;