import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Students from './pages/Students';
import Home from './pages/Home';

const App = () => {
  return (
      <div className="app">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Students" element={<Students />} />
        </Routes>
      </div>
  );
}

export default App; 