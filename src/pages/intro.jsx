import { useState, useEffect } from 'react';
import '../styles/home.css'

 function Intro(){
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        setAnimate(true);
      }, []);

    return(
        <main className='main-container'>
            <div className={`intro-first-div ${animate ? 'animate' : ''}`}>
                <h1 className='typing-text'>Uche Osuchukwu</h1>
                <p>Personal Portfolio</p>
            </div>
        </main>
    )
}

export default Intro;

// animation: typing 2s steps(13, end), blink-caret 0.5s step-end infinite alternate;