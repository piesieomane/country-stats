import { Route, Routes } from 'react-router';
import './App.css';
import CountriesPage from './components/CountriesPage';
import Countries from './components/Countries';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<CountriesPage />} />
        <Route path="/CountriesPage/:idName" element={<Countries />} />
      </Routes>
    </div>
  );
}

export default App;
