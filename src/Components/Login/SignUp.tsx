import {
  Box,
  Typography,
  TextField,
  Button,
  Link,
  Paper,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Dayjs } from "dayjs";

export const SignUp = () => {
  const navigate = useNavigate();
  const [mobile, setMobile] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState<Dayjs | null>(null);

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
        Create Account
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
        <TextField
          label="Full Name"
          variant="outlined"
          fullWidth
          InputLabelProps={{ style: { color: "#ccc" } }}
          InputProps={{
            style: {
              color: "#fff",
              background: "rgba(255, 255, 255, 0.1)",
              borderRadius: "10px",
            },
          }}
        />

        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          InputLabelProps={{ style: { color: "#ccc" } }}
          InputProps={{
            style: {
              color: "#fff",
              background: "rgba(255, 255, 255, 0.1)",
              borderRadius: "10px",
            },
          }}
        />

      <TextField
        label="Mobile Number"
        variant="outlined"
        fullWidth
        value={mobile}
        onChange={(e) => setMobile(e.target.value.replace(/\D/g, ""))} // allow only numbers
        inputProps={{ maxLength: 10 }}
        InputLabelProps={{ style: { color: "#ccc" } }}
        InputProps={{
          style: {
            color: "#fff",
            background: "rgba(255, 255, 255, 0.1)",
            borderRadius: "10px",
          },
        }}
      />
    <FormControl
        sx={{
          mt: 1,
          background: "rgba(255, 255, 255, 0.1)",
          borderRadius: "10px",
          p: 2,
        }}
      >
        <FormLabel sx={{ color: "#ccc" }}>Gender</FormLabel>
        <RadioGroup
          row
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          sx={{
            color: "#fff",
            "& .MuiFormControlLabel-root": {
              marginRight: "1.5rem",
            },
          }}
        >
          <FormControlLabel
            value="male"
            control={<Radio sx={{ color: "#90caf9" }} />}
            label="Male"
          />
          <FormControlLabel
            value="female"
            control={<Radio sx={{ color: "#f48fb1" }} />}
            label="Female"
          />
          <FormControlLabel
            value="other"
            control={<Radio sx={{ color: "#ce93d8" }} />}
            label="Other"
          />
        </RadioGroup>
      </FormControl>

      <DatePicker
        label="Date of Birth"
        value={dob}
        onChange={(newValue) => setDob(newValue)}
        slotProps={{
          textField: {
            fullWidth: true,
            InputLabelProps: { style: { color: "#ccc" } },
            InputProps: {
              style: {
                color: "#fff",
                background: "rgba(255, 255, 255, 0.1)",
                borderRadius: "10px",
              },
            },
          },
        }}
        />
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
          onClick={() => navigate("/Login/OTP")}
        >
          Sign Up
        </Button>
      </Box>

      <Typography
        variant="body2"
        sx={{
          mt: 3,
          color: "rgba(255,255,255,0.8)",
        }}
      >
        Already have an account?{" "}
        <Link
          component="button"
          onClick={() => navigate("/Login")}
          underline="hover"
          sx={{
            color: "#90caf9",
            fontWeight: 600,
            "&:hover": { color: "#42a5f5" },
          }}
        >
          Login
        </Link>
      </Typography>
    </Paper>
  );
};
