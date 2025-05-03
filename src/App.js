import './App.css';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Home from './components/Home';
import { Navbar } from './components/Navbar';
import { Route, BrowserRouter, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter basename='/portfolio'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/experience' element={<Experience/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
