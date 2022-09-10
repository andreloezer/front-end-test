import './AboutUs.css';
import TextBackground from '../../layout/TextBackground/TextBackground';

const AboutUs = () => {
    return (
        <section className='about-us'>
            <TextBackground text='about us' />
            <div className='content'>
                <div className='about-us-text'>
                    <h2>About Us</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a tincidunt dui, vitae posuere ipsum. Praesent vehicula nunc eget risus vehicula rutrum. Vestibulum pulvinar sapien tellus, sit amet ultrices turpis vestibulum at.</p>
                </div>
                <figure>
                    <div className='img-wrapper'>
                        <img src='./images/concert.png' alt='Concert'></img>
                    </div>
                    <figcaption>Concert</figcaption>
                </figure>
            </div>
        </section>
    );
};

export default AboutUs;
