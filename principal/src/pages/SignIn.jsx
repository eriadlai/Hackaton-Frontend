import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "../components/Style.css";
import { useState } from "react";
const oAPI = "http://localhost:3001/API/Reciclaje/Usuario";
function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Code&Go "}

      {new Date().getFullYear()}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp() {
  const [oNombre, setNombre] = useState("");
  const nombreOnChange = (event) => {
    setNombre(event.target.value);
  };
  const [oUsuario, setUsuario] = useState("");
  const usuarioOnChange = (event) => {
    setUsuario(event.target.value);
  };
  const [oCorreo, setCorreo] = useState("");
  const correoOnChange = (event) => {
    setCorreo(event.target.value);
  };
  const [oPassword, setPassword] = useState("");
  const passwordOnChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = () => {
    const oDatos = {
      oNombre: oNombre,
      oUsuario: oUsuario,
      oCorreo: oCorreo,
      oPassword: oPassword,
    };
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(oDatos),
    };
    fetch(oAPI, requestOptions)
      .then((response) => response.json())
      .then((data) => this.setState({ postId: data.id }));
  };

  const [mostrar, setMostrar] = useState(false);
  return (
    <ThemeProvider theme={theme}>
      <Container position="relative">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Registrarse
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="nombre"
                  required
                  fullWidth
                  id="nombre"
                  label="Nombre"
                  autoFocus
                  value={oNombre}
                  onChange={nombreOnChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="usuario"
                  label="Usuario"
                  name="usuario"
                  autoComplete="family-name"
                  value={oUsuario}
                  onChange={usuarioOnChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Correo Electronico"
                  name="email"
                  autoComplete="email"
                  value={oCorreo}
                  onChange={correoOnChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Contraseña"
                  type={mostrar ? "text" : "password"}
                  id="password"
                  autoComplete="new-password"
                  value={oPassword}
                  onChange={passwordOnChange}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      value="allowExtraEmails"
                      onChange={() => {
                        setMostrar(!mostrar);
                      }}
                      color="primary"
                    />
                  }
                  label="Mostrar contraseña"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Enviar
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
