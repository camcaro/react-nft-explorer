import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const Collection = props => {
  const collection = props.collection;
  let content = <h2>Collection component</h2>;

  if (collection.slug) {
    // console.log(asset);
    let bannerImage = collection.banner_image_url;
    if (!bannerImage)
      bannerImage =
        'https://dummyimage.com/1400x400/49c6e5/f7ef52.png&text=++++++NFT+Explorer++++++';
    console.log(bannerImage);
    content = (
      <Card sx={{ maxWidth: '100%', maxHeight: '50%' }}>
        <CardActionArea>
          {/* <Avatar
            src={asset.creator ? asset.creator.profile_img_url : ''}
          ></Avatar> */}
          <CardMedia
            component='img'
            height='200'
            image={bannerImage}
            alt={collection.name + ' image'}
          />
          <CardContent>
            <Typography gutterBottom variant='h6' component='div'>
              {collection.name}
            </Typography>
            <Typography
              variant='body2'
              color='text.secondary'
              noWrap={true}
              height={30}
            >
              {collection.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }

  return content;
};

export default Collection;
