import { Box, Typography, useMediaQuery, Card, CardMedia, CardContent, Button } from "@mui/material";
import { AddPhotoAlternate } from "@mui/icons-material";
import { theme } from "../theme";

const albumData = [
  {
    title: "Vacation Memories",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    photos: 42,
  },
  {
    title: "Family Moments",
    img: "https://images.unsplash.com/photo-1511988617509-a57c8a288659",
    photos: 58,
  },
  {
    title: "College Days",
    img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    photos: 37,
  },
  {
    title: "Nature Collection",
    img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    photos: 25,
  },
  {
    title: "Birthday Bash",
    img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30",
    photos: 19,
  },
];

export const Albums = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
        transition: "0.3s ease-in-out",
      }}
    >
      {/* ✅ Header Card */}
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
        <Typography
          variant={isMobile ? "h5" : "h4"}
          sx={{
            fontWeight: 700,
            color: "#1976d2",
            fontFamily: "Poppins, sans-serif",
            mb: 3,
          }}
        >
          Albums
        </Typography>

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
          Manage all your photo albums in one place. Create, view, and relive your cherished memories beautifully.
        </Typography>

        {/* ✅ Album Grid */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "repeat(1, 1fr)",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
            },
            gap: 3,
            mt: 2,
          }}
        >
          {/* ➕ Create New Album */}
          <Card
            sx={{
              border: "2px dashed rgba(25,118,210,0.3)",
              borderRadius: "16px",
              height: 220,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "rgba(25,118,210,0.03)",
              color: "#1976d2",
              transition: "all 0.3s ease",
              "&:hover": {
                background: "rgba(25,118,210,0.08)",
                transform: "translateY(-5px)",
                boxShadow: "0 6px 15px rgba(25,118,210,0.2)",
              },
            }}
          >
            <Button
              variant="text"
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                color: "#1976d2",
                gap: 1,
                textTransform: "none",
              }}
            >
              <AddPhotoAlternate sx={{ fontSize: 40 }} />
              <Typography fontWeight={600}>Create New Album</Typography>
            </Button>
          </Card>

          {/* 🖼️ Existing Albums */}
          {albumData.map((album, index) => (
            <Card
              key={index}
              sx={{
                borderRadius: "16px",
                overflow: "hidden",
                boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                cursor: "pointer",
                "&:hover": {
                  transform: "translateY(-6px)",
                  boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
                },
              }}
            >
              <CardMedia
                component="img"
                height="180"
                image={album.img}
                alt={album.title}
                sx={{
                  objectFit: "cover",
                  transition: "transform 0.4s ease",
                  "&:hover": { transform: "scale(1.05)" },
                }}
              />
              <CardContent
                sx={{
                  textAlign: "center",
                  py: 2,
                  background: "linear-gradient(to bottom, #fff, #f9f9f9)",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    fontFamily: "Poppins, sans-serif",
                    color: "#1976d2",
                  }}
                >
                  {album.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#777",
                    fontFamily: "Roboto, sans-serif",
                  }}
                >
                  {album.photos} Photos
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>
    </Box>
  );
};
