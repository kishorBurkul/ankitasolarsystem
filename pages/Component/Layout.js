import React from 'react';
import Header from './Header';
import Box from '@mui/material/Box';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <Box>
      <Header />
      <Box component="main">
        {children}
      </Box>
      <Footer/>
    </Box>
  );
};

export default Layout;