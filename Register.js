import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    securityQuestion: "",
    securityAnswer: "",
  });

  const {
    fullName,
    email,
    password,
    confirmPassword,
    securityQuestion,
    securityAnswer,
  } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const res = await axios.post("/api/auth/register", formData);
      alert("Registration successful");
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        name="fullName"
        value={fullName}
        onChange={onChange}
        placeholder="Full Name"
        required
      />
      <input
        type="email"
        name="email"
        value={email}
        onChange={onChange}
        placeholder="Email"
        required
      />
      <input
        type="password"
        name="password"
        value={password}
        onChange={onChange}
        placeholder="Password"
        required
      />
      <input
        type="password"
        name="confirmPassword"
        value={confirmPassword}
        onChange={onChange}
        placeholder="Confirm Password"
        required
      />
      <select
        name="securityQuestion"
        value={securityQuestion}
        onChange={onChange}
        required
      >
        <option value="" disabled>
          Select Security Question
        </option>
        <option value="motherMaidenName">
          What is your mother’s maiden name?
        </option>
        <option value="firstPet">What was the name of your first pet?</option>
        <option value="elementarySchool">
          What was the name of your elementary school?
        </option>
      </select>
      <input
        type="text"
        name="securityAnswer"
        value={securityAnswer}
        onChange={onChange}
        placeholder="Answer"
        required
      />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
