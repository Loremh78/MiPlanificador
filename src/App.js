import './App.css';

import { Route, Routes } from 'react-router';
import Presupuesto from './pages/presupuesto';
import Tareas from './pages/tareas';
import NavBar from './components/navbar';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Presupuesto />} />
        <Route path="/tareas" element={<Tareas />} />
      </Routes>
    </>

  );
}

export default App;
