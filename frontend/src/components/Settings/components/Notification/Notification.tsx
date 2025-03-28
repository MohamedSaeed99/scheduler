import { Box, Typography, Grid, TextField } from "@mui/material"
import NotificationsIcon from '@mui/icons-material/Notifications';


export const Notification = () => {
    return (
        <Box sx={{ mb: 6 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <NotificationsIcon sx={{ mr: 1, color: 'primary.main' }} />
                <Typography variant="h5">Notifications</Typography>
            </Box>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                Configure how you receive notifications
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Email Notifications"
                        select
                        variant="outlined"
                    >
                        <option value="all">All notifications</option>
                        <option value="mentions">Only mentions</option>
                        <option value="none">No notifications</option>
                    </TextField>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Push Notifications"
                        select
                        variant="outlined"
                    >
                        <option value="all">All notifications</option>
                        <option value="mentions">Only mentions</option>
                        <option value="none">No notifications</option>
                    </TextField>
                </Grid>
            </Grid>
        </Box>
    )
}

