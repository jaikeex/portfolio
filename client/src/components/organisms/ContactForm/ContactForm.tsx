import React, { useCallback, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { ErrorText, Typography, Button, Input, TextArea } from 'components/atoms';
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

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormValues({ ...formValues, [event.target.name]: event.target.value });
    },
    [setFormValues, formValues]
  );

  const handleSubmit = useCallback(
    async (event: React.FormEvent) => {
      event.preventDefault();

      if (!formRef.current) {
        return;
      }

      try {
        await validationSchema.validate(formValues, { abortEarly: false });
        setErrors({});
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          const newErrors = error.inner.reduce((acc: FormErrors, curr) => {
            acc[curr.path as keyof FormErrors] = curr.message;
            return acc;
          }, {});
          setErrors(newErrors);
          return;
        } else {
          console.log(error);
          return;
        }
      }

      try {
        setLoading(true);
        await emailjs.sendForm(
          import.meta.env.VITE_EMAIL_JS_SERVICE_ID,
          import.meta.env.VITE_EMAIL_JS_TEMPLATE_ID,
          formRef.current,
          import.meta.env.VITE_EMAIL_JS_PUBLIC_KEY
        );
        setLoading(false);
        setIsFormSubmitted(true);
        setFormValues({ email: '', message: '', username: '' });
      } catch (error) {
        setLoading(false);
      }
    },
    [setLoading, setIsFormSubmitted, setLoading, setErrors, validationSchema, formRef, errors, formValues]
  );

  if (isFormSubmitted) {
    return (
      <Typography variant="h2" style={{ marginTop: '4rem' }}>
        Thank you for getting in touch!
      </Typography>
    );
  }

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
      {errors.username ? <ErrorText>{errors.username}</ErrorText> : null}
      <Input
        type="email"
        placeholder="Your Email"
        name="email"
        value={formValues.email}
        onChange={handleChange}
        required
      />
      {errors.email ? <ErrorText>{errors.email}</ErrorText> : null}
      <TextArea placeholder="Your Message" name="message" value={formValues.message} onChange={handleChange} required />
      {errors.message ? <ErrorText>{errors.message}</ErrorText> : null}

      <Button type="submit" onClick={handleSubmit}>
        <Typography weight={600} style={{ textTransform: 'uppercase' }}>
          {!loading ? 'Send Message' : 'Sending...'}
        </Typography>
      </Button>
    </Styled.Form>
  );
};
