import React from 'react';
import { Box, Typography, Button, Card, CardContent, Avatar, useTheme, useMediaQuery } from '@mui/material';
import Person2 from '../assets/images/person2.png';
import Person3 from '../assets/images/person3.png';
import MainImage from '../assets/images/person1.png';
import blackDroplet from '../assets/images/stones.svg';

interface Notification {
  id: number;
  name: string;
  date: string;
  avatar: string;
  position: { top: string; left: string };
  verified?: boolean;
  zIndex?: any;
}

const notifications: Notification[] = [
  {
    id: 1,
    name: 'John Doe',
    date: 'Mon, Feb 28',
    avatar: '',
    position: { top: '50%', left: '80%' },
    zIndex: 0
  },
  {
    id: 2,
    name: 'Mike Taylor',
    date: 'Tue, Feb 1',
    avatar: Person2,
    position: { top: '65%', left: '80%' },
    verified: true,
    zIndex: 4
  },
  {
    id: 3,
    name: 'Angela Taylor',
    date: 'Wed, Feb 9',
    avatar: Person3,
    position: { top: '80%', left: '80%' },
    zIndex: 0
  },
];



export const FeatureSection: React.FC = () => {
  const theme = useTheme();
  const isSmDown = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      component="section"
      sx={{
        display: 'flex',
        flexDirection: isSmDown ? 'column' : 'row',
        alignItems: 'center',
        bgcolor: 'white',
        justifyContent: 'space-between',
        px: { xs: 2, md: 8 },
        py: { xs: 4, md: 8 },
      }}
    >
      {/* Left image & notifications */}
      <Box
        sx={{
          position: 'relative',
          flex: 1,
          mb: isSmDown ? 4 : 0,
          display: 'flex',
          bgcolor: '#F8F8FE',
          justifyContent: 'center',
        }}
      >
        {/* Main image */}
        <Box
          component="img"
          src={MainImage}
          alt="Feature preview"
          sx={{
            maxWidth: '100%',
            height: 'auto',
            borderRadius: 2,
            zIndex: 2
          }}
        />

        <Box
          component="img"
          src={blackDroplet}
          alt="Feature preview"
          sx={{
            top: '90%', left: '85%',
            width: 100, height: 100,
          }}
        />

        {/* Notification cards */}
        {notifications.map((note) => (
          <Card
            key={note.id}
            elevation={3}
            sx={{
              position: 'absolute',
              top: note.position.top,
              left: note.position.left,
              zIndex: note.zIndex,
              minWidth: 300,
              height: 70,
              display: 'flex',
            //   padding: 2,
              transform: 'translate(-50%, -50%)',
              backgroundColor: 'white',
              borderRadius: 1,
            }}
          >
            <CardContent sx={{ display: 'flex',  justifyContent: 'space-between', minWidth: 300,  p: 1 }}>
              <Box sx={{ position: 'relative', display: 'flex', justifyContent: 'space-between', minWidth: 120,}}>
                {note.verified && (
                  <Box
                    sx={{
                    //   position: 'absolute',
                    //   bottom: 0,
                    //   right: 0,
                      width: 30,
                      height: 30,
                      backgroundColor: 'primary.main',
                      borderRadius: '50%',
                      border: '2px solid white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Box
                      component="span"
                      sx={{
                        fontSize: '8px',
                        color: 'white',
                        fontWeight: 'bold',
                      }}
                    >
                      ✓
                    </Box>
                  </Box>
                )}
                <Box>
                    <Typography variant="subtitle2">{note.name}</Typography>
                    <Typography variant="caption" color="text.secondary">
                    {note.date}
                    </Typography>
                </Box>
              </Box>
              <Box>
                <Avatar src={note.avatar} sx={{ width: 32, height: 32, mr: 1 }} />
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>

      {/* Right copy & button */}
      <Box
        sx={{
          flex: 1,
          textAlign: isSmDown ? 'center' : 'left',
          pl: isSmDown ? 0 : 6,
        }}
      >
        <Typography variant="overline" color="primary" gutterBottom>
          OUR FEATURE
        </Typography>
        <Typography variant="h4" color="black" component="h2" fontWeight={700} gutterBottom>
          Receive payments quickly from anywhere
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          Why kept very ever home mrs. Considered sympathize ten uncommonly
          occasional assistance sufficient not. Letter of on become he tended active enable to.
        </Typography>
        <Button variant="contained" size="large">
          Get Started
        </Button>
      </Box>
    </Box>
  );
};