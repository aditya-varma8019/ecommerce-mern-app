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
import { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';
import { setDataProduct } from './redux/productSlice';
import { useDispatch, useSelector } from 'react-redux';


function App() {

  const dispatch = useDispatch();
  const productData = useSelector(state => state.product)


  useEffect(() => {
    (async () => {
      const resData = await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/`)
      const data = await resData.json();
      // console.log(data);
      dispatch(setDataProduct(data));
    })()
  }, [])
  // console.log(productData);

  return (
    <main className='pt-16 bg-slate-100 min-h-[calc(100vh)]'>
      <Toaster />
      <Routes  >
        <Route path="/" element={<Header />} >
          <Route index element={<Home />} />
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
    </main>
  );
}

export default App;
