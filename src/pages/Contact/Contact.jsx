import Jumbotron from "../../components/Jumbotron/Jumbotron";
import ContactUs from "../../components/ContactUs/ContactUs";
import ContactForm from "../../components/ContactForm/ContactForm";

const Contact = () => {
    return (
        <main className="contact">
            <Jumbotron />
            <ContactUs title='Send a Message For Us' />
            <ContactForm />
        </main>
    );
};

export default Contact;
