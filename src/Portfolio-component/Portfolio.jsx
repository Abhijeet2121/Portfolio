import './Portfolio.scss'

const Portfolio = () => {
    return(
        <div className='Portfolio-container' id='Portfolio'>
            <h1>Projects</h1>
        <div className='Portfolio-card'>
            <div className='projects'>
                <img src='../../asset/dietprotocol.jpg'/>
                <button className='btn'>
                    <a href='https://dietprotocol-commit-to-be-fit.netlify.app/'>
                    View Project
                    </a>
                    </button>
                </div>
            <div className='projects'>
                <img src='../../asset/tripsandtales.jpg'/>
                <button className='btn'>
                    <a href='https://tripsntales-project.netlify.app/'>
                    View Project
                    </a>
                </button>
            </div>
            <div className='projects'>
                <img src='../../asset/workouttracker.jpg'/>
                <button className='btn'>
                    <a href='https://workout-tracker-geo-location.netlify.app/'>
                    View Project
                    </a>
                </button>
            </div>
            <div className='projects'>
                <img src='../../asset/bankapp.jpg'/>
                <button className='btn'>
                    <a href='https://bankappproject.netlify.app/'>
                    View Project
                    </a>
                </button>
            </div>
            <div className='projects'>
                <img src='../../asset/rollthedice.jpg'/>
                <button className='btn'>
                    <a href='https://roll-the-dice-gameapp.netlify.app/'>
                    View Project
                    </a>
                </button>
            </div>
            <div className='projects'>
                <img src='../../asset/crown-clothing.jpg'/>
                <button className='btn'>
                    <a href='https://crown-clothing-app-v1.netlify.app'>
                    View Project
                    </a>
                </button>
            </div>
        </div>
        </div>
    )
}

export default Portfolio;