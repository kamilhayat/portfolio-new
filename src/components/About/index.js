import { useEffect, useState } from 'react'
import {
  faBootstrap,
  faCss3,
  faHtml5,
  faJsSquare,
  faNode,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            Hi, I'm Kamil Hayat, a skilled front-end developer and B.Tech Computer Science graduate from Jamia Hamdard, New Delhi (Class of 2024). I specialize in creating responsive, user-centric web applications with a keen eye for design and performance.

            My expertise lies in HTML, CSS, JavaScript, and frameworks like React.js, combined with back-end technologies like Node.js and MongoDB to deliver full-stack solutions. I’ve built projects such as a feature-rich e-commerce platform with real-time product updates and a personal portfolio website showcasing seamless navigation and responsiveness.


          </p>
          <p align="LEFT">
            During my internship at Devtown, I collaborated on web applications that improved user experience and optimized application load times by 20%. I enjoy leveraging tools like styled-components, Bootstrap, and Firebase Authentication to create visually stunning and functional websites.

            Whether it's designing intuitive front-end interfaces or integrating robust back-end systems, I’m committed to delivering exceptional results. Explore my portfolio to see how I turn ideas into reality using cutting-edge technologies
          </p>

        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faBootstrap} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faNode} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
