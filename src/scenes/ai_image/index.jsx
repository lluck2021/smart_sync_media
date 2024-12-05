import React from 'react';
import { useTheme } from '@mui/material/styles';
import { Container } from '@mui/material';
import AIGenerator from '../../components/AI_ImageGen/AI_Image';

const Posting = () => {
    const theme = useTheme();
    return (
        <Container>

            <AIGenerator />
        </Container>
    );
};

export default Posting;
