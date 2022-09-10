import { Link } from 'react-router-dom';

import './ContactUs.css';
import background from '../../images/hire-us.png';

const ContactUs = props => {
    return (
        <section
            className="contact-us"
            style={{backgroundImage: `url(${background})`}}
        >
            <h2>{props.title}</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a tincidunt dui, vitae posuere ipsum. Praesent vehicula nunc eget risus vehicula rutrum. Vestibulum pulvinar sapien.</p>
            <Link to='/contact#contact-form'>Contact With Us</Link>
        </section>
    );
};

export default ContactUs;
