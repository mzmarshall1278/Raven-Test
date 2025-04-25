import React from "react";
import { Box } from "@mui/material";
import HeroSection from "../components/HeroSection";
import PartnersAndFeatures from "../components/PartnersAndFeatures";
import Footer from "../components/Footer";
import { FeatureSection } from "../components/FeatureSection";
import { NewsletterSection } from "../components/NewsletterSection";
import { ExpenseDashboardFeature } from "../components/ExpenseDashboardFeature";
import TestimonialSection from "../components/TestimonialSection";

const Home: React.FC = () => {
  return (
      <Box sx={{ bgcolor: "background.default", minHeight: "100vh" }}>
        <Box bgcolor="#F1F1FF"sx={{pb: '114px'}} >
          {/* <Header /> */}
          <HeroSection />
        </Box>
        <PartnersAndFeatures />
        <FeatureSection />
        <NewsletterSection />
        <ExpenseDashboardFeature />
        <TestimonialSection />
        <Footer />
      </Box>
  );
};

export default Home;
