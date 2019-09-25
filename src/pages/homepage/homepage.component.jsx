import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import ProjectsPreview from '../../components/projects-preview/projects-preview.component';
import { mousePointer } from '../../main';
import delighters from '../../delighters';
import './homepage.styles.scss';

const Home = () => {
    useEffect(()=> {
        delighters.init();
        document.querySelector('body').classList.add('home');
        mousePointer();
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
                <img src="/images/yasu.png" alt="yasuhiro"/>
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