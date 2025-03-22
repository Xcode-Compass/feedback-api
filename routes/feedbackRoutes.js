import express from 'express';
import { createFeedback, getFeedbacks } from '../controllers/feedbackController.js';
import { validateFeedback } from '../middlewares/validateFeedback.js'

const router = express.Router();

router.get("/feedbacks", getFeedbacks); // Get all feedbacks
router.post("/feedbacks", validateFeedback, createFeedback); // Create new feedback with validation middleware

export default router;
