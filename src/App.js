import logo from './logo.svg';
import './App.css';
import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Layout from "./components/Layout/Layout"
import Home from "./components/Home/Home"
import Brands from "./components/Brands/Brands"
import Carts from "./components/Carts/Carts"
import Footer from "./components/Footer/Footer"
import Login from "./components/Login/Login"
import Navbar from "./components/Navbar/Navbar"
import Notfound from "./components/Notfound/Notfound"
import Products from "./components/Products/Products"
import Register from "./components/Register/Register"


const routers = createBrowserRouter([
  {
    path: '/', element: <Layout />, children: [
      { path: 'Navbar', element: <Navbar /> },
      { path: 'Footer', element: <Footer /> },
      { path: 'Login', element: <Login /> },
      { path: 'Products', element: <Products /> },
      { path: 'Brands', element: <Brands /> },
      { path: 'Carts', element: <Carts /> },
      { path: 'Home', element: <Home /> },
      { path: 'Register', element: <Register /> },
      { path: '*', element: <Notfound /> },
    ]
  }
])


function App() {



  return <RouterProvider> router={routers} 
   </RouterProvider>




/*
  return <>
    <Home />
  </>

 */

}

export default App;
