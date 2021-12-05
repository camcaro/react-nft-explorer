import theme from './Components/Palette/theme';
import { ThemeProvider } from '@mui/material';
import NavigationBar from './Components/NavigationBar/NavigationBar';
import Assets from './Components/Assets/Assets';
import Collections from './Components/Collections/Collections';

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <NavigationBar />
        <Collections />
        <Assets />
      </ThemeProvider>
    </div>
  );
}

export default App;
