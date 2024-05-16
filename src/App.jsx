import  { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

function App() {
  const [cartCount, setCartCount] = useState(0);

  return (
    <div>
      <Navbar cartCount={cartCount} />
      <Hero setCartCount={setCartCount} />
    </div>
  );
}

export default App;
