import Sdata from '../Sdata';
import './Portfolio.scss'

const Portfolio = () => {
    return (
        <div className='Portfolio-container' id='Portfolio'>
            <h1>Projects</h1>
            <div className='Portfolio-card'>
                {
                    Sdata.map((val, index) => {

                        return (
                            <div className='projects' key={index}>
                                <img src={val.Image} alt={val.Image} />
                                <button className='btn'>
                                    <a href={val.Project}> View Project </a>
                                </button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Portfolio;