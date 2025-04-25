import React from 'react';
import { Box, Typography, Button, Paper, useTheme, useMediaQuery } from '@mui/material';
import AR from '../assets/images/AR.png';

export const ExpenseDashboardFeature: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      component="section"
      sx={{
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        py: 8,
        px: { xs: 2, md: 6 },
        position: 'relative',
        bgcolor: 'white',
        overflow: 'hidden',
      }}
    >
      {/* Curved line at the bottom */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '100px',
          borderRadius: '50%/100px 100px 0 0',
          borderTop: '1px solid #f0f0f0',
          transform: 'translateY(50%)',
          zIndex: -1,
        }}
      />

      {/* Left content - Text */}
      <Box
        sx={{
          maxWidth: isMobile ? '100%' : '40%',
          textAlign: 'left',
          mb: isMobile ? 6 : 0,
        }}
      >
        <Typography
          variant="subtitle1"
          sx={{
            color: '#6a21d4',
            fontWeight: 600,
            mb: 2,
            textTransform: 'uppercase',
            fontSize: '0.875rem',
          }}
        >
          OUR FEATURE
        </Typography>

        <Typography
          variant="h3"
          component="h2"
          sx={{
            fontWeight: 'bold',
            mb: 3,
            fontSize: { xs: '1.75rem', md: '2.5rem' },
            lineHeight: 1.2,
          }}
        >
          Manage all expenses & incomes from your dashboard
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: '#6b7280',
            mb: 4,
            lineHeight: 1.6,
          }}
        >
          Why kept very ever home mrs. Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.
        </Typography>

        <Button
          variant="contained"
          sx={{
            backgroundColor: '#6a21d4',
            py: 1.5,
            px: 4,
            borderRadius: 1,
            textTransform: 'none',
            '&:hover': {
              backgroundColor: '#5a17c4',
            },
            fontWeight: 600,
          }}
        >
          Get Started
        </Button>
      </Box>

      {/* Right content - Dashboard visualization */}
      <Box
        sx={{
          position: 'relative',
          width: isMobile ? '100%' : '55%',
          height: isMobile ? '400px' : '500px',
        }}
      >
        {/* Main dashboard card */}
        <Paper
          elevation={6}
          sx={{
            position: 'absolute',
            width: '80%',
            height: '80%',
            borderRadius: 4,
            p: 3,
            right: 0,
            top: 0,
            zIndex: 2,
            backgroundColor: '#f5f4ff',
            boxShadow: '0px 10px 40px rgba(0, 0, 0, 0.1)',
          }}
        >
            <Box
                sx={{
                    width: '60%',
                    backgroundColor: 'white',
                    borderRadius: 4,
                    p: 2,
                    paddingRight: 12,
                    boxShadow: '0px 10px 40px rgba(0, 0, 0, 0.1)',
                }}
            >
                {/* Dashboard Header */}
                <Typography variant="h6" fontWeight={600} mb={2}>
                    Daily Activities
                </Typography>

                {/* Chart bars */}
                <Box 
                    sx={{ 
                    display: 'flex',
                    alignItems: 'flex-end',
                    justifyContent: 'space-around',
                    height: '30%',
                    mb: 3,
                    }}
                >
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Box sx={{ width: '16px', height: '80px', backgroundColor: '#6a21d4', borderRadius: 2, mb: 1 }} />
                    <Typography variant="caption" color="text.secondary">Mon</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Box sx={{ width: '16px', height: '50px', backgroundColor: '#f9a826', borderRadius: 2, mb: 1 }} />
                    <Typography variant="caption" color="text.secondary">Tue</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Box sx={{ width: '16px', height: '95px', backgroundColor: '#6a21d4', borderRadius: 2, mb: 1 }} />
                    <Typography variant="caption" color="text.secondary">Wed</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Box sx={{ width: '16px', height: '65px', backgroundColor: '#ff7a59', borderRadius: 2, mb: 1 }} />
                    <Typography variant="caption" color="text.secondary">Thu</Typography>
                    </Box>
                </Box>
            </Box>

          {/* Invoice Card */}
          <Paper
            elevation={0}
            sx={{
              p: 2,
              backgroundColor: 'white',
              position: 'absolute',
              top: '20%', right: '0%',
              borderRadius: 2,
              width: '55%',
              height: '100%',
              boxShadow: '0px 10px 40px rgba(0, 0, 0, 0.1)',
            }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
              <Typography variant="subtitle2" fontWeight={600}>Create Invoice</Typography>
              <Typography variant="subtitle2">×</Typography>
            </Box>

            {/* Form placeholders */}
            <Box sx={{ bgcolor: '#EDEDF3', p: 2}}>
                <Box sx={{ height: '15px', width: '35%', backgroundColor: '#B0B0B0', borderRadius: 1, mb: 2 }} />
                <Box sx={{ height: '15px', width: '70%', backgroundColor: '#ffffff', borderRadius: 1, mb: 6 }} />
                <Box sx={{ height: '15px', width: '35%', backgroundColor: '#ffffff', borderRadius: 1 }} />
            </Box>
            
            <Box sx={{ mt: 3, mb: 1 }}>
              <Typography variant="caption" color="text.secondary">For to</Typography>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Box sx={{ 
                width: 32, 
                height: 32, 
                borderRadius: 1, 
                backgroundColor: '#f9a826', 
                mr: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontWeight: 'bold',
                fontSize: '0.75rem'
              }}>
                {/* AR */}
                <Box
                    component="img"
                    src={AR}
                    alt="Feature preview"
                    sx={{
                        maxWidth: '100%',
                        height: 'auto',
                        borderRadius: 2,
                        zIndex: 2
                    }}
                />
              </Box>
              <Typography variant="body2" fontWeight={500}>AR Shakir</Typography>
              <Box sx={{ 
                width: 24, 
                height: 24, 
                borderRadius: '50%', 
                border: '1px solid #e0e0e5',
                ml: 'auto',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Typography variant="caption">+</Typography>
              </Box>
            </Box>
            
            <Typography variant="body1" fontWeight={600} mb={2}>USD 2000</Typography>
            
            <Box sx={{ 
              backgroundColor: '#f0f0f5', 
              borderRadius: 1, 
              py: 1.5, 
              px: 2, 
              textAlign: 'center'
            }}>
              <Typography variant="body2" fontWeight={600}>DONE</Typography>
            </Box>
          </Paper>
        </Paper>

        {/* Droplet pattern */}
        <Box
          sx={{
            position: 'absolute',
            bottom: '20%',
            top: '60%', left: '30%',
            // left: '10%',
            zIndex: 30,
          }}
        >
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: 'repeat(5, 1fr)',
              gridGap: '6px',
            }}
          >
            {Array(15).fill(0).map((_, index) => (
              <Box
                key={`droplet-${index}`}
                sx={{
                  width: index % 5 === 2 ? 8 : 6,
                  height: index % 5 === 2 ? 12 : 9,
                  backgroundColor: '#000',
                  borderRadius: '50% 50% 50% 0',
                  transform: 'rotate(-45deg)',
                  opacity: 0.8,
                }}
              />
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};