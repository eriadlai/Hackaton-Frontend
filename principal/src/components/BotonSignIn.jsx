import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export default function BotonSignIn() {
  return (
    <Stack spacing={2} direction="row">
      <Button
        variant="text"
        size="small"
        onClick={() => {
          alert("clicked");
        }}
        Click
        me
      >
        Sign In
      </Button>
    </Stack>
  );
}
