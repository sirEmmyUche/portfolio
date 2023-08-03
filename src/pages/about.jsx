import '../styles/home.css'

 function About(){
    return(
        <section className='about-container'>
            <div className='about-page-first-div'>
                <div className='description'>
                    <p><span>Hello!</span> I'm Uche Osuchukwu,<br/>
                    A full stack Software Developer<br/><span>Web and Mobile App development</span></p>
                    <div className='niche'>
                        <h3>SERVICE</h3>
                        <p>Web and Mobile App</p>
                    </div>
                </div>
                <div>
                    <img src='/images/profile-pic.png' alt='my pics'/>
                </div>
            </div>
            <div className='skill'>
                <h3>Stack</h3>
                <div className='skill-box-wrapper'>
                <div className='skill-box'>
                    <img src='/icons/html.png' alt='HTML' className='image'/>
                    <h4>HTML</h4>
                </div>
                <div className='skill-box'>
                    <img src='/icons/css.png' alt='CSS' className='image'/>
                    <h4>CSS</h4>
                </div>
                <div className='skill-box'>
                    <img src='/icons/javascript.png' alt='javascript' className='image'/>
                    <h4>JavaScript</h4>
                </div>
                <div className='skill-box'>
                    <img src='/icons/react-icon.png' alt='react'className='image'/>
                    <h4>React/React-Native</h4>
                </div>
                <div className='skill-box'>
                    <img src='/icons/python.jfif' alt='python'/>
                    <h4>Python</h4>
                </div>
                <div className='skill-box'>
                    <img src='/icons/nodejs.png' alt='node'/>
                    <h4>NodeJs</h4>
                </div>
                <div className='skill-box'>
                    <img src='/icons/Expressjs.png' alt='express'/>
                    <h4>Express.Js</h4>
                </div>
                <div className='skill-box'>
                    <img src='/icons/sql.png' alt='sql'/>
                    <h4>SQL Database</h4>
                </div>
                <div className='skill-box'>
                    <img src='/icons/postgressql-icon.png' alt='postgres'/>
                    <h4>PostgreSQL</h4>
                </div>
                <div className='skill-box'>
                    <img src='/icons/mongodb.png' alt='mongodb'/>
                    <h4>MongoDB Database</h4>
                </div>
                </div>
            </div>
        </section>
    )
}

export default About;