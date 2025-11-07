import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";

interface PrivacyPolicyProps {
  open: boolean;
  onClose: () => void;
}

export const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({
  open,
  onClose,
}) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle
        sx={{ fontWeight: "bold", color: "#1976d2", textAlign: "center" }}
      >
        Privacy Policy
      </DialogTitle>

      <DialogContent dividers>
        <Typography variant="body1" sx={{ color: "#555", lineHeight: 1.7 }}>
          At SnapShip, your privacy is our priority. This Privacy Policy
          explains how we collect, use, and protect your information when you
          use our platform and services.
        </Typography>

        <ul style={{ color: "#555", marginTop: 10, lineHeight: 1.7 }}>
          <li>
            We collect your name, email, address, and uploaded photos solely for
            order fulfillment and service improvement.
          </li>
          <li>
            All photos and user data are securely stored and never shared with
            third parties without consent.
          </li>
          <li>
            SnapShip uses encrypted connections (SSL) to ensure your data is
            safe during uploads, payments, and delivery processing.
          </li>
          <li>
            You can request deletion of your personal data or account at any
            time by contacting our support team.
          </li>
          <li>
            We may send occasional emails related to your orders, updates, or
            promotions — you can opt out anytime.
          </li>
          <li>
            Our site uses cookies to enhance user experience and analyze
            performance, but you can disable cookies through your browser
            settings.
          </li>
        </ul>

        <Typography variant="body2" sx={{ mt: 2, color: "#777" }}>
          By using SnapShip, you consent to this Privacy Policy and agree to our
          data practices designed to protect your privacy and security.
        </Typography>
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose} variant="contained" color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};
