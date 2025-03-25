import { getAllFeedbacks, saveFeedback, editFeedback, removeFeedback, getFeedbackById } from '../services/feedbackService.js';
import mongoose from 'mongoose';

// Get a feedback by ID
export const getFeedback = async (req, res) => {
    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: "ID inválido" });
        }

        const feedback = await getFeedbackById(id);

        if (!feedback) {
            return res.status(404).json({ message: "Feedback não encontrado" });
        }

        res.status(200).json({
            message: "Feedback encontrado com sucesso",
            data: { feedback }
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

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
        res.status(500).json({ error: error.message });
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
        res.status(500).json({ error: error.message });
    }
};

// updateFeedback: Updates a feedback by its ID and returns the updated feedback.
export const updateFeedback = async (req, res) => {
    try {
        const { id } = req.params;

        if(!mongoose.Types.ObjectId.isValid(id)){
           return res.status(400).json({ message: "ID inválido" });
        }

        const feedback = await editFeedback(id, req.body);

        if(!feedback){
            return res.status(404).json({ message: "Feedback não encontrado" })
        }

        res.status(200).json({
            message: "Feedback atualizado com sucesso",
            data: { feedback } 
        });
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
};

// deleteFeedback: Deletes a feedback by its ID and responds with status 204 (No Content).
export const deleteFeedback = async (req, res) => {
    try {
        const { id } = req.params;

        if(!mongoose.Types.ObjectId.isValid(id)){
           return res.status(400).json({ message: "ID inválido" });
        }

        const feedback = await removeFeedback(id);

        if(!feedback){
            return res.status(404).json({ message: "Feedback não encontrado" })
        }

        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });        
    }
};