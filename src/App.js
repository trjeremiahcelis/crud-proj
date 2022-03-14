import { BrowserRouter as Router, Switch, Routes, Route, Link } from 'react-router-dom';
import Nav from './components/Nav';
import Crud from './pages/Crud';
import Home from './pages/Home';

const App = () => {
  return (
      <div className="app">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Table" element={<Crud />} />
        </Routes>
        {/* <Crud /> */}
      </div>
  );
}

export default App; 