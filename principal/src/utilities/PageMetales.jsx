import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";
import { useEffect } from "react";
import {
  Box,
  CardActionArea,
  Container,
  CssBaseline,
  Grid,
  Stack,
} from "@mui/material";
const API = "http://localhost:3001/API/Reciclaje/ManualidadByCategoria";

const hoy = new Date();
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard() {
  const [oData, setData] = useState();
  const Filtro = {
    oCategorias: "metal",
  };
  useEffect(() => {
    fetch(API, {
      method: "POST",
      body: JSON.stringify(Filtro),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);
  const [expanded, setExpanded] = React.useState(-1);
  const [like, setLike] = useState(false);

  const handleExpandClick = (i) => {
    setExpanded(expanded === i ? -1 : i);
  };
  return (
    <>
      <CssBaseline />
      <main>
        <Stack>
          <Container sx={{ py: 8 }} maxWidth="md">
            <Grid container spacing={4}>
              <Grid
                container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 4, sm: 8, md: 12 }}
              >
                {oData?.map((dato, i) => (
                  <Grid item xs={2} sm={4} md={4} key={dato._id}>
                    <Card sx={{ maxWidth: 345 }}>
                      <CardHeader
                        avatar={
                          <Avatar
                            sx={{ bgcolor: red[500] }}
                            aria-label="recipe"
                          >
                            A {i}
                          </Avatar>
                        }
                        title={dato.oTitulo}
                        subheader={hoy.toDateString()}
                      />
                      <CardActionArea disableSpacing>
                        <CardMedia
                          component="img"
                          height="140"
                          image={dato.oUrlImage}
                          alt="random"
                        />
                        <CardContent>
                          <Typography variant="body2" color="text.secondary">
                            {dato.oContenido}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {dato.description}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                      <CardActions>
                        <IconButton aria-label="add to favorites">
                          <FavoriteIcon
                            onClick={() => {
                              setLike(!like);
                            }}
                            color={like ? "primary" : "action"}
                          />
                        </IconButton>
                        <ExpandMore
                          expand={expanded === i}
                          onClick={() => handleExpandClick(i)}
                          aria-expanded={expanded === i}
                          aria-label="show more"
                        >
                          <ExpandMoreIcon />
                        </ExpandMore>
                      </CardActions>
                      <Collapse
                        in={expanded === i}
                        timeout="auto"
                        unmountOnExit
                      >
                        <CardContent>
                          <Typography paragraph>
                            <Box fontWeight="bold" display="inline">
                              Autor:{" "}
                            </Box>
                            {dato.oAutor}
                          </Typography>
                          <Typography paragraph>
                            <Box fontWeight="bold" display="inline">
                              Categorias:{" "}
                            </Box>
                          </Typography>
                          {dato.oCategorias.map((cat) => (
                            <Typography>- {cat}</Typography>
                          ))}
                          <Typography paragraph>
                            <Box fontWeight="bold" display="inline">
                              Materiales:{" "}
                            </Box>
                          </Typography>
                          {dato.oMateriales.map((mat) => (
                            <Typography>- {mat}</Typography>
                          ))}
                        </CardContent>
                      </Collapse>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Container>
        </Stack>
      </main>
    </>
  );
}
