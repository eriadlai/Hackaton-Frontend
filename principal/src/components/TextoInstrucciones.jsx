import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function TextoInstrucciones() {
  const [value, setValue] = React.useState("Controlled");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { maxwidth: "100%", width: 550 },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="textoInstrucciones"
          label="Instrucciones"
          multiline
          rows={4}
          defaultValue=""
        />
      </div>
    </Box>
  );
}
