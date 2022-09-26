import Skills from '../Skills-Component/Skills';
import './About.scss'

const About = () => {
    return(
        <>
            <div className='About-container' id='About'>
                <h1>
                    About Me
                </h1>
            <div>
                <p>
                I am a Frontend devloper from Pune.I enjoy creating beautiful interface designs
                and web applications.
                </p>
            </div>
            </div>
            <Skills/>
        </>
    )
}

export default About;