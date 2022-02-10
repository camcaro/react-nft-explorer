import theme from './Components/Palette/theme';
import selectedCollections from './Components/Selected/selectedCollections';
import { ThemeProvider } from '@mui/material';
import NavigationBar from './Components/NavigationBar/NavigationBar';
import Assets from './Components/Assets/Assets';
import SingleAsset from './Components/SingleAsset/SingleAsset';
import Collections from './Components/Collections/Collections';
import { Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <NavigationBar />
        <Routes>
          <Route path='/' element={<Navigate replace to='/latest' />} />
          <Route
            path='/latest'
            element={
              <Assets
                params='order_by=sale_date&order_direction=desc'
                category='Latest sold NFTs'
              />
            }
          />
          <Route path='/collections' element={<Collections />} />
          <Route
            path='/selected'
            element={
              <Assets
                params={selectedCollections}
                category='Selected Collection - CryptoPunks'
              />
            }
          />
          <Route
            path='/singleasset/:paramsContractAddress/:paramsTokenId'
            element={
              <SingleAsset
              // contractAddress='0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb'
              // tokenId='666'
              />
            }
          />
          <Route path='*' element={<h2> 404 Not found!</h2>} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
