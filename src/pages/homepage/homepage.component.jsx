import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import ProjectsPreview from '../../components/projects-preview/projects-preview.component';
import delighters from '../../delighters';
import './homepage.styles.scss';

const Home = () => {
    const mouse = () => {
        var hoverLink = document.querySelectorAll('a');
        Array.from(hoverLink).forEach(link => {
            link.addEventListener('mouseenter', function(event) {
              document.querySelector('.cursor').classList.add('is-active');
              document.querySelector('.follower').classList.add('is-active');
            });
            link.addEventListener('mouseleave', () => {
              document.querySelector('.cursor').classList.remove('is-active');
              document.querySelector('.follower').classList.remove('is-active');
            });
        });
      }
    useEffect(()=> {
        delighters.init();
        document.querySelector('body').classList.add('home');
        if(document.querySelector('.is-active')) {
            document.querySelector('.cursor').classList.remove('is-active');
            document.querySelector('.follower').classList.remove('is-active');
        }
        mouse();
        return () => {
            document.querySelector('body').classList.remove('home');
        }
    },[]);
    return (
        <>
        <nav>
            <ul className='animated animatedFadeInUp fadeInUp'>
                <li><Link className='red-link'to='/about'>About Me</Link></li>
                <li><Link className='red-link' to='/projects'>ALL PROJECTS</Link></li>
            </ul>
        </nav>
        <div className='main-visual'>
            <div className='yasu-info'>
                <h1 className='animated animatedFadeInUp fadeInUp'>I am Yasu</h1>
                <h2 className='animated animatedFadeInUp fadeInUp'>Front-End Developer</h2>
                <p className='animated animatedFadeInUp fadeInUp'>4+ years of experience.<br/>Specialized in React and Word Press.</p>
            </div>
            <div className='red-circle'>
                <img src="/images/yasu.png" alt=""/>
            </div>
            <div className='bottom-box animated animatedFadeInUp fadeInUp'>
                <p className='text-red' >SCROLL TO EXPLORE</p>
            </div>
        </div>
        <div className='projects-section'>
            <ProjectsPreview />
        </div>
        </>
    )
};

export default Home;