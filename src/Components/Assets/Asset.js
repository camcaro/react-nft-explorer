const Asset = props => {
  const asset = props.asset;
  let content = <h2>Asset component</h2>;

  if (asset.id) {
    // console.log(asset);
    content = (
      <div>
        <h2>Asset</h2>
        <h3>Collection: {asset.collection.name}</h3>
        <img src={asset.creator.profile_img_url} alt='Creator profile img' />
        <p>Asset name: {asset.name}</p>
        <img src={asset.image_url} alt={asset.name + ' image'} />
        <p>Current Owner: {asset.owner.address}</p>
        <h4>Description:</h4>
        <p>Description: {asset.description}</p>
      </div>
    );
  }

  return content;
};

export default Asset;
