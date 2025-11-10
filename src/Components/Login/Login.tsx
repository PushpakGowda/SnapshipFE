import {
  Box,
  Typography,
  TextField,
  Button,
  Divider,
  Link,
  Paper,
} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();

  return (
    <Paper
      elevation={8}
      sx={{
        width: { xs: "90%", sm: "80%", md: "400px" },
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
          mb: 1,
          background: "linear-gradient(90deg, #90caf9, #42a5f5)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Welcome to SnapShip
      </Typography>

      <Typography
        variant="body1"
        sx={{
          mb: 3,
          color: "rgba(255,255,255,0.8)",
          textAlign: "center",
        }}
      >
        Sign in to relive your favorite memories.
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
          label="Login ID"
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
          label="Password"
          type="password"
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

        <Box display="flex" justifyContent="flex-end"   
        onClick={() => navigate("/Login/ForgotPassword")}>
          <Link
            underline="hover"
            sx={{
              color: "#90caf9",
              fontSize: "0.9rem",
              "&:hover": { color: "#42a5f5" },
            }}
          >
            Forgot Password?
          </Link>
        </Box>

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
          onClick={()=>navigate("/App")}
        >
          Sign In
        </Button>

        <Divider
          sx={{
            my: 3,
            color: "rgba(255,255,255,0.5)",
            "&::before, &::after": {
              borderColor: "rgba(255,255,255,0.2)",
            },
          }}
        >
          or
        </Divider>

        <Button
          variant="outlined"
          fullWidth
          startIcon={<GoogleIcon />}
          sx={{
            py: 1.2,
            borderRadius: "25px",
            textTransform: "none",
            color: "#fff",
            borderColor: "rgba(255,255,255,0.4)",
            fontWeight: 600,
            "&:hover": {
              background: "rgba(255,255,255,0.1)",
              borderColor: "#42a5f5",
            },
          }}
        >
          Sign in with Google
        </Button>
      </Box>

      <Typography
        variant="body2"
        sx={{
          mt: 3,
          color: "rgba(255,255,255,0.8)",
        }}
      >
        Don’t have an account?{" "}
        <Link
          component="button"
          onClick={() => navigate("/Login/SignUp")}
          underline="hover"
          sx={{
            color: "#90caf9",
            fontWeight: 600,
            "&:hover": { color: "#42a5f5" },
          }}
        >
          Sign Up
        </Link>
      </Typography>
    </Paper>
  );
};
