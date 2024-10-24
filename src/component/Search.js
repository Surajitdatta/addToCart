import React, { useEffect, useState } from 'react';
import './Search.css';
import { FaShoppingCart } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Search = ({ data, priceData }) => {
  const [text, setText] = useState("");
  const [t, setT] = useState(false);
  const cart = useSelector((store) => store.cart.items);
  const navigate = useNavigate();

  const handleSearch = () => {
    if (text.trim() === "") {
      toast.error("Please enter a search term!");
      return;
    }
    data(text);
    toast.success("Search successful!");
  };

  const handlePriceRangeChange = (p) => {
    priceData(p.target.value);
    toast.info(`Price range selected: ${p.target.value}`);
  };

  const viewCart = () => {
    navigate("/api/carts");
    toast.success("Viewing cart");
  };

  const login = () => {
    navigate("/api/login");
    toast.success("Redirecting to login");
  };

  useEffect(() => {
    const tokenData = localStorage.getItem("token");
    if (tokenData) {
      setT(true);
      toast.success("Logged in!");
    } else {
      setT(false);
    }
  }, []);

  const logout = () => {
    localStorage.clear();
    setT(false);
    toast.success("Logged out successfully!");
    navigate("/api/login");
  };

  return (
    <div className="search-container">
      <ToastContainer position="top-right" autoClose={3000} />
      <div>
        <input
          type="text"
          className="search-input"
          placeholder="Search..."
          onChange={(e) => setText(e.target.value)}
          value={text}
        />&emsp;
        <button className="search-button" onClick={handleSearch}>
          Search
        </button>
      </div>

      <div>
        <select className="search-dropdown" style={{ marginLeft: '10px' }} onChange={handlePriceRangeChange}>
          <option value="">Select Price Range</option>
          <option value="0-50">$0 - $50</option>
          <option value="51-100">$51 - $100</option>
          <option value="101-200">$101 - $200</option>
          <option value="201-999">$201 - $999</option>
          <option value="1000+">$1000 and above</option>
        </select>
      </div>

      <div className="cart-icon">
        <span onClick={viewCart}>
          <FaShoppingCart /> {cart.length}
        </span>
      </div>

      <div className="cart-icon">
        {!t ? (
          <button className="login-btn" onClick={login}>Login</button>
        ) : (
          <button className="login-btn" onClick={logout}>Logout</button>
        )}
      </div>
    </div>
  );
};

export default Search;
