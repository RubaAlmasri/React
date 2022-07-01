import logo from './logo.svg';
import './App.css';
import Delete_crud from './components/Delete_crud';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Edit from './components/Edit';
import Create from './components/Create';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Delete_crud />} />
        <Route path="/update" element={<Edit />} />
        <Route path="/create" element={<Create />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;
