import Social from '../Social-liinks';
import './contact.scss'

const Contact = () => {
    return (
        <div className='footer-container' id='Contact'>
            <h1>Contact Me</h1>
            <div className='contact-container'>
                <div>
                    Call Me :-
                    <a href='tel:+919881898026'>
                        <span> +919881898026</span></a>
                </div>
                <div>
                    Email To :-
                    <a href='mailto:kumbhaabhijeetv@gmail.com'>
                        <span> kumbharabhijeetv@gmail.com</span>
                    </a>
                </div>
            <Social/>
            </div>
            <div className='Copyright'>
                <h6>
                    2022 @ Abhijeet Kumbhar
                </h6>
            </div>
        </div>
    )
}


export default Contact;