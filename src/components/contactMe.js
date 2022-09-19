import { useEffect } from 'react';
import '../stylesheets/contactMe.scss';

const ContactMe = () => {
  useEffect(() => {
    // Selectors for showing errors
    const form = document.getElementsByTagName('form')[0];
    const email = document.getElementById('mail');
    const emailError = document.querySelector('#mail + span.error');

    function showError() {
      if (email.validity.valueMissing) {
        emailError.textContent = 'You need to enter an e-mail address.';
      } else if (email.validity.typeMismatch) {
        emailError.textContent = 'Entered value needs to be an e-mail address.';
      } else if (email.validity.tooShort) {
        emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
      }
      emailError.className = 'error active';
    }

    // error handling
    email.addEventListener('input', () => {
      if (email.validity.valid) {
        emailError.textContent = '';
        emailError.className = 'error';
      } else {
        showError();
      }
    });

    form.addEventListener('submit', (event) => {
      if (!email.validity.valid) {
        showError();
        event.preventDefault();
      }
    });

    // inputs for restoring Local Storage
    const fullName = document.getElementById('full-name');
    const textArea = document.getElementById('details');

    function applyInputs() {
      if (localStorage.getItem('formData')) {
        const formInput = JSON.parse(localStorage.getItem('formData'));
        fullName.value = formInput[fullName.name];
        email.value = formInput[email.name];
        textArea.value = formInput[textArea.name];
      }
    }

    // Restores data if data is in storage
    applyInputs();

    const formData = {
      'full-name': fullName.value,
      email: email.value,
      details: textArea.value,
    };

    function setInput(formElement) {
      formData[formElement.name] = formElement.value;
      localStorage.setItem('formData', JSON.stringify(formData));
    }

    fullName.addEventListener('input', () => {
      setInput(fullName);
    });

    email.addEventListener('input', () => {
      setInput(email);
    });

    textArea.addEventListener('input', () => {
      setInput(textArea);
    });
  }, []);

  return (
    <section className="contact-me" id="contact-me">
      <h1 className="contact-me-header">
        I&apos;m currently looking for work!
        {' '}
        If you&apos;d like to chat about a project or hiring opportunity then please get in touch.
      </h1>
      <form className="contact-form" action="https://formspree.io/f/mvolaagj" method="post">
        <input type="text" name="full-name" id="full-name" placeholder="Full name" required="" maxLength="30" />
        <input type="email" name="email" id="mail" placeholder="Email address" title="Please use all lower-case characters for your email address" required="" />
        <span className="error" aria-live="polite" />
        <textarea name="details" id="details" cols="30" rows="10" placeholder="(Optional) Please feel free to add any details of the project/job opening that you will be inquiring about" maxLength="500" />
        <button type="submit" className="see-project submit">Get in touch</button>
      </form>
    </section>
  );
};

export default ContactMe;
