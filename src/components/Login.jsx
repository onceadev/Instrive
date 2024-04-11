import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Box, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();


  const handleSubmit = (event) => {
    event.preventDefault();

    if (username === 'testuser' && password === '123456') {
      navigate('/company-info');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <Container maxWidth="lg" sx={{ width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Box sx={{ width: 400 }}>
        <Typography variant="h5" color="initial">
          Signin
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            id="username"
            label="Username"
            value={username}
            variant="standard"
            sx={{ width: '100%', mb: 4 }}
            onChange={(event) => setUsername(event.target.value)}
          />
          <TextField
            id="password"
            label="Password"
            value={password}
            variant="standard"
            type="password"
            sx={{ width: '100%', mb: 4 }}
            onChange={(event) => setPassword(event.target.value)}
          />
          <Link href="/register">Register Here</Link>
          {error && <Typography color="error">{error}</Typography>}
          <Button variant="contained" color="primary" type="submit" sx={{ width: '100%', mt: 2 }}>
            SIGN IN
          </Button>
        </form>
      </Box>
    </Container>
  );
}

export default Login;
