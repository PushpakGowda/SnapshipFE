import { Box } from "@mui/material";
import { Navbar } from "./Navbar";
import { Hero } from "./hero";
import { ImageCarousel } from "./Products";
import { Working } from "./Working";
import { WhyUs } from "./WhyUs";
import { FAQ } from "./FAQ";
import { Contact } from "./Contact";
import { LandingFooter } from "./Footer";

export const Landing=()=>{
    return (<>
        <Box display={"flex"} flexDirection={"column"} width={"100%"} margin={0} padding={0} 
        sx={{background: 'linear-gradient(to right, #f8f9fa, #e9ecef)'}}>
            <Navbar />
            <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                mt: 10,
                px: { xs: 2, sm: 4, md: 8, lg: 10 }, 
            }}>               
                <Hero />
                <ImageCarousel/>
                <Working/>
                <WhyUs/>
                <FAQ/>
            </Box>
            <Contact/>
            <LandingFooter/>
        </Box>
    </>)
}; 