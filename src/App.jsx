import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Footer from './components/Footer';
import NavigationBar from './components/Navbar';
import Home from './components/Pages/Home';
import Terminal from './components/Pages/Terminal';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'

function App() {
  const isDark = localStorage.getItem('darkMode') === "false" ? false: true;
  const [darkMode, setDarkMode] = useState(isDark);
  return (
    <Router>
      <div className="App">
        <NavigationBar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/terminal" element={<Terminal darkMode={darkMode} />} />
        </Routes>
        <Footer />
        {/* <Languages /> */}
      </div>
    </Router>
  );
}

export default App
