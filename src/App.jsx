import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import './App.css'
import './LoginPage.jsx'
import './HomePage.jsx'
import LoginPage from "./LoginPage.jsx";
import HomePage from "./HomePage.jsx";

function App() {

    const [token , setToken] = useState(sessionStorage.getItem("token"));

    return (
        <Router>
            <Routes>
                <Route path="/" element={
                    token ? <Navigate to="/home" /> : <LoginPage setToken={setToken}/>
                } />
                <Route path="/home" element={
                    token ? <HomePage token={token} setToken={setToken} /> : <Navigate to="/" />
                } />
            </Routes>
        </Router>
    );
}

export default App;
