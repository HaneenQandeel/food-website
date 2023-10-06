import './App.css';
import HeadlineCards from './components/HeadlineCards';
import Hero from './components/Hero';
import MenuItems from './components/MenuItems';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Category from './components/Category';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <HeadlineCards/>
      <MenuItems/>
      <Category/>
     <Footer/>
      
    </div>
  );
}

export default App;
