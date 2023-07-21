import { useLocation } from 'react-router-dom';
import './App.css';
import MainRoutes from './pages/MainRoutes';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {

  const location = useLocation();
  
  return (
    <div className="App">
        {location.pathname !== "/admin" ? <Navbar /> : null}
      <MainRoutes />
      {location.pathname !== "/admin" ? <Footer /> : null}
    </div>
  );
}

export default App;
