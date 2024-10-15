import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Products from './components/Products';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProductDetails from './components/ProductDetails';
import { useEffect } from 'react';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ff69b4', 
    },
    secondary: {
      main: '#9c27b0', 
    },
    background: {
      default: '#fff0f5', 
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h1: {
      fontFamily: 'Pacifico, cursive',
    },
    h2: {
      fontFamily: 'Pacifico, cursive',
    },
  },
});

function App() {

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={ 
                <>
                  <Home />
                  <Products />
                  <About />
                  <Contact />
                </>
              } />
              <Route path="/produto/:id" element={<ProductDetails />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;