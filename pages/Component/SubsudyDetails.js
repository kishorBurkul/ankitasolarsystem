import React from 'react';
import { Grid, Card, CardContent, Typography, Box } from '@mui/material';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

const cardData = [
    { title: '1KW', description: '30,000' },
    { title: '2KW', description: '60,000' },
    { title: '3KW', description: '78,000' },
];

const SubsudyDetails = () => {
    return (
        <Box p={{ xs: 2, sm: 3, md: 4, lg: 5 }}>
            <Typography
                align="center"
                variant="h4"
                gutterBottom
                mt={4}
                sx={{ color: "rgba(0, 14, 79, 0.88)" }}
            >
                <strong>Subsidy Details</strong>
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    backgroundColor: 'rgba(205,239,238,255)', // Background color for the box
                    padding: '16px',
                    borderRadius: '8px', // Rounded corners
                    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', // Shadow effect
                    borderBlockStart:"solid",
                    borderBottom:"solid"

                }}
            >
                <Typography
                    variant="h6"
                    component="span"
                    sx={{
                        fontWeight: 'bold',
                        color: '#000080', // Navy blue color for text
                        fontSize: '24px',
                        marginRight: '8px',
                    }}
                >
                    Hon'ble Prime Minister
                </Typography>
                <Typography
                    variant="h6"
                    component="span"
                    sx={{
                        fontWeight: 'bold',
                        color: '#000000',
                        fontSize: '24px',
                    }}
                >
                    Sh. Narendra Modi's
                </Typography>
                <Typography
                    variant="h6"
                    component="span"
                    sx={{
                        fontWeight: 'normal',
                        color: '#000000',
                        fontSize: '24px',
                        marginLeft: '8px',
                    }}
                >
                    initiative to provide free electricity to households in India.
                </Typography>
            </Box>

            <Grid container spacing={8} justifyContent="center" p={2}>
                {cardData.map((card, index) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                        <Card
                            sx={{
                                background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                                color: 'white',
                                height: '100%',
                                borderRadius: "20px"
                            }}
                        >
                            <CardContent>
                                <Typography variant="h4" component="div" align="center">
                                    {card.title}
                                </Typography>
                                <Typography variant="h4" align="center" display="flex" justifyContent="center" alignItems="center">
                                    <CurrencyRupeeIcon fontSize="large" sx={{ mr: 1 }} />
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

export default SubsudyDetails;
