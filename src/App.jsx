import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Dashboard from './pages/Dashboard.jsx';
import Settings from './pages/Settings.jsx';
import './App.css';
import logoIcon from './assets/logo2.png'; // Make sure you have this image

function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <header className="header">
          <div className="logo-container">
            <img src={logoIcon} alt="CollabPulse Logo" className="logo-image" />
            <h1>CollabPulse</h1>
          </div>
          <nav className="nav">
            <Link to="/" className="nav-link">Dashboard</Link>
            <Link to="/settings" className="nav-link">Settings</Link>
          </nav>
        </header>
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
        <footer className="footer">
          <p>© 2025 CollabPulse. All rights reserved.</p>
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
