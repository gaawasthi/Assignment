import React, { useState, useRef } from 'react';
import Input from './Input';


const Form = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
  });

 
  const ageRef = useRef(null);

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

  
    if (formData.firstName.length < 2) {
      alert('First name must be at least 2 characters');
      return;
    }
    if (formData.lastName.length < 2) {
      alert('Last name must be at least 2 characters');
      return;
    }

    console.log({ ...formData, age: ageRef.current?.value });
    resetForm();
  };


  const resetForm = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      password: '',
    });
  ageRef.current.value = ''
  };

  return (
    <div className="main">
      <form className="form-class" onSubmit={handleSubmit}>
        <Input
          type="text"
          name="firstName"
          placeholder="Enter First Name"
          value={formData.firstName}
          onChange={handleChange}
        />

        <Input
          type="text"
          name="lastName"
          placeholder="Enter Last Name"
          value={formData.lastName}
          onChange={handleChange}
        />

        <Input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
        />
        <Input  
         type="number"
          name="age"
          placeholder="Enter age   "
          ref={ageRef}
          onChange={handleChange}
         />

        <Input
          type="number"
          name="phone"
          placeholder="Enter Phone Number"
          value={formData.phone}
          onChange={handleChange}
        />

        <Input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={formData.password}
          onChange={handleChange}
        />

        <button className="button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
