import './ContactForm.css';
import Input from '../Input/Input';
import TextBackground from '../../layout/TextBackground/TextBackground';

const ContactForm = () => {
    return (
        <section className='contact-form' id='contact-form'>
            <TextBackground text='contact us' />
            <form>
                <div className='form-row contact-name'>
                    <Input
                        type='text'
                        name='first-name'
                        placeholder='first name'
                    />
                    <Input
                        type='text'
                        name='last-name'
                        placeholder='last name'
                    />
                </div>
                <div className='form-row contact-info'>
                    <Input
                        type='email'
                        name='email'
                        placeholder='email'
                    />
                    <Input
                        type='tel'
                        name='phone'
                        placeholder='phone'
                    />
                </div>
                <Input
                    type='textarea'
                    name='message'
                    placeholder='message'
                />
                <Input
                    type='submit'
                    value='send'
                />
            </form>
        </section>
    );
};

export default ContactForm;
