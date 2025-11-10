import { Box, Typography, Button, Paper} from "@mui/material";
import { useState } from "react";
import { OTPInput } from "./OTPInput";
import { useNavigate } from "react-router-dom";

export const OTPPage = () => {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/Login/ChangePassword");
  };

  console.log(otp);
  return (
    <Paper
      elevation={8}
      sx={{
        width: { xs: "90%", sm: "80%", md: "420px" },
        p: { xs: 3, sm: 4 },
        borderRadius: "20px",
        background: "rgba(255, 255, 255, 0.15)",
        backdropFilter: "blur(15px)",
        boxShadow: "0 8px 40px rgba(0,0,0,0.3)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        color: "#fff",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          mb: 2,
          background: "linear-gradient(90deg, #90caf9, #42a5f5)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Verify OTP
      </Typography>

        <Typography
        variant="body1"
        sx={{
            mb: 3,
            color: "rgba(255,255,255,0.8)",
            textAlign: "center",
        }}
        >
        Enter the 4-digit code sent to your email
        </Typography>

      <Box
        component="form"
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: 2.5,
        }}
      >
      <OTPInput length={4} onChangeOTP={setOtp} />

        <Button
        
          variant="contained"
          fullWidth
          sx={{
            py: 1.3,
            borderRadius: "25px",
            background: "linear-gradient(90deg, #42a5f5, #1e88e5)",
            textTransform: "none",
            fontWeight: 600,
            fontSize: "1rem",
            "&:hover": {
              background: "linear-gradient(90deg, #1e88e5, #1565c0)",
            },
          }}
          onClick={handleSubmit}
        >
          Verify
        </Button>
      </Box>
    </Paper>
  );
};
