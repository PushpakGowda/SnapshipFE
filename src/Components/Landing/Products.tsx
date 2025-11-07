import Slider from "react-slick";
import { Box, Typography } from "@mui/material";
import img1 from "../../assets/Images/Product1.png";
import img2 from "../../assets/Images/Product2.png";
import img3 from "../../assets/Images/Product3.png";
import img4 from "../../assets/Images/Product4.png";
import img5 from "../../assets/Images/Product5.png";
import img6 from "../../assets/Images/Product6.png";

export const ImageCarousel = () => {
  const images = [img1, img2, img3, img4, img5, img6];
  
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          centerMode: true,
          centerPadding: "0px", 
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerMode: true, 
          centerPadding: "0px",
        },
      },
    ],
  };

  return (
    <Box
      id="Landing-product"
      display="flex"
      flexDirection="column"
      gap={1}
      sx={{
        width: "100%",
        mx: "auto",
        mt: 5,
        borderRadius: 3,
        position: "relative",
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
          Products
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
            margin: "0px",
          },
          "& .slick-slide": {
            padding: {
              xs: "0px",
              sm: "0 2px",
              md: "0 3px",
              lg: "0 4px",
            },
            height: "auto",
            display: "flex",
            justifyContent: "center", 
          },
        }}
      >
        <Slider {...settings}>
          {images.map((img, index) => (
            <Box
              key={index}
              sx={{
                width: "100%",
                transition: "transform 0.3s ease-in-out",
                "&:hover": {
                  transform: "scale(1.03)",
                  cursor: "pointer",
                  zIndex: 5,
                },
              }}
            >
              <img
                src={img}
                alt={`carousel-${index}`}
                style={{
                  width: "100%",
                  height: 200,
                  objectFit: "cover",
                  borderRadius: 8,
                  transition: "transform 0.3s ease-in-out",
                  display: "block",
                }}
              />
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
          fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem", lg: "1.2rem" }, // responsive font size
        }}
      >
        We transform your favorite digital images into a diverse array of stunning
        physical products — including classic prints, elegant photo books,
        gallery-quality canvases, personalized mugs, and custom home décor like
        photo pillows.
      </Typography>
    </Box>

    </Box>
  );
};
