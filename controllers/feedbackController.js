import { getAllFeedbacks, saveFeedback } from '../services/feedbackService.js';

// getFeedbacks: Retrieves all feedbacks from the database returned in the response.
export const getFeedbacks = async (req, res) => {
    try {
        const feedbacks = await getAllFeedbacks();

        if(!feedbacks|| feedbacks.length === 0){
            return res.status(200).json({ 
                message: "Nenhuma categoria encontrada", 
                data: { feedbacks: [] }
            });
        }

        res.status(200).json({
            message: "Feedbacks encontrados com sucesso",
            data: { feedbacks }
        });
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

// createFeedback: Saves a new feedback to the database and responds with a success message.
export const createFeedback = async (req, res) => {
    try {
        const feedback = await saveFeedback(req.body);
        res.status(201).json({
            message: "Feedback criado com sucesso",
            data: { feedback }
        })   
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};