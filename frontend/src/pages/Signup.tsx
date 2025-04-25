import { useState } from 'react';
import { signup as signupApi } from '../api/auth';
import { TextField, Button, Box, Typography, CircularProgress, Alert } from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      await signupApi(email, password);
      alert('Registered successfully!');
      navigate('/login');
    } catch (err) {
      setError('Registration failed, please try again');
    }
    setLoading(false);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#f3e5f5',
        padding: 3,
        borderRadius: 2,
        boxShadow: 3,
        width: '100%',
        maxWidth: '400px',
        margin: 'auto',
      }}
    >
      <PersonAddIcon sx={{ fontSize: 60, color: '#8e24aa', marginBottom: 2 }} />
      <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
        Sign Up
      </Typography>
      {error && <Alert severity="error" sx={{ width: '100%', marginBottom: 2 }}>{error}</Alert>}
      <form onSubmit={handleSubmit} style={{ width: '100%' }}>
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{ marginBottom: 2 }}
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          sx={{ marginBottom: 2 }}
        />
        <Button
          type="submit"
          variant="contained"
          fullWidth
          color="primary"
          sx={{ marginBottom: 2 }}
          disabled={loading}
        >
          {loading ? <CircularProgress size={24} sx={{ color: 'white' }} /> : 'Sign Up'}
        </Button>
      </form>
    </Box>
  );
};

export default Signup;
