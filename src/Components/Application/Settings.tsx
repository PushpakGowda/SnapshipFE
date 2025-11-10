import {
  Box,
  Typography,
  TextField,
  Switch,
  FormControlLabel,
  Button,
  Divider,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Avatar,
  IconButton,
} from "@mui/material";
import { useState, type ChangeEvent } from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";
import { theme } from "../theme";
import { useMediaQuery } from "@mui/material";
import PhotoCamera from "@mui/icons-material/PhotoCamera";

export const Setting = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [notifications, setNotifications] = useState(true);
  const [dob, setDob] = useState<Dayjs | null>(dayjs());
  const [gender, setGender] = useState("Male");
  const [profilePic, setProfilePic] = useState<string>(
    "https://i.pravatar.cc/150?img=8"
  );

  // 📸 Handle Profile Picture Upload
  const handleProfilePicChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setProfilePic(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
      }}
    >
      {/* Outer Wrapper */}
      <Box
        sx={{
          width: "100%",
          maxWidth: 1000,
          p: { xs: 3, sm: 4 },
          borderRadius: "20px",
          background: "#ffffff",
          boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
          transition: "box-shadow 0.3s ease, transform 0.3s ease",
          "&:hover": {
            boxShadow: "0 12px 40px rgba(0,0,0,0.12)",
            transform: "translateY(-4px)",
          },
        }}
      >
        {/* Title */}
        <Typography
          variant={isMobile ? "h5" : "h4"}
          sx={{
            fontWeight: 700,
            color: "#1976d2",
            fontFamily: "Poppins, sans-serif",
            mb: 3,
          }}
        >
          Settings
        </Typography>

        {/* Profile Section */}
        <Typography
          variant="h6"
          sx={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: 600,
            color: "#333",
            mb: 2,
          }}
        >
          Profile Information
        </Typography>

        {/* Profile Picture */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 3,
            mb: 3,
            flexWrap: "wrap",
          }}
        >
          <Avatar
            src={profilePic}
            alt="Profile Picture"
            sx={{
              width: 100,
              height: 100,
              boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
            }}
          />
          <Box>
            <Typography sx={{ mb: 1, fontWeight: 500, color: "#333" }}>
              Update Profile Picture
            </Typography>
            <input
              accept="image/*"
              type="file"
              id="profile-upload"
              style={{ display: "none" }}
              onChange={handleProfilePicChange}
            />
            <label htmlFor="profile-upload">
              <IconButton
                component="span"
                color="primary"
                sx={{
                  backgroundColor: "rgba(25,118,210,0.1)",
                  "&:hover": { backgroundColor: "rgba(25,118,210,0.2)" },
                }}
              >
                <PhotoCamera />
              </IconButton>
            </label>
          </Box>
        </Box>

        {/* Profile Fields */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            mb: 3,
          }}
        >
          <TextField label="Full Name" variant="outlined" fullWidth />
          <TextField label="Email Address" variant="outlined" fullWidth />
          <TextField label="Phone Number" variant="outlined" fullWidth />

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Date of Birth"
              value={dob}
              onChange={(newValue: Dayjs | null) => setDob(newValue)}
              slotProps={{
                textField: {
                  fullWidth: true,
                  variant: "outlined",
                },
              }}
            />
          </LocalizationProvider>

          <FormControl fullWidth>
            <InputLabel>Gender</InputLabel>
            <Select
              value={gender}
              label="Gender"
              onChange={(e) => setGender(e.target.value)}
            >
              <MenuItem value={"Male"}>Male</MenuItem>
              <MenuItem value={"Female"}>Female</MenuItem>
              <MenuItem value={"Other"}>Other</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Divider sx={{ my: 3 }} />

        {/* Password Update */}
        <Typography
          variant="h6"
          sx={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: 600,
            color: "#333",
            mb: 2,
          }}
        >
          Security
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            mb: 3,
          }}
        >
          <TextField
            label="Current Password"
            type="password"
            variant="outlined"
            fullWidth
          />
          <TextField
            label="New Password"
            type="password"
            variant="outlined"
            fullWidth
          />
          <TextField
            label="Confirm New Password"
            type="password"
            variant="outlined"
            fullWidth
          />
        </Box>

        <Divider sx={{ my: 3 }} />

        {/* Preferences */}
        <Typography
          variant="h6"
          sx={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: 600,
            color: "#333",
            mb: 2,
          }}
        >
          Preferences
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1.5,
            mb: 3,
          }}
        >
          <FormControlLabel
            control={
              <Switch
                checked={notifications}
                onChange={() => setNotifications(!notifications)}
                color="primary"
              />
            }
            label="Enable Notifications"
          />
        </Box>

        <Divider sx={{ my: 3 }} />

        {/* Save Button */}
        <Box display="flex" justifyContent="center">
          <Button
            variant="contained"
            sx={{
              py: 1.2,
              px: 4,
              borderRadius: "25px",
              background: "linear-gradient(90deg, #1976d2, #42a5f5)",
              textTransform: "none",
              fontWeight: 600,
              fontFamily: "Poppins, sans-serif",
              "&:hover": {
                background: "linear-gradient(90deg, #1565c0, #1976d2)",
              },
            }}
          >
            Save Changes
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
