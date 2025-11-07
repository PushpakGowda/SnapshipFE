import { Box, Typography, IconButton, Link } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export const Contact = () => {
  return (
    <Box
      id="Landing-contact"
      sx={{
        display: "flex",
        backgroundColor:"#c0c0c0ff",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "stretch",
        justifyContent: "center",
        gap: 4,
        padding:1,
        px: { xs: 2, md: 8 },
        width: "100%",
      }}
    >
      <Box
        sx={{
          flex: 1,
          height: { xs: 300, md: 400 },
          borderRadius: 3,
          overflow: "hidden",
          boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
        }}
      >
        <iframe
          title="SnapShip Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d997.6372783941723!2d76.7076287!3d12.4124374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf76ec862bf605%3A0x94ba9b671929c41e!2sAralikatte%20Small%20Ganesh%20Temple!5e0!3m2!1sen!2sin!4v1730799965000!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </Box>

      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: 3,
        }}
      >
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", color: "#333", mb: 1 }}
        >
          Contact Us
        </Typography>

        <Box display="flex" alignItems="center" gap={2}>
          <LocationOnIcon color="primary" />
          <Typography variant="body1" sx={{ color: "#555" }}>
            Aralikatte Small Ganesh Temple
            CP65+W4H, Ganjam, Karnataka 571477
          </Typography>
        </Box>

        <Box display="flex" alignItems="center" gap={2}>
          <PhoneIcon color="primary" />
          <Typography variant="body1" sx={{ color: "#555" }}>
            +91 1234567890
          </Typography>
        </Box>

        <Box display="flex" alignItems="center" gap={2}>
          <EmailIcon color="primary" />
          <Typography variant="body1" sx={{ color: "#555" }}>
            support@snapship.com
          </Typography>
        </Box>

        <Box display="flex" alignItems="center" gap={2} mt={1}>
          <Link href="https://facebook.com" target="_blank">
            <IconButton color="primary">
              <FacebookIcon />
            </IconButton>
          </Link>
          <Link href="https://instagram.com" target="_blank">
            <IconButton color="primary">
              <InstagramIcon />
            </IconButton>
          </Link>
          <Link href="https://twitter.com" target="_blank">
            <IconButton color="primary">
              <TwitterIcon />
            </IconButton>
          </Link>
          <Link href="https://linkedin.com" target="_blank">
            <IconButton color="primary">
              <LinkedInIcon />
            </IconButton>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};
