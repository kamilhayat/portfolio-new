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
            I am a passionate web developer with more than a year of hands-on experience in creating user-focused
            and visually appealing websites. Currently in the final year of my B.Tech program in computer
            science at Jamia Hamdard, I have a strong foundation in computer science and a keen interest in the
            ever-evolving world of web development, I have a strong passion for technology and a deep interest
            in creating engaging and user-friendly websites.I am eager to learn and grow in this dynamic and
            rapidly evolving industry.
          </p>
          <p align="LEFT">
            As a web developer, I am well-versed in responsive design principles,
            ensuring that websites are optimized for different devices and screen sizes. I am a quick learner,
            adaptable, and possess excellent communication skills, both written and verbal
            In my free time, I enjoy exploring new web development techniques, reading blogs, and experimenting
            with personal projects. I am excited about the opportunities that lie ahead in my career as a web
            developer and look forward to contributing my skills and knowledge to create innovative and
            impactful web solutions.
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
