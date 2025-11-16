import {
  Dialog,
  DialogContent,
  DialogActions,
  Box,
  Button,
  Typography,
  CardMedia,
  Stack,
  TextField,
  DialogTitle
} from "@mui/material";
import { CircularCheck } from "../CustomComponents/CustomComponents";

interface imageState {
  id: number;
  img: string;
  title: string;
  date: string; 
}

interface AddPhotoPopUpProps {
  open: boolean;
  images: imageState[];
  selectedPhotos: string[];
  onClose: () => void;
  onSelect: (img: string) => void;
  onChangeSelected: (newSelected: string[]) => void;  
  onSubmit: () => void;
}


export const CreateAlbumPopUp = ({
  open,
  images,
  selectedPhotos,
  onClose,
  onSelect,
  onChangeSelected,   
  onSubmit,
}: AddPhotoPopUpProps) => {

  
  // Group images by date
  const grouped = images.reduce((acc: any, img) => {
    if (!acc[img.date]) acc[img.date] = [];
    acc[img.date].push(img);
    return acc;
  }, {});

    const handleSelectAllInDate = (date: string) => {
    const imgs = grouped[date].map((x: imageState) => x.img);
    const allSelected = imgs.every((x: string) => selectedPhotos.includes(x));

    if (allSelected) {
        const updated = selectedPhotos.filter((x) => !imgs.includes(x));
        onChangeSelected(updated);   
    } else {
        const updated = [...new Set([...selectedPhotos, ...imgs])];
        onChangeSelected(updated);   
    }
    };


  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
    <DialogTitle sx={{ fontWeight: 700 }}>Create Album</DialogTitle>
      <DialogContent dividers sx={{ py: 2 }}>

        <TextField
        label="Album Name"
        variant="outlined"
        fullWidth
        sx={{
            mb: 2,
            "& .MuiInputBase-root": {
            backgroundColor: "rgba(255,255,255,0.08)",
            borderRadius: "10px",
            paddingRight: "8px",
            },
            "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "rgba(255,255,255,0.3)",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#90caf9",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#42a5f5",
            borderWidth: "2px",
            },
            "& .MuiInputLabel-root": {
            color: "#ccc",
            },
            "& .MuiInputLabel-root.Mui-focused": {
            color: "#90caf9",
            },
        }}
        />

        {/* ------- DATE SECTIONS ------- */}
        {Object.keys(grouped).map((date) => {
          const dateImages = grouped[date];

          const allDateImages = dateImages.map((x: imageState) => x.img);
          const allSelected = allDateImages.every((x: string) =>
            selectedPhotos.includes(x)
          );

          return (
            <Box key={date} sx={{ mb: 4 }}>
              {/* ------------------ Date Header ------------------ */}
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                sx={{ mb: 1 }}
              >
                <Typography
                  sx={{ fontWeight: 700, fontSize: 18, color: "#1976d2" }}
                >
                  {date}
                </Typography>

                <Button
                  variant="outlined"
                  size="small"
                  onClick={() => handleSelectAllInDate(date)}
                  sx={{
                    textTransform: "none",
                    borderRadius: "10px",
                    fontSize: 13,
                  }}
                >
                  {allSelected ? "Unselect All" : "Select All"}
                </Button>
              </Stack>

              {/* ------------------ Images Under Date ------------------ */}
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 2,
                }}
              >
                {dateImages.map((img: imageState) => {
                  const isSelected = selectedPhotos.includes(img.img);

                  return (
                    <Box
                      key={img.id}
                      onClick={() => onSelect(img.img)}
                      sx={{
                        width: { xs: "47%", sm: "31%", md: "23%" },
                        position: "relative",
                        borderRadius: 2,
                        overflow: "hidden",
                        cursor: "pointer",
                        border: isSelected
                          ? "3px solid #1976d2"
                          : "1px solid #ccc",
                        boxShadow: isSelected
                          ? "0 4px 12px rgba(25,118,210,0.25)"
                          : "none",
                        transition: "0.2s",
                      }}
                    >

                      <CardMedia
                        component="img"
                        image={img.img}
                        sx={{
                          width: "100%",
                          height: 130,
                          objectFit: "cover",
                        }}
                      />

                      <Box sx={{ position: "absolute", top: 4, right: 4 }}>
                        <CircularCheck checked={isSelected} />
                      </Box>

                      <Typography
                        sx={{
                          position: "absolute",
                          bottom: 6,
                          left: 6,
                          color: "white",
                          background: "rgba(0,0,0,0.4)",
                          px: 1,
                          py: "2px",
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

      </DialogContent>

      <DialogActions sx={{ p: 2 }}>
        <Button
          variant="outlined"
          onClick={onClose}
          sx={{ textTransform: "none", borderRadius: "10px" }}
        >
          Cancel
        </Button>

        <Button
          variant="contained"
          sx={{
            textTransform: "none",
            borderRadius: "10px",
            background: "linear-gradient(90deg,#1976d2,#42a5f5)",
          }}
          onClick={onSubmit}
        >
          Create Now
        </Button>
      </DialogActions>
    </Dialog>
  );
};


