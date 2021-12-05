import theme from './Components/Palette/theme';
import { ThemeProvider } from '@mui/material';
import NavigationBar from './Components/NavigationBar/NavigationBar';
import Assets from './Components/Assets/Assets';
import Collections from './Components/Collections/Collections';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <NavigationBar />
        <Routes>
          <Route
            path='/'
            element={
              <Assets
                params='order_by=sale_date&order_direction=desc'
                category='Latest sold NFTs'
              />
            }
          />
          <Route path='/collections' element={<Collections />} />
          {/* <Route path='/assets' element={<Assets />} /> */}
          <Route path='*' element={<h2> 404 Not found!</h2>} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
