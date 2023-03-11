const db = require("../../../models/index")

module.exports = (app) => {
    app.post('/api/responses/', async(req, res) => {
        try{
            await db.response.create(req.body).then(response => {
            const message = `La réponse ${req.body.contentResponse} a bien été crée.🥰 😊 `
            return res.json({message: message, data: response})
            })
        }catch(error){
            const message = `La réponse n\'a pas pu être ajouté. Réessayez dans quelques instants.😰 `
            return res.status(500).json({message: message, data: error})
        }
    })
}