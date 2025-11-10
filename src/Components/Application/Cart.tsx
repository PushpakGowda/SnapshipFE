import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  IconButton,
  Button,
  Divider,
} from "@mui/material";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { useState } from "react";

const initialCartItems = [
  {
    id: 1,
    name: "Custom Photo Mug",
    price: 499,
    quantity: 2,
    img: "https://printbebo.in/wp-content/uploads/2021/02/Mug-Preview.png",
  },
  {
    id: 2,
    name: "Personalized Photo Album",
    price: 899,
    quantity: 1,
    img: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: 3,
    name: "Wall Canvas Print",
    price: 1499,
    quantity: 1,
    img: "https://kotart.in/cdn/shop/products/Kotart-Floral-Canvas-Painting-Vibrant-Large-Canvas-Art-for-Wall-Decor.jpg?v=1697552467&width=1946",
  },
];

export const Cart = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);

  const handleQuantityChange = (id: number, delta: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: Math.max(1, item.quantity + delta),
            }
          : item
      )
    );
  };

  const handleRemoveItem = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const deliveryFee = subtotal > 0 ? 50 : 0;
  const total = subtotal + deliveryFee;

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
      {/* Outer Card Wrapper */}
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
          variant="h4"
          sx={{
            fontWeight: 700,
            color: "#1976d2",
            fontFamily: "Poppins, sans-serif",
            mb: 3,
          }}
        >
          Your Cart
        </Typography>

        {/* Cart Items */}
        {cartItems.length === 0 ? (
          <Typography
            variant="body1"
            sx={{ color: "#666", textAlign: "center", mt: 4 }}
          >
            Your cart is empty 🛒
          </Typography>
        ) : (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              mb: 4,
            }}
          >
            {cartItems.map((item) => (
              <Card
                key={item.id}
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  alignItems: "center",
                  p: 2,
                  borderRadius: "16px",
                  boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
                  transition: "0.3s ease",
                  "&:hover": {
                    boxShadow: "0 6px 20px rgba(0,0,0,0.12)",
                  },
                }}
              >
                {/* Image */}
                <CardMedia
                  component="img"
                  image={item.img}
                  alt={item.name}
                  sx={{
                    width: { xs: "100%", sm: 140 },
                    height: { xs: 160, sm: 140 },
                    borderRadius: "12px",
                    objectFit: "cover",
                    mb: { xs: 2, sm: 0 },
                  }}
                />

                {/* Content */}
                <CardContent
                  sx={{
                    flex: 1,
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontFamily: "Poppins, sans-serif",
                      fontWeight: 600,
                      color: "#1976d2",
                    }}
                  >
                    {item.name}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{ color: "#555", mb: 1, fontFamily: "Roboto" }}
                  >
                    ₹{item.price.toLocaleString()}
                  </Typography>

                  {/* Quantity Controls */}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1.5,
                    }}
                  >
                    <IconButton
                      onClick={() => handleQuantityChange(item.id, -1)}
                      sx={{ color: "#1976d2" }}
                    >
                      <RemoveCircleIcon />
                    </IconButton>

                    <Typography sx={{ minWidth: 20, textAlign: "center" }}>
                      {item.quantity}
                    </Typography>

                    <IconButton
                      onClick={() => handleQuantityChange(item.id, 1)}
                      sx={{ color: "#1976d2" }}
                    >
                      <AddCircleIcon />
                    </IconButton>

                    {/* Remove */}
                    <IconButton
                      onClick={() => handleRemoveItem(item.id)}
                      sx={{ color: "#d32f2f", ml: "auto" }}
                    >
                      <DeleteOutlineOutlinedIcon />
                    </IconButton>
                  </Box>
                </CardContent>
              </Card>
            ))}
          </Box>
        )}

        {/* Divider */}
        {cartItems.length > 0 && <Divider sx={{ my: 3 }} />}

        {/* Summary */}
        {cartItems.length > 0 && (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              gap: 1.5,
            }}
          >
            <Typography sx={{ fontFamily: "Roboto" }}>
              Subtotal: <b>₹{subtotal.toLocaleString()}</b>
            </Typography>
            <Typography sx={{ fontFamily: "Roboto" }}>
              Delivery Fee: <b>₹{deliveryFee}</b>
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                color: "#1976d2",
                fontFamily: "Poppins, sans-serif",
              }}
            >
              Total: ₹{total.toLocaleString()}
            </Typography>

            <Button
              variant="contained"
              sx={{
                mt: 2,
                py: 1,
                px: 4,
                borderRadius: "25px",
                background: "linear-gradient(90deg, #1976d2, #42a5f5)",
                textTransform: "none",
                fontWeight: 600,
                "&:hover": {
                  background: "linear-gradient(90deg, #1565c0, #1976d2)",
                },
              }}
            >
              Proceed to Checkout
            </Button>
          </Box>
        )}
      </Box>
    </Box>
  );
};
