import { Header } from "../header/Header";
import { Login } from "../login/Login";
import { Register } from "../register/Register";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Main } from "../main/Main";
import Reset from "../reset/Reset";
import Photo from "../photo/Photo";
import './App.scss'


function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
        <Routes>
          <Route path="/" element={<Login/>}/>
           <Route path="/register" element={<Register/>}/>
           <Route path ="/password-reset" element={<Reset/>}/>
           <Route path ="/main" element={<Main/>}/>
           <Route path="/delete-photo/:id" element={<Photo/>}/>
           
        </Routes>
      </Router>
      
      
      
     
    </div>
  );
}

export default App;
