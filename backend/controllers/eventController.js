const Event = require("../models/Event");

// Create an event
exports.createEvent = async (req, res) => {
  const { eventName, description, date } = req.body;

  try {
    const event = new Event({
      eventName,
      description,
      date,
      createdBy: req.user.id,
    });

    await event.save();
    res.status(201).json({ message: "Event created successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all events
exports.getEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
