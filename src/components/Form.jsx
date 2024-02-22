import "../components/form.css";
import React, { useState } from "react";

export default function Form({ handleClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    dob: ""
  });

  const handling = () => {
    handleClose();
    setFormData((prevData) => ({
      ...prevData,
      name: "",
      email: "",
      number: "",
      dob: ""
    }));
  };

  const validationChecks = (e) => {
    e.preventDefault();

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      window.alert("Invalid email. Please check your email address.");
      return;
    }

    if (formData.name === "") {
      throw new Error("Please fill out the username field."); // You can use throw here
    }

    if (formData.number.length !== 10) {
      window.alert("Invalid phone number. Please enter a 10-digit phone number.");
      return;
    }

    const inputDate = new Date(formData.dob);
    const currentDate = new Date();
    if (inputDate > currentDate) {
      window.alert("Invalid date of birth. Date of birth cannot be in the future.");
      return;
    }

    setFormData({
      name:'',
      number:"",
      dob:"",
      email:"",
    })
  };

  return (
    <div className="modal" onClick={handling}>
      <div className="modal-content" onClick={(e) => {
        e.stopPropagation();
      }}>
        <form onSubmit={validationChecks}>
          <h2>Fill Details</h2>
          <>
            <label htmlFor="name"><strong>Username:</strong></label>
            <input id="username" onChange={(e) => setFormData({ ...formData, name: e.target.value })} value={formData.name} name="name" />
          </>
          <>
            <label htmlFor="email"><strong>Email:</strong></label>
            <input id="email" onChange={(e) => setFormData({ ...formData, email: e.target.value })} value={formData.email} name="email" />
          </>
          <>
            <label htmlFor="number"><strong>Number:</strong></label>
            <input id="phone" onChange={(e) => setFormData({ ...formData, number: e.target.value })} value={formData.number} name="number" />
          </>
          <>
            <label htmlFor="dob"><strong>Date of Birth:</strong></label>
            <input id="dob" onChange={(e) => setFormData({ ...formData, dob: e.target.value })} value={formData.dob} name="dob" type="date" />
          </>
          <button className="btn" type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
