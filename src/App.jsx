import './App.css'
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
import { createTheme, styled, ThemeProvider, darken, alpha } from '@mui/material/styles';

const customTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#F2A61E',
    },
    secondary: {
      main: '#ffcc80',
    },
    warning: {
      main: '#ffea00',
    },
    error: {
      main: '#b71c1c',
    },
  },
});

function App() {
  return (
    <div>
    <ThemeProvider theme={customTheme}>
      <Navbar />
      <ItemListContainer texto="Greetings" />
      </ThemeProvider>
    </div>
  )
}

export default App