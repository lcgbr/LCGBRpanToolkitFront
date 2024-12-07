import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import Mock from './pages/mock/mockPage.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/mock" element={<Mock />} />
      <Route path="/mock/static" element={<Mock />} />
      <Route path="*" element={<App />} />
    </Routes>
  </BrowserRouter>
);
