import {
  Avatar,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Container,
  Grid,
  Paper,
  Stack,
  Typography
} from '@mui/material';
import { useLocation, useParams } from 'react-router';
import { useState, useEffect } from 'react/cjs/react.development';

const SingleAsset = () => {
  const [singleAsset, setSingleAsset] = useState({});
  const { paramsContractAddress, paramsTokenId } = useParams();
  const { state } = useLocation();
  const passedAsset = state;

  useEffect(() => {
    // console.log('inside useEffect');
    if (!passedAsset) {
      //console.log('fetching asset from api');
      getSingleAsset();
    } else {
      //console.log('set asset from passed state');
      setSingleAsset({ ...passedAsset });
    }
  }, []);

  // only get when asset not passed from Assets
  const getSingleAsset = async () => {
    //console.log(passedAsset, paramsContractAddress, paramsTokenId);
    const url = `https://api.opensea.io/api/v1/asset/${paramsContractAddress}/${paramsTokenId}/`;
    const options = { method: 'GET' };
    try {
      const response = await fetch(url, options);
      const json = await response.json();
      setSingleAsset({ ...json });
    } catch (err) {
      throw err;
    }
  };

  let content = <h2>Mounted component</h2>;

  if (singleAsset.id) {
    //console.log(singleAsset);
    content = (
      <div>
        <Container maxWidth='sm' sx={{ mt: 2, mb: 2 }}>
          <Card sx={{ maxWidth: '100%' }}>
            <Typography variant='h4' align='center' color='primary'>
              {singleAsset.name}
            </Typography>
            <Paper>
              <CardMedia
                component='img'
                height='auto'
                image={singleAsset.image_url}
                alt={singleAsset.name + ' image'}
              />
            </Paper>
            <CardContent>
              <CardActionArea>
                <Container>
                  <Stack
                    direction='row'
                    spacing={2}
                    justifyContent='space-between'
                  >
                    <Typography
                      gutterBottom
                      variant='h6'
                      component='div'
                      noWrap={true}
                    >
                      {singleAsset.name}
                    </Typography>
                    <Stack direction='row' spacing={1} justifyContent='right'>
                      <Typography
                        gutterBottom
                        variant='h5'
                        component='div'
                        color='primary'
                        noWrap={true}
                      >
                        {singleAsset.collection.name}
                      </Typography>
                      <Avatar
                        src={
                          singleAsset.creator
                            ? singleAsset.creator.profile_img_url
                            : ''
                        }
                      />
                    </Stack>
                  </Stack>
                </Container>
              </CardActionArea>

              <Typography
                gutterBottom
                variant='subtitle1'
                component='div'
                // noWrap={true}
              >
                {singleAsset.description}
              </Typography>
              <Grid container spacing={1.5}>
                {singleAsset.traits &&
                  singleAsset.traits.map(trait => {
                    return (
                      <Grid
                        item
                        xs={6}
                        sm={3}
                        key={
                          trait.trait_type + '_' + trait.trait_count.toString()
                        }
                      >
                        <Card>
                          <Typography
                            variant='subtitle2'
                            component='div'
                            align='center'
                          >
                            {trait.trait_type}
                          </Typography>
                          <Typography
                            variant='body'
                            component='div'
                            align='center'
                          >
                            {trait.value}
                          </Typography>
                        </Card>
                      </Grid>
                    );
                  })}
              </Grid>
            </CardContent>
          </Card>
        </Container>
      </div>
    );
  }

  return content;
};

export default SingleAsset;
