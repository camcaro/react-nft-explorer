import Collection from './Collection';
import { useState, useEffect } from 'react';
import { Container, Grid, Paper, Typography } from '@mui/material';

const Collections = () => {
  const [collections, setCollections] = useState([]);

  const getCollections = async () => {
    const options = { method: 'GET' };
    let url = `https://api.opensea.io/api/v1/collections?offset=3000&limit=300`;
    try {
      const response = await fetch(url, options);
      const json = await response.json();
      // console.log(json.collections);
      setCollections(json.collections);
    } catch (err) {
      throw err;
    }
  };

  useEffect(() => {
    getCollections();
  }, []);

  let content = <h3>Fetching Collections</h3>;

  if (collections.length > 0) {
    // console.log(collections[0]);
    content = (
      <div>
        <Typography variant='h3' align='center' color='primary'>
          Collections
        </Typography>
        {/* <p>{`Collections length: ${collections.length}`}</p> */}
        <Container>
          <Grid container spacing={2} alignItems='center'>
            {collections.map(collection => {
              if (!collection.banner_image_url) return null;
              return (
                <Grid item xs={12} sm={12} md={6} key={collection.slug}>
                  <Paper>
                    <Collection collection={collection} />
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

export default Collections;
