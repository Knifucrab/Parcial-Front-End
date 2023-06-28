import { Box, Typography } from '@mui/material';
import React from 'react';

function Footer() {
  return (
    <Box sx={{
      backgroundColor: 'rgb(201, 143, 168)',
      bottom: 0,
      position:'fixed',
      width: '100%',
      height: '150px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
    }}>
      <Typography sx={{ color: 'white', fontWeight: '700' }}>María Agustina González Gauna</Typography>
      <Typography sx={{ color: 'white', fontWeight: '700' }}>Mauro Sebastian Bringas</Typography>
      <Typography sx={{ color: 'white', fontWeight: '700' }}>Francisco Perez Dell' Arte</Typography>
    </Box>
  );
}

export default Footer;
