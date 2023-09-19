

import './App.css';
import Header  from './components/Header';

// import { nanoid } from 'nanoid';
import Modal from './components/Modal';
import { useState } from 'react';
import { ToDoList } from './components/ToDoList';

function App() {

  const [isShowModal,setIsShowModal] = useState(false)

const showModal = () => {
setIsShowModal(true)
}
const closeModal = () => {
  setIsShowModal(false)
}




  return (
    <div className='container'>
    <Header showModal={showModal} />
    <ToDoList />
    {isShowModal && <Modal closeModal= {closeModal}>Some</Modal>}
    
			





    </div>
  );
}

export default App;
