import './contact.scss'

const Contact = () => {
    return(
        <div className='footer-container' id='Contact'>
                    <h1>Contact Me</h1>
            <div className='contact-container'>
                    <div>
                    Call Me :-
                <a href='tel:+919881898026'>
                     <span> +919881898026</span></a>
                     </div>
                    <br></br>
                    <div>
                    Email To :-
                <a href='mailto:kumbhaabhijeetv@gmail.com'>
                    <span> kumbharabhijeetv@gmail.com</span>
                </a>
                </div>
            </div>
            <div>
                <h4>
                 2022 @ Abhijeet Kumbhar
                </h4>
            </div>
        </div>
    )
}


export default Contact;