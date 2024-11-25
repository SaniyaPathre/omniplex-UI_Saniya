import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './Register.css';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = () => {
    console.log('Register Details:', { name, email, password });
    // Placeholder for actual registration logic
    navigate('/login');
  };

  return (
    <Container maxWidth="xs" className="register-container">
      <Typography variant="h4" align="center" gutterBottom>
        Register
      </Typography>
      <form noValidate>
        <TextField
          label="Name"
          fullWidth
          variant="outlined"
          margin="normal"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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
            onClick={handleRegister}
          >
            Register
          </Button>
        </Box>
        <Typography align="center" mt={2}>
          Already have an account?{' '}
          <Button
            color="secondary"
            onClick={() => navigate('/login')}
          >
            Login
          </Button>
        </Typography>
      </form>
    </Container>
  );
}

export default Register;
