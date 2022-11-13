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
import TextoInstrucciones from "../components/TextoInstrucciones";
import MenuCategorias from "../components/MenuCategorias";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
const oAPI = "http://localhost:3001/API/Reciclaje/Manualidad";

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
  const [oTitulo, setTitulo] = useState("");
  const tituloOnChange = (event) => {
    setTitulo(event.target.value);
  };
  const [oAutor, setAutor] = useState("");
  const autorOnChange = (event) => {
    setAutor(event.target.value);
  };
  const [oContenido, setContenido] = useState("");
  const contenidoOnChange = (event) => {
    setContenido(event.target.value);
  };
  const [oCategorias, setCategorias] = useState("");
  const categoriasOnChange = (event) => {
    setCategorias(event.target.value);
  };

  const handleChange = (event) => {
    setCategorias(event.target.value);
  };

  const handleSubmit = () => {
    const oDatos = {
      oTitulo: oTitulo,
      oAutor: oAutor,
      oContenido: oContenido,
      oCategorias: oCategorias,
    };
    fetch(oAPI, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(oDatos),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
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
            Publicar
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
                  name="titulo"
                  required
                  fullWidth
                  id="titulo"
                  label="Titulo"
                  autoFocus
                  value={oTitulo}
                  onChange={tituloOnChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="autor"
                  label="Autor"
                  name="autor"
                  autoComplete="family-name"
                  value={oAutor}
                  onChange={autorOnChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  minRows={3}
                  maxRows={8}
                  multiline={true}
                  required
                  fullWidth
                  id="contenido"
                  label="Instrucciones"
                  name="contenido"
                  autoComplete="contenido"
                  value={oContenido}
                  onChange={contenidoOnChange}
                />
              </Grid>
              <Grid item xs={12}>
                <Select
                  labelId="categoria"
                  id="categoria"
                  value={oCategorias}
                  onChange={handleChange}
                  autoWidth
                  label="Categoría"
                >
                  <MenuItem value="None">
                    None
                  </MenuItem>
                  <MenuItem value="Metales">Metales</MenuItem>
                  <MenuItem value="Plásticos">Plásticos</MenuItem>
                  <MenuItem value="Textiles">Textiles</MenuItem>
                  <MenuItem value="Madera">Madera</MenuItem>
                  <MenuItem value="Papel">Papel/Cartón</MenuItem>
                  <MenuItem value="Vidrio">Vidrio</MenuItem>
                </Select>
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
