import React from 'react';
import { Box, Typography, Container, Paper } from '@mui/material';

// Import your company logos here
import OpenZeppelinLogo from '../assets/logos/openzeppelin.svg';
import OracleLogo from '../assets/logos/oracle.svg';
import MorpheusLogo from '../assets/logos/morpheus.svg';
import SamsungLogo from '../assets/logos/samsung.svg';
import MondayLogo from '../assets/logos/monday.svg';
import SegmentLogo from '../assets/logos/segment.svg';
import ProtonetLogo from '../assets/logos/protonet.svg';

// Import feature images
import QuickSummaryImage from '../assets/images/quick-summary.png';
import WalletImage from '../assets/images/wallet.png';
import PaymentImage from '../assets/images/payment.png';

const PartnersAndFeatures = () => {
  const features = [
    {
      title: "Quick Summary",
      description: "Get a detailed overview of your crypto payments and transactions with our intuitive dashboard."
    },
    {
      title: "Secure Wallet Integration",
      description: "Connect your preferred wallet for seamless transactions with advanced security protocols."
    },
    {
      title: "Effortless Payments",
      description: "Process cryptocurrency payments quickly with minimal fees and maximum transparency."
    }
  ];

  return (
    <Box sx={{ width: '100%', bgcolor: 'white' }}>
      {/* Partners Section */}
      <Container maxWidth="xl" sx={{ py: 6 }}>
        <Typography
          variant="h6"
          align="center"
          sx={{ mb: 4, fontWeight: 500, color: '#333' }}
        >
          Companies we have helped grow
        </Typography>
        
        <Box 
          sx={{ 
            display: 'flex', 
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: { xs: 3, md: 2 }
          }}
        >
          {[
            { src: OpenZeppelinLogo, alt: 'OpenZeppelin' },
            { src: OracleLogo, alt: 'Oracle' },
            { src: MorpheusLogo, alt: 'Morpheus' },
            { src: SamsungLogo, alt: 'Samsung' },
            { src: MondayLogo, alt: 'Monday' },
            { src: SegmentLogo, alt: 'Segment' },
            { src: ProtonetLogo, alt: 'Protonet' },
          ].map((logo, index) => (
            <Box 
              key={index}
              component="img"
              src={logo.src}
              alt={logo.alt}
              sx={{
                height: { xs: '20px', sm: '24px', md: '28px' },
                objectFit: 'contain',
                filter: 'grayscale(0%)',
                opacity: 0.9,
                transition: 'all 0.3s ease',
                '&:hover': {
                  opacity: 1,
                  transform: 'scale(1.05)'
                }
              }}
            />
          ))}
        </Box>
      </Container>

      {/* Crypto Payments Section */}
      <Box sx={{ bgcolor: '#fafafa', py: 8 }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 5 }}>
            <Typography
              variant="subtitle1"
              component="p"
              sx={{ 
                color: '#5e17eb', 
                fontWeight: 500, 
                textTransform: 'uppercase',
                fontSize: '0.875rem',
                mb: 1 
              }}
            >
              WHY AR SHAKIR
            </Typography>
            
            <Typography
              variant="h3"
              component="h2"
              sx={{ 
                fontWeight: 'bold',
                fontSize: { xs: '1.75rem', md: '2.25rem' },
                color: '#1a1a1a'
              }}
            >
              Specially Designed For Crypto Payments
            </Typography>
          </Box>
          {/* Dashboard Preview Section */}
          <Paper 
            elevation={3}
            sx={{ 
              p: 4,
              borderRadius: 4,
              mb: 6,
              position: 'relative',
              overflow: 'hidden',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '60px',
                height: '60px',
                borderTopLeftRadius: '16px',
                bgcolor: '#ff7a5930',
                zIndex: 1
              },
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: 0,
                right: 0,
                width: '60px',
                height: '60px',
                borderBottomRightRadius: '16px',
                bgcolor: '#ff7a5930',
                zIndex: 1
              }
            }}
          >
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 3 }}>
              {/* Left panel - Last Payment */}
              <Box sx={{ flex: 1 }}>
                <Paper elevation={0} sx={{ bgcolor: '#f8f9fa', p: 2, borderRadius: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                    <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#4caf50' }}></Box>
                    <Typography variant="caption" color="text.secondary">LAST PAYMENT</Typography>
                  </Box>
                  <Typography variant="h6" fontWeight="bold">$5,250.90</Typography>
                  <Box sx={{ height: 1, bgcolor: '#e0e0e0', my: 1.5 }}></Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#2196f3' }}></Box>
                    <Typography variant="caption">$0.00</Typography>
                  </Box>
                </Paper>
              </Box>

              {/* Middle panel - Total Revenue */}
              <Box sx={{ flex: 1 }}>
                <Paper elevation={0} sx={{ bgcolor: '#f8f9fa', p: 2, borderRadius: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                    <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#ff9800' }}></Box>
                    <Typography variant="caption" color="text.secondary">TOTAL REVENUE</Typography>
                  </Box>
                  <Typography variant="h6" fontWeight="bold">$10,596.80</Typography>
                  <Box sx={{ height: 1, bgcolor: '#e0e0e0', my: 1.5 }}></Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#9c27b0' }}></Box>
                    <Typography variant="caption">$5,596.80</Typography>
                  </Box>
                </Paper>
              </Box>

              {/* Right panel - Progress bars */}
              <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Box sx={{ display: 'flex', alignItems: 'flex-end', gap: 3 }}>
                  {/* Progress bar 1 */}
                  <Box sx={{ textAlign: 'center' }}>
                    <Box sx={{ 
                      position: 'relative', 
                      height: 80, 
                      width: 8, 
                      bgcolor: '#e0e0e0', 
                      borderRadius: 4,
                      mb: 0.5
                    }}>
                      <Box sx={{ 
                        position: 'absolute', 
                        bottom: 0, 
                        width: '100%', 
                        height: '65%', 
                        bgcolor: '#ff9800', 
                        borderRadius: 4 
                      }}></Box>
                    </Box>
                    <Typography variant="caption">65%</Typography>
                  </Box>

                  {/* Progress bar 2 */}
                  <Box sx={{ textAlign: 'center' }}>
                    <Box sx={{ 
                      position: 'relative', 
                      height: 80, 
                      width: 8, 
                      bgcolor: '#e0e0e0', 
                      borderRadius: 4,
                      mb: 0.5
                    }}>
                      <Box sx={{ 
                        position: 'absolute', 
                        bottom: 0, 
                        width: '100%', 
                        height: '82%', 
                        bgcolor: '#9e9e9e', 
                        borderRadius: 4 
                      }}></Box>
                    </Box>
                    <Typography variant="caption">82%</Typography>
                  </Box>

                  {/* Special progress indicator */}
                  <Box sx={{ textAlign: 'center' }}>
                    <Box sx={{ 
                      height: 80, 
                      width: 32, 
                      bgcolor: '#5e17eb', 
                      borderRadius: 16,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 0.5
                    }}>
                      <Typography variant="caption" color="white" fontWeight="bold">99</Typography>
                    </Box>
                    <Typography variant="caption" sx={{ visibility: 'hidden' }}>_</Typography>
                  </Box>

                  {/* Progress bar 3 */}
                  <Box sx={{ textAlign: 'center' }}>
                    <Box sx={{ 
                      position: 'relative', 
                      height: 80, 
                      width: 8, 
                      bgcolor: '#e0e0e0', 
                      borderRadius: 4,
                      mb: 0.5
                    }}>
                      <Box sx={{ 
                        position: 'absolute', 
                        bottom: 0, 
                        width: '100%', 
                        height: '60%', 
                        bgcolor: '#9e9e9e', 
                        borderRadius: 4 
                      }}></Box>
                    </Box>
                    <Typography variant="caption">60%</Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Paper>
          
          {/* Three Feature Columns */}
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
            {features.map((feature, index) => (
              <Box key={index} sx={{ flex: 1 }}>
                <Typography
                  variant="h6"
                  sx={{ 
                    fontWeight: 'bold',
                    mb: 2,
                    fontSize: '1.125rem'
                  }}
                >
                  {feature.title}
                </Typography>
                
                <Typography
                  variant="body2"
                  sx={{ 
                    color: '#666',
                    mb: 0,
                    fontSize: '0.875rem',
                    lineHeight: 1.6
                  }}
                >
                  {feature.description}
                </Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default PartnersAndFeatures;