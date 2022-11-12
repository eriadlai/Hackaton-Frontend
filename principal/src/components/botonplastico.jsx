import React, { Component } from "react";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
//import MyImage from "./img/botella.png"
// 11 <button><img src={"botella.png"} /></button>
class Botonplastico extends Component {
    
    render() { 
        return ( 
            <Stack spacing={2} direction="row">
 
    <Button variant="outlined"><img src={"botella.png"} />Outlingggged</Button>
    </Stack>
        );
    }
}
export default Botonplastico;

