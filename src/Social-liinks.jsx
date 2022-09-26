import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';

const Social = () => {
    return(
        <div className='social-links'>
        <a href="https://www.instagram.com/abhijeet_kumbhar30/" target="_blank" rel="noreferrer">
            <InstagramIcon className='instagram' sx={{ fontSize: 40 }} />
        </a>
        <a href="https://www.instagram.com/abhijeet_kumbhar30/" target="_blank" rel="noreferrer">
            <TwitterIcon className='twitter' sx={{ fontSize: 40 }} />
        </a>
        <a href="https://github.com/Abhijeet2121" target="_blank" rel="noreferrer">
            <GitHubIcon className='github' sx={{ fontSize: 40 }} />
        </a>
    </div>
    )
}

export default Social;