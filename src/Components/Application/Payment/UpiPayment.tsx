import { Box, TextField, Typography, Button } from "@mui/material";

export const UpiPayment = () => {
  return (
    <Box>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Pay with UPI
      </Typography>

      <TextField label="Enter UPI ID" fullWidth sx={{ mb: 2 }} />

      <Button variant="contained" fullWidth>
        Verify & Pay
      </Button>
    </Box>
  );
};
