import React from 'react';
import { Grid, Box, Typography, Card, CardContent } from '@mui/material';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import SecurityIcon from '@mui/icons-material/Security';
import EnergySavingsLeafIcon from '@mui/icons-material/EnergySavingsLeaf';

const reasons = [
    {
        title: 'Environmentally Friendly',
        description: 'Solar power reduces carbon footprint and is a clean source of energy.',
        icon: <EnergySavingsLeafIcon fontSize="large" sx={{ color: '#4caf50' }} />,
    },
    {
        title: 'Cost Savings',
        description: 'Solar energy can significantly reduce or even eliminate electricity bills.',
        icon: <AttachMoneyIcon fontSize="large" sx={{ color: '#ff9800' }} />,
    },
    {
        title: 'Renewable Energy',
        description: 'Solar energy is a renewable source that will never run out.',
        icon: <WbSunnyIcon fontSize="large" sx={{ color: '#fbc02d' }} />,
    },
    {
        title: 'Energy Independence',
        description: 'Generate your own power and reduce reliance on the grid.',
        icon: <SecurityIcon fontSize="large" sx={{ color: '#2196f3' }} />,
    },
];

const WhyChooseSolar = () => {
    return (
        <Box p={{ xs: 2, sm: 3, md: 4, lg: 5 }}>
            <Grid container spacing={4} justifyContent="center">
                {reasons.map((reason, index) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                        <Card
                            sx={{
                                height: '100%',
                                borderRadius: '15px',
                                textAlign: 'center',
                                padding: '20px',
                                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                            }}
                        >
                            <CardContent>
                                {reason.icon}
                                <Typography variant="h6" component="div" sx={{ mt: 2 }}>
                                    {reason.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                                    {reason.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default WhyChooseSolar;
