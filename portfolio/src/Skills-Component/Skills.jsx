import './Skills.scss'
import HtmlIcon from '@mui/icons-material/Html';
import CssIcon from '@mui/icons-material/Css';
import JavascriptIcon from '@mui/icons-material/Javascript';
import GitHubIcon from '@mui/icons-material/GitHub';

const Skills = () => {
    return (
            <div className="Skill">
                <h1>
                    Skills
                </h1>
            <div className='skill-container'>
                <div className='skill-card html'>
                    <HtmlIcon sx={{fontSize : 60}}/>
                    <CssIcon sx={{fontSize : 60}}/>
                    <p>70%</p>
                </div>
                <div className='skill-card js'>
                    <JavascriptIcon sx={{fontSize : 60}}/>
                    <p>60%</p>
                </div>
                <div className='skill-card react'>
                    <h3>React</h3>
                    <p>50%</p>
                </div>
                <div className='skill-card git' >
                    <GitHubIcon sx={{fontSize : 60}}/>
                    <p>60%</p>
                </div>

            </div>
        </div>
    )
}

export default Skills;