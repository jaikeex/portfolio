import React, { forwardRef, useRef, useState } from 'react';
import { images } from 'assets';
import { client } from 'client';
import emailjs from '@emailjs/browser';
import './Footer.styles.scss';

export interface FooterProps {}

export const Footer = forwardRef<HTMLDivElement, FooterProps>(({}, ref): JSX.Element => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<any>({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false);
  const [loading, setLoading] = useState<any>(false);

  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

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
    <div ref={ref} id="contact" className="app__section">
      <div className="app__section__component">
        <h2 className="head-text">Take a coffee & chat with me</h2>

        <div className="app__footer-cards">
          <div className="app__footer-card ">
            <img src={images.email} alt="email" />
            <a href="mailto:hello@micael.com" className="p-text">
              hello@micael.com
            </a>
          </div>
          <div className="app__footer-card">
            <img src={images.mobile} alt="phone" />
            <a href="tel:+1 (123) 456-7890" className="p-text">
              +1 (123) 456-7890
            </a>
          </div>
        </div>
        {!isFormSubmitted ? (
          <form ref={formRef} className="app__footer-form app__flex">
            <div className="app__flex">
              <input
                className="p-text"
                type="text"
                placeholder="Your Name"
                name="username"
                value={username}
                onChange={handleChangeInput}
              />
            </div>
            <div className="app__flex">
              <input
                className="p-text"
                type="email"
                placeholder="Your Email"
                name="email"
                value={email}
                onChange={handleChangeInput}
              />
            </div>
            <div>
              <textarea
                className="p-text"
                placeholder="Your Message"
                value={message}
                name="message"
                onChange={handleChangeInput}
              />
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
    </div>
  );
});
