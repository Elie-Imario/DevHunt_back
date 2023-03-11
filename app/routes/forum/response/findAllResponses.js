const db = require("../../../models/index")
module.exports = (app) => {
    app.get('/api/responses',(req, res) => {
            db.response.findAndCountAll({
                include: {
                    model: db.question 
                }
            })
            .then(({count, rows}) => {
                const message = 'La liste des réponses a bien été récupérée.🥰😊 '
                return res.json({message: message, numberResponse: count, data: rows})
            })
            .catch(error => {
                const message = `La liste des réponses n'a pas pu être récuperée. Réessayez dans quelques instants.😰 `
                return res.status(500).json({message: message, data: error})
            })
    })
}