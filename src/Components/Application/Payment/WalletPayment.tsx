import { Box, Typography, Button, Stack } from "@mui/material";

export const WalletPayment = () => {
  return (
    <Box>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Wallets
      </Typography>

      <Stack spacing={2}>
        <Button variant="outlined">Paytm Wallet</Button>
        <Button variant="outlined">PhonePe Wallet</Button>
        <Button variant="outlined">Amazon Pay</Button>
      </Stack>
    </Box>
  );
};
