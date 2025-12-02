import './App.css';

import WalletConnect from './components/WalletConnect';
import SettingsButton from './components/SettingsButton';
import SerachBar from './components/SerachBar';
function App() {
  return (
    <div className="App">
        {/* Leere Navbar */}
        <nav className="navbar">
            <div className="nav-wrapper">
                <div className="nav-left">
                  
                    <Serachbar />
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
