import './App.css';
import Login from './pages/login/Login.jsx';
import Register from './pages/register/Register';
import ReactDOM from "react-dom/client";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
      <Route exact path='/' element={<Login />}></Route>
      <Route exact path='/login' element={<Login />}></Route>
      <Route exact path='/register' element={<Register />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
