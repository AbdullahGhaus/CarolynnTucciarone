import './App.css';
import Landing from './Components/Landing/Landing';
import Navbar from './Components/Navbar/Navbar';
import Homepage from './Pages/Homepage/Homepage';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import AboutPage from './Pages/AboutPage/AboutPage';
import BuyNowPage from './Pages/BuyNowPage/BuyNowPage';
import GalleyPage from './Pages/GalleyPage/GalleyPage';
import ContactPage from './Pages/ContactPage/ContactPage';
import BuyNowDetailPage from './Pages/BuyNowDetailPage/BuyNowDetailPage';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <div className='hero'>
      <Routes>
      <Route path='/' element={<Homepage/>} />
      <Route path='/about' element={<AboutPage/>} />
      <Route path='/buynow' element={<BuyNowPage/>} />
      <Route path='/gallery' element={<GalleyPage />} />
      <Route path='/contact' element={<ContactPage />} />
      <Route path='/buynow-detail' element={<BuyNowDetailPage />} />
      </Routes>
      </div>
    </div>
    </Router>
  );
}

export default App;
