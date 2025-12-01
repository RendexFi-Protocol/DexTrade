import React, { useState } from 'react';
import './WalletConnect.css';

const WalletConnect = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState('');
  const [showMenu, setShowMenu] = useState(false);

  const connectPhantom = async () => {
    try {
      if (window?.solana?.isPhantom) {
        const response = await window.solana.connect();
        const address = response.publicKey.toString();
        setWalletAddress(address);
        setIsConnected(true);
        setShowMenu(false);
      } else {
        alert('Phantom Wallet nicht gefunden!');
        window.open('https://phantom.app/', '_blank');
      }
    } catch (error) {
      console.error('Phantom connection error:', error);
    }
  };

  const connectSolflare = async () => {
    try {
      if (window?.solflare?.isSolflare) {
        // Solflare Verbindungslogik
        console.log('Solflare connected');
        setShowMenu(false);
      } else {
        alert('Solflare Wallet nicht gefunden!');
        window.open('https://solflare.com/', '_blank');
      }
    } catch (error) {
      console.error('Solflare connection error:', error);
    }
  };

  const disconnectWallet = () => {
    if (window?.solana?.isPhantom && window.solana.disconnect) {
      window.solana.disconnect();
    }
    setIsConnected(false);
    setWalletAddress('');
  };

  const shortenAddress = (address) => {
    return `${address.slice(0, 4)}...${address.slice(-4)}`;
  };

  if (isConnected) {
    return (
      <div className="wallet-connected-jup">
        <div className="wallet-info">
          <div className="wallet-balance">0 SOL</div>
          <div className="wallet-address-jup">{shortenAddress(walletAddress)}</div>
        </div>
        <button className="disconnect-button-jup" onClick={disconnectWallet}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"/>
          </svg>
        </button>
      </div>
    );
  }

  return (
    <div className="wallet-container-jup">
      <button 
        className="connect-button-jup"
        onClick={() => setShowMenu(!showMenu)}
      >
        <span className="connect-button-text">Connect Wallet</span>
      </button>

      {showMenu && (
        <div className="wallet-menu-jup">
          <div className="wallet-menu-header">
            <span>Connect Wallet</span>
            <button 
              className="close-button"
              onClick={() => setShowMenu(false)}
            >
              ×
            </button>
          </div>
          
          <div className="wallet-options">
            <button className="wallet-option-jup" onClick={connectPhantom}>
              <div className="wallet-option-content">
                <div className="wallet-option-icon">
                  <img src="/phantom-icon.png" alt="Phantom" />
                </div>
                <div className="wallet-option-info">
                  <div className="wallet-option-name">Phantom</div>
                  <div className="wallet-option-status">Popular</div>
                </div>
              </div>
              <div className="wallet-option-arrow">→</div>
            </button>

            <button className="wallet-option-jup" onClick={connectSolflare}>
              <div className="wallet-option-content">
                <div className="wallet-option-icon">
                  <img src="/solflare-icon.png" alt="Solflare" />
                </div>
                <div className="wallet-option-info">
                  <div className="wallet-option-name">Solflare</div>
                  <div className="wallet-option-status">Web & Extension</div>
                </div>
              </div>
              <div className="wallet-option-arrow">→</div>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default WalletConnect;