import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Link from '@mui/material/Link'
export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Company
          </Typography>
          <Link component={Button} variant="body2" sx={{ mr: 2 }} color="inherit" href="/">Home</Link>
          <Link component={Button} variant="body2" sx={{ mr: 2 }} color="inherit" href="/AboutUs">About Us</Link>
          <Link component={Button} variant="body2" sx={{ mr: 2 }} color="inherit" href="/AddProduct">Add Product</Link>
          <Link component={Button} variant="body2" sx={{ mr: 2 }} color="inherit" href="/ContactUs">Contact Us</Link>
          {/* <Link component={Button} variant="body2" sx={{ mr: 2 }} color="inherit" href="/ProductInformation">Product Information</Link> */}
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}