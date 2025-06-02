import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import AnimeDetails from './components/AnimeDetails.jsx';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/anime/:id" element={<AnimeDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
