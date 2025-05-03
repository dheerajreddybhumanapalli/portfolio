import logo from './profile_image.jpg'
import './App.css';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Dheeraj Reddy Bhumanapalli
        </p>
        Software Engineer
      </header>
    </div>
  );
}

export default App;
