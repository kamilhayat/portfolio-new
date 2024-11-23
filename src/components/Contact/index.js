import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

 

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">


          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am interested in freelance opportunities. However, if you have any other requests or
            questions, don't hesitate to contact me using below form either.
          </p>
          <div className="contact-form">
            <form
              action="https://formspree.io/f/xnnqbqdb"
              method="POST"
              className="contact-inputs">
              <ul>

                <li>
                  <input
                    type="text"
                    placeholder="username"
                    name="username"
                    required
                    autoComplete="off"
                  />
                </li>
                <li>
                  <input
                    type="email"
                    name="Email"
                    placeholder="Email"
                    autoComplete="off"
                    required
                  />
                </li>
                <li>
                  <textarea
                    name="Message"
                    cols="30"
                    rows="10"
                    required
                    autoComplete="off"
                    placeholder="Enter you message"></textarea>
                </li>
                <li>
                  <input className='btn-send' type="submit" value="send" />
                </li>
              </ul>
            </form>
          </div>
        </div>


      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
