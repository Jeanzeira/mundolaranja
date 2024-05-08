import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from "./pages/Home"
import Jogadores from "./pages/Jogadores"
import Times from "./pages/Times"
import Liga from "./pages/Liga"
import Historia from "./pages/Historia"
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>,
        <Route path='/' element={<Home/>} />
        <Route path='/jogadores' element={<Jogadores/>} />
        <Route path='/times' element={<Times/>} />
        <Route path='/liga' element={<Liga/>} />
        <Route path='/historia' element={<Historia/>} />
      </Routes>
    </Router>
  </React.StrictMode>,
)
