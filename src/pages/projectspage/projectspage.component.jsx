import React, {useState,useEffect} from 'react';
import { Link } from 'react-router-dom';

import './projectspage.styles.scss';

const Projects = () => {
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
    useEffect(
        () => { 
            document.querySelector('body').classList.add('projects');
            document.querySelector('.cursor').classList.remove('is-active');
            document.querySelector('.follower').classList.remove('is-active');
            if(document.querySelector('.is-active')) {
                document.querySelector('.cursor').classList.remove('is-active');
                document.querySelector('.follower').classList.remove('is-active');
            }
            mouse();
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
                        <li className='animated animatedFadeInUp fadeInUp'><Link to={`/project/${project.url}`}>{project.title}</Link><p style={{backgroundColor:`${project.bgColor}`}}><img src={project.imgUrl} alt={project.title}/></p></li>
                        )
                })
            }
        </ul>
        <Link className='close-link animated animatedFadeInUp fadeInUp' to='/'>Close</Link>
    </section>
    </>
)};
export default Projects;