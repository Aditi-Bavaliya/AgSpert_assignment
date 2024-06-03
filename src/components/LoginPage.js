import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../App';
import { Box, Button, FormControl, FormLabel, Input } from '@chakra-ui/react';

const LoginPage = () => {
  const { register, handleSubmit } = useForm();
  const { setIsAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const { username, password } = data;
    // Replace with actual authentication logic
    if (username === 'Admin' && password === 'admin@123') {
      setIsAuthenticated(true);
      navigate('/orders/active');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <Box p={4} maxW="md" mx="auto">
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl>
          <FormLabel>Username</FormLabel>
          <Input type="text" {...register('username')} />
        </FormControl>
        <FormControl mt={4}>
          <FormLabel>Password</FormLabel>
          <Input type="password" {...register('password')} />
        </FormControl>
        <Button type="submit" mt={4}>Login</Button>
      </form>
    </Box>
  );
};

export default LoginPage;
