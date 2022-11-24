import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import News from './components/News';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Hero/>
      <News />
    </div>
  );
}

export default App;
