import React from 'react';

const Contact = () => {
    return (
        <section>
            <ul className='animated animatedFadeInUp fadeInUp' data-delighter>
                <li>You can contact me at</li>
                <li><a className='mail-link' href={'mailto:yasucom4646@gmail.com'}>yasucom4646@gmail.com</a></li>
                <li className='sns'><a rel="noreferrer noopener" href='https://www.linkedin.com/in/yasuhiro-katayama-118423160/' target="_blank">LinkedIn</a><a rel="noreferrer noopener" href='https://github.com/yasu0406' target="_blank">GitHub</a><a rel="noreferrer noopener" href='/images/resume.pdf' target="_blank">Resume</a></li>
            </ul>
        </section>
    )
}

export default Contact;