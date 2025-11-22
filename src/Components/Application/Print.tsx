import { useMemo, useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
  Stack,
  TextField,
  Chip,
  useTheme,
  useMediaQuery,
} from "@mui/material";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import frame1 from "../../assets/Images/frame1.png";
import frame2 from "../../assets/Images/frame2.png";
import frame3 from "../../assets/Images/frame3.png";
import frame4 from "../../assets/Images/frame4.png";
import Product1 from "../../assets/Images/OtherProduct1.png";
import Product2 from "../../assets/Images/OtherProduct4.png";
import Product3 from "../../assets/Images/OtherProduct2.png";
import { useNavigate } from "react-router-dom";




// ---------------- Types ----------------
type SizeOption = { label: string; width: number; height: number };
type FrameOption = { name: string; src: string };
type OtherOption = { name: string; src: string };
type ProductType = "Frame" | "Other";

interface MappedProduct {
  img: string;
  product: ProductType;
  frame: FrameOption;
  other: OtherOption;
  size: SizeOption;
  customWidth: string;
  customHeight: string;
  quantity: number;
}

// ---------------- Data ----------------
const FRAME_PRESETS: FrameOption[] = [
  { name: "Wood", src: frame1 },
  { name: "Golden", src: frame2 },
  { name: "Black", src: frame3 },
  { name: "Rustic", src: frame4 },
];

const FRAME_SIZES: SizeOption[] = [
  { label: "10 × 12", width: 10, height: 12 },
  { label: "12 × 16", width: 12, height: 16 },
  { label: "16 × 20", width: 16, height: 20 },
];

const OTHER_PRODUCTS: OtherOption[] = [
  { name: "Photo Mug", src: Product1 },
  { name: "Calendar", src: Product2 },
  { name: "Keychain", src: Product3 },
];

const DEMO_IMAGES = [
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200",
  "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=1200",
  "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f?w=1200",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200",
  "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=1200",
  "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f?w=1200",
];

