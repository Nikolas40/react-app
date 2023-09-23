import "./App.css";
import Header from "./components/Header";

import { nanoid } from "nanoid";
import Modal from "./components/Modal";
import  React, {  useState } from "react";
import { ToDoList } from "./components/ToDoList";
import FormLogin from "./components/FormLogin";

// import * as API from "./components/service/api";


function App() {
  const [isShowModal, setIsShowModal] = useState(false);

  

  const showModal = () => {
    setIsShowModal(true);
  };
  const closeModal = () => {
    setIsShowModal(false);
  };

  const createUser = (data) => {
    const newUser = {
      ...data,
      id: nanoid(),
    };

    console.log(newUser);
  };

  


  

   
  

  return (
    <div className="container">
      <Header showModal={showModal} />
    <ToDoList />
    {isShowModal && <Modal closeModal= {closeModal}>	
    <FormLogin 
    createUser = {createUser} 
    closeModal= {closeModal}
    />
    </Modal>}
     

      
      
        
      
     
      
    </div>
  );
}

export default App;
