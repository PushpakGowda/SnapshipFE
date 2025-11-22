import { Box, Typography, FormControl, RadioGroup, FormControlLabel, Radio, Button } from "@mui/material";

export const NetBanking = () => {
  return (
    <Box>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Net Banking
      </Typography>

      <FormControl sx={{ mb: 2 }}>
        <RadioGroup>
          <FormControlLabel value="hdfc" control={<Radio />} label="HDFC Bank" />
          <FormControlLabel value="icici" control={<Radio />} label="ICICI Bank" />
          <FormControlLabel value="sbi" control={<Radio />} label="State Bank of India" />
          <FormControlLabel value="axis" control={<Radio />} label="Axis Bank" />
        </RadioGroup>
      </FormControl>

      <Button variant="contained" fullWidth>
        Proceed to Bank
      </Button>
    </Box>
  );
};