// ---------------- Component ----------------
export const Print = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();
  const images = useMemo(() => DEMO_IMAGES, []);

  console.log(isMobile);
  const [mapped, setMapped] = useState<MappedProduct[]>(
    images.map((img) => ({
      img,
      product: "Frame",
      frame: FRAME_PRESETS[0],
      other: OTHER_PRODUCTS[0],
      size: FRAME_SIZES[1],
      customWidth: "",
      customHeight: "",
      quantity: 1,
    }))
  );

  const [activeIndex, setActiveIndex] = useState(0);

  const update = (patch: Partial<MappedProduct>) =>
    setMapped((prev) => {
      const next = [...prev];
      next[activeIndex] = { ...next[activeIndex], ...patch };
      return next;
    });

  return (
    <Box
      sx={{
        width:"100%",
        display: "flex",
        flexDirection: { xs: "column", lg: "row" },
        gap: 1,
        flex:1
      }}
    >
      {/* ------------------------ LEFT SECTION ------------------------ */}
      <Box sx={{
          width: { xs: "100%", lg: "60%" },
          borderRadius: 4,
          p: 3,
          background: "linear-gradient(180deg,#ffffff,#f3f7fc)",
          boxShadow: "0px 6px 30px rgba(0,0,0,0.08)",
        }}>
        <Typography variant="h5" sx={{ fontWeight: 900, mb: 2 }}>
          Preview Photo
        </Typography>

        {/* Main Image */}
        <Card
          sx={{
            width: "100%",
            height: { xs: 260, sm: 340, md: 420 },
            borderRadius: 4,
            overflow: "hidden",
            boxShadow: "0px 6px 25px rgba(0,0,0,0.12)",
          }}
        >
          <CardMedia
            component="img"
            image={mapped[activeIndex].img}
            sx={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Card>

        {/* Thumbnail Slider (Fixed) */}
        <Box
          sx={{
            mt: 2,
            maxWidth: "100%",
            overflowX: "auto",
            overflowY: "hidden",
            whiteSpace: "nowrap",
            display: "flex",
            gap: 1.5,
            pb: 1,
            "&::-webkit-scrollbar": { display: "none" },
          }}
        >
          {mapped.map((m, i) => (
            <Box
              key={i}
              onClick={() => setActiveIndex(i)}
              sx={{
                flex: "0 0 auto",
                width: { xs: 80, sm: 90, md: 110 },
                height: { xs: 80, sm: 90, md: 110 },
                borderRadius: 2,
                overflow: "hidden",
                cursor: "pointer",
                border: i === activeIndex ? "3px solid #1976d2" : "1px solid #ddd",
                boxShadow:
                  i === activeIndex
                    ? "0px 4px 14px rgba(0,0,0,0.20)"
                    : "none",
                transition: "all 0.25s",
              }}
            >
              <CardMedia
                component="img"
                image={m.img}
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Box>
          ))}
        </Box>
      </Box>

      {/* ------------------------ RIGHT SECTION ------------------------ */}
      <Box
        sx={{
          width: { xs: "100%", lg: 380 },
          borderRadius: 4,
          p: 3,
          background: "linear-gradient(180deg,#ffffff,#f3f7fc)",
          boxShadow: "0px 6px 30px rgba(0,0,0,0.08)",
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 900, mb: 2 }}>
          Customize Product
        </Typography>

        {/* Product Selection */}
        <FormControl fullWidth size="small">
          <InputLabel>Product</InputLabel>
          <Select
            label="Product"
            value={mapped[activeIndex].product}
            onChange={(e) =>
              update({
                product: e.target.value as ProductType,
                size:
                  e.target.value === "Frame"
                    ? FRAME_SIZES[1]
                    : { label: "", width: 0, height: 0 },
              })
            }
          >
            <MenuItem value="Frame">Frame</MenuItem>
            <MenuItem value="Other">Other Product</MenuItem>
          </Select>
        </FormControl>

        {/* FRAME SECTION */}
        {mapped[activeIndex].product === "Frame" && (
          <>
            <Typography sx={{ fontWeight: 700, mt: 3, mb: 1 }}>
              Choose Frame
            </Typography>

            <Stack
              direction="row"
              spacing={2}
              sx={{
                overflowX: "auto",
                pb: 1,
                "&::-webkit-scrollbar": { display: "none" },
              }}
            >
            {FRAME_PRESETS.map((f) => {
            const active = mapped[activeIndex].frame.name === f.name;

            return (
                <Card
                key={f.name}
                onClick={() => update({ frame: f })}
                sx={{
                    minWidth: 130,
                    height: 110,
                    cursor: "pointer",
                    borderRadius: 3,
                    overflow: "hidden",
                    position: "relative",
                    border: active ? "2px solid #1976d2" : "1px solid #ddd",
                    boxShadow: active ? "0 4px 12px rgba(25,118,210,0.25)" : "none",
                    transition: "all .2s",
                }}
                >
                {/* image */}
                <CardMedia
                    component="img"
                    image={f.src}
                    sx={{ width: "100%", height: "100%", objectFit: "cover" }}
                />

                {/* NAME LABEL OVERLAY */}
                <Box
                    sx={{
                    position: "absolute",
                    bottom: 4,
                    left: "50%",
                    transform: "translateX(-50%)",
                    px: 1.5,
                    py: 0.3,
                    borderRadius: 2,
                    backdropFilter: "blur(6px)",
                    background: "rgba(255,255,255,0.55)",
                    fontSize: 12,
                    fontWeight: 700,
                    color: "#000",
                    textAlign: "center",
                    }}
                >
                    {f.name}
                </Box>
                </Card>
            );
            })}

            </Stack>

            {/* Sizes */}
            <Typography sx={{ fontWeight: 700, mt: 3 }}>Size</Typography>

            <Stack direction="row" spacing={1} mt={1} sx={{ flexWrap: "wrap" }}>
              {FRAME_SIZES.map((s) => (
                <Chip
                  key={s.label}
                  label={s.label}
                  clickable
                  color={
                    mapped[activeIndex].size.label === s.label
                      ? "primary"
                      : "default"
                  }
                  onClick={() => update({ size: s })}
                  sx={{ fontWeight: 700 }}
                />
              ))}
            </Stack>

            <Stack direction="row" spacing={2} mt={2}>
              <TextField
                label="W (in)"
                size="small"
                value={mapped[activeIndex].customWidth}
                onChange={(e) => update({ customWidth: e.target.value })}
              />
              <TextField
                label="H (in)"
                size="small"
                value={mapped[activeIndex].customHeight}
                onChange={(e) => update({ customHeight: e.target.value })}
              />
            </Stack>
          </>
        )}

        {/* OTHER SECTION */}
        {mapped[activeIndex].product === "Other" && (
          <>
            <Typography sx={{ fontWeight: 700, mt: 3, mb: 1 }}>
              Choose Product
            </Typography>

            <Stack
              direction="row"
              spacing={2}
              sx={{
                overflowX: "auto",
                pb: 1,
                "&::-webkit-scrollbar": { display: "none" },
              }}
            >
             {OTHER_PRODUCTS.map((p) => {
                const active = mapped[activeIndex].other.name === p.name;

                return (
                    <Card
                    key={p.name}
                    onClick={() => update({ other: p })}
                    sx={{
                        minWidth: 130,
                        height: 110,
                        cursor: "pointer",
                        borderRadius: 3,
                        overflow: "hidden",
                        position: "relative",
                        border: active ? "2px solid #1976d2" : "1px solid #ddd",
                        boxShadow: active ? "0 4px 12px rgba(25,118,210,0.25)" : "none",
                        transition: "all .2s",
                    }}
                    >
                    {/* image */}
                    <CardMedia
                        component="img"
                        image={p.src}
                        sx={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />

                    {/* NAME LABEL OVERLAY */}
                    <Box
                        sx={{
                        position: "absolute",
                        bottom: 4,
                        left: "50%",
                        transform: "translateX(-50%)",
                        px: 1.5,
                        py: 0.3,
                        borderRadius: 2,
                        backdropFilter: "blur(6px)",
                        background: "rgba(255,255,255,0.55)",
                        fontSize: 12,
                        fontWeight: 700,
                        color: "#000",
                        textAlign: "center",
                        whiteSpace: "nowrap",
                        }}
                    >
                        {p.name}
                    </Box>
                    </Card>
                );
                })}

            </Stack>
          </>
        )}

        {/* Quantity */}
        <TextField
          label="Qty"
          type="number"
          size="small"
          sx={{ mt: 3, width: 100 }}
          value={mapped[activeIndex].quantity}
          onChange={(e) =>
            update({ quantity: Math.max(1, Number(e.target.value || 1)) })
          }
        />
        <Box
        sx={{
            mt: 3,
            p: 2,
            borderRadius: 3,
            background: "linear-gradient(135deg, #e8f1ff 0%, #ffffff 100%)",
            boxShadow: "0 4px 14px rgba(0,0,0,0.08)",
            border: "1px solid #d4e4ff",
        }}
        >
        <Typography sx={{ fontSize: 15, fontWeight: 600, color: "#1a4db8" }}>
            Current Photo Price
        </Typography>

        <Typography
            sx={{
            fontSize: 26,
            fontWeight: 900,
            mt: 0.5,
            background: "linear-gradient(90deg,#1976d2,#42a5f5)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            }}
        >
            ₹499
        </Typography>
        </Box>

        <Box
        sx={{
            mt: 2,
            p: 2,
            borderRadius: 3,
            background: "linear-gradient(135deg, #f9f2ff,#ffffff)",
            boxShadow: "0 4px 14px rgba(0,0,0,0.08)",
            border: "1px solid #e9d7ff",
        }}
        >
        <Typography sx={{ fontSize: 15, fontWeight: 600, color: "#7b2cbf" }}>
            Total Price
        </Typography>

        <Typography
            sx={{
            fontSize: 28,
            fontWeight: 900,
            mt: 0.5,
            background: "linear-gradient(90deg,#7b2cbf,#b47aff)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            }}
        >
            ₹2499
        </Typography>
        </Box>

        {/* Buttons */}
        <Stack spacing={1.5} mt={3}>
          <Button variant="outlined" fullWidth startIcon={<ShoppingCartIcon />} onClick={() => navigate('/App/cart')}>
            Add to Cart
          </Button>

          <Button
            onClick={()=>navigate("/App/Payment")}
            variant="contained"
            fullWidth
            startIcon={<FlashOnIcon />}
            sx={{ background: "linear-gradient(90deg,#1976d2,#42a5f5)" }}
          >
            Buy Now
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};
