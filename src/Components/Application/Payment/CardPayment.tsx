import { Box, TextField, Typography, Button } from "@mui/material";

export const CardPayment = () => {
  return (
    <Box>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Pay with Card
      </Typography>

      <TextField label="Card Number" fullWidth sx={{ mb: 2 }} />
      <Box sx={{ display: "flex", gap: 2 }}>
        <TextField label="Expiry (MM/YY)" fullWidth />
        <TextField label="CVV" fullWidth />
      </Box>

      <TextField label="Name on Card" fullWidth sx={{ mt: 2 }} />

      <Button variant="contained" sx={{ mt: 3 }} fullWidth>
        Pay Now
      </Button>
    </Box>
  );
};
