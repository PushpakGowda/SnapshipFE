import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";

interface TermsConditionProps {
  open: boolean;
  onClose: () => void;
}

export const TermsCondition: React.FC<TermsConditionProps> = ({
  open,
  onClose,
}) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle
        sx={{ fontWeight: "bold", color: "#1976d2", textAlign: "center" }}
      >
        Terms & Conditions
      </DialogTitle>

      <DialogContent dividers>
        <Typography variant="body1" sx={{ color: "#555", lineHeight: 1.7 }}>
          Welcome to SnapShip! By using our platform, you agree to the following
          terms and conditions:
        </Typography>

        <ul style={{ color: "#555", marginTop: 10, lineHeight: 1.7 }}>
          <li>
            SnapShip allows users to upload and print personal photographs for
            private, non-commercial use.
          </li>
          <li>
            You are responsible for ensuring that all uploaded images comply
            with copyright and content laws.
          </li>
          <li>
            Orders once printed cannot be modified, but you can contact our
            support team for assistance with replacements in case of damage.
          </li>
          <li>
            We reserve the right to update pricing, shipping, and policies
            without prior notice.
          </li>
          <li>
            SnapShip is not liable for any loss or delay caused by courier
            services or incorrect delivery information provided by the user.
          </li>
          <li>
            By placing an order, you agree to our privacy policy and data
            protection practices.
          </li>
        </ul>

        <Typography variant="body2" sx={{ mt: 2, color: "#777" }}>
          Thank you for choosing SnapShip — we’re committed to preserving your
          memories beautifully and securely.
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
