import axios from "axios";

export const register = async (formData) => {
  return await axios.post("/api/auth/register", formData);
};

export const login = async (formData) => {
  return await axios.post("/api/auth/login", formData);
};

export const recoverPassword = async (formData) => {
  return await axios.post("/api/auth/recover-password", formData);
};
