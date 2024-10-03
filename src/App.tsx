import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

//pages
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';

//components
import Navbar from './componentes/Navbar';
import Footer from './componentes/Footer';
import ItemsBar from './componentes/ItemsBar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <ItemsBar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/register' element={<Register />}/>
        </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
