import { Box, Card, CardMedia, Container, Grid, Typography } from '@mui/material'
import React from 'react'

const SolarElectrical = () => {
    return (
        <Grid container mt={14}>
            <Box sx={{ position: 'relative', overflow: 'hidden', width: '100%' }}>
                <Card>
                    <CardMedia
                        component="img"
                        image="/assets/project_1.jpeg"
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
                        <Typography variant="h3" component="h1" fontWeight="bold"  sx={{
                        fontSize: {
                          xs: '25px',  
                          sm: '30px', 
                          md: '35px', 
                          lg: '40px', 
                        }
                      }}>
                            Solar Photovoltaic Power
                        </Typography>
                    </Box>
                </Card>
            </Box>
            <Container>
                <Grid container spacing={3} sx={{ marginTop: { xs: 2, sm: 2 } }}>
                    {/* Left Content */}
                    <Grid item xs={12} sm={6} lg={6} sx={{ order: { xs: 1, sm: 1, md: 1 } }}>
                        <Typography variant="h4" gutterBottom>
                            What Is Photovoltaic System?
                        </Typography>
                        <Typography variant="body1" paragraph>
                            A Solar photovoltaic system, often known as a PV system or a solar power system, is an electric power system that uses photovoltaics to provide usable solar electricity.
                        </Typography>
                        <Typography variant="body1" paragraph>
                            It is made up of a number of components, including photovoltaic solar panels that absorb and convert sunlight into electricity, a solar inverter that converts direct current to alternating current, as well as mounting, wiring, and other electrical accessories.
                        </Typography>

                    </Grid>
                    {/* Right Content */}
                    <Grid item xs={12} sm={6} lg={6} sx={{ order: { xs: 2, sm: 2, md: 2 } }}>
                        <Box
                            component="img"
                            src="/assets/Electrical_solar.jpeg"
                            alt="Right Content"
                            sx={{
                                width: '100%',
                                height: {
                                    xs: 'auto',
                                    sm: '250px',
                                    md: 'auto',
                                    lg: '350px'
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
                            src="/assets/electrical_solar_2.jpeg"
                            alt="Right Content"
                            sx={{
                                width: '100%',
                                height: {
                                    xs: 'auto',
                                    sm: '250px',
                                    md: 'auto',
                                    lg: '350px'
                                },
                                borderRadius: "0px 40px 0 40px",

                                marginBottom: { xs: 4, sm: 8 },
                                objectFit: 'cover'
                            }}
                        />
                    </Grid>

                    <Grid item xs={12} sm={6} lg={6} sx={{ order: { xs: 1, sm: 1, md: 2 } }}>
                        <Typography variant="h4" gutterBottom>
                            Benefits of Photovoltaic System:
                        </Typography>
                        <Typography variant="body1" paragraph>
                            <strong>1.Reduced Electricity Bills:</strong>By generating your own electricity, you can significantly reduce your utility bills.
                        </Typography>

                        <Typography variant="body1" paragraph>
                            <strong>2.Renewable Energy Source:</strong> PV systems utilize sunlight, an abundant and inexhaustible energy source.They produce clean energy without emissions of greenhouse gases or pollutants.
                        </Typography>

                        <Typography variant="body1" paragraph>
                            <strong>3.Energy Independence:</strong> With a PV system, you are less dependent on utility companies and less vulnerable to electricity price hikes. PV systems are particularly beneficial in remote areas where extending the electrical grid is impractical or costly
                        </Typography>
                        <Typography variant="body1" paragraph>
                            <strong>4.Low Operating Costs:</strong> PV systems require relatively low maintenance, with occasional cleaning and inspections.Solar panels have a long lifespan, often lasting 25-30 years or more.
                        </Typography>
                    </Grid>
                </Grid>



                <Grid container  sx={{ marginTop: { xs: 2, sm: 2 }, backgroundColor: "rgba(0,0,0,0.1)" }} mb={1} p={2}>
                    <Grid item xs={12} sm={6} lg={6} sx={{ order: { xs: 2, sm: 2, md: 2 } }}>
                        <Typography variant="h5" gutterBottom>
                            Why Use Photovoltaic System?
                        </Typography>
                        <Typography variant="body1" paragraph>
                            <strong>&bull;</strong> Photovoltaic solar panel generate clean and environment friendly electricity.
                        </Typography>

                        <Typography variant="body1" paragraph>
                            <strong>&bull;</strong> Photovoltaic cells are one of the excellent source of free energy.
                        </Typography>

                        <Typography variant="body1" paragraph>
                            <strong>&bull;</strong> Solar Photovoltaic systems can be installed easily on industrial buildings, residential places etc.
                        </Typography>

                        <Typography variant="body1" paragraph>
                            <strong>&bull;</strong> It is a modular system, the power output is adjustable according to the requirements.
                        </Typography>

                        <Typography variant="body1" paragraph>
                            <strong>&bull;</strong> Electricity based on solar photovoltaic technology is continuous and protects from irregular power cuts.
                        </Typography>
                    </Grid>

                    <Grid item xs={12} sm={6} lg={6} sx={{ order: { xs: 1, sm: 1, md: 2 } }}>
                        <Typography variant="h5" gutterBottom>
                            Where Photovoltaic System Used?
                        </Typography>
                        <Typography variant="body1" paragraph>
                            PV can power stand-alone equipment, tools, and meters in urban and remote settings. Parking meters, temporary traffic signs, emergency phones, radio transmitters, water irrigation pumps, stream-flow gauges, remote guard posts, roadway lights, and more can all benefit from PV. PV has been a key power source for Earth-orbiting satellites since the beginning.
                        </Typography>

                        <Typography variant="body1" paragraph>
                            High-efficiency PV has provided electricity for missions such as the International Space Station and Moon and Mars surface rovers, and it will continue to be an important aspect of space and planetary exploration.
                        </Typography>

                    </Grid>
                </Grid>
            </Container>
        </Grid>
    )
}

export default SolarElectrical