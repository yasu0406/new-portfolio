import React, {useState, useEffect, useContext} from 'react';

import { mousePointer } from '../../main';
import delighters from '../../delighters';
import ProjectsContext from '../../contexts/projects/projects.context';

import './projectpage.styles.scss';

const Project = (props) => {
    const [navColor, setNavColor] = useState('');

    const projects = useContext(ProjectsContext);
    const projectDetail = projects.filter(project => project.url === props.match.params.title);
    const {title, description, imgUrl, bgColor, viewLink, projectImg01, projectImg02, projectImg03, date} = projectDetail[0];
    const mvStyle = {
        backgroundColor: `${bgColor}`,
        backgroundImage: `url(${imgUrl})`,
      };

    const handleScroll = () => {
        let y = window.pageYOffset;
        if(y > 800) {
            setNavColor('text-red');
        } else {
            setNavColor('');
        }
    }
    
    useEffect(()=> {
        delighters.init();
        document.querySelector('body').classList.add('project');
        mousePointer();
        window.addEventListener('scroll', handleScroll);
        return () => {
            document.querySelector('body').classList.remove('project');
            document.querySelector('.load-animation').classList.remove('started');
            document.querySelector('.load-animation').classList.remove('ended');
        }
    },[]);
    return(
        <>
        <nav>
            <a className={`animated animatedFadeInUp fadeInUp back-link ${navColor}`} onClick={() => props.history.goBack()}>Back</a>
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
                        <li>{date}</li>
                        <li className='text-red'>
                            {
                                viewLink ? <a　rel="noreferrer noopener" href={viewLink} target='_blank'>View</a> : 'Coming soon...'
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
                <p><img src={projectImg01} alt={title}/></p>
            </div>
            <div className='animated animatedFadeInUp fadeInUp' data-delighter>
                <p><img src={projectImg02} alt={title}/></p>
            </div>
            <div className='animated animatedFadeInUp fadeInUp' data-delighter>
                <p><img src={projectImg03} alt={title}/></p>
            </div>
        </section>
        </>
    )
};

export default Project;