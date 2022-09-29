import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './pages/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './pages/ItemDetailContainer/ItemDetailContainer';
import NavBar from './components/NavBar/NavBar';
import { CartProvider } from './context/CartProvider.js';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="contact" element={<div>Contact</div>} />
          <Route path="about" element={<div>Estoy en About</div>} />
          <Route path="cart" element={<Cart />} />
          <Route path="detail/:id" element={<ItemDetailContainer />} />
          <Route
            path="category/:categoryName"
            element={<ItemListContainer />}
          />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
