import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import AllTask from './Components/AllTask/AllTask';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Register from './Components/Login/Register';
import RequireAuth from './Components/Login/RequireAuth';
import Navbar from './Components/Shared/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={
          <RequireAuth>
            <Home></Home>
          </RequireAuth>
        }></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/allTask' element={<AllTask></AllTask>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
