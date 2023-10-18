import { Route, Routes } from 'react-router';
import './App.css';
import AppNavbar from './components/Navbar';
import Product from './components/product';
import Cart from './components/Cart';

function App() {
  return (
    <div className="App">
     <AppNavbar/>
       <Routes>
       <Route path="/" element={<Product/>}/>
       <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </div>
  );
}

export default App;
