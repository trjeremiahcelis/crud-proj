import { BrowserRouter as Router, Switch, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Crud from './pages/Crud';
import Home from './pages/Home';

const App = () => {
  return (
      <div className="app">
        <Nav />
        <Crud />
      </div>
  );
}

export default App; 