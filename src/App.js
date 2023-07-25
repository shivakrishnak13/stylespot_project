import { useLocation } from 'react-router-dom';
import './App.css';
import MainRoutes from './pages/MainRoutes';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {

  const location = useLocation();
  
  return (
    <div className="App">
        {location.pathname !== "/admin" ? <Navbar /> : null}
      <ScrollToTop/>
      <MainRoutes />
      {location.pathname !== "/admin" ? <Footer /> : null}
    </div>
  );
}

export default App;
