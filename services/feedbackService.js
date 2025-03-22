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