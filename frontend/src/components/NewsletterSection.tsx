import React from 'react';
import { Box, Typography, TextField, Button, useTheme, useMediaQuery, Container } from '@mui/material';
import blackDroplet from '../assets/images/birds.svg';

export const NewsletterSection: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box sx={{ 
      backgroundColor: 'white', // Very light gray/off-white page background
      py: 5,
      width: '100%',
    }}>
      <Container maxWidth="lg">
        {/* Inner container with white background */}
        <Box sx={{ 
          backgroundColor: 'white',
          borderRadius: 2,
          p: 4,
        //   boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.05)',
        }}>
          {/* Newsletter component with purple background */}
          <Box
            component="section"
            sx={{
              backgroundColor: '#f5f4ff', // Light purple background
              borderRadius: 3,
              p: { xs: 3, md: 5 },
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Black droplet pattern in top right */}
            {/* <Box sx={{ position: 'absolute', top: 16, right: 16 }}>
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gridGap: '4px',
                }}
              >
                {Array(9).fill(0).map((_, index) => (
                  <Box
                    key={`droplet-${index}`}
                    sx={{
                      width: 6,
                      height: 9,
                      backgroundColor: '#000',
                      borderRadius: '50% 50% 50% 0',
                      transform: 'rotate(-45deg)',
                    }}
                  />
                ))}
              </Box>
            </Box> */}
            <Box
                component="img"
                src={blackDroplet}
                alt="Feature preview"
                sx={{
                    position: 'absolute',
                    top: '0%', right: '3%',
                    width: 70, height: 70,
                }}
            />

            <Box
              sx={{
                display: 'flex',
                flexDirection: isMobile ? 'column' : 'row',
                justifyContent: 'space-between',
                alignItems: isMobile ? 'flex-start' : 'center',
              }}
            >
              {/* Left section - Text content */}
              <Box sx={{ flex: '1', pr: isMobile ? 0 : 4, mb: isMobile ? 4 : 0 }}>
                <Typography 
                  variant="subtitle1" 
                  sx={{ 
                    mb: 2,
                    color: '#6b21a8', // Purple color for "OUR NEWSLETTER"
                    fontWeight: 600,
                    fontSize: '0.875rem',
                  }}
                >
                  OUR NEWSLETTER
                </Typography>
                
                <Typography 
                  variant="h4" 
                  component="h2" 
                  sx={{ 
                    fontWeight: 'bold', 
                    mb: 2,
                    color: '#111827', // Dark text color
                  }}
                >
                  Stay updated with our weekly newsletter
                </Typography>
                
                <Typography 
                  variant="body2" 
                  sx={{ 
                    mb: 2, 
                    maxWidth: 400,
                    color: '#6b7280', // Medium gray color for paragraph
                    lineHeight: 1.6,
                  }}
                >
                  Why kept very ever home mrs. Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.
                </Typography>
              </Box>

              {/* Right section - Form */}
              <Box 
                sx={{ 
                  flex: '1',
                  display: 'flex',
                  flexDirection: 'column',
                  width: isMobile ? '100%' : 'auto',
                }}
              >
                <Typography 
                  variant="h6" 
                  sx={{ 
                    mb: 2, 
                    fontWeight: 600,
                    color: '#6b21a8', // Purple color for "Signup For Newsletter"
                  }}
                >
                  Signup For Newsletter
                </Typography>
                
                <TextField
                  fullWidth
                  placeholder="Email"
                  variant="outlined"
                  sx={{ 
                    mb: 2,
                    backgroundColor: 'white',
                    '& .MuiOutlinedInput-root': {
                      borderRadius: 1,
                    },
                    '& .MuiOutlinedInput-input': {
                      padding: '14px 16px',
                    }
                  }}
                />
                
                <TextField
                  fullWidth
                  type="password"
                  placeholder="Password"
                  variant="outlined"
                  sx={{ 
                    mb: 2,
                    backgroundColor: 'white',
                    '& .MuiOutlinedInput-root': {
                      borderRadius: 1,
                    },
                    '& .MuiOutlinedInput-input': {
                      padding: '14px 16px',
                    }
                  }}
                />
                
                <Button 
                  variant="contained" 
                  fullWidth
                  sx={{ 
                    py: 1.5,
                    backgroundColor: '#ff7a59', // Orange button color
                    '&:hover': {
                      backgroundColor: '#ff6a45',
                    },
                    borderRadius: 1,
                    textTransform: 'uppercase',
                    fontWeight: 600,
                    boxShadow: 'none',
                  }}
                >
                  GET STARTED
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};