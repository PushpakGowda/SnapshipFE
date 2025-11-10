import React, { useState } from "react";
import { Box, ImageList, ImageListItem, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
    date: "2025-11-09",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
    date: "2025-11-09",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
    date: "2025-11-08",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
    date: "2025-11-08",
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
    date: "2025-11-05",
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
    date: "2025-11-03",
  },
];

const groupByDate = (items: typeof itemData) => {
  const today = new Date();
  const groups: Record<string, typeof itemData> = {};

  items.forEach((item) => {
    const itemDate = new Date(item.date);
    const diffTime = today.getTime() - itemDate.getTime();
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    let label = "";
    if (diffDays === 0) label = "Today";
    else if (diffDays === 1) label = "Yesterday";
    else if (diffDays <= 7) label = "This Week";
    else label = itemDate.toLocaleDateString();

    if (!groups[label]) groups[label] = [];
    groups[label].push(item);
  });

  return groups;
};


export const Uploads = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [isDragging, setIsDragging] = useState(false);
  const [files, setFiles] = useState<File[]>([]);

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>)  => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => setIsDragging(false);

  const handleDrop = (event: React.DragEvent<HTMLDivElement>)  => {
    event.preventDefault();
    setIsDragging(false);
    const droppedFiles = Array.from(event.dataTransfer.files);
    setFiles((prev) => [...prev, ...droppedFiles]);
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = event.target.files ? Array.from(event.target.files) : [];
    setFiles((prev) => [...prev, ...selectedFiles]);
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
        gap:1,
        justifyContent: "flex-start",
        transition: "0.3s ease-in-out",
      }}
    >
      {/* Upload Card */}
      <Box
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        sx={{
          width: "100%",
          maxWidth: 900,
          p: { xs: 3, sm: 4 },
          borderRadius: "20px",
          background: "#ffffff",
          boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
          transition: "box-shadow 0.3s ease, transform 0.3s ease, border 0.3s ease",
          border: isDragging
            ? "3px dashed #1976d2"
            : "2px dashed rgba(25,118,210,0.3)",
          "&:hover": {
            boxShadow: "0 12px 40px rgba(0,0,0,0.12)",
            transform: "translateY(-4px)",
          },
        }}
      >
        {/* Title */}
        <Typography
          variant={isMobile ? "h5" : "h4"}
          sx={{
            fontWeight: 700,
            color: "#1976d2",
            fontFamily: "Poppins, sans-serif",
            mb: 2,
          }}
        >
          Uploads
        </Typography>

        {/* Subtitle */}
        <Typography
          variant="body1"
          sx={{
            color: "#555",
            fontSize: { xs: "0.95rem", sm: "1rem" },
            lineHeight: 1.7,
            fontFamily: "Roboto, sans-serif",
            mb: 3,
          }}
        >
          Welcome back, Pushpak 👋 — drag and drop your files below or click to upload.  
          Your creative workspace is ready to make memories last!
        </Typography>

        {/* Upload Area */}
        <Box
          sx={{
            borderRadius: "16px",
            height: 220,
            background: isDragging
              ? "rgba(25,118,210,0.1)"
              : "rgba(25,118,210,0.05)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            transition: "all 0.3s ease",
            "&:hover": {
              background: "rgba(25,118,210,0.1)",
            },
          }}
          onClick={() =>
            document.getElementById("fileInput")?.click()
          }
        >
          <CloudUploadIcon
            sx={{
              fontSize: 60,
              color: isDragging ? "#1976d2" : "#64b5f6",
              mb: 1,
              transition: "color 0.3s ease",
            }}
          />
          <Typography
            sx={{
              color: "#1976d2",
              fontWeight: 600,
              fontFamily: "Poppins, sans-serif",
              mb: 0.5,
            }}
          >
            {isDragging ? "Drop files here..." : "Drag & Drop or Click to Upload"}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "#777",
              fontFamily: "Roboto, sans-serif",
            }}
          >
            JPG, PNG, or PDF up to 10MB each
          </Typography>

          <input
            id="fileInput"
            type="file"
            multiple
            style={{ display: "none" }}
            onChange={handleFileSelect}
          />
        </Box>

        {/* File List */}
        {files.length > 0 && (
          <Box sx={{ mt: 3 }}>
            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: 600,
                color: "#333",
                mb: 1,
                fontFamily: "Poppins, sans-serif",
              }}
            >
              Uploaded Files:
            </Typography>
            {files.map((file, index) => (
              <Typography
                key={index}
                sx={{
                  color: "#555",
                  fontFamily: "Roboto, sans-serif",
                  fontSize: "0.9rem",
                }}
              >
                📄 {file.name}
              </Typography>
            ))}
          </Box>
        )}
      </Box>
        {/* ✅ Recent Uploads Section */}
        <Box
        sx={{
            width: "100%",
            maxWidth: 900,
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
            variant={isMobile ? "h5" : "h4"}
            sx={{
            fontWeight: 700,
            color: "#1976d2",
            fontFamily: "Poppins, sans-serif",
            mb: 3,
            }}
        >
            Recent Uploads
        </Typography>

        {/* Grouped Images */}
        {Object.entries(groupByDate(itemData)).map(([dateLabel, group], idx) => (
            <Box key={idx} sx={{ mb: 4 }}>
            {/* 🗓️ Date Header */}
            <Typography
                variant="h6"
                sx={{
                fontWeight: 600,
                color: "#424242",
                fontFamily: "Poppins, sans-serif",
                mb: 2,
                borderLeft: "4px solid #1976d2",
                pl: 1.5,
                }}
            >
                {dateLabel}
            </Typography>

            {/* 🖼️ Image Grid */}
            <ImageList
                sx={{
                width: "100%",
                m: 0,
                overflow: "hidden",
                borderRadius: "16px",
                "&::-webkit-scrollbar": { display: "none" },
                }}
                variant="masonry"
                cols={isMobile ? 2 : window.innerWidth < 900 ? 3 : 4}
                gap={10}
            >
                {group.map((item, index) => (
                <ImageListItem
                    key={index}
                    sx={{
                    borderRadius: "12px",
                    overflow: "hidden",
                    position: "relative",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    "&:hover": {
                        transform: "scale(1.05)",
                        boxShadow: "0 6px 20px rgba(0,0,0,0.2)",
                        zIndex: 2,
                    },
                    }}
                >
                    <img
                    src={`${item.img}?w=400&h=400&fit=crop&auto=format`}
                    alt={item.title}
                    loading="lazy"
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        borderRadius: "12px",
                    }}
                    />

                    {/* Overlay Text */}
                    <Box
                    sx={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        width: "100%",
                        height: "40%",
                        background:
                        "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.6) 100%)",
                        opacity: 0,
                        transition: "opacity 0.3s ease",
                        display: "flex",
                        alignItems: "flex-end",
                        justifyContent: "center",
                        pb: 1,
                        "&:hover": { opacity: 1 },
                    }}
                    >
                    <Typography
                        variant="body2"
                        sx={{
                        color: "#fff",
                        fontWeight: 600,
                        fontFamily: "Poppins, sans-serif",
                        textShadow: "0 2px 5px rgba(0,0,0,0.5)",
                        }}
                    >
                        {item.title}
                    </Typography>
                    </Box>
                </ImageListItem>
                ))}
            </ImageList>
            </Box>
        ))}
        </Box>
    </Box>
    </>
  );
};
