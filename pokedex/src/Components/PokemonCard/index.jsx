import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, CardActions } from '@mui/material';

export default function PokemonCard({ name, image, types }) {

  //Somando os tipos dos pokemons, caso tenha mais de 1
  const typehandler = () => {
    if (types[1]) {
      return types[0].type.name + " " + types[1].type.name;
    }
    return types[0].type.name
  }

  return (
    <Card sx={{ maxWidth: 350 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="180"
          image={image}
          alt="Pokemon Image"
        />
        <CardContent>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography gutterBottom variant="h6" component="div">
              {name}
            </Typography>
            <Typography gutterBottom variant="caption" component="div">
              {typehandler(types)}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
