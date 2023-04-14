import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Button } from 'components/atoms/Button';
import { Typography } from 'components/atoms';
import { Input } from 'components/atoms/Input';
import { TextArea } from 'components/atoms/TextArea';
import * as Yup from 'yup';
import * as Styled from './styles';

const validationSchema = Yup.object({
  username: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  message: Yup.string().required('Message is required')
});

interface FormValues {
  username: string;
  email: string;
  message: string;
}

interface FormErrors {
  username?: string;
  email?: string;
  message?: string;
}

export const ContactForm: React.FC = (): JSX.Element => {
  const formRef = useRef<HTMLFormElement>(null);

  const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false);
  const [loading, setLoading] = useState<any>(false);
  const [formValues, setFormValues] = useState<FormValues>({ username: '', email: '', message: '' });
  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);

    if (!formRef.current) {
      return;
    }

    try {
      await validationSchema.validate(formValues, { abortEarly: false });
      await emailjs.sendForm(
        import.meta.env.VITE_EMAIL_JS_SERVICE_ID,
        import.meta.env.VITE_EMAIL_JS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAIL_JS_PUBLIC_KEY
      );
      setLoading(false);
      setIsFormSubmitted(true);
    } catch (error) {
      setLoading(false);

      if (error instanceof Yup.ValidationError) {
        const newErrors = error.inner.reduce((acc: FormErrors, curr) => {
          acc[curr.path as keyof FormErrors] = curr.message;
          return acc;
        }, {});
        setErrors(newErrors);
      } else {
        console.log(error);
      }
    }
  };

  return (
    <Styled.Form ref={formRef} onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Your Name"
        name="username"
        value={formValues.username}
        onChange={handleChange}
        required
      />
      {errors.username && (
        <Typography size="lg" style={{ color: 'red' }}>
          {errors.username}
        </Typography>
      )}
      <Input
        type="email"
        placeholder="Your Email"
        name="email"
        value={formValues.email}
        onChange={handleChange}
        required
      />
      {errors.email && (
        <Typography size="lg" style={{ color: 'red' }}>
          {errors.email}
        </Typography>
      )}
      <TextArea placeholder="Your Message" name="message" value={formValues.message} onChange={handleChange} required />
      {errors.message && (
        <Typography size="lg" style={{ color: 'red' }}>
          {errors.message}
        </Typography>
      )}
      {!isFormSubmitted ? (
        <Button type="submit" onClick={handleSubmit}>
          <Typography weight={600} style={{ textTransform: 'uppercase' }}>
            {!loading ? 'Send Message' : 'Sending...'}
          </Typography>
        </Button>
      ) : (
        <Typography variant="h3">Thank you for getting in touch!</Typography>
      )}
    </Styled.Form>
  );
};
