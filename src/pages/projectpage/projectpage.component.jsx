import React, {useEffect, useContext} from 'react';
import { Link } from 'react-router-dom';

import { mousePointer } from '../../main';
import delighters from '../../delighters';
import ProjectsContext from '../../contexts/projects/projects.context';

import './projectpage.styles.scss';

const Project = (props) => {
    const projects = useContext(ProjectsContext);
    const projectDetail = projects.filter(project => project.url === props.match.params.title);
    const {title, description, imgUrl, bgColor, viewLink} = projectDetail[0];
    const mvStyle = {
        backgroundColor: `${bgColor}`,
        backgroundImage: `url(${imgUrl})`,
      };
    useEffect(()=> {
        delighters.init();
        document.querySelector('body').classList.add('project');
        mousePointer();
        return () => {
            document.querySelector('body').classList.remove('project');
            document.querySelector('.load-animation').classList.remove('started');
            document.querySelector('.load-animation').classList.remove('ended');
        }
    },[]);
    return(
        <>
        <nav>
            <Link className='animated animatedFadeInUp fadeInUp text-red' onClick={() => props.history.goBack()}>Back</Link>
        </nav>
        <div className='main-visual' style={mvStyle}>
            <h1 className='animated animatedFadeInUp fadeInUp'>{title}</h1>
            <div className='bottom-box animated animatedFadeInUp fadeInUp'>
                <p>SCROLL TO EXPLORE</p>
            </div>
        </div>
        <section className='container'>
            <ul>
                <li>
                    <ul className='animated animatedFadeInUp fadeInUp' data-delighter>
                        <li>Personal Project</li>
                        <li>September 2019</li>
                        <li className='text-red'>
                            {
                                viewLink ? <a href={viewLink} target='_blank'>View</a> : 'Coming soon...'
                            }
                            </li>
                    </ul>
                </li>
                <li>
                    <ul className='animated animatedFadeInUp fadeInUp' data-delighter>
                        <li>Mobile development</li>
                        <li>React Native, Firebase</li>
                    </ul>
                </li>
                <li className='animated animatedFadeInUp fadeInUp' data-delighter>
                    {description}
                </li>
            </ul>
            <div className='animated animatedFadeInUp fadeInUp' data-delighter>
                <p><img src='/images/img01.jpg' alt=""/></p>
            </div>
            <div className='animated animatedFadeInUp fadeInUp' data-delighter>
                <p><img src='/images/img01.jpg' alt=""/></p>
            </div>
            <div className='animated animatedFadeInUp fadeInUp' data-delighter>
                <p><img src='/images/img01.jpg' alt=""/></p>
            </div>
        </section>
        </>
    )
};

export default Project;