
import './App.css';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';

import { BrowserRouter as Router, Routes, Route, link, NavLink, Navigate} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<publicRoutes> <Login/></publicRoutes>} />
          <Route path='/register' element={<publicRoutes> <Register/></publicRoutes>} />
          <Route path='/dashboard' element={<protectedRoutes> <Dashboard/></protectedRoutes>} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;

export function protectedRoutes({childern}){
  const auth =localStorage.getItem('data')
  if(auth){
    return childern
  } else{
    return <Navigate to="/" />
  }
}

export function publicRoutes({childern}){
  const auth = localStorage.getItem('data')
  if(auth){
    return <Navigate to="/dashboard" /> 
  }else{
    return childern
  }
}