import React from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, Button, Box } from '@mui/material';

const OurServices = () => {
    return (
        <Grid container direction="column" alignItems="center">
            <Typography align="center" variant="h4" gutterBottom mt={4} sx={{color:"rgba(0, 14, 79, 0.88)"}}>
                <strong>Our Solar Services</strong>
            </Typography>
            <Grid container justifyContent="center" alignItems="center" spacing={2} mb={4}>
                <Grid item lg={4} md={6} sm={6} xs={12} style={{ display: 'flex', justifyContent: 'center' , }}>
                    <Box sx={{ position: 'relative', maxWidth: 345, margin: 2 }}>
                        <Card
                            sx={{
                                height: '100%',
                                transition: 'transform 0.3s, box-shadow 0.3s',
                                '&:hover': {
                                    transform: 'scale(1.05)',
                                    boxShadow: 6,
                                },
                            }}
                        >
                            <CardMedia
                                component="img"
                                height="200"
                                image="assets/solar_water_heater_services.jpg"
                                alt="Placeholder Image"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Solar Water Heater
                                </Typography>
                                <Typography variant="body1" color="text.secondary">
                                    A solar water heater is a device that uses solar energy to heat water for various domestic, industrial, or commercial uses.
                                    "We provide high-quality solar water heaters at the lowest prices, including installation."
                                </Typography>
                            </CardContent>
                        </Card>
                        <Box sx={{ position: 'absolute', bottom: -16, left: '50%', transform: 'translateX(-50%)' }}>
                            <Button
                                variant="outlined"
                                color="primary"
                                size="large"
                                sx={{
                                    borderRadius: '50px',
                                    borderColor: 'red',
                                    backgroundColor: 'orange',
                                    color: 'white',
                                    '&:hover': {
                                        backgroundColor: '#FFC300',
                                        borderColor: 'yellow',
                                    },
                                }}
                            >
                                <strong>Read More</strong>
                            </Button>
                        </Box>
                    </Box>
                </Grid>
                <Grid item lg={4} md={6} sm={6} xs={12} style={{ display: 'flex', justifyContent: 'center' }}>
                    <Box sx={{ position: 'relative', maxWidth: 345, margin: 2 }}>
                        <Card
                            sx={{
                                height: '100%',
                                transition: 'transform 0.3s, box-shadow 0.3s',
                                '&:hover': {
                                    transform: 'scale(1.05)',
                                    boxShadow: 6,
                                },
                            }}
                        >
                            <CardMedia
                                component="img"
                                height="200"
                                image="assets/solar_electricity.jpg"
                                alt="Placeholder Image"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Solar Electricity
                                </Typography>
                                <Typography variant="body1" color="text.secondary">
                                    Solar electricity is a sustainable and efficient way to generate power by harnessing the sun’s energy. Photovoltaic (PV) power is the conversion of sunlight into electrical energy.
                                </Typography>
                            </CardContent>
                        </Card>
                        <Box sx={{ position: 'absolute', bottom: -16, left: '50%', transform: 'translateX(-50%)' }}>
                            <Button
                                variant="outlined"
                                color="primary"
                                size="large"
                                sx={{
                                    borderRadius: '50px',
                                    borderColor: 'red',
                                    backgroundColor: 'orange',
                                    color: 'white',
                                    '&:hover': {
                                        backgroundColor: '#FFC300',
                                        borderColor: 'yellow',
                                    },
                                }}
                            >
                                <strong>Read More</strong>
                            </Button>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default OurServices;
