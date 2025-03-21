import { Box, Button } from "@mui/material";

type HeaderProps = {
    handleOpenNavigationDrawer: () => void;
}

const Header = ({handleOpenNavigationDrawer}: HeaderProps) => {
    return(
        <Box sx={{
            height: '30px',
            bgcolor: 'lightBlue',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '5px 15px'
        }}>
            <Button 
                sx = {{
                    bgcolor: 'blue'
                }}
                onClick={handleOpenNavigationDrawer}>open</Button>
            <Box sx={{
                borderRadius: '50%',
                height: '30px',
                width: '30px',
                bgcolor: 'gray'
            }}>

            </Box>
        </Box>
    )
}

export default Header;