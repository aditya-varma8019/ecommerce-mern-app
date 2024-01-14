import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Menu from './components/Menu';
import About from './components/About';
import Contact from './components/Contact';
import Cart from './components/Cart';
import User from './components/User';
import NewProduct from './components/NewProduct';
import Signup from './components/Signup';
import Login from './components/Login';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />} >
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/user" element={<User />} />
        <Route path="/newproduct" element={<NewProduct />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Route>
    </Routes>
  );
}

export default App;
