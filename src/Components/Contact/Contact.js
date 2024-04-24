import React, { useState } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

const Contact = () => {
    const form = useRef();
    const [done, setDone] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_egfv2q9', 'template_lblpwnx', form.current, 'user_youruserid')
            .then(
                (value) => {
                    console.log(value.text);
                    setDone(true);
                    form.current.reset();
                },
                (error) => {
                    console.log('FAILED...', error.text);
                }
            );
    };

    return (
        <div className="contact-form" id='Contact'>
            <div className="form-left">
                <div className="awesome">
                    <span>Get in touch</span>
                    <span>Contact me</span>
                    <div className="blur" style={{ background: '#ABF!FF94' }}></div>
                </div>
            </div>
            <div className="c-right">
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="user_name" className="user" placeholder="Name" required /> {/* Added required attribute */}
                    <input type="email" name="user_email" className="user" placeholder="Email" required /> {/* Added required attribute */}
                    <textarea name="message" id="user" className="user" placeholder="Message" required></textarea> {/* Added required attribute */}
                    <input type="submit" className="button" value="Send" />
                    <span>{done && "Thanks for contacting me"}</span>
                    <div className="blur c-blur1" style={{ background: 'var(--purple)' }}></div>
                </form>
            </div>
        </div>
    );
};

export default Contact;
