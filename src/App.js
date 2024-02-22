// import logo from './logo.svg';
import './App.css';
import Form from "./components/Form"
import React , {useState} from "react";

function App() {
  const [isModelOpen,setIsModalOpen]=useState(false);
  const [modalBackground,setModalBackground]=useState(false);


const modalBg = {
  backdropFilter: modalBackground ? "blur(10px)" : "none", // Apply backdrop-filter conditionally
  transition: "backdrop-filter 0.3s ease", // Add a smooth transition effect
  // display: "flex",
  // flexDirection: "column",
  // alignItems: "center",
  // justifyContent:"flex-start",

}


const handleChange=()=>{
  setIsModalOpen(true);
  setModalBackground(true);
}

const handleClose=()=>{
  setIsModalOpen(false);
  setModalBackground(false);
}
  
  return (
    <div style={{modalBg}} className="main-page-container">
      <h1>User Details Modal</h1>
      <button onClick={handleChange} style={{border:"none",height:"40px",width:"100px",backgroundColor:"blue",color:"white",borderRadius:"5px"}}>Open Form</button>
      <div className="xmodal">
      {isModelOpen && <Form 
      handleClose={handleClose}
      />}
      </div>
    </div>
  );
}

export default App;
