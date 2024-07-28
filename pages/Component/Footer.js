"use-client"
import { Twitter, YouTube, Facebook, Instagram, KeyboardArrowUpRounded, WhatsApp, Call } from '@mui/icons-material';
import { Fab, Grid, IconButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { Box, List, ListItem } from "@mui/material";
import React, { useEffect, useState } from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import StorefrontIcon from '@mui/icons-material/Storefront';
import { keyframes } from '@mui/material';

const footerStyle = {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
};
const whatappStyle = {
    position: 'fixed',
    bottom: '20px',
    left: '10px',
}
const callStyle = {
    position: 'fixed',
    bottom: '100px',
    left: '10px',
}
const iconStyle = {
    fontSize: '36px',
};
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
const commonFabStyles = {
    animation: `${rotate} 5s linear infinite`,
};

const Footer = () => {
    const [showFab, setShowFab] = useState(false);
    const [mounted, setMounted] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        setMounted(true); // Component is now mounted

        const handleScroll = () => {
            const scrollTop = window.pageYOffset;
            if (scrollTop > 0) {
                setShowFab(true);
            } else {
                setShowFab(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <footer>
            <Grid
                container
                justifyContent="center"
                sx={{ backgroundColor: "rgba(0, 14, 79, 0.88)", color: "white" }}
            >
                <Grid container mx={4} mt={2} spacing={0.5}>
                    <Grid item xs={6} sm={3} md={2}>
                        <Box>
                            <List>
                                <ListItem>About Us</ListItem>
                                <ListItem>Contact Us</ListItem>
                                <ListItem>Project</ListItem>
                            </List>
                        </Box>
                    </Grid>

                    <Grid item xs={6} sm={3} md={2}>
                        <Box>
                            <List>
                                <ListItem>Solar Heater</ListItem>
                                <ListItem>Solar Electricity</ListItem>
                                <ListItem>About Us</ListItem>
                            </List>
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4}>
                        <Box>
                            <List>
                                <ListItem disablePadding>
                                    <ListItemIcon sx={{ color: "#03a8a0" }}>
                                        <LocationOnIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Address :   Shop No.1 FL S No.42 HISS No. Sinhgad Road , Venutai Chavan College Road Vadgaon Budruk, Pune , 
                    Maharashtra 411041 " />
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemIcon sx={{ color: "#d44638" }}>
                                        <EmailIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Email : anitasolar.mh@gmail.com" />
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemIcon sx={{ color: "yellow" }}>
                                        <PhoneIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Mobile :  +91 9623612594 / 8668844972" />
                                </ListItem>
                            </List>
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={12} md={4}>
                        <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column" gap={2}>
                            <Box display="flex" justifyContent="center" alignItems="center" gap={1}>
                                <IconButton aria-label="Facebook" sx={{ color: "#1877F2" }} href="#">
                                    <Facebook />
                                </IconButton>
                                <IconButton aria-label="Instagram" sx={{ color: "#c32aa3" }} href="#">
                                    <Instagram />
                                </IconButton>
                                <IconButton aria-label="Twitter" sx={{ color: "#1DA1F2" }} href="#">
                                    <Twitter />
                                </IconButton>
                                <IconButton aria-label="Youtube" sx={{ color: "red" }} href="#">
                                    <YouTube />
                                </IconButton>
                                <IconButton aria-label="Telegram" sx={{ color: "orange" }} href="#">
                                    <StorefrontIcon />
                                </IconButton>
                            </Box>
                            <Box display="flex" justifyContent="center" alignItems="center">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d7569.131324311003!2d73.84837078272841!3d18.45801959340881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3bc2eb458c58d0af%3A0x631bdaae3155adae!2sFR5X%2B3MV%20Suman%20Plaza%2C%20Tanaje%20Nagar%2C%20Mohan%20Nagar%2C%20Dhankawadi%2C%20Pune%2C%20Maharashtra%20411046!3m2!1d18.4577307!2d73.84917589999999!5e0!3m2!1sen!2sin!4v1716232403532!5m2!1sen!2sin"
                                    width="330px"
                                    height="200px"
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    style={{ border: 0 }}
                                ></iframe>
                            </Box>
                        </Box>
                    </Grid>
                    {mounted && showFab && (
                        <Box style={footerStyle} onClick={scrollToTop}>
                            <Fab
                                title="Scroll to Top"
                                color="warning"
                                sx={{ width: "40px ", height: "40px" }}
                                aria-label="scroll-to-top"
                            >
                               <IconButton>
                               <KeyboardArrowUpRounded style={iconStyle} />
                               </IconButton>
                            </Fab>
                        </Box>
                    )}
                    {mounted && (
                        <Box style={whatappStyle}>
                            <Fab
                                title="Whats App"
                                color="success"
                                sx={{ width: "60px ", height: "60px" }}
                            >
                                <IconButton
                                    color="primary"
                                    sx={{ ...commonFabStyles, backgroundColor: '#25D366', width: '50px', height: '50px', color: 'yellow' }}
                                    aria-label="WhatsApp"
                                    onClick={() => window.open('https://wa.me/+919623612594', '_blank')}
                                >
                                    <WhatsApp fontSize='20' />
                                </IconButton >
                            </Fab>
                        </Box>
                    )}
                    {mounted && (
                        <Box style={callStyle}>
                            <Fab
                                title="Calling"
                                color="primary"
                                sx={{ ...commonFabStyles, width: "60px ", height: "60px", backgroundColor: '#0A84FF' }}
                            >
                                <IconButton
                                    sx={{ width: '80px', height: '80px', color: 'blue' }}
                                    aria-label="Call"
                                    onClick={() => window.open('tel:+919623612594 ', '_self')}
                                >
                                    <Call />
                                </IconButton>
                            </Fab>
                        </Box>
                    )}
                </Grid>
            </Grid>
            <Grid style={{ backgroundColor: '#17213C', textAlign: 'center', padding: '20px 0', color: 'white' }}>
                <Typography variant="body2" color="inherit">Copyright &copy; Anita Solar System & Developed By Kishor Burkul</Typography>
            </Grid>
        </footer>
    );
};

export default Footer;
