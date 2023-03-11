const db = require("../../../models/index")

module.exports = (app) => {
    app.post('/api/questions/', async(req, res) => {
        try{
            await db.question.create(req.body).then(question => {
                const message = `La question ${req.body.contentQuestion} a bien été crée.🥰 😊 `
                return res.json({message: message, data: question})
            })
        }
        catch(error) {
            const message = `La question n\'a pas pu être ajouté. Réessayez dans quelques instants.😰 `
            return res.status(500).json({message: message, data: error})
        }
    })
}