import React, { Component } from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import "./Style.css";
class Login extends Component {
    
    render() { 
        return (
            <>
            <Box sx={{ width: '100%', maxWidth: 500 }}>
                 
        <Typography variant="h4" className='negrita' gutterBottom>
        INICIAR SESION 

      </Typography>
        </Box>
        </>
        );
    }
}
export default Login;