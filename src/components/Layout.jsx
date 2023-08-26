import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';

const Layout = () => {
  const navigate = useNavigate();
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingTop: '100px' }}>
      <AppBar position="fixed">
        <Toolbar>
          <Box sx={{ display: 'flex', gap: { xs: '20px', lg: '50px' }, alignItems: 'center' }}>
            <Box onClick={(e)=>{navigate('/')}} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '5px', cursor: 'pointer'}}>
              <MonitorHeartIcon />
              <Typography  variant="h6">
                Claude Bonnet
              </Typography>
            </Box>
            <Link className='navLink' to="/about">
              About
            </Link>
              <Link className='navLink' to="/contact">
                Contact
              </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <Outlet />
    </Box>
  )
}

export default Layout