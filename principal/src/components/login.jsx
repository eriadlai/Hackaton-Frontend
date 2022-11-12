import React, { Component } from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

class Login extends Component {
    
    render() { 
        return (
            <>
            <Box sx={{ width: '100%', maxWidth: 500 }}>
        <Typography variant="h3" gutterBottom>
        INICIAR SESion

      </Typography>
        </Box>
        </>
        );
    }
}
export default Login;
