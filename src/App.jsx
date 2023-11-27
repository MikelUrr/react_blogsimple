import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import PostDetails from './components/PostDetails';
import posts from "./data/posts";
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        
        <Route path="/" element={<Home posts={posts} />} />
        <Route path="/post/:id" element={<PostDetails posts={posts} />} />
      </Routes>
    </Router>
  );
};

export default App;