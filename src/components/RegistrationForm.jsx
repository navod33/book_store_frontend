import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import axios from 'axios';
import { useSnackbar } from 'notistack';

const RegistrationForm = () => {
  const { enqueueSnackbar } = useSnackbar();

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5555/auth/register', formData);
      console.log(response.data);
      enqueueSnackbar('account created successfully', { variant: 'success' });
      navigate('/home');

    } catch (error) {
      console.error(error);
      enqueueSnackbar('Wrong details', { variant: 'error' });
  
    }
  };

  return (
    <div>
      <h2>Registration</h2>
      <form className='flex flex-col w-[200px] gap-5 py-5' onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleChange} />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Register</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
