import { Box, Typography, IconButton, Link } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useState } from "react";
import { TermsCondition } from "./terms&Condition";
import { PrivacyPolicy } from "./PrivacyPolicy";

export const LandingFooter = () => {
    const [openTerms, setOpenTerms] = useState(false);
    const [openPrivacy, setOpenPrivacy] = useState(false);

  return (
    <>
    <Box
      component="footer"
      sx={{
        backgroundColor: "#2c2c2cff",
        py: 3,
        px: { xs: 2, md: 6 },
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 1.5,
      }}
    >
      <Box>
        <IconButton href="https://facebook.com" target="_blank" sx={{color:"#ffffff"}}>
          <FacebookIcon />
        </IconButton>
        <IconButton href="https://instagram.com" target="_blank" sx={{color:"#ffffff"}}>
          <InstagramIcon />
        </IconButton>
        <IconButton href="https://twitter.com" target="_blank" sx={{color:"#ffffff"}}>
          <TwitterIcon />
        </IconButton>
        <IconButton href="https://linkedin.com" target="_blank" sx={{color:"#ffffff"}}>
          <LinkedInIcon />
        </IconButton>
      </Box>

      <Typography
        variant="body2"
        sx={{
          color: "#555",
          fontSize: "0.9rem",
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 1,
        }}
      >
        © 2025 All rights reserved by SnapShip
        <span>|</span>
        <Link
          component="button"
          underline="hover"
          sx={{ color: "#ffffff", fontWeight: 500 }}
          onClick={() => setOpenTerms(true)}
        >
          Terms & Conditions
        </Link>
        <span>|</span>
        <Link
          component="button"
          underline="hover"
          sx={{ color: "#ffffff", fontWeight: 500 }}
          onClick={() => setOpenPrivacy(true)}
        >
          Privacy Policy
        </Link>
      </Typography>
    </Box>
    <TermsCondition open={openTerms} onClose={() => setOpenTerms(false)} />
    <PrivacyPolicy open={openPrivacy} onClose={() => setOpenPrivacy(false)} />
    </>
  );
};
