import logo from './logo.svg';
import './App.css';
import Signup from './components/Signup';
import { Routes,Route } from 'react-router-dom';
import Login from './components/Login';
import CreateNote from './components/CreateNote';

function App() {
  return (
    <div className="App">
    <h1>Notes taking application</h1>
    <Routes>
      <Route path="/register" element={<Signup/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/createnote" element={<CreateNote/>} />
    </Routes>
    </div>
  );
}

export default App;
