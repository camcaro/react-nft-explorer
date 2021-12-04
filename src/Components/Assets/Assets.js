import Asset from './Asset';
import { Grid, Container, Paper } from '@mui/material';
import { useState, useEffect } from 'react';

const Assets = () => {
  const [assets, setAssets] = useState([]);

  const getAssets = async () => {
    const options = { method: 'GET' };
    try {
      const response = await fetch(
        'https://api.opensea.io/api/v1/assets?order_direction=desc&offset=0&limit=24',
        options
      );
      const json = await response.json();
      console.log(json.assets);
      setAssets(json.assets);
    } catch (err) {
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
        <h3>Assets length: {assets.length}</h3>
        <Container>
          <Grid container spacing={2} alignItems='center'>
            {assets.map(asset => {
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

  return (
    <div>
      <h2>Assets</h2>
      <div>{content}</div>
    </div>
  );
};

export default Assets;
