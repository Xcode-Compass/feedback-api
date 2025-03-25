// validateFeedback: Validates feedback data before saving or updating, checking required fields and data types.
export const validateFeedback = (req, res, next) => {
    const { squad, name, studyContent, blockers, needHelp, generalFeed } = req.body;
    
    const SQUADS = ['Squad1', 'Squad2', 'Squad3', 'Squad4', 'Squad5'];
    const errors = [];

    const isUpdate = req.method === 'PUT'; 

    if (!isUpdate) {
        if (!squad || !name || !studyContent) {
            errors.push("Os campos 'squad', 'name' e 'studyContent' são obrigatórios.");
        }

        if(!SQUADS.includes(squad)){
            errors.push("O campo 'squad' deve ter uma Squad válida.")
        }
    }

    if (squad && typeof squad !== 'string') {
        errors.push("O campo 'squad' deve ser uma string.");
    }

    if (name && typeof name !== 'string') {
        errors.push("O campo 'name' deve ser uma string.");
    }

    if (studyContent && typeof studyContent !== 'string') {
        errors.push("O campo 'studyContent' deve ser uma string.");
    }

    if (blockers && typeof blockers !== 'string') {
        errors.push("O campo 'blockers', se fornecido, deve ser uma string.");
    }

    if (needHelp && typeof needHelp !== 'string') {
        errors.push("O campo 'needHelp', se fornecido, deve ser uma string.");
    }

    if (generalFeed && typeof generalFeed !== 'string') {
        errors.push("O campo 'generalFeed', se fornecido, deve ser uma string.");
    }

    if (errors.length > 0) {
        return res.status(400).json({ errors });
    }

    next(); 
};
