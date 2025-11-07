import React from "react";
import { Box, Typography } from "@mui/material";
import type { SvgIconComponent } from "@mui/icons-material";

interface IconLabelProps {
  icon: SvgIconComponent;   
  label: string;            
  onClick?: () => void;     
}

const IconLabel: React.FC<IconLabelProps> = ({ icon: Icon, label}) => {
    return (
    <Box
        sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 1,
        width: { xs: 100, sm: 120, md: 150, lg: 160 }, 
        height: { xs: 100, sm: 120, md: 150, lg: 160 }, 
        borderRadius: "50%",
        backgroundColor: "white",
        color: "#333",
        boxShadow: 3,
        cursor: "pointer",
        transition: "all 0.2s ease",
        "&:hover": {
            transform: "scale(1.05)",
            color: "#a09f9fff",
        },
        }}
    >
        <Icon
        sx={{
            fontSize: { xs: 28, sm: 34, md: 40, lg: 44 }, 
            fontWeight: 500,
        }}
        />
        <Typography
        variant="body1"
        sx={{
            fontWeight: 500,
            fontSize: { xs: "0.8rem", sm: "0.9rem", md: "1rem", lg: "1.1rem" }, 
        }}
        >
        {label}
        </Typography>
    </Box>
    );
};

export default IconLabel;
