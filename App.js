import React from "react";

import Register from "./components/Auth/Register.js";
import Login from "./components/Auth/Login.js";
import PasswordRecovery from "./components/Auth/PasswordRecovery.js";
import CreateEvent from "./components/Event/CreateEvent.js";
import EventList from "./components/Event/EventList.js";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/register" element={<Register />} />
          {<Route path="/login" element={<Login />} />}
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/recover-password" element={<PasswordRecovery />} />
          <Route path="/events/create" element={<CreateEvent />} />
          <Route path="/eventssss" element={<EventList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
