import { Box, Card, CardMedia, Container, Grid, Typography } from '@mui/material';
import React from 'react';

const SolarWater = () => {
    return (
        <Grid container mt={14}>
            <Box sx={{ position: 'relative', overflow: 'hidden', width: '100%' }}>
                <Card>
                    <CardMedia
                        component="img"
                        image="/assets/project_3.jpeg"
                        alt="Services Header"
                        sx={{
                            width: '100%',
                            height: {
                                xs: '210px',
                                sm: '210px',
                                md: 'auto',
                                lg: 'auto'
                            },
                            maxHeight: {
                                xs: 'none',
                                sm: 'none',
                                md: '26vh',
                                lg: '56vh'
                            },
                            objectFit: 'cover'
                        }}
                    />
                    <Box
                        sx={{
                            position: 'absolute',
                            inset: 0,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            textAlign: 'center',
                            color: 'white',
                            backgroundColor: 'rgba(0, 0, 0, 0.5)'
                        }}
                    >
                        <Typography variant="h3" component="h1" fontWeight="bold"
                      sx={{
                        fontSize: {
                          xs: '25px',  
                          sm: '30px', 
                          md: '35px', 
                          lg: '40px', 
                        }
                      }}
                        >
                            Solar Water Heater
                        </Typography>
                    </Box>
                </Card>
            </Box>
            <Container>
                <Grid container spacing={3} sx={{ marginTop: { xs: 2, sm: 2 } }}>
                    {/* Left Content */}
                    <Grid item xs={12} sm={6} lg={6} sx={{ order: { xs: 1, sm: 1, md: 1 } }}>
                        <Typography variant="h5" gutterBottom>
                            What Is a Solar Water Heater System?
                        </Typography>
                        <Typography variant="body1" paragraph>
                            A Solar Water Heater System is a device that uses solar energy to heat water. It consists of a solar collector and a storage tank, among other components, to capture and utilize the sun's energy for water heating purposes
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Solar water heaters (SWHs) with capacities of 100-300 liters are suitable for home usage.
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Solar water heater installation in Restaurants, canteens, guest homes, hotels, and hospitals can all benefit from larger systems.
                        </Typography>
                        <Typography variant="body1" paragraph>
                            For domestic use, a SWH with a capacity of 100 liters can replace an electric geyser, saving around 1500 units of power per year.
                        </Typography>
                        <Typography variant="body1" paragraph>
                            The usage of 1000 SWHs, each with a capacity of 100 liters, can result in a peak load reduction of about 1 MW.
                        </Typography>
                        <Typography variant="body1" paragraph>
                            A SWH with a capacity of 100 liters can prevent the emission of 1.5 tonnes of CO2 each year. In general, solar water heater prices in Pune , Maharashtra range from Rs. 15,000 to Rs. 1,09,990, depending on the type (ETC or FPC), capacity, and solar brand.
                        </Typography>
                    </Grid>
                    {/* Right Content */}
                    <Grid item xs={12} sm={6} lg={6} sx={{ order: { xs: 2, sm: 2, md: 2 } }}>
                        <Box
                            component="img"
                            src="/assets/Project_2.jpeg"
                            alt="Right Content"
                            sx={{
                                width: '100%',
                                height: {
                                    xs: 'auto',
                                    sm: '250px',
                                    md: 'auto',
                                    lg: 'auto'
                                },
                                borderRadius: "40px 0px 40px 0px",
                                marginBottom: { xs: 4, sm: 8 },
                                objectFit: 'cover'
                            }}
                        />
                    </Grid>
                </Grid>

                <Grid container spacing={3} sx={{ marginTop: { xs: 2, sm: 2 } }}>
                    <Grid item xs={12} sm={6} lg={6} sx={{ order: { xs: 2, sm: 2, md: 2 } }}>
                        <Box
                            component="img"
                            src="/assets/solar_water_p_2_benefits.jpg"
                            alt="Right Content"
                            sx={{
                                width: '100%',
                                height: {
                                    xs: 'auto',
                                    sm: '250px',
                                    md: 'auto',
                                    lg: '350px'
                                },
                                borderRadius: "0px 40px 0px 40px",
                                marginBottom: { xs: 4, sm: 8 },
                                objectFit: 'cover'
                            }}
                        />
                    </Grid>

                    <Grid item xs={12} sm={6} lg={6} sx={{ order: { xs: 1, sm: 1, md: 2 } }}>
                        <Typography variant="h5" gutterBottom>
                            Benefits of Solar Water Heater Systems:
                        </Typography>
                        <Typography variant="body1" paragraph>
                            <strong>1.Energy Savings:</strong>Solar water heaters can significantly reduce your water heating bill because the sun's energy is free.
                        </Typography>

                        <Typography variant="body1" paragraph>
                            <strong>2.Environmental Impact:</strong> Using solar energy reduces reliance on fossil fuels, lowering greenhouse gas emissions and the carbon footprint.
                        </Typography>

                        <Typography variant="body1" paragraph>
                            <strong>3.Renewable Resource:</strong>Solar energy is a renewable resource, making it a sustainable option for water heating.
                        </Typography>
                    </Grid>
                </Grid>



                <Grid container  sx={{ marginTop: { xs: 2, sm: 2 } ,backgroundColor:"rgba(0,0,0,0.1)" }} mb={1} p={2}>
                    <Grid item xs={12} sm={6} lg={6} sx={{ order: { xs: 2, sm: 2, md: 2 } }}>
                        <Typography variant="h5" gutterBottom>
                            Why Use Solar Water Heaters?
                        </Typography>
                        <Typography variant="body1" paragraph>
                            <strong>&bull;</strong> Solar Water heaters cost is low and save electricity, consequently money spent on electricity uses.
                        </Typography>

                        <Typography variant="body1" paragraph>
                            <strong>&bull;</strong> Solar  Water heaters are eco friendly and  non-polluting in nature. 
                        </Typography>

                        <Typography variant="body1" paragraph>
                            <strong>&bull;</strong> Solar water heaters make use of renewable solar energy for heating up water.
                        </Typography>

                        <Typography variant="body1" paragraph>
                            <strong>&bull;</strong> Supply of hot water is continuous even during unwanted power cuts.
                        </Typography>

                        <Typography variant="body1" paragraph>
                            <strong>&bull;</strong> Solar water heaters are mounted on the roof, hence they are safer than electric geysers.
                        </Typography>

                        <Typography variant="body1" paragraph>
                            <strong>&bull;</strong> Solar water heaters ensure continuous heated water supply. 
                        </Typography>
                    </Grid>

                    <Grid item xs={12} sm={6} lg={6} sx={{ order: { xs: 1, sm: 1, md: 2 } }}>
                        <Typography variant="h5" gutterBottom>
                            Where Solar Water Heater Used?
                        </Typography>
                        <Typography variant="body1" paragraph>
                        Water can be heated using a solar water heater. Water may simply be heated to 60-80 degrees Celsius. Solar water heaters (SWHs) with capacities of 100-300 liters are suitable for home usage.
                        Other Major Places for Solar water heater application
                        </Typography>

                        <Typography variant="body1" paragraph>
                        <strong>&bull;</strong> Big commercial buildings
                        </Typography>
                        <Typography variant="body1" paragraph>
                        <strong>&bull;</strong> Restaurants
                        </Typography>
                        <Typography variant="body1" paragraph>
                        <strong>&bull;</strong> Canteens
                        </Typography>
                        <Typography variant="body1" paragraph>
                        <strong>&bull;</strong> Guest homes
                        </Typography>
                        <Typography variant="body1" paragraph>
                        <strong>&bull;</strong> Hotels
                        </Typography>
                        <Typography variant="body1" paragraph>
                        <strong>&bull;</strong> Hospitals
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Grid>
    );
};

export default SolarWater;
