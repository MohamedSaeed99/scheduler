import { useState, useRef } from 'react';
import {
    Box,
    Paper,
    Typography,
    Button,
    Divider,
    useTheme,
} from '@mui/material';
import { Notification } from './components/Notification/Notification';
import { Personal } from './components/Personal/Personal';
import { Security } from './components/Security/Security';
import { SettingsNavigation } from '../../navigation/SettingsNavigation';

const Settings = () => {
    const theme = useTheme();
    const [activeSection, setActiveSection] = useState('personal');
    const personalRef = useRef<HTMLDivElement>(null);
    const securityRef = useRef<HTMLDivElement>(null);
    const notificationRef = useRef<HTMLDivElement>(null);

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        profilePicture: null as File | null,
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleProfilePictureChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setFormData(prev => ({
                ...prev,
                profilePicture: file
            }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: Implement API call to update user profile
        console.log('Form submitted:', formData);
    };

    const scrollToSection = (section: string) => {
        const refs = {
            personal: personalRef,
            security: securityRef,
            notification: notificationRef,
        };

        const ref = refs[section as keyof typeof refs];
        if (ref?.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
            setActiveSection(section);
        }
    };

    return (
        <Box sx={{ 
            display: 'flex', 
            gap: 3, 
            height: 'calc(100vh - 50px)',
            overflow: 'hidden'
        }}>
            {/* Side Navigation */}
            <SettingsNavigation scrollToSection={scrollToSection} activeSection={activeSection} />

            {/* Main Content */}
            <Box sx={{ 
                flex: 1, 
                overflow: 'auto',
                height: '100%',
                '&::-webkit-scrollbar': {
                    display: 'none'
                },
                msOverflowStyle: 'none',
                scrollbarWidth: 'none'
            }}>
                <Paper elevation={0} sx={{ p: 4 }}>
                    <Typography variant="h4" gutterBottom>
                        Settings
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
                        Manage your account settings and preferences
                    </Typography>

                    <form onSubmit={handleSubmit}>
                        {/* Profile Section */}
                        <div ref={personalRef}>
                            <Personal 
                                formData={formData} 
                                handleInputChange={handleInputChange} 
                                handleProfilePictureChange={handleProfilePictureChange} 
                            />
                        </div>

                        <Divider sx={{ my: 4 }} />

                        {/* Security Section */}
                        <div ref={securityRef}>
                            <Security />
                        </div>

                        <Divider sx={{ my: 4 }} />
                        
                        {/* Notification Section */}
                        <div ref={notificationRef}>
                            <Notification />
                        </div>

                        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 4 }}>
                            <Button
                                type="submit"
                                variant="contained"
                                size="large"
                                sx={{ minWidth: 150 }}
                            >
                                Save Changes
                            </Button>
                        </Box>
                    </form>
                </Paper>
            </Box>
        </Box>
    );
};

export default Settings;