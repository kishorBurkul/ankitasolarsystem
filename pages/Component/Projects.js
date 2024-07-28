"use client";
import React, { useState, useEffect } from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Tooltip,
  Typography,
  Divider,
  useMediaQuery,
  useTheme,
} from "@mui/material";

const sectorsData = [
  {
    hoverText: "Narhe",
    label: "Narhe",
    url: `assets/project_1.jpeg`,
    value: "Narhe",
  },
  {
    hoverText: "Vadgaon",
    label: "Vadgaon",
    url: `assets/project_2.jpeg`,
    value: "Vadgaon",
  },
  {
    hoverText: "Pimpri",
    label: "Swargate",
    url: `assets/project_3.jpeg`,
    value: "Pimpri",
  },
  {
    hoverText: "Pimpri",
    label: "Pimpri",
    url: `assets/project_4.jpeg`,
    value: "Pimpri Chinchwad",
  },
  {
    hoverText: "Katraj",
    label: "Katraj",
    url: `https://www.tencom.com/hubfs/Solar%20Hot%20Water%20Tank-1.jpeg`,
    value: "Katraj",
  },
];

const Projects = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMdScreen = useMediaQuery(theme.breakpoints.up("md"));
  const isLgScreen = useMediaQuery(theme.breakpoints.down("lg"));
  const slidesToShow = isSmallScreen ? 1 : 3;

  const next = () => {
    setCurrentSlide((prev) => (prev < sectorsData.length - slidesToShow ? prev + 1 : 0));
  };

  useEffect(() => {
    if (isSmallScreen || isMdScreen ||isLgScreen) {
      const autoSlide = setInterval(() => {
        next();
      }, 3000); 

      return () => clearInterval(autoSlide);
    }
  }, [currentSlide, isSmallScreen,isMdScreen,isLgScreen]);

  return (
    <Grid container spacing={2} mb={3} justifyContent="center" alignItems="center">
      <Grid item xs={12}>
        <Typography align="center" variant="h4">
          <strong>Projects</strong>
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <Box display="flex" overflow="hidden">
          {sectorsData.slice(currentSlide, currentSlide + slidesToShow).map((sector, index) => (
            <Box key={index} flex="1 0 33%" mx={1}>
              <Tooltip title={sector.hoverText} placement="top">
                <Card
                  sx={{
                    // height: { xs: "250px", sm: "200px", md: "200px", lg: "220px" },
                    borderRadius: "20px",
                    textAlign: "center",
                  }}
                >
                  <CardMedia component="img" height="290" image={sector.url} alt={sector.label} />
                </Card>
              </Tooltip>
            </Box>
          ))}
        </Box>
      </Grid>

      <Grid item xs={12} mt={2} mb={2}>
        <Divider />
      </Grid>
    </Grid>
  );
};

export default Projects;
