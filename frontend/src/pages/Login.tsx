import { useState } from 'react';
import { login as loginApi } from '../api/auth';
import { useAuth } from '../context/AuthContext';
import { TextField, Button, Box, Typography, CircularProgress, Alert } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await loginApi(email, password);
      login(res.data.token, res.data.user);
      navigate('/dashboard');
    } catch (err) {
      setError('Invalid email or password');
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
      <LockIcon sx={{ fontSize: 60, color: '#8e24aa', marginBottom: 2 }} />
      <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
        Sign In
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
          {loading ? <CircularProgress size={24} sx={{ color: 'white' }} /> : 'Login'}
        </Button>
      </form>
    </Box>
  );
};

export default Login;
