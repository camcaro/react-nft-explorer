const collections = ['0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb'];
const selectedCollections =
  collections
    .map(collection => {
      return 'asset_contract_address=' + collection + '&';
    })
    .toString() + 'order_direction=asc';

export default selectedCollections;
