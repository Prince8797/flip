import { Box } from '@mui/material';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// components
import Header from './components/header/header';
import DataProvider from './context/data-provider';
import Home from './components/home/home';
import DetailView from './components/details/detailView';
import Cart from './components/cart/cart';

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Box>
          <Header />
          <Box style={{ marginTop: "54px" }}>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/product/:id' element={<DetailView />} />
              <Route path='/cart' element={<Cart />} />
            </Routes>
          </Box>
        </Box>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
