import mongoose from 'mongoose';

const SQUADS = ['Squad1', 'Squad2', 'Squad3', 'Squad4', 'Squad5'];

// Feedback model.
const FeedbackSchema = new mongoose.Schema({
  squad: { 
    type: String, 
    enum: SQUADS, 
    required: true
  },
  name: { 
    type: String, 
    required: true 
  },
  studyContent: { 
    type: String, 
    required: true 
  },
  blockers: { 
    type: String,
    default: ''
  },
  needHelp: { 
    type: String,
    default: '' 
  },
  generalFeed: { 
    type: String,
    default: '' 
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Updates the updated field Whenever there is feedback for changes.
FeedbackSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

export default mongoose.model('Feedback', FeedbackSchema);
