// App.js
import React, { useState, useContext, useEffect } from 'react';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import { AppContext } from './Context';
import Header from './components/Header';
import Home from './components/Home';
import Modal from './components/Modal';
import Footer from './components/Footer';
import ContactUs from './components/ContactUs';
import './App.css';

const App = () => {
  const [showAuthForm, setShowAuthForm] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const { setAdvertDetails } = useContext(AppContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [showHome, setShowHome] = useState(true);

  useEffect(() => {
    if (location.pathname === '/contact-us') {
      setShowHome(false);
    } else {
      setShowHome(true);
    }
  }, [location.pathname]);

  const handleAddAdvert = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSaveAdvert = (details) => {
    setAdvertDetails(details);
    setShowModal(false);
  };

  return (
    <div className="App">
      <Header />
      {showHome && <Home />}
      <Routes>
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
