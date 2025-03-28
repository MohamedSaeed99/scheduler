import { Paper, Box, Typography, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, useTheme } from "@mui/material"
import PersonIcon from '@mui/icons-material/Person';
import SecurityIcon from '@mui/icons-material/Security';
import NotificationsIcon from '@mui/icons-material/Notifications';

type SettingsNavigationProps = {
    activeSection: string;
    scrollToSection: (section: string) => void;
}

export const SettingsNavigation = ({activeSection, scrollToSection}: SettingsNavigationProps) => {
    const theme = useTheme();

    return (
        <Paper
                elevation={0}
                sx={{
                    width: 240,
                    height: '100%',
                    position: 'sticky',
                    top: 0,
                    borderRight: `1px solid ${theme.palette.divider}`,
                    bgcolor: 'background.default',
                    display: 'flex',
                    flexDirection: 'column',
                    overflow: 'hidden',
                    borderRadius: 0
                }}
            >
                <Box sx={{ p: 2 }}>
                    <Typography variant="h6" sx={{ fontWeight: 500 }}>
                        Settings
                    </Typography>
                </Box>
                <Divider />
                <List sx={{ 
                    width: '100%', 
                    p: 0, 
                    flex: 1,
                    overflow: 'auto'
                }}>
                    <ListItem disablePadding>
                        <ListItemButton
                            selected={activeSection === 'personal'}
                            onClick={() => scrollToSection('personal')}
                            sx={{
                                '&.Mui-selected': {
                                    bgcolor: 'primary.light',
                                    color: 'primary.contrastText',
                                    '&:hover': {
                                        bgcolor: 'primary.main',
                                    },
                                },
                            }}
                        >
                            <ListItemIcon>
                                <PersonIcon color={activeSection === 'personal' ? 'inherit' : 'action'} />
                            </ListItemIcon>
                            <ListItemText primary="Personal" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton
                            selected={activeSection === 'security'}
                            onClick={() => scrollToSection('security')}
                            sx={{
                                '&.Mui-selected': {
                                    bgcolor: 'primary.light',
                                    color: 'primary.contrastText',
                                    '&:hover': {
                                        bgcolor: 'primary.main',
                                    },
                                },
                            }}
                        >
                            <ListItemIcon>
                                <SecurityIcon color={activeSection === 'security' ? 'inherit' : 'action'} />
                            </ListItemIcon>
                            <ListItemText primary="Security" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton
                            selected={activeSection === 'notification'}
                            onClick={() => scrollToSection('notification')}
                            sx={{
                                '&.Mui-selected': {
                                    bgcolor: 'primary.light',
                                    color: 'primary.contrastText',
                                    '&:hover': {
                                        bgcolor: 'primary.main',
                                    },
                                },
                            }}
                        >
                            <ListItemIcon>
                                <NotificationsIcon color={activeSection === 'notification' ? 'inherit' : 'action'} />
                            </ListItemIcon>
                            <ListItemText primary="Notifications" />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Paper>
    )
}
