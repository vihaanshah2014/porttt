import './App.css';
import Spline from '@splinetool/react-spline';
import AOS from 'aos';
import "aos/dist/aos.css";
import art from './art1.jpeg';
import Resume from './RESUME.pdf';
import { Typewriter, useTypewriter, Cursor } from 'react-simple-typewriter'


const NavBar = () => (
  <header className='navbar'>
      <div className='navbar__title navbar__item'> <Typewriter 
            words={['Created...', 'By...', 'Vihaan...']}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1000}
          /></div>
      <div className='navbar__item'><a href={Resume} target="_blank">Resume</a></div>
      <div className='navbar__item'><a href="https://github.com/vihaanshah2014" target="_blank">Github</a></div>
      <div className='navbar__item'><a href="https://www.linkedin.com/in/vihaanshah04/" target="_blank">LinkedIn</a></div>        
  </header>
);


function App() {
  AOS.init();

  <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"></link>
  return (
    <div className="App">
     

      <NavBar />





	  <Spline class="backdrop" scene="https://draft.spline.design/ctanPEDEFgX-Gkc9/scene.spline" />
    <div class="header">
      <p class="text-rainbow-animation">Vihaan Shah</p>
    </div>

    <div data-aos="fade-up"
     data-aos-duration="5000"
     data-aos-delay='50'>
      <p class="insides">
      Hi, my name is Vihaan Shah. I am a hard-working and fearless high school student with a consistent
track record of exceptional academic results, maintaining a 3.9 GPA, 2 club board positions,
participation in 6 clubs, including an induction into Math Honors Society. With my focus greater
than just school, I have also taken steps outside of school by taking courses online as well as a
Middlesex County College course to dive deeper into my interests. I have intermediate-level
programming skills gained over the self-taught courses in HTML, CSS, Java, Javascript, and Python.
      </p> 
      <img class="images blob" src="https://source.unsplash.com/400x350/?landscape" />
    </div>


    <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="5000">
    <p class="insides2">
      My life is not only focused on education and I deeply enjoy getting “real-world” experiences. 
      My work experience includes volunteering at NJ Stem summer camps where I worked as a teacher as well as a manager of new volunteers, 
      reporting daily to the director of the camps. I had the opportunity to teach game design as well as robotics across different difficulties
      based on age. I was also able to get more volunteers under me and manage them to teach classes, teaching them their projects ahead of time. 

      </p> 
      <img class="images2 blob" src="https://source.unsplash.com/400x300/?landscape" />
     
    </div>


    <div class="header2">
      <p>Projects</p>
    </div>

    <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="5000">
    <iframe class="pro-box" src="https://chromerose.netlify.app"></iframe>
    </div>
    <div class="leftt">

    <p>Demo chatting website made using Firebase. This project is put together to work on the functions of React and the growing possibilities that comme with it. 
    Chrome rose is activily running on the domain: This program implements the use of Firebase by google to hold a temporary database.</p>
    </div>

    <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="5000">
    <iframe class="pro-box" src="https://wordleee.netlify.app"></iframe>
    </div>
    
    <div class="leftt">

    <p>This a wordle clone made with HTML, CSS, and JS that replicates a web-based word game created and developed by Welsh software engineer Josh Wardle, and owned 
      and published by The New York Times Company since 2022.</p>
    </div>

    <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="5000">
    <iframe class="pro-box" src="https://chromerose2.netlify.app"></iframe>
    </div>
    
    <div class="leftt">

    <p>This a tetris clone made with HTML, CSS, and JS that replicates Tetris, a puzzle video game created by Soviet software engineer Alexey Pajitnov in 1984. 
      It has been published by several companies for multiple platforms, most prominently during a dispute over the appropriation of the rights in the late 1980s.</p>
    </div>

    <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="5000">
    <iframe class="pro-box" src="https://relaxed-snyder-aa4837.netlify.app"></iframe>
    </div>
    
    <div class="leftt">

    <p>This a 2048 clone made with HTML, CSS, and JS that replicates 2048 is a single-player sliding tile puzzle video game written by Italian web developer Gabriele 
      Cirulli and published on GitHub. 
    </p>
    </div>

    <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="5000">
    <iframe class="pro-box" src="https://heuristic-wozniak-9df56c.netlify.app/"></iframe>
    </div>
    
    <div class="leftt">

    <p>This a game page made to tackle blocked sites that might occur in the school day. The is a one stop shop to play games and have fun while fighting against
      a dictatorship present in school. Have fun!
    </p>
    </div>


    

    
    
    </div>

  
  );
}

export default App;
