import './index.scss'
import { useState } from 'react'
import LogoS from '../../assets/images/logo5.png'
import LogoSubtitle from '../../assets/images/logo-name.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
  faInstagram,
  faFacebook,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import {
  faHome,
  faUser,
  faEnvelope,
  faSuitcase,
  faBars,
  faClose,
  faGear,
} from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'

const Sidebar = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className="nav-bar">
      <Link 
        className="logo"
        to="/"
        onClick={() => setShowNav(false)}>
        <img src={LogoS} alt="Logo" />
        <img className="sub-logo" src={LogoSubtitle} alt="slobodan" />
      </Link>
      <nav className={showNav ? 'mobile-show' : ''}>
        <NavLink 
          exact="true"
          activeclassname="active"
          to="/"
          className='home-link'
          onClick={() => setShowNav(false)}>
          <FontAwesomeIcon icon={faHome} color="#b6d4cc" />
        </NavLink>
        <NavLink 
          activeclassname="active"
          className="about-link"
          to="/about"
          onClick={() => setShowNav(false)}>
          <FontAwesomeIcon icon={faUser} color="#b6d4cc" />
        </NavLink>
        <NavLink 
          activeclassname="active"
          className="skills-link"
          to="/skills"
          onClick={() => setShowNav(false)}>
          <FontAwesomeIcon icon={faGear} color="#b6d4cc" />
        </NavLink>
        <NavLink
          activeclassname="active"
          className="portfolio-link"
          to="/portfolio"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faSuitcase} color="#b6d4cc" />
        </NavLink>
        <NavLink
          activeclassname="active"
          className="contact-link"
          to="/contact"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faEnvelope} color="#b6d4cc" />
        </NavLink>
        <FontAwesomeIcon 
          onClick={() => setShowNav(false)}
          icon={faClose}
          color="#ffd700"
          size="3x"
          className='close-icon' />
      </nav>
      <ul>
                <li>
                    <a
                        href="https://www.linkedin.com/in/kamil-hayat"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FontAwesomeIcon
                            icon={faLinkedin}
                            color="#b6d4cc"
                            className="anchor-icon"
                        />
                    </a>
                </li>
                <li>
                    <a
                        href="https://github.com/kamilhayat"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FontAwesomeIcon
                            icon={faGithub}
                            color="#b6d4cc"
                            className="anchor-icon"
                        />
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.facebook.com/kamil.hayat.562?mibextid=ZbWKwL"
                        rel="noreferrer"
                        target="_blank"
                    >
                        <FontAwesomeIcon
                            icon={faFacebook}
                            color="#b6d4cc"
                            className="anchor-icon"
                        />
                    </a>
                </li>
                <li>
                    <a href="https://instagram.com/__kamil___hayat___?igshid=ZDdkNTZiNTM=" rel="noreferrer" target="_blank">
                        <FontAwesomeIcon
                            icon={faInstagram}
                            color="#b6d4cc"
                            className="anchor-icon"
                        />
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com/Kamilhayat19?t=xSKFMpgkbqhcYvbCfO4KaA&s=09" rel="noreferrer" target="_blank">
                        <FontAwesomeIcon
                            icon={faTwitter}
                            color="#b6d4cc"
                            className="anchor-icon"
                        />
                    </a>
                </li>
            </ul>
      <FontAwesomeIcon 
          onClick={() => setShowNav(true)}
          icon={faBars}
          color="#c7b864"
          size="3x"
          className='hamburger-icon' />
    </div>
  )
}

export default Sidebar
