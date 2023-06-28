import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

function Navbar(){
    return(
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="static">
        <Toolbar sx={{backgroundColor: 'rgb(232, 204, 204) !important'}}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'rgb(100, 53, 65) !important', fontWeight: 'Bold' }}>
            Tienda/Almacen
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
    )
}

export default Navbar;