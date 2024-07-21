import logo from './logo.svg';
import { ThemeProvider } from '@mui/material/styles';
import './App.css';
import theme from './theme';
import { BrowserRouter } from 'react-router-dom';
import Routing from './Routing';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Routing />
          </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
