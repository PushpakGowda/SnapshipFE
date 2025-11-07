import { Box, Button, Typography } from '@mui/material';
import image from '../../assets/Images/photo-album-photos-travel-vintage-600nw-366653684.webp';

export const Hero = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        // minHeight: '80vh',
        width: '100%',
        py: { xs: 6, md: 0 },
        position: 'relative',
        zIndex: 1,
        overflow: 'hidden',  
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: { xs: 'column', md: 'row' },
          gap: 6,
          width: '100%',       
          margin: 0,           
          padding: 0,          
        }}
      >
        <Box
          sx={{
            flex: 1,
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            mb: { xs: 1.5, sm: 2, md: 3 },
            color: "#333",
            textAlign: { xs: "center", md: "left" }, 
            fontSize: {
              xs: "1.8rem",  
              sm: "2.2rem",  
              md: "2.8rem",  
              lg: "3.2rem",  
              xl: "3.5rem",  
            },
            lineHeight: { xs: 1.2, sm: 1.3, md: 1.35 },
          }}
        >
          Capture Your Memories
        </Typography>

          <Typography
            variant="h6"
            sx={{
            mt: { xs: 2, sm: 3, md: 4 },
            mb: { xs: 2, sm: 3, md: 4 },
            color: "#555",
            textAlign:  { xs: "center", sm: "center", md: "left", lg: "left" }, 
            mx: "auto",
            lineHeight: { xs: 1.6, sm: 1.7, md: 1.8 },
            fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem", lg: "1.2rem" }, 
            }}
          >
            Turn your favorite moments into a timeless masterpiece with beautifully crafted photo albums, printed in vibrant colors and delivered to your doorstep with care and precision.
          </Typography>

          <Button
            variant="contained"
            sx={{
              width: 150,
              borderRadius: '20px',
              textTransform: 'none',
              backgroundColor: '#1976d2',
              '&:hover': { backgroundColor: '#1565c0' },
            }}
          >
            Print Now
          </Button>
        </Box>

        <Box
          sx={{
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <img
            src={image}
            alt="Photo Album"
            style={{
              width: '100%',
              maxWidth: 450,
              borderRadius: 20,
              boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

