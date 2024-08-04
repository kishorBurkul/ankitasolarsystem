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
    bottom: '10px',
    left: '5px',
}
const callStyle = {
    position: 'fixed',
    bottom: '70px',
    left: '5px',
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
        setMounted(true);

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
                                <ListItem button component="a" href="/">Home</ListItem>
                                <ListItem button component="a" href="/solarwater">Solar Heater</ListItem>
                                <ListItem button component="a" href="solarelectricalpower">Solar Electricity</ListItem>
                            </List>
                        </Box>
                    </Grid>

                    <Grid item xs={6} sm={3} md={2}>
                        <Box>
                            <List>
                                <ListItem button component="a" href="/">Projects</ListItem>
                                <ListItem button component="a" href="/contactus">Contact Us</ListItem>
                                <ListItem button component="a" href="/aboutus">About Us</ListItem>
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
                                    <ListItemText primary="Address: Shop No.1 FL S No.42 HISS No. Sinhgad Road, Venutai Chavan College Road Vadgaon Budruk, Pune, Maharashtra 411041" />
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemIcon sx={{ color: "#d44638" }}>
                                        <EmailIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Email: anitasolar.mh@gmail.com" />
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemIcon sx={{ color: "yellow" }}>
                                        <PhoneIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Mobile: +91 9623612594 /+91 7558245454" />
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
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d236.5209638331078!2d73.83144944011919!3d18.468459799040712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc295003ceafb5b%3A0xabb44a6fd5e1a4ec!2sSidhi%20Apartment%20B!5e0!3m2!1sen!2sin!4v1722793131766!5m2!1sen!2sin" 
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
                    {mounted && showFab && (
                        <Box style={whatappStyle}>
                            <IconButton
                                aria-label="WhatsApp"
                                onClick={() => window.open('https://wa.me/+919623612594', '_blank')}
                            >
                                <img src='assets/whatsapp.png' style={{ width: "40px", height: "40px" }} />
                            </IconButton >
                        </Box>
                    )}
                    {mounted && showFab && (
                        <Box style={callStyle}>
                            <IconButton
                                aria-label="Call"
                                onClick={() => window.open('tel:+919623612594', '_self')}
                            >
                                <img src='assets/pause-call.png' style={{ width: "40px", height: "40px" }} />
                            </IconButton>
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
