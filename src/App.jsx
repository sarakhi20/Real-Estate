
import { BrowserRouter,Routes,Route } from 'react-router-dom'


import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';








const App = () => {
  return (
   
    <BrowserRouter >
    <Routes>
    <Route path="/" element ={<Signup/>} />
      <Route path="/register" element ={<Signup/>} />
      <Route path="/login" element ={<Login/>} />
      <Route path="/home" element ={<Home/>} />
    </Routes>
  </BrowserRouter>
     
  
  )
}

export default App