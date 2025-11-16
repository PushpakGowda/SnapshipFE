import { useState, useMemo } from "react";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  Checkbox,
  FormControlLabel,
  Button,
  Stack,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { CircularCheck } from "../CustomComponents/CustomComponents";
import { AddPhotoPopUp } from "./AddPhotoPopUp";

interface PrintState {
  albumId: number | string;
}

const demoImages = [
  { id: 1, src: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f?w=800" },
  { id: 2, src: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=800" },
  { id: 3, src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800" },
  { id: 4, src: "https://images.unsplash.com/photo-1503602642458-232111445657?w=800" },
  { id: 5, src: "https://images.unsplash.com/photo-1492447166138-50c3889fccb1?w=800" },
  { id: 6, src: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?w=800" },
];

const DEMO_IMAGES = [
  {
    id:1,
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
    date: "2025-11-09",
  },
  {
    id:2,
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
    date: "2025-11-09",
  },
  {
    id:3,
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
    date: "2025-11-08",
  },
  {
    id:4,
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
    date: "2025-11-08",
  },
  {
    id:5,
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
    date: "2025-11-05",
  },
  {
    id:6,
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
    date: "2025-11-03",
  },
];

export const ViewAlbum = () => {
  const location = useLocation() as unknown as Location & { state: PrintState };
  const { albumId } = location.state;

  const navigate = useNavigate();

  // ----------------------- Popup State -----------------------
  const [photoPopupOpen, setPhotoPopupOpen] = useState(false);
  const [selectedPhotos, setSelectedPhotos] = useState<string[]>([]);

  const handleSelectPhoto = (img: string) => {
    setSelectedPhotos((prev) =>
      prev.includes(img) ? prev.filter((p) => p !== img) : [...prev, img]
    );
  };

  const handleAddPhotos = () => {
    console.log("Selected Photos:", selectedPhotos);
    setPhotoPopupOpen(false);
  };

  // ----------------------- Album Selection -----------------------
  const images = useMemo(() => demoImages, []);
  const [selected, setSelected] = useState<number[]>([]);
  const [selectAll, setSelectAll] = useState(false);

  const handleSelect = (id: number) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const handleSelectAll = () => {
    if (selectAll) {
      setSelected([]);
      setSelectAll(false);
    } else {
      setSelected(images.map((i) => i.id));
      setSelectAll(true);
    }
  };

  const handlePrint = () => {
    if (!selected.length) {
      alert("Please select at least one image to print.");
      return;
    }
    navigate("/App/print", {
      state: { albumId: albumId, selectedImages: selected },
    });
  };

  return (
    <>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Box
          sx={{
            width: "100%",
            p: { xs: 2, sm: 3 },
            borderRadius: "20px",
            background: "#ffffff",
            boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
            transition: "0.3s",
          }}
        >
          {/* ------------------ HEADER ------------------ */}
          <Box
            display="flex"
            flexWrap="wrap"
            justifyContent="space-between"
            alignItems="center"
            mb={3}
          >
            <Typography
              variant="h5"
              sx={{
                fontWeight: 700,
                color: "#1976d2",
                fontFamily: "Poppins, sans-serif",
              }}
            >
              Album #{albumId}
            </Typography>

            <Stack direction="row" spacing={2} alignItems="center">
              <FormControlLabel
                control={
                  <Checkbox checked={selectAll} onChange={handleSelectAll} />
                }
                label="Select All"
              />

              <Button
                variant="contained"
                onClick={handlePrint}
                sx={{
                  borderRadius: "20px",
                  textTransform: "none",
                  background: "linear-gradient(90deg, #1976d2, #42a5f5)",
                  fontWeight: 600,
                }}
              >
                Print Now
              </Button>

              <Button
                variant="contained"
                onClick={() => setPhotoPopupOpen(true)}   // ✅ FIXED
                sx={{
                  borderRadius: "20px",
                  textTransform: "none",
                  background: "linear-gradient(90deg, #be3a3a, #fa4747)",
                  fontWeight: 600,
                }}
              >
                Add Photos
              </Button>
            </Stack>
          </Box>

          {/* ------------------ IMAGE GRID ------------------ */}
          <Box
            sx={{
              display: "grid",
              gap: 2,
              gridTemplateColumns: {
                xs: "repeat(2, 1fr)",
                sm: "repeat(3, 1fr)",
                md: "repeat(4, 1fr)",
              },
            }}
          >
            {images.map((img) => {
              const isSelected = selected.includes(img.id);

              return (
                <Card
                  key={img.id}
                  onClick={() => handleSelect(img.id)}
                  sx={{
                    position: "relative",
                    borderRadius: "12px",
                    overflow: "hidden",
                    cursor: "pointer",
                    transition: "0.25s",
                    border: isSelected
                      ? "3px solid #42a5f5"
                      : "2px solid transparent",
                    boxShadow: isSelected
                      ? "0 6px 20px rgba(66,165,245,0.35)"
                      : "0 2px 10px rgba(0,0,0,0.08)",
                  }}
                >
                  <CardMedia
                    component="img"
                    image={img.src}
                    sx={{
                      height: { xs: 130, sm: 150, md: 170 },
                      objectFit: "cover",
                      filter: isSelected ? "brightness(0.8)" : "none",
                    }}
                  />

                  <Box sx={{ position: "absolute", top: 4, right: 4 }}>
                    <CircularCheck checked={isSelected} />
                  </Box>
                </Card>
              );
            })}
          </Box>
        </Box>
      </Box>

      {/* ------------------ POPUP ------------------ */}
      <AddPhotoPopUp
        open={photoPopupOpen}
        images={DEMO_IMAGES}
        selectedPhotos={selectedPhotos}
        onClose={() => setPhotoPopupOpen(false)}
        onSelect={handleSelectPhoto}
        onChangeSelected={setSelectedPhotos}   // ✅ pass setter
        onSubmit={handleAddPhotos}
        />

    </>
  );
};
