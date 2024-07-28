import { Box, Card, CardMedia, Typography } from '@mui/material'
import React from 'react'

const SolarElectrical = () => {
  return (
    <Box sx={{ position: 'relative', overflow: 'hidden' }}>
    <Card>
        <CardMedia
            component="img"
            image="assets/project_1.jpeg"
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
                    md: '56vh',
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
            <Typography variant="h5" component="h1" fontWeight="bold">
                Solar Photovoltaic Power
            </Typography>
        </Box>
    </Card>
</Box>
  )
}

export default SolarElectrical