import React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';

const SolarInfoSection = () => {
  return (
    <>
      <Typography
        align="center"
        variant="h4"
        gutterBottom
        mt={4}
        sx={{ color: "rgba(0, 14, 79, 0.88)" }}
      >
        <strong>Why Choose Us</strong>
      </Typography>

      <Box
        display="flex"
        justifyContent="space-around"
        alignItems="center"
        bgcolor="#f0f0f0"
        p={3}
        flexWrap="wrap"
      >
        <Card
          sx={{
            width: { xs: '100%', sm: '45%', md: '30%' },
            border: '1px solid #ccc',
            boxShadow: 3,
            borderRadius: '8px',
            backgroundColor: '#fff',
            mb: 2,
          }}
        >
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Why Choose Solar?
            </Typography>
            <Typography variant="body1" component="ul">
              <li>Minimize your power bill by 100%.</li>
              <li>Free electricity for your home.</li>
              <li>Get financially rewarded for generating your own electricity.</li>
              <li>Sell your excess electricity back to the government grid.</li>
            </Typography>
          </CardContent>
        </Card>

        <Card
          sx={{
            width: { xs: '100%', sm: '45%', md: '30%' },
            border: '1px solid #ccc',
            boxShadow: 3,
            borderRadius: '8px',
            backgroundColor: 'rgba(0, 14, 79, 0.88)',
            color: '#fff',
            mb: 2,
          }}
        >
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Why Green Life Power Solution?
            </Typography>
            <Typography variant="body1" component="ul">
              <li>Sudershan Saur Authorized Distributor</li>
              <li>5 years free monitoring</li>
              <li>Free service maintenance as per Sudershan Saur guidelines</li>
              <li>25 years panel warranty</li>
              <li>Tailor made structure</li>
              <li>Free guidance under government solar schemes</li>
              <li>Commitment to quality and customer satisfaction</li>
              <li>Each site installation personally monitored</li>
            </Typography>
          </CardContent>
        </Card>

        <Card
          sx={{
            width: { xs: '100%', sm: '45%', md: '30%' },
            border: '1px solid #ccc',
            boxShadow: 3,
            borderRadius: '8px',
            backgroundColor: '#fff',
            mb: 2,
          }}
        >
          <CardContent>
            <Typography variant="h6" gutterBottom>
             <strong> Green Life Power Solution</strong>
            </Typography>
            <Typography variant="h5" gutterBottom color={"rgba(0, 14, 79, 0.88)"}>
              Get A FREE initial Suitability Test
            </Typography>
            <Typography variant="body1">
              Call: +91 9623612594
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </>
  );
};

export default SolarInfoSection;
