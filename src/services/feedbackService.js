import Feedback from "../models/Feedback.js";

// Fetch all feedbacks from the database.
export const getAllFeedbacks = async () => {
    return await Feedback.find();
}

// Save a new feedback to the database.
export const saveFeedback = async (feedbackData) => {
    const feedback = new Feedback(feedbackData);
    return await feedback.save();
}

// Update a feedback by id.
export const editFeedback = async (id, feedbackNewData) => {
    return Feedback.findByIdAndUpdate(id, feedbackNewData, { new: true });
}

// Delete a feedback by id.
export const removeFeedback = async (id) => {
    return Feedback.findByIdAndDelete(id);
}
