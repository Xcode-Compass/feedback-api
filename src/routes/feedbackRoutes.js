import express from 'express';
import { createFeedback, getFeedbacks, updateFeedback, deleteFeedback } from '../controllers/feedbackController.js';
import { validateFeedback } from '../middlewares/validateFeedback.js'

const router = express.Router();

router.get("/feedbacks", getFeedbacks); // Get all feedbacks
router.post("/feedbacks", validateFeedback, createFeedback); // Create new feedback with validation middleware
router.put("/feedbacks/:id", validateFeedback, updateFeedback); // Update a feedback by id with validation middlware
router.delete("/feedbacks/:id", deleteFeedback) // Delete a feedback by id

export default router;
