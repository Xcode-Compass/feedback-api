
// validateFeedback: Validates feedback data before saving it, checking required fields and data types.
export const validateFeedback = (req, res, next) => {
    const { squad, name, studyContent, blockers, needHelp, generalFeed } = req.body;
    
        let errors = [];

        if (!squad || !name || !studyContent) {
            errors.push("Os campos 'squad', 'name' e 'studyContent' são obrigatórios.");
        }

        if(typeof squad !== 'string'){
            errors.push("O campo 'squad' deve ser uma string.");
        }

        if (typeof name !== 'string') {
            errors.push("O campo 'name' deve ser uma string.");
        }
    
        if (typeof studyContent !== 'string') {
            errors.push("O campo 'studyContent' deve ser uma string.");
        }
    
        if (blockers && typeof blockers !== 'string') {
            errors.push("O campo 'blockers', se fornecido, deve ser uma string.");
        }
    
        if (needHelp && typeof needHelp !== 'string') {
            errors.push("O campo 'needHelp', se fornecido, deve ser uma string." );
        }
    
        if (generalFeed && typeof generalFeed !== 'string') {
            errors.push("O campo 'generalFeed', se fornecido, deve ser uma string.");
        }

        if(errors.length > 0){
            return res.status(400).json({ errors });
        }
    
    next();
};
