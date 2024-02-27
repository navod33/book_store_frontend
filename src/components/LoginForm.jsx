import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 
import { useSnackbar } from 'notistack';

const LoginForm = () => {
  const { enqueueSnackbar } = useSnackbar();

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5555/auth/login', formData);
      console.log(response.data);
      enqueueSnackbar('Logged successfully', { variant: 'success' });
      navigate('/home');

    } catch (error) {
      console.error(error);      
      enqueueSnackbar('Wrong details', { variant: 'error' });
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form className='flex flex-col w-[200px] gap-10 py-7' onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleChange} />
        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
