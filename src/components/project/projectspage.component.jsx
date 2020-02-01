import React, { useEffect, useContext} from 'react';
import { Link } from 'react-router-dom';

import ProjectsContext from '../../contexts/projects/projects.context';

import './projectspage.styles.scss';

const Projects = () => {
    const projects = useContext(ProjectsContext);
    return(
    <>
    <section className='project-list'>
        <h2 className='animated animatedFadeInUp fadeInUp' data-delighter>All PROJECT</h2>
        <ul>
            {
                projects.map(project => {
                    return(
                    <li className='animated animatedFadeInUp fadeInUp' key={project.title} data-delighter><Link to={`/project/${project.url}`}>{project.title}<span>{project.develop}</span></Link><p style={{backgroundColor:`${project.bgColor}`}}><img src={project.thumbnail} alt={project.title}/></p></li>
                        )
                })
            }
        </ul>
    </section>
    </>
)};
export default Projects;