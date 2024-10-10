import React from 'react';
import { Box, Grid, Card, CardContent, Typography, useTheme, useMediaQuery, Avatar } from '@mui/material';

const cards = [
  {
    title: "Our Mission",
    description: "Our mission is to provide sustainable and efficient solar energy solutions to our customers, contributing to a greener and cleaner environment.",
    image: "assets/target.png",
    bgcolor:"#FFB0B0"
  },
  {
    title: "Our Vision",
    description: "Our vision is to be a leading provider of innovative solar energy products and services, empowering communities to harness the power of the sun.",
    image: "assets/view.png",
    bgcolor:"#08C2FF"
  },
  {
    title: "Philosophy",
    description: "Our philosophy is rooted in quality, reliability, and customer satisfaction. We strive to deliver the best solar solutions tailored to meet the unique needs of each client.",
    image: "assets/philosophy.png",
    bgcolor:"#15B392"
  }
];

const OurVision = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ flexGrow: 1, px: isMobile ? 2 : 12, py: 4 }}>
      <Grid container spacing={3}>
        {cards.map((card, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                minHeight: '200px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                backgroundColor: card.bgcolor, 
                transition: 'transform 0.3s, background-color 0.3s', // Smooth transition for hover effect
                '&:hover': {
                  backgroundColor: '#e0f7fa', // Change background on hover
                  transform: 'scale(1.05)', // Slightly enlarge card on hover
                }
              }}
            >
              <Avatar
                src={card.image}
                sx={{
                  width: 80,
                  height: 80,
                  marginBottom: 2,
                }}
              />
              <CardContent>
                <Typography variant="h5" component="div" align='center'>
                  {card.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {card.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default OurVision;
