import React, { useState } from "react";
import axios from "axios";

const PasswordRecovery = () => {
  const [formData, setFormData] = useState({
    email: "",
    securityAnswer: "",
    newPassword: "",
  });

  const { email, securityAnswer, newPassword } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("/api/auth/recover-password", formData);
      alert("Password reset successful");
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="email"
        name="email"
        value={email}
        onChange={onChange}
        placeholder="Email"
        required
      />
      <input
        type="text"
        name="securityAnswer"
        value={securityAnswer}
        onChange={onChange}
        placeholder="Security Question Answer"
        required
      />
      <input
        type="password"
        name="newPassword"
        value={newPassword}
        onChange={onChange}
        placeholder="New Password"
        required
      />
      <button type="submit">Reset Password</button>
    </form>
  );
};

export default PasswordRecovery;
