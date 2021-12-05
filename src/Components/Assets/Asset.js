import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const Asset = props => {
  const asset = props.asset;
  let content = <h2>Asset component</h2>;

  if (asset.id) {
    // console.log(asset);
    content = (
      <Card sx={{ maxWidth: '100%' }}>
        <CardActionArea>
          {/* <Avatar
            src={asset.creator ? asset.creator.profile_img_url : ''}
          ></Avatar> */}
          <CardMedia
            component='img'
            height='auto'
            image={asset.image_url}
            alt={asset.name + ' image'}
          />
          <CardContent sx={{ height: 30 }}>
            <Typography gutterBottom variant='h6' component='div' noWrap={true}>
              {asset.name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }

  return content;
};

export default Asset;
