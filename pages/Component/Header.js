import React, { useState } from 'react';
import { useRouter } from 'next/router';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import EmailOutlined from '@mui/icons-material/EmailOutlined';
import CallIcon from '@mui/icons-material/Call';
import Grid from '@mui/material/Grid';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Link from 'next/link'; // Import the Link component from Next.js
import { Collapse } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [servicesAnchorEl, setServicesAnchorEl] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const router = useRouter();
  const [openServices, setOpenServices] = useState(false);

  // Toggle the dropdown visibility

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };
  const handleServicesClick = () => {
    setOpenServices(!openServices);
    toggleDrawer(true)
  }
  const handleServicesMenuOpen = (event) => {
    setServicesAnchorEl(event.currentTarget);
  };

  const handleServicesMenuClose = () => {
    setServicesAnchorEl(null);
  };

  const menuItems = [
    { text: 'Home', href: '/' },
    { text: 'About', href: '/aboutus' },
    { text: 'Contact', href: '/contactus' },
  ];

  const servicesItems = [
    { text: 'Solar Water Heater', href: '/solarwater' },
    { text: ' Solar Photovoltaic Power', href: '/solarelectricalpower' },
    { text: 'Project Gallery', href: '/projectgallery' },
  ];

  const isActive = (href) => router.pathname === href;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ backgroundColor: 'white', color: 'black' }}>
        <Toolbar style={{ backgroundColor: 'rgba(0, 14, 79, 0.88)', color: 'white', minHeight: '50px' }}>
          <Box display='flex' justifyContent='center' alignItems='center' width='100%' gap={2}>
            {!isMobile ? (
              <>
                <Box display='flex' alignItems='center' gap={1}>
                  <EmailOutlined />
                  <Typography>greenlifepowersolutionMh@gmail.com</Typography>
                </Box>
                <Box display='flex' alignItems='center' gap={1}>
                  <CallIcon />
                  <Typography>+91 9623612594 / +91 7558245454</Typography>
                </Box>
              </>
            ) : (
              <>
                <Grid display='flex' alignItems='center' justifyContent={'space-between'} gap={1}>
                  <EmailOutlined fontSize='24px' />
                  <Typography variant='caption'>greenlifepowersolutionMh@gmail.com</Typography>
                  <CallIcon  fontSize='24px'/>
                  <Typography variant='caption'>+9623612594 </Typography>
              </Grid>
              </>
            )}
          </Box>
        </Toolbar>
        <Toolbar>
          {isMobile && (
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{mr: 2}}
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
          )}
          <Grid container justifyContent="center" alignItems="center">
            <Grid item lg={6} md={6} sm={6}  justifyContent="center" alignItems="center">
              {/* <Typography variant="h6" align='center' component="div" sx={{ flexGrow: 1, color: "#72BF78" }}>
               <Link href="/" passHref style={{ textDecoration: 'none' ,color: "#72BF78"}}> <b>Green Life Power Solution</b></Link>
              </Typography> */}
              <Box display={"flex"} alignItems="center">
              <Link href="/" passHref style={{ textDecoration: 'none', color: "#72BF78" }}>   <img src='assets/grenlifelogo2.png' ></img></Link>
              {/* {
                !isMobile && <Typography variant="h6" align='center' component="div" sx={{ flexGrow: 1, color: "#72BF78" }}>
                  <Link href="/" passHref style={{ textDecoration: 'none', color: "#72BF78" }}> <b>Green Life Power Solution</b></Link>
                </Typography>
              } */}
            </Box>
            </Grid>
            <Grid item lg={6}  md={6} sm={6}  container justifyContent="center" alignItems="center">
              {!isMobile && (
                <Box sx={{ display: 'flex' }}>
                  {menuItems.map((item, index) => (
                    <Link href={item.href} passHref key={index}>
                      <Button
                        color="inherit"
                        sx={{ fontWeight: isActive(item.href) ? 'bold' : 'normal', color: isActive(item.href) ? 'inherit' : 'rgba(0, 14, 79, 0.88)' }}
                      >
                        <strong>{item.text}</strong>
                      </Button>
                    </Link>
                  ))}
                  <Button
                    color="inherit"
                    onClick={handleServicesMenuOpen}
                    sx={{ fontWeight: isActive('/solarwater') || isActive('/solarelectricalpower') ? 'bold' : 'normal', color: isActive('/solarwater') || isActive('/solarelectricalpower') ? 'inherit' : 'rgba(0, 14, 79, 0.88)' }}
                  >
                    <strong> Our Services</strong>
                  </Button>
                  <Menu
                    anchorEl={servicesAnchorEl}
                    open={Boolean(servicesAnchorEl)}
                    onClose={handleServicesMenuClose}
                  >
                    {servicesItems.map((item, index) => (
                      <Link href={item.href} passHref key={index} style={{ textDecoration: "none", }}>
                        <MenuItem
                          onClick={handleServicesMenuClose}
                          sx={{
                            ":hover": {
                              color: "white",
                              backgroundColor: 'rgba(0, 14, 79, 0.7)',
                            },

                            fontWeight: 'bold',
                            color: isActive(item.href) ? 'inherit' : 'rgba(0, 14, 79, 0.88)'
                          }}
                        >
                          {item.text}
                        </MenuItem>
                      </Link>
                    ))}
                  </Menu>
                </Box>
              )}
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
      >
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <Box>
            <Typography align='center' variant="body1" sx={{ flexGrow: 1, color: "#72BF78" ,my: 2}}>
              <strong>Green Life Power Solution</strong>
            </Typography>
          </Box>
          <Divider />
          <List>
            {menuItems.map((item, index) => (
              <React.Fragment key={index}>
                <Link href={item.href} passHref style={{ textDecoration: 'none' }}>
                  <ListItem button sx={{
                    fontWeight: isActive(item.href) ? 'bold' : 'normal',
                    color: isActive(item.href) ? 'inherit' : 'rgba(0, 14, 79, 0.88)',
                  }}>
                    <ListItemText primary={item.text} sx={{ fontWeight: 'bold' }} />
                  </ListItem>
                </Link>
                {index < menuItems.length - 1 && <Divider />}
              </React.Fragment>
            ))}
            <Divider />
            {/* Services ListItem */}
            <ListItem button onClick={handleServicesClick} sx={{
              fontWeight: isActive('/solarwater') || isActive('/solarelectricalpower') ? 'bold' : 'normal',
              color: isActive('/solarwater') || isActive('/solarelectricalpower') ? 'inherit' : 'rgba(0, 14, 79, 0.88)',
            }}>
              <ListItemText primary="Services" sx={{ fontWeight: 'bold' }}/>
              <IconButton>
                {openServices ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </IconButton>
            </ListItem>

            {/* Collapse the servicesItems under "Services" */}
            <Collapse in={openServices} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {servicesItems.map((item, index) => (
                  <React.Fragment key={index}>
                    <Link href={item.href} passHref style={{ textDecoration: 'none' }}>
                      <ListItem button sx={{ pl: 4 }} style={{
                        fontWeight: isActive(item.href) ? 'bold' : 'normal',
                        color: isActive(item.href) ? 'inherit' : 'rgba(0, 14, 79, 0.88)',
                      }}>
                        <ListItemText primary={item.text} />
                      </ListItem>
                    </Link>
                    {/* Divider after each service item */}
                    <Divider />
                  </React.Fragment>
                ))}
              </List>
            </Collapse>
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};

export default Header;
