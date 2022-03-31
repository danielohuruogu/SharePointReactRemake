import logo from './logo.svg';
import './App.css';

import React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';

import Drawer from './Components/Drawer';
import Recordings from './Pages/Recordings';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route
                        path="/"
                        element={
                        <header className="App-header">
                            <img src={logo} className="App-logo" alt="logo" />
                            <button
                                onClick={()=> {
                                    console.log(isOpen);
                                    setIsOpen(!isOpen)
                                }}
                                >
                                Click Me For Recordings
                            </button>
                            <Drawer isOpen={isOpen} onClose={()=> setIsOpen(false)}>
                                <button onClick={()=> setIsOpen(false)}>
                                    Close
                                </button>
                                <h1>Last week's recordings</h1>
                                <h3><Link to="/recordings">See all recordings</Link></h3>
                            </Drawer>
                        </header>}
                    />
                    <Route
                        path="/recordings"
                        element={<Recordings/>}
                    />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
