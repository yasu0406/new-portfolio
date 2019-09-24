import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

import delighters from '../../delighters';

import './projectpage.styles.scss';

const Project = (props) => {
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
    const projectDetail = projects.filter(project => project.url === props.match.params.title);
    const {title, description, imgUrl, bgColor} = projectDetail[0];
    console.log(props);
    useEffect(()=> {
        delighters.init();
        document.querySelector('body').classList.add('project');
        if(document.querySelector('.is-active')) {
            document.querySelector('.cursor').classList.remove('is-active');
            document.querySelector('.follower').classList.remove('is-active');
        }
        mouse();
        return () => {
            document.querySelector('body').classList.remove('project');
            document.querySelector('.load-animation').classList.remove('started');
            document.querySelector('.load-animation').classList.remove('ended');
        }
    },[]);
    return(
        <>
        <nav>
            <Link className='animated animatedFadeInUp fadeInUp' to='/projects'>Back</Link>
        </nav>
        <div className='main-visual' style={{backgroundColor: `${bgColor}`}}>
            <h1 className='animated animatedFadeInUp fadeInUp'>{title}</h1>
            <img className='animated animatedFadeInUp fadeInUp' src={imgUrl} alt={title}/>
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
                        <li><a href="">VSIT STORE</a></li>
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