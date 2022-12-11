import About from './About';
import './App.css';
import ContactUs from './ContactUs';
import Home from './home';
import NaveBar from './Nave';
import Product from './product';


function App() {
 
  return (
    <div className="App">
      <NaveBar />
      <Home />
      <Product />
      <ContactUs />
      <footer>
      Copyright © 2022 Tana Med Medical Equipment Co.,Ltd. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
