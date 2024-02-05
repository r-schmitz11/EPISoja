import './App.css';
import Sign from './component/Sign';
import Site from './component/Site';
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App bg-gradient-to-r from-slate-300 to-blue-400 h-screen w-screen grid place-items-center">
    <Routes>
      <Route path="/" element={<Sign />} />
      <Route path="/Site" element={<Site />} />
    </Routes>
    </div>
  );
}

export default App;
