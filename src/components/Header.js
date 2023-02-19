// Import Assets
import profile from '../assets/profile.png';

const Header = () => {
    return (
        <section className='header'>
            <img src={profile} alt="Batya Tonny" />

            <div className='header__content'>
                <h1>Tonny Batya</h1>
                <p>Blockchain Developer</p>
                <a href="mailto:batztonnie@gmail.com" className='button'>Get In Touch</a>
            </div>
        </section>
    );
}

export default Header;