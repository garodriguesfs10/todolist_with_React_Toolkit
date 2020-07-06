import React from 'react';
import {Add} from './components/Add'
import { TodosList } from './components/TodosList';
import 'bootstrap/dist/css/bootstrap.css'
function App() {
  return (
    <div className="container">
      <TodosList/>
      <Add/>
    </div>
  );
}

export default App;
