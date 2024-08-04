"use client";
import React from "react";
import { Box, Typography, Card, CardContent, Grid, CardMedia } from "@mui/material";

const About = () => {
    return (

        <>
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
                        <Typography variant="h3" component="h1" fontWeight="bold" sx={{
                            fontSize: {
                                xs: '25px',
                                sm: '30px',
                                md: '35px',
                                lg: '40px',
                            }
                        }}>
                            About us
                        </Typography>
                    </Box>
                </Card>
            </Box>

            <Box mt={4} p={2}>

                <Grid container spacing={4} justifyContent="center">
                    <Grid item xs={12} md={8}>
                        <Card
                            sx={{
                                borderRadius: "20px",
                                boxShadow: 3,
                                p: 3,
                                textAlign: "center",
                            }}
                        >
                            <CardContent>
                                <Typography variant="h5" gutterBottom>
                                    Welcome to Anita Solar System
                                </Typography>
                                <Typography variant="body1" paragraph>
                                    We are an authorized distributor of Sudershan Saur, dedicated to providing top-notch solar solutions in Pune. Over the past 7 years, we have successfully completed over 100 projects, specializing in solar heaters and solar electricity.
                                </Typography>
                                <Typography variant="body1" paragraph>
                                    Our team is committed to offering comprehensive services, including installation and free guidance under government solar schemes for electricity and water heaters. We work closely with government initiatives to ensure that our customers receive the best benefits and support for their solar energy needs.
                                </Typography>
                                <Typography variant="body1" paragraph>
                                    At Anita Solar System, we pride ourselves on delivering high-quality products and exceptional service, making us a trusted name in the industry. Join us in our mission to harness the power of the sun and create a sustainable future.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    {/* <Grid item xs={12} md={8}>
          <Card
            sx={{
              borderRadius: "20px",
              boxShadow: 3,
              p: 3,
              textAlign: "center",
              mt: 3,
            }}
          >
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Why Choose Anita Solar System?
              </Typography>
              <Typography variant="body1" component="ul">
                <li>Authorized distributor of Sudershan Saur</li>
                <li>Over 7 years of experience in the solar industry</li>
                <li>Successfully completed 100+ projects in Pune</li>
                <li>Specialists in solar heaters and solar electricity</li>
                <li>Free guidance under government solar schemes</li>
                <li>Commitment to quality and customer satisfaction</li>
              </Typography>
            </CardContent>
          </Card>
        </Grid> */}
                </Grid>
            </Box>
        </>
    );
};

export default About;
