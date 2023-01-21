import React from "react";
import { Box, Typography, Stack, Button } from "@mui/material";
import HeroImage from "../assets/images/banner.png";

const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: "180px", xs: "70px" },
        ml: { sm: "50px" },
      }}
      position="relative"
      p="20px"
    >
      <Typography color="#FF2625" fontWeigth="600" fontSize="30px">
        Fitness Freak
      </Typography>
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "35px" } }}
      >
        Never Give up <br /> Keep Doing exercise
      </Typography>
      <Typography fontSize="22px" lineHeight="35px" marginBottom={2}>
        Check out the most effective exercise
      </Typography>
      <Button
        variant="contained"
        href="#exercises"
        sx={{ backgroundColor: "#ff2625" }}
      >
        Explore Exercise
      </Button>
      <Typography
        color="#ff2625"
        fontWeight={600}
        sx={{ opacity: "0.1", display: { lg: "block", xs: "none" } }}
        fontSize="200px"
      >
        Exercises
      </Typography>
      <img src={HeroImage} alt="banner" className="hero-banner-img" />
    </Box>
  );
};

export default HeroBanner;
