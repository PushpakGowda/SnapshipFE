import React, { useState } from "react";
import {
  Box,
  Button,
  Stack,
  Typography,
  useMediaQuery,
  CardMedia,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { CircularCheck } from "../CustomComponents/CustomComponents";
import { useNavigate } from "react-router-dom";

interface imageState {
  id: number;
  img: string;
  title: string;
  date: string;
}

const itemData: imageState[] = [
  { id: 1, img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e", title: "Breakfast", date: "2025-11-09" },
  { id: 2, img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d", title: "Burger", date: "2025-11-09" },
  { id: 3, img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45", title: "Camera", date: "2025-11-08" },
  { id: 4, img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c", title: "Coffee", date: "2025-11-08" },
  { id: 5, img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8", title: "Hats", date: "2025-11-05" },
  { id: 6, img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62", title: "Honey", date: "2025-11-03" },
];

// Grouping by date
const grouped = itemData.reduce((acc: any, item) => {
  acc[item.date] = acc[item.date] || [];
  acc[item.date].push(item);
  return acc;
}, {});

export const Uploads = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // Upload section state
  const [isDragging, setIsDragging] = useState(false);
  const [files, setFiles] = useState<File[]>([]);

  // Image selection state
  const [selectedPhotos, setSelectedPhotos] = useState<number[]>([]);

  const onSelect = (id: number) => {
    setSelectedPhotos((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const onChangeSelected = (newSelected: number[]) => {
    setSelectedPhotos(newSelected);
  };

  const handleSelectAllInDate = (date: string) => {
    const ids = grouped[date].map((x: imageState) => x.id);
    const allSelected = ids.every((x: number) => selectedPhotos.includes(x));

    if (allSelected) {
      onChangeSelected(selectedPhotos.filter((x) => !ids.includes(x)));
    } else {
      onChangeSelected([...new Set([...selectedPhotos, ...ids])]);
    }
  };

  // File upload handlers
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => setIsDragging(false);

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    const dropped = Array.from(e.dataTransfer.files);
    setFiles((prev) => [...prev, ...dropped]);
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files ? Array.from(e.target.files) : [];
    setFiles((prev) => [...prev, ...selected]);
  };

  const handlePrint = () => {
    debugger
    if (!selectedPhotos.length) {
      alert("Please select at least one image to print.");
      return;
    }
    navigate("/App/print", {
      state: { selectedImages: selectedPhotos },
    });
  };


  return (
    <>
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
        justifyContent: "flex-start",
      }}
    >
        {selectedPhotos.length > 0 && (
        <Box
          sx={{
            position: "fixed",
            top: 60,
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 2000,
          }}
        >
          <Button
            onClick={handlePrint}
            variant="contained"
            sx={{
              px: 4,
              py: 1.2,
              borderRadius: "30px",
              textTransform: "none",
              background: "linear-gradient(90deg,#1976d2,#42a5f5)",
              boxShadow: "0px 4px 18px rgba(25,118,210,0.35)",
              fontWeight: 600,
            }}
          >
            Print Now
          </Button>
        </Box>
      )}
      {/* ================= Upload Section ================= */}
      <Box
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        sx={{
          width: "100%",
          p: { xs: 3, sm: 4 },
          borderRadius: "20px",
          background: "#fff",
          boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
          border: isDragging ? "3px dashed #1976d2" : "2px dashed rgba(25,118,210,0.3)",
        }}
      >
        <Typography variant={isMobile ? "h5" : "h4"} sx={{ color: "#1976d2", fontWeight: 700, mb: 2 }}>
          Uploads
        </Typography>

        <Typography sx={{ color: "#555", mb: 3 }}>
          Welcome back, Pushpak 👋 — drag and drop your files or click to upload.
        </Typography>

        {/* Upload Box */}
        <Box
          sx={{
            borderRadius: "16px",
            height: 220,
            background: "rgba(25,118,210,0.05)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
          onClick={() => document.getElementById("fileInput")?.click()}
        >
          <CloudUploadIcon sx={{ fontSize: 60, color: "#64b5f6", mb: 1 }} />

          <Typography sx={{ fontWeight: 600, color: "#1976d2" }}>
            {isDragging ? "Drop files here..." : "Drag & Drop or Click to Upload"}
          </Typography>

          <Typography variant="body2" sx={{ color: "#777" }}>
            JPG, PNG, or PDF up to 10MB
          </Typography>

          <input id="fileInput" type="file" multiple hidden onChange={handleFileSelect} />
        </Box>

        {/* Uploaded file names */}
        {files.length > 0 && (
          <Box sx={{ mt: 3 }}>
            <Typography sx={{ fontWeight: 600, mb: 1 }}>Uploaded Files:</Typography>
            {files.map((file, i) => (
              <Typography key={i}>📄 {file.name}</Typography>
            ))}
          </Box>
        )}
      </Box>

      {/* ================= Recent Uploads ================= */}
      <Box
        sx={{
          width: "100%",
          p: { xs: 3, sm: 4 },
          borderRadius: "20px",
          background: "#fff",
          boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
        }}
      >
        <Typography variant={isMobile ? "h5" : "h4"} sx={{ color: "#1976d2", fontWeight: 700, mb: 3 }}>
          Recent Uploads
        </Typography>

        {/* Grouped Images */}
        {Object.keys(grouped).map((date) => {
          const images = grouped[date];
          const imgs = images.map((x: imageState) => x.img);
          const allSelected = imgs.every((x: number) => selectedPhotos.includes(x));

          return (
            <Box key={date} sx={{ mb: 4 }}>
              {/* Date Row */}
              <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 1 }}>
                <Typography sx={{ fontWeight: 700, fontSize: 18, color: "#1976d2" }}>{date}</Typography>

                <Button
                  variant="outlined"
                  size="small"
                  onClick={() => handleSelectAllInDate(date)}
                  sx={{ textTransform: "none", borderRadius: "10px" }}
                >
                  {allSelected ? "Unselect All" : "Select All"}
                </Button>
              </Stack>

              {/* Images */}
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
                {images.map((img:any) => {
                  const isSelected = selectedPhotos.includes(img.img);

                  return (
                    <Box
                      key={img.id}
                      onClick={() => onSelect(img.img)}
                      sx={{
                        width: { xs: "47%", sm: "31%", md: "23%" },
                        borderRadius: 2,
                        overflow: "hidden",
                        cursor: "pointer",
                        position: "relative",
                        border: isSelected ? "3px solid #1976d2" : "1px solid #ccc",
                        transition: "0.2s",
                      }}
                    >
                      <CardMedia
                        component="img"
                        image={img.img}
                        sx={{ width: "100%", height: 130, objectFit: "cover" }}
                      />

                      <Box sx={{ position: "absolute", top: 4, right: 4 }}>
                        <CircularCheck checked={isSelected} />
                      </Box>

                      <Typography
                        sx={{
                          position: "absolute",
                          bottom: 6,
                          left: 6,
                          color: "#fff",
                          background: "rgba(0,0,0,0.4)",
                          px: 1,
                          borderRadius: 1,
                          fontSize: 11,
                        }}
                      >
                        {img.title}
                      </Typography>
                    </Box>
                  );
                })}
              </Box>
            </Box>
          );
        })}

        {/* Load More */}
        <Box display="flex" justifyContent="center">
          <Button variant="contained">Load More</Button>
        </Box>
      </Box>
    </Box>
    </>
  );
};
