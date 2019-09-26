import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { mousePointer } from '../../main';
 
import './aboutpage.styles.scss';

const About = () => {
    useEffect(
        () => { 
            document.querySelector('body').classList.add('about');
            mousePointer();
            return () => {
                document.querySelector('body').classList.remove('about');
                document.querySelector('.load-animation').classList.remove('started');
                document.querySelector('.load-animation').classList.remove('ended');
            };
        },
        []);
    return(
    <>
    <section>
        <p className='animated animatedFadeInUp fadeInUp'>Hi everyone!<br/>
I’m <span>Yasuhiro Katayama</span>, I’m a Front-End Developer based in Canada.<br/>
I’ve been working as a Web Development for 4 years,<br/>
Currently, I’m looking for a job in Canada and working a freelance job.<br/>
Love create web apps, mobile apps with React and <span>soccer</span>. </p>
        <ul className='animated animatedFadeInUp fadeInUp'>
            <li>You can contact me at</li>
            <li><a className='mail-link' href={'mailto:yasucom4646@gmail.com'}>yasucom4646@gmail.com</a></li>
            <li className='sns'><a rel="noreferrer noopener" href='https://www.linkedin.com/in/yasuhiro-katayama-118423160/' target="_blank">LinkedIn</a><a rel="noreferrer noopener" href='https://github.com/yasu0406' target="_blank">GitHub</a><a rel="noreferrer noopener" href='/images/resume.pdf' target="_blank">Resume</a></li>
        </ul>
        <Link className='close-link animated animatedFadeInUp fadeInUp' to='/'>Close</Link>
    </section>
    </>
)};

export default About;