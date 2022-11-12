import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import { Button, CardActionArea, CardActions, Grid } from '@mui/material';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Stack } from '@mui/system';

/* export default function TitlebarImageList() {
  return (
  <> 
     <ImageList  sx={{ width: 500, height: 450,}}>
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div">Plastico</ListSubheader>
      </ImageListItem>


      
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <Button variant="contained">Ver</Button>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  </>
 
  );
}
*/
const itemData = [
  {
    url: 'comedero.jpg',
    title: 'Comedero para pajaros',
    author: 'manualidad hecha con botellas de plastico',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    url: 'macetaplastico.jpg',
    title: 'Maceta',
    author: 'manualidad hecha con botella de plsatico',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    url: 'alcancia.jpg',
    title: 'alcancia',
    author: 'manualidad hecha con botellas',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    url: 'estuche.jpg',
    title: 'estuche',
    author: 'manualidad hecha con botellas',
    rows: 2,
    cols: 2,
    featured: true,
  },
  
];

export default function MultiActionAreaCard() {
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