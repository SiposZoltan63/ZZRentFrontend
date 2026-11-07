import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from "./components/Header";
import Home from './pages/Home';
import Cars from './pages/Cars';
import Minibuses from './pages/Minibuses';
import Vans from './pages/Vans';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Cars" element={<Cars />} />
          <Route path="/Minibuses" element={<Minibuses />} />
          <Route path="/Vans" element={<Vans />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;