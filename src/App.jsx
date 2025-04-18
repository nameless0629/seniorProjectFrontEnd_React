import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import './App.css'
import './LoginPage.jsx'
import './HomePage.jsx'
import LoginPage from "./LoginPage.jsx";
import HomePage from "./HomePage.jsx";

function App() {

    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [token , setToken] = useState(null);

    return (
        <Router>
            <Routes>
                <Route path="/" element={
                    isAuthenticated ? <Navigate to="/home" /> : <LoginPage onLogin={() => setIsAuthenticated(true)} setToken={setToken}/>
                } />
                <Route path="/home" element={
                    isAuthenticated ? <HomePage token={token} /> : <Navigate to="/" />
                } />
            </Routes>
        </Router>
    );
}

export default App;
