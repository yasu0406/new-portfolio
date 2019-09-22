import React, {useState} from 'react';
import { Link } from 'react-router-dom';

const ProjectsPreview = ()=> {
    const [projects, setProjects] = useState([
        {
            'id': '01',
            'title': 'Soccer Meet',
            'description': 'Designing and planning project goals Designing and creating an interface for soccer teams utilizing ReactJS, Firebase, Javascript. Using XD to create design.',
            'imgUrl' : '/images/soccer-meet.png',
            'bgColor': '#00807C',
            'url': 'soccer-meet'
        },
        {
            'id': '02',
            'title': 'Soccer Meet',
            'description': 'Designing and planning project goals Designing and creating an interface for soccer teams utilizing ReactJS, Firebase, Javascript. Using XD to create design.',
            'imgUrl' : '/images/soccer-meet.png',
            'bgColor': '#44C5C2',
            'url': 'socce'
        },
        {
            'id': '03',
            'title': 'Soccer Meet',
            'description': 'Designing and planning project goals Designing and creating an interface for soccer teams utilizing ReactJS, Firebase, Javascript. Using XD to create design.',
            'imgUrl' : '/images/soccer-meet.png',
            'bgColor': '#BE393D',
            'url': 'socce'
        },
        {
            'id': '04',
            'title': 'Soccer Meet',
            'description': 'Designing and planning project goals Designing and creating an interface for soccer teams utilizing ReactJS, Firebase, Javascript. Using XD to create design.',
            'imgUrl' : '/images/soccer-meet.png',
            'bgColor': '#44C5C2',
            'url': 'soccer-'
        },
    ]);
    const projectsRender = () => {
        return projects.filter((project, idx) => idx < 6).map(
            project => (
                <section>
                    <div className='color-box' data-delighter style={{backgroundColor:`${project.bgColor}`}}></div>
                    <div className='project-contents'>
                        <ul>
                            <li className='animated animatedFadeInUp fadeInUp' data-delighter>{project.id}</li>
                            <li className='animated animatedFadeInUp fadeInUp' data-delighter><img src={`${project.imgUrl}`} alt=""/></li>
                        </ul>
                        <div className='project-texts'>
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