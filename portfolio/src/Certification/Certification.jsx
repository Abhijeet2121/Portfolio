import './Certification.scss'
const Certification = () => {
    return (
        <div className='certificate' id='Certification'>
            <h1 className='title'> Cetifications </h1>
            <div className='certificate-container'>
                <div className='certificate-card'>
                    <img src='../../asset/freecodecamp.jpg' />
                    <p>Responsive web design cetification from freeCodeCamp.org</p>
                    <button className='btn'>
                        <a href='https://www.freecodecamp.org/certification/fcc2f472086-dc38-4335-8fe1-95f83d49a78b/responsive-web-design'>
                            VIEW
                        </a>
                    </button>
                </div>
                <div className='certificate-card'>
                    <img src='../../asset/udemyjavascript.jpg' />
                    <p>programming in HTML with JavaScript and CSS3</p>
                    <button className='btn'>
                        <a href='https://www.udemy.com/certificate/UC-fe781460-a0de-47b3-b632-6bf1cd1e876a/'>
                            VIEW
                        </a>
                    </button>
                </div>
                <div className='certificate-card'>
                    <img src='../../asset/udemyjavascript.jpg' />
                    <p>programming in HTML with JavaScript and CSS3</p>
                    <button className='btn'>
                        <a href='https://www.udemy.com/certificate/UC-fe781460-a0de-47b3-b632-6bf1cd1e876a/'>
                            VIEW
                        </a>
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Certification;