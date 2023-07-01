import './App.css';

import TodoList from './todo';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (

      <Routes>
      <Route path='/' element={<TodoList />} />

     </Routes>

  );
}

export default App;
