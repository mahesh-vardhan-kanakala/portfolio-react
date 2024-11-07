import React, { useState } from 'react';
import '../assets/styles/Contact.scss';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';

function Contact() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate inputs
    setNameError(name === '');
    setEmailError(email === '');
    setMessageError(message === '');

    // Check if there are no errors
    if (name !== '' && email !== '' && message !== '') {
      // Create FormData object
      const formData = new FormData(e.target as HTMLFormElement);

      // Submit data to GetForm.io
      fetch('https://getform.io/f/bmddkjwa', {
        method: 'POST',
        body: formData,
      })
        .then((response) => {
          if (response.ok) {
            console.log('Form submitted successfully!');
            // Clear form fields after submission
            setName('');
            setEmail('');
            setMessage('');
            alert('Message sent successfully!');
          } else {
            console.error('Error submitting form:', response.statusText);
            alert('There was an issue sending your message. Please try again.');
          }
        })
        .catch((error) => {
          console.error('Error:', error);
          alert('There was an error submitting the form. Please try again later.');
        });
    } else {
      alert('Please fill out all fields before submitting.');
    }
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>Got a project waiting to be realized? Let's collaborate and make it happen!</p>
          <Box
            component="form"
            action="https://getform.io/f/bmddkjwa"
            method="POST"
            className="space-y-6"
            onSubmit={handleSubmit}
          >
            {/* Form fields */}
            <div className="form-flex">
              <TextField
                required
                id="name"
                label="Your Name"
                placeholder="What's your name?"
                value={name}
                onChange={(e) => setName(e.target.value)}
                error={nameError}
                helperText={nameError ? 'Please enter your name' : ''}
                name="name" // Added name attribute
              />
              <TextField
                required
                id="email"
                label="Email / Phone"
                placeholder="How can I reach you?"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={emailError}
                helperText={emailError ? 'Please enter your email or phone number' : ''}
                name="email" // Added name attribute
              />
            </div>
            <TextField
              required
              id="message"
              label="Message"
              placeholder="Send me any inquiries or questions"
              multiline
              rows={10}
              className="body-form"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              error={messageError}
              helperText={messageError ? 'Please enter your message' : ''}
              name="message" // Added name attribute
            />
            {/* Hidden honeypot input */}
            <input type="hidden" name="_gotcha" style={{ display: 'none' }} />

            {/* Optional checkbox */}
            <input type="checkbox" name="subscribe" value="yes" checked style={{ display: 'none' }} />
            <input type="hidden" name="subscribe" value="no" style={{ display: 'none' }} />

            {/* Submit button */}
            <Button variant="contained" endIcon={<SendIcon />} type="submit">
              Send
            </Button>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Contact;
