import { Route, Routes } from 'react-router';
import './App.css';
import WorldPage from './components/WorldPage';
import Countries from './components/Countries';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<WorldPage />} />
        <Route path="/:name" element={<Countries />} />
      </Routes>
    </div>
  );
}

export default App;
