import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Chip,
  Divider,
  useMediaQuery,
} from "@mui/material";
import { theme } from "../theme";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import HourglassBottomIcon from "@mui/icons-material/HourglassBottom";
import CancelIcon from "@mui/icons-material/Cancel";

const ordersData = [
  {
    id: "ORD123456",
    productName: "Personalized Photo Album",
    productImg:
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=800",
    quantity: 1,
    price: 899,
    status: "Shipped",
    expectedDelivery: "Nov 12, 2025",
  },
  {
    id: "ORD123457",
    productName: "Custom Photo Mug",
    productImg:
      "https://www.arcprint.in/assets/media/products_common_imgs/photo-cup/description.jpg",
    quantity: 2,
    price: 499,
    status: "Delivered",
    expectedDelivery: "Nov 7, 2025",
  },
  {
    id: "ORD123458",
    productName: "Wall Canvas Print",
    productImg:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
    quantity: 1,
    price: 1499,
    status: "Processing",
    expectedDelivery: "Nov 15, 2025",
  },
  {
    id: "ORD123459",
    productName: "Photo Keychain Set",
    productImg:
      "https://images.unsplash.com/photo-1503602642458-232111445657?w=800",
    quantity: 3,
    price: 299,
    status: "Cancelled",
    expectedDelivery: "—",
  },
];

export const Orders = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const getStatusChip = (status: string) => {
    switch (status) {
      case "Delivered":
        return (
          <Chip
            icon={<CheckCircleIcon />}
            label="Delivered"
            sx={{
              backgroundColor: "#E8F5E9",
              color: "#2E7D32",
              fontWeight: 600,
            }}
          />
        );
      case "Shipped":
        return (
          <Chip
            icon={<LocalShippingIcon />}
            label="Shipped"
            sx={{
              backgroundColor: "#E3F2FD",
              color: "#1565C0",
              fontWeight: 600,
            }}
          />
        );
      case "Processing":
        return (
          <Chip
            icon={<HourglassBottomIcon />}
            label="Processing"
            sx={{
              backgroundColor: "#FFF8E1",
              color: "#F57C00",
              fontWeight: 600,
            }}
          />
        );
      case "Cancelled":
        return (
          <Chip
            icon={<CancelIcon />}
            label="Cancelled"
            sx={{
              backgroundColor: "#FFEBEE",
              color: "#C62828",
              fontWeight: 600,
            }}
          />
        );
      default:
        return null;
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100%",
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
        {/* Header */}
        <Typography
          variant={isMobile ? "h5" : "h4"}
          sx={{
            fontWeight: 700,
            color: "#1976d2",
            fontFamily: "Poppins, sans-serif",
            mb: 3,
          }}
        >
          Orders
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: "#555",
            fontFamily: "Roboto, sans-serif",
            mb: 4,
          }}
        >
          Track your orders and view delivery details in real time.
        </Typography>

        {/* ✅ Responsive Cards using Flexbox */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 3,
            justifyContent: "center",
          }}
        >
          {ordersData.map((order, index) => (
            <Box
              key={index}
              sx={{
                flex: "1 1 320px", // responsive width
                maxWidth: "480px",
                minWidth: "300px",
              }}
            >
              <Card
                sx={{
                  borderRadius: "16px",
                  overflow: "hidden",
                  boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="180"
                  image={order.productImg}
                  alt={order.productName}
                  sx={{ objectFit: "cover" }}
                />

                <CardContent sx={{ p: 2.5 }}>
                  <Typography
                    variant="subtitle2"
                    sx={{
                      fontWeight: 600,
                      color: "#888",
                      fontFamily: "Roboto, sans-serif",
                      mb: 1,
                    }}
                  >
                    Order ID: {order.id}
                  </Typography>

                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      color: "#1976d2",
                      fontFamily: "Poppins, sans-serif",
                    }}
                  >
                    {order.productName}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{ color: "#555", mt: 0.5, mb: 1 }}
                  >
                    Quantity: {order.quantity} • ₹{order.price}
                  </Typography>

                  <Divider sx={{ my: 1.5 }} />

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    {getStatusChip(order.status)}

                    <Box textAlign="right">
                      <Typography
                        variant="caption"
                        sx={{ color: "#777", fontFamily: "Roboto, sans-serif" }}
                      >
                        Expected Delivery
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          fontWeight: 600,
                          color: "#333",
                          fontFamily: "Poppins, sans-serif",
                        }}
                      >
                        {order.expectedDelivery}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};
