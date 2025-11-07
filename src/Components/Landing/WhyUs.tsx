import Slider from "react-slick";
import { Box, Paper, Avatar, Typography, Rating } from "@mui/material";

const reviews = [
  {
    name: "Sam",
    img: "https://i.pravatar.cc/100?img=3",
    text: "I always use this application — one of the best in the market. Excellent UI and smooth performance!",
    rating: 4.5,
  },
  {
    name: "Aarav",
    img: "https://i.pravatar.cc/100?img=5",
    text: "The user experience is top-notch. It has simplified my daily workflow immensely.",
    rating: 5,
  },
  {
    name: "Sneha",
    img: "https://i.pravatar.cc/100?img=7",
    text: "Beautifully designed and very intuitive! Definitely a go-to app for productivity.",
    rating: 4,
  },
  {
    name: "Karan",
    img: "https://i.pravatar.cc/100?img=9",
    text: "Love the clean design and smooth performance. Highly recommended!",
    rating: 4.5,
  },
];

export const WhyUs = () => {
    const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <Box
      id="Landing-whyus"
      display="flex"
      flexDirection="column"
      sx={{
        width: "100%",
        mx: "auto",
        mt: 5,
        position: "relative",
        zIndex: 1,
        overflow: "hidden",
      }}
    >
      <Box display="flex" justifyContent="center" width="100%">
        <Typography
          variant="h2"
          sx={{
            mb: 4,
            color: "#333",
            fontWeight: "bold",
            maxWidth: { xs: "100%", sm: 500 },
            fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.8rem", lg: "3rem" },
            textAlign: "center",
          }}
        >
          Why Choose Us
        </Typography>
      </Box>

      <Box
        sx={{
          width: "100%",
          maxWidth: "1200px", 
          mx: "auto",
          "& .slick-list": {
            overflow: "visible",
            width: "100%",
          },
          "& .slick-track": {
            display: "flex",
            alignItems: "stretch",
          },
          "& .slick-slide": {
            padding: "0 8px", 
            height: "auto",
            display: "flex",
          },
        }}
      >
        <Slider {...settings}>
          {reviews.map((review, index) => (
            <Box key={index}>
              <Paper
                elevation={4}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  p: { xs: 2, sm: 3 },
                  gap: 1.5,
                  borderRadius: 3,
                  height: 260,
                  transition: "all 0.3s ease-in-out",
                  background: "linear-gradient(135deg, #f8f9fa, #ffffff)",
                  "&:hover": {
                    transform: "translateY(-10px)",
                    boxShadow: "0 12px 30px rgba(0,0,0,0.15)",
                    zIndex: 5,
                  },
                }}
              >
                <Box display="flex" alignItems="center" gap={1.5}>
                  <Avatar
                    alt={review.name}
                    src={review.img}
                    sx={{ width: 48, height: 48 }}
                  />
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      color: "#333",
                      fontFamily: "Roboto, sans-serif",
                    }}
                  >
                    {review.name}
                  </Typography>
                </Box>

                <Rating
                  name="read-only"
                  value={review.rating}
                  precision={0.5}
                  readOnly
                  sx={{
                    "& .MuiRating-iconFilled": { color: "#1976d2" },
                  }}
                />

                <Typography
                  variant="body1"
                  sx={{
                    color: "#555",
                    fontSize: { xs: "0.9rem", sm: "1rem" },
                    lineHeight: 1.6,
                    textOverflow: "ellipsis",
                  }}
                >
                  “{review.text}”
                </Typography>
              </Paper>
            </Box>
          ))}
        </Slider>
      </Box>

    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        px: { xs: 2, sm: 4, md: 8 }, 
      }}
    >
      <Typography
        variant="h6"
        sx={{
          mt: { xs: 2, sm: 3, md: 4 },
          mb: { xs: 2, sm: 3, md: 4 },
          color: "#555",
          textAlign: "center",
          mx: "auto",
          lineHeight: { xs: 1.6, sm: 1.7, md: 1.8 },
          fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem", lg: "1.2rem" },
        }}
      >
          Choose SnapShip because we treat your memories like our own. We use
          archival-grade paper and vibrant, color-accurate inks to ensure every
          print lasts a lifetime. Unlike mass-market services, our dedicated
          printing experts meticulously review your orders for superior color
          fidelity and flawless finish, guaranteeing you receive premium
          products every single time.
      </Typography>
    </Box>
    </Box>
  );
};
