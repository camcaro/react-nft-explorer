import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Avatar } from '@mui/material';

const Asset = props => {
  const asset = props.asset;
  let content = <h2>Asset component</h2>;

  if (asset.id) {
    // console.log(asset);
    content = (
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          {/* <Avatar
            src={asset.creator ? asset.creator.profile_img_url : ''}
          ></Avatar> */}
          <CardMedia
            component='img'
            height='100%'
            image={asset.image_url}
            alt={asset.name + ' image'}
          />
          <CardContent>
            <Typography gutterBottom variant='h6' component='div'>
              {asset.name}
            </Typography>
            {/* <Typography variant='body2' color='text.secondary'>
              {asset.description}
            </Typography> */}
          </CardContent>
        </CardActionArea>
      </Card>
      // <div>
      //   <h2>Asset</h2>
      //   <h3>Collection: {asset.collection.name}</h3>
      //   <img src={asset.creator.profile_img_url} alt='Creator profile img' />
      //   <p>Asset name: {asset.name}</p>
      //   <img src={asset.image_url} alt={asset.name + ' image'} />
      //   <p>Current Owner: {asset.owner.address}</p>
      //   <h4>Description:</h4>
      //   <p>Description: {asset.description}</p>
      // </div>
    );
  }

  return content;
};

export default Asset;
