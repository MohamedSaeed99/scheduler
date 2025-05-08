import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Typography, Paper, Box } from '@mui/material';
import { useAuth } from '../contexts/AuthContext';

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleGetStarted = () => {
    // For demo purposes, we'll just set a dummy token
    login('dummy-token');
    navigate('/dashboard');
  };

  const handleDemo = () => {
    // For demo purposes, we'll just set a dummy token
    login('dummy-token');
    navigate('/dashboard');
  };

  return (
    <Box sx={{ 
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      bgcolor: 'white'
    }}>
      <Box sx={{ 
        maxWidth: '1200px',
        mx: 'auto',
        width: '100%',
        p: { xs: 2, md: 4 },
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}>
        <Box sx={{ 
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
          gap: 4,
          alignItems: 'center'
        }}>
          {/* Hero Section */}
          <Box sx={{ 
            textAlign: 'left',
            display: 'flex',
            flexDirection: 'column',
            gap: 3
          }}>
            <Typography 
              variant="h2" 
              sx={{ 
                fontWeight: 700,
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                lineHeight: 1.2,
                color: 'primary.main'
              }}
            >
              Streamline Your Business Appointments
            </Typography>
            <Typography 
              variant="h5" 
              sx={{ 
                color: 'text.secondary',
                mb: 4,
                fontSize: { xs: '1.1rem', md: '1.25rem' }
              }}
            >
              The all-in-one solution for managing your appointments, clients, and business growth.
            </Typography>
            <Box sx={{ 
              display: 'flex',
              gap: 2,
              flexDirection: { xs: 'column', sm: 'row' }
            }}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                onClick={handleGetStarted}
                sx={{
                  width: { xs: '120px', sm: '140px' },
                  py: 0.8,
                  px: 2,
                  textAlign: 'center',
                  borderRadius: 2,
                  textTransform: 'none',
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  boxShadow: 2,
                  '&:hover': {
                    boxShadow: 4,
                    transform: 'translateY(-2px)',
                    transition: 'all 0.2s ease-in-out'
                  }
                }}
              >
                Get Started
              </Button>
              <Button
                variant="outlined"
                color="primary"
                size="large"
                onClick={handleDemo}
                sx={{
                  width: { xs: '120px', sm: '140px' },
                  py: 0.8,
                  px: 2,
                  textAlign: 'center',
                  borderRadius: 2,
                  textTransform: 'none',
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  borderWidth: 2,
                  '&:hover': {
                    borderWidth: 2,
                    transform: 'translateY(-2px)',
                    transition: 'all 0.2s ease-in-out'
                  }
                }}
              >
                Demo
              </Button>
            </Box>
          </Box>

          {/* Features Section */}
          <Box sx={{ 
            display: 'flex',
            flexDirection: 'column',
            gap: 2
          }}>
            {[
              {
                icon: '📅',
                title: 'Smart Scheduling',
                description: 'Automated scheduling that adapts to your business hours and preferences.'
              },
              {
                icon: '🔔',
                title: 'Automated Reminders',
                description: 'Reduce no-shows with automated email and SMS reminders.'
              },
              {
                icon: '👥',
                title: 'Client Management',
                description: 'Keep track of client information and appointment history in one place.'
              }
            ].map((feature, index) => (
              <Paper
                key={index}
                elevation={0}
                sx={{
                  p: 3,
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 2,
                  bgcolor: 'background.paper',
                  borderRadius: 2,
                  transition: 'all 0.2s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: 2
                  }
                }}
              >
                <Typography sx={{ fontSize: '2rem' }}>{feature.icon}</Typography>
                <Box>
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      fontWeight: 600,
                      mb: 1,
                      color: 'text.primary'
                    }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      color: 'text.secondary',
                      lineHeight: 1.6
                    }}
                  >
                    {feature.description}
                  </Typography>
                </Box>
              </Paper>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage; 