import './App.css';
import VendorForm from './components/VendorForm';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Loader from './components/Loader';
import { useEffect, useState } from 'react';

function App() {
  
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFlag(true);
    }, 2000);
  }, [flag])
  
  return (
    <div className="App">
      <Navbar />
      {
        flag ? <VendorForm /> : <Loader />
      }
      <Footer />
    </div>
  );
}

export default App;
