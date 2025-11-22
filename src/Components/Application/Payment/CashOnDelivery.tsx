import { Box, Typography, Button } from "@mui/material";

export const CashOnDelivery = () => {
  return (
    <Box>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Cash on Delivery
      </Typography>

      <Typography sx={{ mb: 2 }}>
        Pay when the product is delivered to your address.
      </Typography>

      <Button variant="contained" fullWidth>
        Confirm Order
      </Button>
    </Box>
  );
};
