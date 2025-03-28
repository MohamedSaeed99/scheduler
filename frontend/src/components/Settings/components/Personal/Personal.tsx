import { Box, Typography, Grid, Avatar, Input, IconButton, TextField } from "@mui/material"
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import PersonIcon from '@mui/icons-material/Person';

type PersonalProps = {
    formData: {
        firstName: string;
        lastName: string;
        email: string;
        phoneNumber: string;
    },
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleProfilePictureChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Personal = ({ formData, handleInputChange, handleProfilePictureChange }: PersonalProps) => {
    return (
        <Box sx={{ mb: 6 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <PersonIcon sx={{ mr: 1, color: 'primary.main' }} />
                <Typography variant="h5">Profile</Typography>
            </Box>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                Update your personal information and profile picture
            </Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Box sx={{ position: 'relative' }}>
                        <Avatar
                            sx={{
                                width: 120,
                                height: 120,
                                bgcolor: 'primary.main',
                                fontSize: '3rem',
                            }}
                        />
                        <label htmlFor="profile-picture">
                            <Input
                                inputProps={{ accept: "image/*" }}
                                id="profile-picture"
                                type="file"
                                onChange={handleProfilePictureChange}
                                style={{ display: 'none' }}
                            />
                            <IconButton
                                sx={{
                                    position: 'absolute',
                                    bottom: 0,
                                    right: 0,
                                    bgcolor: 'background.paper',
                                    '&:hover': {
                                        bgcolor: 'background.paper',
                                    },
                                }}
                                component="span"
                            >
                                <PhotoCamera />
                            </IconButton>
                        </label>
                    </Box>
                </Grid>

                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="First Name"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        variant="outlined"
                    />
                </Grid>

                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="Last Name"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        variant="outlined"
                    />
                </Grid>

                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        variant="outlined"
                    />
                </Grid>

                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Phone Number"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                        variant="outlined"
                    />
                </Grid>
            </Grid>
        </Box>
    )
}
