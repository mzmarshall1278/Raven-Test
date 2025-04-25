import React from 'react';
import { 
  Box, 
  Typography, 
  Container, 
  Stack, 
  Link, 
  List, 
  ListItem,
  SvgIcon
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

const LinkedInIcon = () => (
  <SvgIcon viewBox="0 0 24 24" sx={{ color: '#5E17EB', fontSize: 24 }}>
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </SvgIcon>
);

const MessengerIcon = () => (
  <SvgIcon viewBox="0 0 24 24" sx={{ color: '#5E17EB', fontSize: 24 }}>
    <path d="M12 2C6.36 2 2 6.13 2 11.7c0 2.91 1.19 5.44 3.14 7.17.16.13.26.35.27.57l.05 1.78c.02.55.57.94 1.1.75l1.98-.78c.19-.07.39-.06.57.03.92.4 1.91.62 2.93.62 5.64 0 10-4.13 10-9.7C22 6.13 17.64 2 12 2zm5.69 7.52-2.5 3.97c-.4.63-1.25.84-1.92.52l-2.07-1c-.2-.1-.44-.09-.63.02l-2.81 1.58c-.37.21-.8-.12-.69-.54l1.31-5.04c.17-.64.77-1.05 1.43-1.01l6.18.37c.44.02.67.53.4.88z" />
  </SvgIcon>
);

const TwitterIcon = () => (
  <SvgIcon viewBox="0 0 24 24" sx={{ color: '#5E17EB', fontSize: 24 }}>
    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
  </SvgIcon>
);

const FlickrIcon = () => (
  <SvgIcon viewBox="0 0 24 24" sx={{ color: '#5E17EB', fontSize: 24 }}>
    <path d="M17.66 11.2c2.65 0 4.81 2.17 4.81 4.81 0 2.64-2.16 4.79-4.81 4.79-2.64 0-4.78-2.15-4.78-4.79 0-2.64 2.14-4.81 4.78-4.81zm-9.55 0c2.65 0 4.79 2.17 4.79 4.81 0 2.64-2.14 4.79-4.79 4.79-2.65 0-4.81-2.15-4.81-4.79 0-2.64 2.16-4.81 4.81-4.81z" />
  </SvgIcon>
);

interface ColumnProps {
  title: string;
  items: Array<{
    text: string;
    link: string;
  }>;
}

const LinkColumn: React.FC<ColumnProps> = ({ title, items }) => (
  <Box sx={{ minWidth: '120px', mb: { xs: 3, md: 0 } }}>
    <Typography variant="subtitle1" fontWeight="bold" mb={2}>
      {title}
    </Typography>
    <List disablePadding>
      {items.map((item, index) => (
        <ListItem key={index} disablePadding sx={{ mb: 1 }}>
          <Link href={item.link} underline="hover" color="inherit">
            {item.text}
          </Link>
        </ListItem>
      ))}
    </List>
  </Box>
);

const Footer: React.FC = () => {
  return (
    <Box component="footer" sx={{ bgcolor: '#ffffff', pt: 6, pb: 3 }}>
      <Container maxWidth="lg">
        <Stack 
          direction={{ xs: 'column', md: 'row' }} 
          spacing={{ xs: 4, md: 8 }}
          justifyContent="space-between"
          mb={6}
        >
          {/* Logo and tagline */}
          <Box sx={{ minWidth: '180px' }}>
            <Typography variant="h6" fontWeight="bold" mb={1}>
              AR
            </Typography>
            <Typography variant="body2" color="text.secondary" mb={2}>
              Finance helps companies manage payments easily.
            </Typography>
            <Stack direction="row" spacing={2}>
              <Link href="#" color="inherit">
                <LinkedInIcon />
              </Link>
              <Link href="#" color="inherit">
                <MessengerIcon />
              </Link>
              <Link href="#" color="inherit">
                <TwitterIcon />
              </Link>
              <Link href="#" color="inherit">
                <FlickrIcon />
              </Link>
            </Stack>
          </Box>

          {/* Company Column */}
          <LinkColumn
            title="Company"
            items={[
              { text: "About Us", link: "/about" },
              { text: "Careers", link: "/careers" },
              { text: "Blog", link: "/blog" },
              { text: "Pricing", link: "/pricing" },
            ]}
          />

          {/* Product Column */}
          <LinkColumn
            title="Product"
            items={[
              { text: "Invoicing", link: "/invoicing" },
              { text: "Contract", link: "/contract" },
              { text: "Accounting", link: "/accounting" },
              { text: "Proposal", link: "/proposal" },
            ]}
          />

          {/* Resources Column */}
          <LinkColumn
            title="Resources"
            items={[
              { text: "Proposal Template", link: "/proposal-template" },
              { text: "Invoice Template", link: "/invoice-template" },
              { text: "Tutorial", link: "/tutorial" },
              { text: "How to write a contract", link: "/contract-guide" },
            ]}
          />

          {/* Contact Us Column */}
          <Box sx={{ minWidth: '180px' }}>
            <Typography variant="subtitle1" fontWeight="bold" mb={2}>
              Contact Us
            </Typography>
            <Stack spacing={1}>
              <Stack direction="row" spacing={1} alignItems="center">
                <EmailIcon fontSize="small" />
                <Typography variant="body2">
                  shakir260@gmail.com
                </Typography>
              </Stack>
              <Stack direction="row" spacing={1} alignItems="center">
                <PhoneIcon fontSize="small" />
                <Typography variant="body2">
                  +92-300-848-8985
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Stack>

        {/* Copyright */}
        <Box sx={{ borderTop: '1px solid #eaeaea', pt: 3, textAlign: 'center' }}>
          <Typography variant="body2" color="text.secondary">
            Copyright @ AR Shakir 2022. All Rights Reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;