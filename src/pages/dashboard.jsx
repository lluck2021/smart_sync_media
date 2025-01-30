import React from 'react';
import { useTheme } from '@mui/material/styles'; 
import { Typography, Container } from '@mui/material';
import UsersInfo from '../components/UsersInfo'; 
import { tokens } from '../theme'; 

const Dashboard = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Container>
            <Typography variant="h2" color={colors.secondary?.[100] || '#000'}>
                Dashboard
            </Typography>
            <UsersInfo />
        </Container>
    );
};

export default Dashboard;
