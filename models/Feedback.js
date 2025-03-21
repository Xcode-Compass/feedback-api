const mongoose = require('mongoose');

const SQUADS = ['Squad1', 'Squad2', 'Squad3', 'Squad4', 'Squad5'];

const FeedbackSchema = new mongoose.Schema({
  squad: { type: String, enum: SQUADS, required: true },
  name: { type: String, required: true },
  studyContent: { type: String, required: true },
  blockers: { type: String },
  needHelp: { type: String },
  generalFeed: { type: String }
});

module.exports = mongoose.model('Feedback', FeedbackSchema);
