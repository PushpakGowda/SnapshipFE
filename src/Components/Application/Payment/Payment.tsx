import { useState } from "react";
import { Box, Card, Typography } from "@mui/material";
import { PaymentMethodSelector } from "./PaymentMethodSelector";
import { CardPayment } from "./CardPayment";
import { UpiPayment } from "./UpiPayment";
import { NetBanking } from "./NetBanking";
import { WalletPayment } from "./WalletPayment";
import { CashOnDelivery } from "./CashOnDelivery";

export const Payment = () => {
  const [method, setMethod] = useState<string>("card");

  const renderMethod = () => {
    switch (method) {
      case "card":
        return <CardPayment />;
      case "upi":
        return <UpiPayment />;
      case "netbanking":
        return <NetBanking />;
      case "wallet":
        return <WalletPayment />;
      case "cod":
        return <CashOnDelivery />;
      default:
        return null;
    }
  };

  return (
    <Box sx={{ display: "flex", gap: 3, padding: 4 }}>
      {/* Left Side – Methods */}
      <Card sx={{ width: 280, padding: 2 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Payment Methods
        </Typography>
        <PaymentMethodSelector selected={method} onSelect={setMethod} />
      </Card>

      {/* Right Side – Form */}
      <Card sx={{ flex: 1, padding: 3 }}>
        {renderMethod()}
      </Card>
    </Box>
  );
};
