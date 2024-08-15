const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
  eventName:  String,
  startDate:  Date,
  endDate: Date,
  budget:  Number,
  bio: String,
  friendsUsernames: [String]
  
});

const Event = mongoose.model("Event", EventSchema);

module.exports = Event;
