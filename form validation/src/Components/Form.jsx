import React from 'react'
import { CustomForm } from './customComponents'
import './form.css'

export const Form = () => {

    const  fields = [
        {
        name: 'username', type: 'text', placeholder: 'Enter Your Username', label:'Username', required:true 
        },
        { name: 'email', type: 'email', placeholder: 'Enter your email', label: 'Email', required: true },
        { name: 'password', type: 'password', placeholder: 'Enter your password', label: 'Password', required: true },
        { name: 'confirmPassword', type: 'password', placeholder: 'Enter your confirm password', label: 'Confirm Password', required: true },
    ];

    const handleFormSubmit = (data) => {
        console.log('Form Submitted:', data);
    };

  return (
    <div>
        <h1 className='head'>This Form Validation</h1>
        <CustomForm fields ={fields} onSubmit={handleFormSubmit} buttonText="Register" />
    </div>
  )
}
