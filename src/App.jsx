import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import Quiz from './Pages/Quiz';
import Result from './Pages/Result';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/quiz" element={<Quiz />} />
                <Route path="/result" element={<Result />} />

            </Routes>
        </Router>
    );
};

export default App;
