import React, { useState } from 'react';
import { Button } from '../Button/Button';
import './Form.scss';

export const Form = () => {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    message: '',
  });

  const onInputChange = ({
    target,
  }:
    | React.ChangeEvent<HTMLInputElement>
    | React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value,
    });
  };

  const submitHandler = (event: React.FormEvent) => {
    // const regex = new RegExp('(^[^@.]+)@([^@.]+).{1}(w{1,6}$)');
    const form: HTMLFormElement | null = document.querySelector('.form');
    event.preventDefault();
    if (
      formValues.name.trim().length < 1 ||
      formValues.email.trim().length < 1 ||
      formValues.message.trim().length < 1
    ) {
      if (form) {
        form.action = '';
      }
      return;
    }
    if (form && /^\S+@\S+\.\S+$/.test(formValues.email)) {
      form.action = 'https://formsubmit.co/josefggx@gmail.com';
      alert("Thank you! You'll hear from me soon!");
      form.reset();
    } else {
      alert('Please enter a correct email');
    }
  };

  return (
    <form className="form" action="" method="POST">
      <p>
        Feel free to reach me via email, LinkedIn, or, if you prefer, you can
        use the contact form below to send me a message.
      </p>
      <input
        name="name"
        type="text"
        value={formValues.name}
        className="form__input"
        placeholder="Name"
        onChange={onInputChange}
      />
      <input
        name="email"
        type="email"
        value={formValues.email}
        className="form__input"
        placeholder="Email"
        onChange={onInputChange}
      />
      <textarea
        name="message"
        value={formValues.message}
        className="form__input"
        placeholder="Message"
        onChange={onInputChange}
      ></textarea>
      <input type="hidden" name="_next" value="#contact"></input>
      <Button text="Submit" type="submit" onClick={submitHandler} />
    </form>
  );
};
