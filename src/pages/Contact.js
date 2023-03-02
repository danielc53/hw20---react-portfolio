
import React, { useState } from 'react';
import './Contact.css'
import { validateEmail } from '../components/utils/verify';

function Contact() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [errorMessage] = useState('');

    const handleChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'name') {
            setName(inputValue)
        } else if (inputType === 'email') {
            setEmail(inputValue)
        } else (setMessage(inputValue));
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!name) {
            alert('Please enter a name.')
        }

        if (!validateEmail(email)) {
            alert('Please enter a valid email.')
        }
        setName('');
        setEmail('');
        setMessage('');
    }

    return (
        <div>
            <h1 className='center'>Hello</h1>
            <form className='form'>
                <div className='stack input1'>
                    <h2 className='title'>Thanks for reaching out</h2>
                    <h3>Name</h3>
                    <input
                        className='textInput'
                        value={name}
                        type='text'
                        name='name'
                        onChange={handleChange}
                        placeholder='Name'
                    />
                </div>
                <div className='stack input2'>
                    <h3>Email</h3>
                    <input
                        className='textInput'
                        value={email}
                        type='text'
                        name='email'
                        onChange={handleChange}
                        placeholder='Email'
                    />
                </div>
                <div className='stack input3'>
                    <h3>Message</h3>
                    <div className='alignButton'>
                        <textarea
                            className='textArea'
                            value={message}
                            type='text'
                            name='Enter a message...'
                            onChange={handleChange}
                            placeholder='Type your message here'
                        />
                        <button
                            className='submitButton'
                            type='button'
                            onClick={handleSubmit}
                            onChange={handleChange}>
                            Submit
                        </button></div>

                </div>

            </form>
            {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
            )}
        </div>
    );
}

export default Contact;