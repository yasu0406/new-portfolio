import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';

import './reset.scss';
import delighters from './delighters';
import ScrollTop from './ScrollToTop';
import Home from './pages/homepage/homepage.component';
import Project from './pages/projectpage/projectpage.component';

function App() {
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
      mouse();
      delighters.init();
    },[]
)
  return (
    <div>
      <div className='load-animation'></div>
      <ScrollTop>
        <Route exact path='/' component={Home} />
        <Route exact path='/project/:title' component={Project} />
      </ScrollTop>
    </div>
  );
}

export default App;
