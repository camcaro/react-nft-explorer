import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography
} from '@mui/material';
// import { Link as RouterLink, Navigate } from 'react-router-dom';

const Asset = props => {
  const asset = props.asset;
  let content = <h2>Asset component</h2>;

  const navigate = useNavigate();

  const clickHandler = () => {
    //console.log('clicked');
    //console.log(asset);
    //console.log(asset.asset_contract.address);
    //console.log(asset.token_id);
    navigate(`/singleasset/${asset.asset_contract.address}/${asset.token_id}`, {
      state: { ...asset }
    });
  };

  if (asset.id) {
    //console.log(asset);
    content = (
      <Card sx={{ maxWidth: '100%' }}>
        <CardActionArea onClick={clickHandler}>
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
