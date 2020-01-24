import React from 'react';
 
import './aboutpage.styles.scss';

const About = () => {
    return(
    <>
    <section>
        <h2 className='animated animatedFadeInUp fadeInUp' data-delighter>Hi everyone!</h2>
        <p className='animated animatedFadeInUp fadeInUp' data-delighter>
I’m <span>Yasu</span>, who is Front-End Developer based in Canada.</p>
<p className='animated animatedFadeInUp fadeInUp' data-delighter>
I’ve been working as a Web Development for 4 years,</p>
<p className='animated animatedFadeInUp fadeInUp' data-delighter>Currently, I’m looking for a job in Canada and working a freelance job.</p>
<p className='animated animatedFadeInUp fadeInUp' data-delighter>Love create web apps, mobile apps with React and <span>soccer</span>. </p>
    </section>
    </>
)};

export default About;