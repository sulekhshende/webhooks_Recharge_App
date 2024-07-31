import { AppBar, Box, Button, Grid, Stack, Toolbar, Typography } from '@mui/material';
import CellTowerIcon from '@mui/icons-material/CellTower';
import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position='sticky'>
        <Grid maxWidth="xl" >
            <Toolbar disableGutters >
                <Box sx={{ display: { xs: "none", sm:"block", md:'block', lg:'block' } }} >
                    <Stack direction="row">
                        <Typography 
                            variant='h6'
                            component='span' 
                            sx={{ ml:2, display: { xs: "none", sm:"block", md:'block', lg:'block' } }}
                        >
                            <CellTowerIcon/>ThirdPartyRechargeApp
                        </Typography>
                        <Box sx={{ display:{ xs:'none', sm:'block', md:'block', lg:'block' } }} >
                            <Box sx={{ display:'flex', flexDirection:'row' }} >
                                <Button
                                    key='Home'
                                    onClick={handleCloseNavMenu}
                                    component={Link} to="/"
                                    sx={{ color:'white', display:'block'  }}
                                >
                                    Home
                                </Button>
                                <Button
                                    key='MyRecharges'
                                    onClick={handleCloseNavMenu}
                                    component={Link} to="/updatedRecharges"
                                    sx={{ color:'white', display:'block'  }}
                                >
                                    RequestedRecharges
                                </Button>
                            </Box>
                        </Box> 
                    </Stack>
                </Box>
                <Box sx={{ display:{ xs:'block', sm:'none', md:'none', lg:"none" } }} >
                    <Stack direction="row" spacing={2} justifyContent="space-between" >
                            <Typography 
                                variant='h5'
                                component='span' 
                                sx={{ ml:1 ,display: { xs: "block", sm:"none", md:"none" , lg:"none" } }}
                            >
                                ThirdPartyApp
                            </Typography>
                        <Box sx={{ display:{ xs:'block', sm:'none', md:'none', lg:"none" } }} >
                            <Box sx={{ display:'flex', flexDirection:'row' }} >
                                <Button
                                    key='Home'
                                    onClick={handleCloseNavMenu}
                                    component={Link} to="/"
                                    sx={{ color:'white', display:'block'  }}
                                >
                                    Home
                                </Button>
                                <Button
                                    key='MyRecharges'
                                    onClick={handleCloseNavMenu}
                                    component={Link} to="/updatedRecharges"
                                    sx={{ color:'white', display:'block'  }}
                                >
                                    RequestedRecharges
                                </Button>
                            </Box>
                        </Box>
                    </Stack>
                </Box>
            </Toolbar>
        </Grid>
    </AppBar>
  )
}

export default Navbar;