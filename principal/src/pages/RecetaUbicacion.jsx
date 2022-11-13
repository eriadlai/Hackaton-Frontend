import * as React from 'react';
import { Button, CardActionArea, CardActions, Grid } from '@mui/material';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Stack } from '@mui/system';
import { useEffect } from 'react';
const API = "http://localhost:3000/API/Reciclaje/ManualidadByCategoria";

const itemData = [
  {
    url: 'https://source.unsplash.com/random',
    title: 'Comedero para pajaros',
    author: 'manualidad hecha con botellas de plastico',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    url: 'https://source.unsplash.com/random',
    title: 'Maceta',
    author: 'manualidad hecha con botella de plsatico',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    url: 'https://source.unsplash.com/random',
    title: 'alcancia',
    author: 'manualidad hecha con botellas',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    url: 'https://source.unsplash.com/random',
    title: 'estuche',
    author: 'manualidad hecha con botellas',
    rows: 2,
    cols: 2,
    featured: true,
  },
  
];
export default function MultiActionAreaCard(parentToChild) {
  console.log(parentToChild)
  const [oRecetas, setRecetas] = React.useState(null);

  useEffect(() => {
    // POST request using axios inside useEffect React hook
    fetch(API, parentToChild.data)
    .then(response => response.json())
    .then(data => setRecetas(data.total));
// empty dependency array means this effect will only run once (like componentDidMount in classes)
}, []);
  return (
    <Grid
      container
      spacing={{ xs: 2, md: 2 }}
      columns={{ xs: 1, md: 11 }}

    >
      {itemData.map((image) => (
        <Grid item xs={2} md={4} key={image}>
          <Stack direction={'column'}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={image.url}
                alt={image.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {image.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {image.description}
                  manualidad hecha con botellas de platico
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Ver mas
              </Button>
            </CardActions>
          </Card>
          </Stack>
          <Stack>

          </Stack>
        </Grid>
      ))}
    </Grid>
  );
}