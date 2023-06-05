import './App.css';
import Home from './Pages/Home/Home.js';
import ForHim from './Pages/ForHim/ForHim.js';
import ForHer from './Pages/ForHer/ForHer.js';
import Jewelry from './Pages/Jewelry/Jewelry.js';
import Electronics from './Pages/Electronics/Electronics.js';

import { Route, Routes } from 'react-router-dom';


function App() {
  return (

      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/ForHim' element={<ForHim />}/>
      <Route path='/forHer' element={<ForHer />}/>
      <Route path='/jewelry' element={<Jewelry />}/>
      <Route path='/electronics' element={<Electronics />}/>
     </Routes>

  );
}

export default App;
