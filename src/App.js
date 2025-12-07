import { useEffect, useState } from "react";
import Login from "./Login";

import './App.css';

import WalletConnect from './components/WalletConnect';
import SettingsButton from './components/SettingsButton';
import SearchBar from './components/SearchBar';
import logo from './assets/logo512.png';

function App() {
  
  return (
    <div className="App">
        <nav className="navbar">
            <div className="nav-wrapper">
                <div className="nav-left">
                    <img src={logo} alt="Logo" />
                    <SearchBar />
                </div>
                <div className="nav-right">
                    
                    <SettingsButton />
                    <WalletConnect />
                </div>
            </div>
        </nav>
    </div>
  );
}

export default App;
