import React, {useContext} from 'react';
import { Link } from 'react-router-dom';

import ProjectsContext from '../../contexts/projects/projects.context';

const ProjectsPreview = ()=> {
    const projects = useContext(ProjectsContext);
    const projectsRender = () => {
        return projects.filter((project, idx) => idx < 6).map(
            project => (
                <section key={project.title}>
                    <div className='color-box' data-delighter style={{backgroundColor:`${project.bgColor}`}}></div>
                    <div className='project-contents'>
                        <ul>
                            <li className='animated animatedFadeInUp fadeInUp' data-delighter>{project.id}</li>
                            <li className='animated animatedFadeInUp fadeInUp' data-delighter><img src={`${project.thumbnail}`} alt={`${project.title} : thumbnail`}/></li>
                        </ul>
                        <div className='project-texts container'>
                            <h2 className='animated animatedFadeInUp fadeInUp' data-delighter>{project.title}</h2>
                            <p className='animated animatedFadeInUp fadeInUp' data-delighter>{project.description}</p>
                            <Link to={`/project/${project.url}`} className='red-link red-btn animated animatedFadeInUp fadeInUp' data-delighter>See more</Link>
                        </div>
                    </div>
                </section>
            )
        )
    }
    return (
        <>
        {projectsRender()}
        </>
    )
}

export default ProjectsPreview;