import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import Login from './pages/JSX/login.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShowStudent from './pages/JSX/showstudents.jsx';
import UpdateStudent from './pages/JSX/UpdateStudent.jsx';
import AddStudent from './pages/JSX/AddStudent.jsx';
import DeleteStudent from './pages/JSX/DeleteStudent.jsx';

createRoot(document.getElementById('root')).render(
  
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/update-student" element={<UpdateStudent />} />
        <Route path="/add-student" element={<AddStudent />} />
        <Route path="/delete-student" element={<DeleteStudent />} />
        <Route path="/show-student" element={<ShowStudent />} />
      </Routes>
    </BrowserRouter>,
  
)
