import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import '.components/login.css';
import { fetchWeather } from '../services/api';

const handleLogin = async () => {
  // Example of fetching weather data after login
  const city = 'London'; // You could get this from user input
  const weather = await fetchWeather(city);
  console.log(weather);
  // You can now display weather data on the dashboard
};


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    console.log('Login Details:', { email, password });
    // Placeholder for actual login logic
    navigate('/dashboard');
  };

  return (
    <Container maxWidth="xs" className="login-container">
      <Typography variant="h4" align="center" gutterBottom>
        Login
      </Typography>
      <form noValidate>
        <TextField
          label="Email"
          fullWidth
          variant="outlined"
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          variant="outlined"
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Box mt={2}>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleLogin}
          >
            Login
          </Button>
        </Box>
        <Typography align="center" mt={2}>
          Don't have an account?{' '}
          <Button
            color="secondary"
            onClick={() => navigate('/register')}
          >
            Register
          </Button>
        </Typography>
      </form>
    </Container>
  );
}

export default Login;
