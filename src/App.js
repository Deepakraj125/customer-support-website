import './App.css';
import { About } from './components/About';
import { Navbar } from './components/Navbar';
import Footer  from './components/Footer';
import Contact from './components/Contact';



function App() {
  return (
    <div className="App">
      <Navbar />
      <About/>
      <Contact/>
      <Footer/>
   
    </div>
  );
}

export default App;
