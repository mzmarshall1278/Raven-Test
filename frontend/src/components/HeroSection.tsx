import { Box, Typography, Button } from "@mui/material";
import DashboardImage from "../assets/images/dashboard.png";
import RevenueImage from "../assets/images/revenue.png";
import BalanceImage from "../assets/images/total-balance.png";

const HeroSection = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        gap: 4,
        position: "relative",
        pl: "136px",
      }}
    >
      {/* Left content section */}
      <Box sx={{ flex: { xs: "1 1 100%", md: "1 1 50%" }, zIndex: 2 }}>
        <Typography
          variant="h2"
          component="h1"
          sx={{
            fontWeight: "normal",
            fontSize: "800",
            mb: 2,
            color: "#1a1a1a",
          }}
        >
          Managing business payments has never been easier
        </Typography>

        <Typography
          variant="body1"
          sx={{
            mb: 4,
            lineHeight: 1.6,
            fontSize: "20",
          }}
        >
          End-to-end payments and financial management in a single solution.
          Meet the right platform to help realize.
        </Typography>

        <Box sx={{ display: "flex", gap: 2, mb: 4 }}>
          <Button
            variant="contained"
            sx={{
              bgcolor: "primary",
              py: "1.2rem",
              px: "2.4rem",
              textTransform: "none",
              borderRadius: 1,
            }}
          >
            Get Started
          </Button>
          <Button
            sx={{
              color: "primary",
              px: 3,
              py: 1,
              textTransform: "none",
            }}
          >
            See How It Works
          </Button>
        </Box>

        <Box sx={{ display: "flex", gap: 4 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Box
              sx={{
                width: 24,
                height: 24,
                borderRadius: "50%",
                bgcolor: "#4F46BA",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box
                component="span"
                sx={{ color: "white", fontSize: "0.875rem" }}
              >
                ✓
              </Box>
            </Box>
            <Typography variant="body2" sx={{ fontWeight: 500 }}>
              Free Register
            </Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Box
              sx={{
                width: 24,
                height: 24,
                borderRadius: "50%",
                bgcolor: "#4F46BA",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box
                component="span"
                sx={{ color: "white", fontSize: "0.875rem" }}
              >
                ✓
              </Box>
            </Box>
            <Typography variant="body2" sx={{ fontWeight: 500 }}>
              Great Service
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Right section with dashboard image and overlay cards */}
      <Box
        sx={{
          flex: { xs: "1 1 100%", md: "1 1 60%" },
          display: "flex",
          justifyContent: "flex-end",
          position: "relative",
          height: "100%",
          minHeight: "500px",
        }}
      >
        {/* Revenue Image */}
        <Box
          component="img"
          src={RevenueImage}
          alt="Revenue Chart"
          sx={{
            position: "absolute",
            top: "250px",
            left: "-40px",
            zIndex: 3,
            width: "196px",
          }}
        />

        {/* Balance Image */}
        <Box
          component="img"
          src={BalanceImage}
          alt="Balance Chart"
          sx={{
            position: "absolute",
            top: "350px",
            left: "-40px",
            zIndex: 3,
            width: "243px",
          }}
        />

        <Box
          component="img"
          src={DashboardImage}
          alt="Dashboard Interface"
          sx={{
            maxWidth: "796px",
            height: "800",
            display: "block",
            position: "relative", 
            zIndex: 1,
            borderRadius: 3,
          }}
        />
      </Box>
    </Box>
  );
};

export default HeroSection;
