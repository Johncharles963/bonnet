import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import Contact from './components/Contact';
import Home from './components/Home';
import About from './components/About';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter basename="/bonnet">
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<Home/>} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App
