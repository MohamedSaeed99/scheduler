import { Box, Button, Divider, Drawer, List, ListItem, ListItemButton, ListItemText } from "@mui/material"
import { NavLink } from "react-router-dom"

type NavigationDrawerProps = {
    open: boolean,
    handleCloseDrawer: () => void;
}

const NavigationDrawer = ({open, handleCloseDrawer}: NavigationDrawerProps) => {
    return (
        <Drawer
            sx={{
                width: 250,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: 250,
                    boxSizing: 'border-box',
                },
            }}
            anchor="left"
            open={open}
        >
            <Box sx={{ p: 2, display: 'flex', justifyContent: 'flex-end' }}>
                <Button onClick={handleCloseDrawer}>Close</Button>
            </Box>
            <Divider/>
            <List sx={{ width: '100%', p: 0 }}>
                <ListItem disablePadding>
                    <ListItemButton component={NavLink} to="/" sx={{
                        '&.active': {
                            backgroundColor: 'primary.light',
                            color: 'primary.contrastText',
                            '&:hover': {
                                backgroundColor: 'primary.main',
                            }
                        }
                    }}>
                        <ListItemText primary="Home" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component={NavLink} to="/settings" sx={{
                        '&.active': {
                            backgroundColor: 'primary.light',
                            color: 'primary.contrastText',
                            '&:hover': {
                                backgroundColor: 'primary.main',
                            }
                        }
                    }}>
                        <ListItemText primary="Settings" />
                    </ListItemButton>
                </ListItem>
            </List>
        </Drawer>
    )
}

export default NavigationDrawer;