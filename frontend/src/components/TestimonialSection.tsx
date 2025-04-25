import React from 'react';
import { 
  Box, 
  Typography, 
  Container, 
  Card, 
  CardContent, 
  Avatar, 
  Stack, 
  Button,
  Rating
} from '@mui/material';
import blackDroplet from '../assets/images/stripes.svg';

// Interface for testimonial data
interface TestimonialProps {
  content: string;
  name: string;
  position: string;
  avatar: string;
  rating: number;
}

// Sample testimonial data
const testimonials: TestimonialProps[] = [
  {
    content: "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and...",
    name: "Serhiy Hipskiy",
    position: "CEO GooseTrack",
    avatar: "/path/to/avatar1.jpg",
    rating: 5
  },
  {
    content: "Cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus...",
    name: "Joshua Monko",
    position: "CEO GetMeeting",
    avatar: "/path/to/avatar2.jpg",
    rating: 5
  },
  {
    content: "Accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores...",
    name: "Krisnan Kabeer",
    position: "CEO Udemy",
    avatar: "/path/to/avatar3.jpg",
    rating: 5
  },
  {
    content: "Accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum atque...",
    name: "John Smith",
    position: "CEO Example",
    avatar: "/path/to/avatar4.jpg",
    rating: 5
  }
];

// Individual testimonial card component
const TestimonialCard: React.FC<TestimonialProps> = ({ content, name, position, avatar, rating }) => (
  <Card variant="outlined" sx={{ 
    border: '1px solid #eaeaea', 
    borderRadius: 2, 
    boxShadow: 'none',
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  }}>
    <CardContent sx={{ p: 3, flexGrow: 1 }}>
      <Box sx={{ mb: 2 }}>
        <Rating value={rating} readOnly size="small" sx={{ 
          '& .MuiRating-iconFilled': { 
            color: '#FF5A5A' // Red color for the stars as shown in image
          }
        }} />
      </Box>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        {content}
      </Typography>
      <Stack direction="row" spacing={2} alignItems="center">
        <Avatar src={avatar} alt={name} />
        <Box>
          <Typography variant="subtitle2" fontWeight="bold">
            {name}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            {position}
          </Typography>
        </Box>
      </Stack>
    </CardContent>
  </Card>
);

// Dots pattern SVG for background decoration
const PatternSVG = () => (
  <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    <pattern id="pattern" patternUnits="userSpaceOnUse" width="10" height="10">
      <circle cx="2" cy="2" r="1" fill="#333" />
    </pattern>
    <rect width="120" height="120" fill="url(#pattern)" />
  </svg>
);

// Main testimonial section component
const TestimonialSection: React.FC = () => {
  return (
    <Box sx={{ py: 5, position: 'relative', overflow: 'hidden', bgcolor: 'white' }}>

      <Container maxWidth="lg">
        {/* Section title */}
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="overline" color="text.secondary" sx={{ letterSpacing: 2 }}>
            TESTIMONIAL
          </Typography>
          <Typography variant="h3" component="h2" fontWeight="bold" sx={{ mb: 1 }}>
            What Our Happy
          </Typography>
          <Typography variant="h3" component="h2" fontWeight="bold">
            User Says
          </Typography>
        </Box>

        {/* Testimonial cards */}
        <Box sx={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          mx: -2, 
          mb: 10,
          justifyContent: 'center'
        }}>
          {testimonials.map((testimonial, index) => (
            <Box key={index} sx={{ 
              width: { xs: '100%', sm: '50%', md: '25%' }, 
              px: 2, 
              mb: { xs: 3, md: 0 } 
            }}>
              {/* Purple circle above each card */}
              <Box sx={{ 
                width: 40, 
                height: 40, 
                borderRadius: '50%', 
                bgcolor: '#5E17EB', 
                mb: 2,
                mx: 'auto'
              }} />
              <TestimonialCard {...testimonial} />
            </Box>
          ))}
        </Box>

        {/* Get Started CTA section */}
        <Box sx={{ 
          bgcolor: '#F8F9FF', 
          borderRadius: 4, 
          p: { xs: 3, md: 6 }, 
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Dots pattern */}
          <Box sx={{ position: 'relative', left: 0, bottom: 0, opacity: 0.5 }}>
            <Box
                component="img"
                src={blackDroplet}
                alt="Feature preview"
                sx={{
                    color: 'black',
                    position: 'absolute',
                top: '2%', left: '0%',
                width: 70, height: 70,
                }}
            />
          </Box>

          <Box sx={{ textAlign: 'center', maxWidth: 600, mx: 'auto' }}>
            <Typography variant="h4" component="h3" fontWeight="bold" mb={2}>
              Get Started With AR Shakir
            </Typography>
            <Typography variant="body1" color="text.secondary" mb={4}>
              Why kept very ever home mrs. Considered sympathize ten uncommonly occasional assistance sufficient not.
            </Typography>
            <Button 
              variant="contained" 
              size="large"
              sx={{ 
                bgcolor: '#5E17EB', 
                px: 4, 
                py: 1.5,
                '&:hover': {
                  bgcolor: '#4c13c1'
                } 
              }}
            >
              Get Started
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default TestimonialSection;