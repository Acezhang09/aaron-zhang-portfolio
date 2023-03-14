import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedinIn} from '@fortawesome/free-brands-svg-icons'

const Hero = () => (
    <div className="bg-background flex h-screen w-screen items-center">
        <div className='m-auto text-center '>
            <h1 className="text-3xl text-gray-300">Hello, I'm</h1>
            <h1 className="text-7xl font-semibold text-gray-300">AARON ZHANG</h1>
            <p className="text-xl font-bold text-gray-300">Systems Design Engineering Student</p>
            <p className="text-large font-light text-gray-300">Enthusiastic self-learner interested in writing code for social good.</p>
            <div className='flex flex-row justify-center mt-4 gap-10 items-center'>
                <div>
                    <a className="text-white text-xl p-2 hover:bg-light duration-300 text-center rounded-md" href='https://google.com' rel="noreferrer" target="_blank">Resume</a>
                </div> 
                <div>
                    <a className="text-white p-1" href='https://github.com/Acezhang09' rel="noreferrer" target="_blank"><FontAwesomeIcon size='2xl' icon={faGithub} /></a>
                </div> 
                <div>
                    <a className="text-white p-1" href='https://www.linkedin.com/in/aczhang99/' rel="noreferrer" target="_blank"><FontAwesomeIcon size='2xl' icon={faLinkedinIn} /></a>
                </div>
                <div>
                    <a className="text-white p-1" href='mailto:aaron.zhang@uwaterloo.ca' rel="noreferrer" target="_blank"><FontAwesomeIcon size='2xl' icon={faEnvelope} /></a>
                </div> 
            </div>
        </div>
    </div>
);

export default Hero;