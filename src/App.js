import './App.css';
import TodoList from './components/TodoList';
import Profile from './components/Profile';
import { useState } from 'react';

function App() {
  const[openModal, setOpenModal] = useState(false)
  return (
    <div className = "Main menu">
      <div className="PopUp">
      <h1>MY PROFILE</h1>
      <button className="openModalBtn" 
      onClick={() =>{setOpenModal(true);}}>Open</button>
      {openModal && <Profile closeModal={setOpenModal}/>}
    </div>

    <div className='todo-app'>
      <h1>Todo List</h1>
      <TodoList />
    </div>
    </div>
  );
}

export default App;
