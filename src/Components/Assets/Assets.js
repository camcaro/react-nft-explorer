import Asset from './Asset';
import { Grid, Container, Paper, Typography } from '@mui/material';
import { useState, useEffect } from 'react';

//import exampleAssets from '../example responses/example_Assets_response.json';

const Assets = props => {
  const [assets, setAssets] = useState([]);
  const url = `https://api.opensea.io/api/v1/assets?${props.params}&offset=0&limit=24`;
  // console.log(props.params);
  // console.log(url);

  const getAssets = async () => {
    const options = {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'X-API-KEY': '' // empty API key
      }
    };
    try {
      const response = await fetch(url, options);
      console.log('Status: ' + response.status + response.statusText);
      const json = await response.json();
      // console.log(json.assets);
      setAssets(json.assets);
    } catch (err) {
      //setAssets(exampleAssets.assets);
      //console.log(err);
      throw err;
    }
  };

  useEffect(() => {
    getAssets();
  }, []);

  let content = <h3>Fetching Assets</h3>;

  if (assets.length > 0) {
    // console.log(assets.length);
    content = (
      <div>
        <Typography variant='h3' align='center' color='primary'>
          {props.category}
        </Typography>
        <Container>
          <Grid container spacing={3} alignItems='flex-end'>
            {assets.map(asset => {
              if (!asset.image_url) return <div key={asset.id}></div>;
              return (
                <Grid item xs={12} sm={6} md={4} key={asset.id}>
                  <Paper>
                    <Asset asset={asset} />
                  </Paper>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </div>
    );
  }

  return content;
};

export default Assets;
