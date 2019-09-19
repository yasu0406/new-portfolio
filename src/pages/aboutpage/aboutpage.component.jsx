import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import delighters from '../../delighters';
import './aboutpage.styles.scss';

const About = () => {
    const mouse = () => {
        document.addEventListener("DOMContentLoaded", function(event) { 
            document.querySelector('a').addEventListener('mouseenter', () => {
              document.querySelector('.cursor').classList.add('is-active');
              document.querySelector('.follower').classList.add('is-active');
            });
            document.querySelector('a').addEventListener('mouseleave', () => {
              document.querySelector('.cursor').classList.remove('is-active');
              document.querySelector('.follower').classList.remove('is-active');
            });
          });
      }
    useEffect(
        () => { 
            delighters.init();
            document.querySelector('body').classList.add('about');
            document.querySelector('.cursor').classList.remove('is-active');
            document.querySelector('.follower').classList.remove('is-active');
            mouse();
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
        <p>Hi everyone!<br/>
I’m <span>Yasuhiro Katayama</span>, I’m a Front-End Developer based in Canada.<br/>
I’ve been worked as a Web Development for 4 years,<br/>
Currently, I’m looking for a job in Canada and working a freelance job.<br/>
Love create web apps, mobile apps with React and <span>soccer</span>. </p>
        <ul>
            <li>You can contact me at</li>
            <li><a className='mail-link' href={'mailto:yasucom4646@gmail.com'}>yasucom4646@gmail.com</a></li>
            <li className='sns'><a href='/' target="_blank">LinkedIn</a><a href='/' target="_blank">GitHub</a><a href='/' target="_blank">Resume</a></li>
        </ul>
        <Link className='close-link' to='/'>Close</Link>
    </section>
    </>
)};

export default About;