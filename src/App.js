import React from 'react';
import Data from './component/Data';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import View from './component/View';
import { Provider } from 'react-redux';
import { Store } from './redux/Store';
import Carts from './component/Carts';
import Modal from 'react-modal';
import Checkout from './component/Checkout';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/ReactToastify.css';
import Login from './authentication/Login';
import Pagination from './component/Pagination';

Modal.setAppElement('#root');

const App = () => {
  return (
    <>
    
    <Provider store={Store}>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Data />} />
            <Route path="/api/view" element={<View />} />
            <Route path="/api/carts" element={<Carts />} />
            <Route path="/api/checkout" element={<Checkout />} />
            <Route path="/api/login" element={<Login />} />
            <Route path="/api/p" element={<Pagination />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
    <ToastContainer />
    </>
  );
};

export default App;
