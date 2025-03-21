import { Box, Typography, IconButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

type HeaderProps = {
    handleOpenNavigationDrawer: () => void;
}

const Header = ({handleOpenNavigationDrawer}: HeaderProps) => {
    return(
        <Box sx={{
            height: '50px',
            bgcolor: 'primary.main',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '0 20px',
            boxShadow: 1
        }}>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2
            }}>
                <IconButton 
                    onClick={handleOpenNavigationDrawer}
                    sx={{ color: 'white' }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography 
                    variant="h6"
                    sx={{ 
                        color: 'white',
                        fontWeight: 500,
                        letterSpacing: '0.2px',
                        fontSize: '1.25rem'
                    }}
                >
                    Scheduler
                </Typography>
            </Box>
            <IconButton sx={{ color: 'white' }}>
                <AccountCircleIcon sx={{ fontSize: 32 }} />
            </IconButton>
        </Box>
    )
}

export default Header;