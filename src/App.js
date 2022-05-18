import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import AddTask from './Components/AddTask/AddTask';
import AllTask from './Components/AllTask/AllTask';
import Login from './Components/Login/Login';
import Register from './Components/Login/Register';
import Navbar from './Components/Shared/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/addTask' element={<AddTask></AddTask>}></Route>
        <Route path='/allTask' element={<AllTask></AllTask>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
