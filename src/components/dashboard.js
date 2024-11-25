import React from 'react';
import { Typography, Container, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log('User logged out');
    navigate('/login');
  };

  return (
    <Container maxWidth="md" className="dashboard-container">
      <Typography variant="h3" align="center" gutterBottom>
        Welcome to the Dashboard
      </Typography>
      <Box mt={4} display="flex" justifyContent="center">
        <Button
          variant="contained"
          color="secondary"
          onClick={handleLogout}
        >
          Logout
        </Button>
      </Box>
    </Container>
  );
}

export default Dashboard;
