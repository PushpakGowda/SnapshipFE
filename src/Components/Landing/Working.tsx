import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import TuneIcon from '@mui/icons-material/Tune';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Box, Typography } from '@mui/material';
import IconLabel from './IconLabel';
import { motion } from 'framer-motion';
export const Working=()=>{
    return (
    <>
        <Box id={"Landing-working"}
                sx={{
                    width: '100%',
                    mx: 'auto',
                    mt: 5,
                    borderRadius: 3,
                    overflow: 'hidden',
                    padding:0
                }}
                >
            <Box display={"flex"} width={"100%"} justifyContent={"center"}>
            <Typography
                variant="h2"
                sx={{
                    mb: 4,
                    color: "#333",
                    fontWeight: "bold",
                    maxWidth: { xs: "100%", sm: 500 },
                    fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.8rem", lg: "3rem" },
                    textAlign: { xs: "center", sm: "left" },
                }}
                >
                How it Works
            </Typography>

            </Box>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                    gap: 3,
                    py: 5,
                    position: "relative",
                }}
                >
                <IconLabel icon={CloudUploadIcon} label="Upload" />

                <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                    repeat: Infinity,
                    repeatType: "reverse",
                    duration: 1.5,
                    ease: "easeInOut",
                    }}
                >
                    <ArrowForwardIosIcon sx={{ fontSize: 36, color: "primary.main" }} />
                    </motion.div>

                    <IconLabel icon={TuneIcon} label="Customize" />

                    <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                        repeat: Infinity,
                        repeatType: "reverse",
                        duration: 1.5,
                        ease: "easeInOut",
                        delay: 0.5,
                        }}
                    >
                        <ArrowForwardIosIcon sx={{ fontSize: 36, color: "primary.main" }} />
                    </motion.div>

                    <IconLabel icon={LocalShippingIcon} label="Delivery" />
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
                Turn digital moments into cherished prints in three quick steps: Upload, Customize, and Ship. We handle the premium printing and fast delivery, so you just enjoy the memories.
                </Typography>
                </Box>
        </Box>
    </>
    );
}