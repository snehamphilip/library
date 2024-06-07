import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Service from './components/Service';
import About from './components/About';
import FaqPage from './components/FaqPage';
import Contact from './components/Contact';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="service" element={<Service/>}/>
      <Route path="contact" element={<Contact/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="FAQ" element={<FaqPage/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
