import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Grid, Card, CardMedia, Pagination, Box, Typography, useTheme, useMediaQuery } from '@mui/material';

const ProjectGallery = () => {
  const [projects, setProjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 4;

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await fetch('/projectImages.json');
      const data = await response.json();
      setProjects(data);
    };

    fetchProjects();
  }, []);

  // Calculate the current images to display based on pagination
  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = projects.slice(indexOfFirstImage, indexOfLastImage);

  // Handle page change
  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Box  p={2}>
      {/* Image Grid */}
      <Typography align="center" variant={isSmallScreen ? "h6" : "h4"} gutterBottom mt={4} sx={{color:"rgba(0, 14, 79, 0.88)"}}>
                <strong>Our Work Gallery</strong>
            </Typography>
      
      <Grid container spacing={3}>
        {currentImages.map((project, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card>
              <CardMedia>
                <Image
                  src={project.image}
                  alt={`Project image ${index + 1}`}
                  width={300}
                  height={200}
                  layout="responsive"
                  style={{ objectFit: 'cover', borderRadius: '5px' }}
                />
              </CardMedia>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Pagination */}
      <Box display="flex" justifyContent="center" mt={3} mb={2}>
        <Pagination
          count={Math.ceil(projects.length / imagesPerPage)}
          page={currentPage}
          onChange={handlePageChange}
          color="primary"
          showFirstButton 
          showLastButton
        />
      </Box>
    </Box>
  );
};

export default ProjectGallery;
