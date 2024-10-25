import React, { useState } from "react";
import axios from "axios";

const CreateEvent = () => {
  const [eventData, setEventData] = useState({
    eventName: "",
    description: "",
    date: "",
  });

  const { eventName, description, date } = eventData;

  const onChange = (e) =>
    setEventData({ ...eventData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token"); // Fetch the JWT token
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const res = await axios.post("/api/events", eventData, config);
      alert("Event created successfully");
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        name="eventName"
        value={eventName}
        onChange={onChange}
        placeholder="Event Name"
        required
      />
      <textarea
        name="description"
        value={description}
        onChange={onChange}
        placeholder="Event Description"
        required
      />
      <input
        type="date"
        name="date"
        value={date}
        onChange={onChange}
        required
      />
      <button type="submit">Create Event</button>
    </form>
  );
};

export default CreateEvent;
