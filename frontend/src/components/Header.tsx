import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const { user, logout } = useAuth();
  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar sx={{ color: "#000", py: "28px", bgcolor: "#F1F1FF" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center", // Vertically center all children
            width: "100%",
            pl: "136px",
            pr: "102px",
          }}
        >
          {/* Logo */}
          <Typography variant="h6" component="div" sx={{ fontWeight: "bold" }}>
            AR SHAKIR
          </Typography>

          {/* Navigation Buttons */}
          <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
            <Button color="inherit" endIcon={<KeyboardArrowDownIcon />}>
              Product
            </Button>
            <Button color="inherit" endIcon={<KeyboardArrowDownIcon />}>
              Template
            </Button>
            <Button color="inherit">Blog</Button>
            <Button color="inherit">Pricing</Button>
          </Box>

          {/* Auth Buttons */}
          {user ? (
            <Button
              variant="contained"
              color="primary"
              sx={{ borderRadius: 0 }}
              onClick={logout}
            >
              Logout
            </Button>
          ) : (
            <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
              <Link to="/signup">
                <Button color="inherit">Sign in</Button>
              </Link>
              <Link to="/login">
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ borderRadius: 0 }}
                >
                  Start Free
                </Button>
              </Link>
            </Box>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
