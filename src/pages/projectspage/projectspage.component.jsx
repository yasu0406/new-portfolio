import React, { useEffect, useContext} from 'react';
import { Link } from 'react-router-dom';

import { mousePointer } from '../../main';
import ProjectsContext from '../../contexts/projects/projects.context';

import './projectspage.styles.scss';

const Projects = () => {
    const projects = useContext(ProjectsContext);

    useEffect(
        () => { 
            document.querySelector('body').classList.add('projects');
            mousePointer();
            return () => {
                document.querySelector('body').classList.remove('projects');
                document.querySelector('.load-animation').classList.remove('started');
                document.querySelector('.load-animation').classList.remove('ended');
            };
        },
        []);
    return(
    <>
    <section>
        <ul>
            {
                projects.map(project => {
                    return(
                        <li className='animated animatedFadeInUp fadeInUp' key={project.title}><Link to={`/project/${project.url}`}>{project.title}</Link><p style={{backgroundColor:`${project.bgColor}`}}><img src={project.imgUrl} alt={project.title}/></p></li>
                        )
                })
            }
        </ul>
        <Link className='close-link animated animatedFadeInUp fadeInUp' to='/'>Close</Link>
    </section>
    </>
)};
export default Projects;