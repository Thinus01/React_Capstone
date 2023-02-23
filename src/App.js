import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import './App.css';
import store from './Redux/store';
import Nav from './Components/navbar';
import Models from './Components/render';
import Details from './Components/popup';

const App = () => (

  <Router>
    <Provider store={store}>
      <div className="BG">
        <Nav />
        <div>
          <Routes>
            <Route path="/" element={<Models />} />
            <Route path="/:id" element={<Details />} />
          </Routes>
        </div>
      </div>
    </Provider>
  </Router>

);

export default App;
