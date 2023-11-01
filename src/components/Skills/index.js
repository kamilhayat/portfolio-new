import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import "./index.scss";


const Skills = () => {
    const [letterClass, setLetterClass] = useState('text-animate')


    useEffect(() => {
        return setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <>

            <div className="container skills-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['S', 'k', 'i', 'l', 'l', 's', '', '&', '', 'E ', 'x', 'p', 'e', 'r', 'i', 'e', 'n', 'c', 'e']}
                            idx={15}
                        />
                    </h1>
                    <p>
                        I have a strong background in software development as well as web development and am always looking for new challenges to take on. My current skillset includes: <span className='skills'>C++,C, HTML, CSS, JAVASCRIPT, MONGODB, BOOTSTRAP, NODEJS, REACTJS, FIREBASE, GIT/GITHUB, TAILWINDCSS</span>
                    </p>
                    <p align="LEFT">
                        I have a good sense of aesthetics, and experience in rsponsive design, I put special effor into optimizing my code and providing best user experience. I would love to give you any kind of support after the project's completioin.I guarantee a commitment during work.
                    </p>
                    <p>
                        vist my <a className='skills-social' href="https://www.linkedin.com/in/kamil-hayat"
                            target="_blank"
                            rel="noreferrer">Linkedin</a> profile for more details.Also you can checkout my cv on this <a rel="noreferrer" href="https://drive.google.com/file/d/1nHZ6jwIZXmzdE6bbNW9BI28Sd0yxPXiD/view?usp=sharing" target='_blank' className='skills-social'>
                            Link
                        </a>
                    </p>


                </div>
                <div className="skills-charts">
                    <div id="myCanvasContainer">

                        <ul>
                            <li>  C</li>
                            <li>CSS</li>
                            <li>TAILWINDCSS</li>
                            <li>C++</li>
                            <li>NODEJS</li>
                            <li>REACTJS</li>
                            <li>GIT</li>
                            <li>HTML</li>
                            <li>BOOTSTRAP</li>
                            <li>GITHUB</li>
                            <li>MONGODB</li>
                           <li>FIREBASE</li>
                           <li>JAVASCRIPT</li>
                        </ul>

                    </div>
                </div>
                {/* <div className="expe">
                    <ul>
                        <li>Web developer intern @ OasisInfobyte</li>
                        <li>Web developer intern @ InternPe</li>
                        <li>3 months training on full stack developer @Devtown</li>
                        <li>Master class on Reactjs @CeptaInfotech pvt ltd</li>
                        <li>Bootcamp on Dsa with cpp @CeptaInfotech pvt ltd</li>
                       
                    </ul>
                </div> */}



            </div>
            < Loader type="pacman" />
        </>
    )
}


export default Skills