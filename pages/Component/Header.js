import React, { useState } from 'react';
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

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [servicesAnchorEl, setServicesAnchorEl] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const handleServicesMenuOpen = (event) => {
    setServicesAnchorEl(event.currentTarget);
  };

  const handleServicesMenuClose = () => {
    setServicesAnchorEl(null);
  };

  const menuItems = [
    { text: 'Home', href: '/' },
    { text: 'About', href: '/about' },
    { text: 'Contact', href: '/contactus' },
  ];

  const servicesItems = [
    { text: 'Solar Water Heater', href: '/solarwater' },
    { text: ' Solar Photovoltaic Power', href: '/solarelectricalpower' },
  ];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ backgroundColor: 'white', color: 'black' }}>
        <Toolbar style={{ backgroundColor: 'rgba(0, 14, 79, 0.88)', color: 'white', minHeight: '50px' }}>
          <Box display='flex' justifyContent='center' alignItems='center' width='100%' gap={2}>
            {!isMobile ? (
              <>
                <Box display='flex' alignItems='center' gap={1}>
                  <EmailOutlined />
                  <Typography>anitasolar.mh@gmail.com</Typography>
                </Box>
                <Box display='flex' alignItems='center' gap={1}>
                  <CallIcon />
                  <Typography>+91 9623612594 / 8668844972</Typography>
                </Box>
              </>
            ) : (
              <>
                <Box display='flex' alignItems='center' gap={1}>
                  <EmailOutlined /> 
                  <Typography variant='caption'>anitasolar.mh@gmail.com</Typography>
                  
                </Box>
                <Box display='flex' alignItems='center' gap={1}>
                  <CallIcon />
                  <Typography variant='caption'>+9623612594 </Typography>
                </Box>
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
              sx={{ mr: 2 }}
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
          )}
          <Grid container justifyContent="center" alignItems="center">
            <Grid item lg={6} container justifyContent="center" alignItems="center">
              <Typography variant="h6" align='center' component="div" sx={{ flexGrow: 1, color: "rgba(0, 14, 79, 0.88)" }}>
                <b>Ankita Solar System</b>
              </Typography>
            </Grid>
            <Grid item lg={6} container justifyContent="center" alignItems="center">
              {!isMobile && (
                <Box sx={{ display: 'flex' }}>
                  {menuItems.map((item, index) => (
                    <Button color="inherit" href={item.href} key={index}>
                      <strong>{item.text}</strong>
                    </Button>
                  ))}
                  <Button
                    color="inherit"
                    onClick={handleServicesMenuOpen}
                  >
                    <strong> Our Services</strong>
                  </Button>
                  <Menu
                    anchorEl={servicesAnchorEl}
                    open={Boolean(servicesAnchorEl)}
                    onClose={handleServicesMenuClose}
                  >
                    {servicesItems.map((item, index) => (
                      <MenuItem component="a" href={item.href} key={index} onClick={handleServicesMenuClose}
                      sx={{
                        ":hover":{
                          color:"white",
                          backgroundColor: 'rgba(0, 14, 79, 0.7)',
                        }
                      }}
                      >
                        {item.text}
                      </MenuItem>
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
            <Typography align='center' variant="h6" sx={{ my: 2 }}>
              <strong>Ankita Solar System</strong>
            </Typography>
          </Box>
          <Divider />
          <List>
            {menuItems.map((item, index) => (
              <React.Fragment key={index}>
                <ListItem button component="a" href={item.href}>
                  <ListItemText primary={item.text} />
                </ListItem>
                {index < menuItems.length - 1 && <Divider />}
              </React.Fragment>
            ))}
            <ListItem button onClick={handleServicesMenuOpen}>
              <ListItemText primary="Services" />
            </ListItem>
            <List component="div" disablePadding>
              {servicesItems.map((item, index) => (
                <ListItem button component="a" href={item.href} key={index} sx={{ pl: 4 }}>
                  <ListItemText primary={item.text} />
                </ListItem>
              ))}
            </List>
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};

export default Header;
