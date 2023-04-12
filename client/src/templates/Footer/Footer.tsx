import React, { forwardRef, useRef, useState } from 'react';
import { images } from 'assets';
import { client } from 'client';
import emailjs from '@emailjs/browser';
import './Footer.styles.scss';
import { FaEnvelope, FaPhoneSquare } from 'react-icons/fa';
import { Typography } from 'components';

export interface FooterProps {}

export const Footer = forwardRef<HTMLDivElement, FooterProps>(({}, ref): JSX.Element => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false);
  const [loading, setLoading] = useState<any>(false);

  const handleSubmit = async () => {
    setLoading(true);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAIL_JS_SERVICE_ID,
        import.meta.env.VITE_EMAIL_JS_TEMPLATE_ID,
        formRef.current!,
        import.meta.env.VITE_EMAIL_JS_PUBLIC_KEY
      );
      setLoading(false);
      setIsFormSubmitted(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section ref={ref} id="contact">
      <div className="app__footer">
        <Typography variant="h1" className="head-text">
          Take a coffee & chat with me
        </Typography>

        <div className="app__footer-cards">
          <div className="app__footer-card ">
            <FaEnvelope />
            <a href="mailto:hello@micael.com" className="p-text">
              hrubyy.jakub@gmail.com
            </a>
          </div>
          <div className="app__footer-card">
            <FaPhoneSquare />
            <a href="tel:+1 (123) 456-7890" className="p-text">
              +420 774 590 342
            </a>
          </div>
        </div>
        {!isFormSubmitted ? (
          <form ref={formRef} className="app__footer-form app__flex">
            <div className="app__flex">
              <input className="p-text" type="text" placeholder="Your Name" name="username" />
            </div>
            <div className="app__flex">
              <input className="p-text" type="email" placeholder="Your Email" name="email" />
            </div>
            <div>
              <textarea className="p-text" placeholder="Your Message" name="message" />
            </div>
            <button type="button" className="p-text" onClick={handleSubmit}>
              {!loading ? 'Send Message' : 'Sending...'}
            </button>
          </form>
        ) : (
          <div>
            <h3 className="head-text">Thank you for getting in touch!</h3>
          </div>
        )}
      </div>
      ;
    </section>
  );
});
