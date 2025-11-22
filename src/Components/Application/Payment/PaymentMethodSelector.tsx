import { List, ListItemButton, ListItemText } from "@mui/material";

interface Props {
  selected: string;
  onSelect: (val: string) => void;
}

export const PaymentMethodSelector = ({ selected, onSelect }: Props) => {
  const methods = [
    { key: "card", label: "Credit / Debit Card" },
    { key: "upi", label: "UPI" },
    { key: "netbanking", label: "Net Banking" },
    { key: "wallet", label: "Wallets" },
    { key: "cod", label: "Cash on Delivery" },
  ];

  return (
    <List>
      {methods.map((m) => (
        <ListItemButton
          key={m.key}
          selected={selected === m.key}
          onClick={() => onSelect(m.key)}
        >
          <ListItemText primary={m.label} />
        </ListItemButton>
      ))}
    </List>
  );
};
